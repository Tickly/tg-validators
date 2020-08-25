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

  /**
   * 解析属性名为数组
   * @param {String,Array} attributes 属性名，可以允许多个属性
   */
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
        // 验证失败，收集错误消息
        .catch(message => {
          errors.push([attribute, message])
        })
    })

    await Promise.all(promises)

    return errors
  }

  /**
   * 验证属性
   * @param {*} model 表单对象
   * @param {*} attribute 属性名称
   * @returns {Promise} 返回一个Promise对象，如果验证失败，该Promise对象的状态为rejected，并且reject一个错误消息
   */
  validateAttribute (model, attribute) {
    // 如果验证规则里，该验证器没有指定该属性
    if (this.attributes.indexOf(attribute) === -1) return Promise.resolve()
    return new Promise((resolve, reject) => {
      try {
        this.validateValue(model[attribute], resolve, reject)
      } catch (err) { reject(err.message) }
    }).catch(err => {
      const message = this.formatMessage(err, {
        attribute: this.getAttributeLabel(attribute)
      })
      return Promise.reject(message)
    })
  }

  /**
   * 验证
   * 验证过程的主要逻辑
   * 同步验证，就通过throw new Error(message)来进行错误收集
   * 异步验证，通过reject(message)来进行错误收集
   * @param {*} value 要验证的值
   */
  validateValue (value) {
    throw new Error('这个类不支持验证')
  }

  formatMessage (message, params) {
    return message.replace(/{(\w+)}/g, (match, p1) => params[p1] || this[p1])
  }

  addError (model, attribute, message, params = {}) {
    params.attribute = model.getAttributeLabel(attribute)

    model.addError(attribute, this.formatMessage(message, params))
  }

  /**
   * 获取属性对应的label文字，如果没有提供，则使用属性名
   * @param {String} attribute 属性
   */
  getAttributeLabel (attribute) {
    return this.labels ? (this.labels[attribute] || attribute) : attribute
  }
}

export default Validator
