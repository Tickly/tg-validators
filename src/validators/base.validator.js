class Validator {
  constructor (options) {
    const mergedOptions = {
      // 这是所有验证器的默认属性
      ...{
        labels: {}
      },
      ...this.defaultOptions,
      ...options
    }
    // 赋值
    for (var key in mergedOptions) {
      if (Object.prototype.hasOwnProperty.call(mergedOptions, key)) {
        this[key] = mergedOptions[key]
      }
    }

    const { attributes } = mergedOptions

    // 处理字段列表，统一转化为数组
    this.attributes = this.parseAttributes(attributes)
  }

  get defaultOptions () {
    return {}
  }

  parseAttributes (attributes) {
    let attrs = []

    if (typeof attributes === 'string') { attrs = attributes.split(',') }

    if (Array.isArray(attributes)) { attrs = attributes }

    return attrs
  }

  /**
   * 验证字段
   * 如果不指定 attributes ,则验证该验证器所有的字段，
   * @param {Model} model
   * @param {Array,String} attributes 要验证的字段
   */
  async validateAttributes (model, attributes = null) {
    let attrs = this.attributes

    // 如果指定了要验证的属性，就只验证这些属性
    if (attributes) { attrs = this.parseAttributes(attributes) }

    const errors = []

    const promises = attrs.map(async attribute => {
      return this.validateAttribute(model, attribute)
        // 验证成功，啥都不做，只处理错误情况
        .catch(err => {
          const ErrorMessage = this.formatMessage(err, {
            attribute: this.labels ? this.labels[attribute] : attribute,
            ...this
          })

          errors.push([attribute, ErrorMessage])
        })
    })

    await Promise.all(promises)

    return errors
  }

  validateAttribute (model, attribute) {
    return new Promise((resolve, reject) => {
      const result = this.validateValue(model[attribute], resolve, reject)

      // 异步验证，如果undefined则代表异步验证，由子类自己触发callback
      if (result === undefined) return

      // 同步验证
      if (result) reject(result)
      else resolve()
    })
  }

  /**
   * 返回 null 则验证通过，否则返回错误信息 Array
   * @param {*} value 要验证的值
   */
  validateValue (value) {
    throw new Error('这个类不支持验证')
  }

  formatMessage (message, params) {
    return message.replace(/{(\w+)}/g, (match, p1) => params[p1])
  }

  addError (model, attribute, message, params = {}) {
    params.attribute = model.getAttributeLabel(attribute)

    model.addError(attribute, this.formatMessage(message, params))
  }
}

export default Validator
