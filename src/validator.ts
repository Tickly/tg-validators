class Validator {
  constructor () {
    this.validators = {}
  }

  addValidator (validator) {
    if (!validator.type) {
      throw new Error('验证器必须有 type 属性')
    }
    this.validators[validator.type] = validator
  }

  getValidators (form, rules, labels) {
    return rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return this.createValidator(form, rule, labels)
      }
      throw new Error('不支持的rules')
    })
  }

  /**
   * 验证
   * 返回所有验证不通过的错误信息
   *
   * @param {Object} form
   * @param {Array} rules
   * @param {Object} labels
   * @returns {Array} 返回所有验证结果
   */
  validate (form, rules, labels, attrs) {
    console.log('validate', form, rules, labels, attrs)
    const validators = this.getValidators(form, rules, labels)

    const errors = {}

    const promises = validators.map(validator => {
      return validator.validateAttributes(form, attrs)
        .then(_errors => {
          _errors.forEach(([attr, err]) => {
            if (errors[attr] === undefined) errors[attr] = []
            errors[attr].push(err)
          })
        })
    })

    return Promise.all(promises).then(() => {
      if (Object.keys(errors).length) return Promise.reject(errors)
    })
  }

  /**
   * 验证单个属性
   * 只要有一个属性不满足条件就返回错误信息
   *
   * @param {*} form
   * @param {*} rules
   * @param {*} labels
   * @param {*} attrs
   */
  async validateOne (form, rules, labels, attrs = []) {
    // 拿到所有验证器
    // todo 后期可以考虑一个一个生成验证器，当一个验证器验证通过再生成下一个验证器
    const validators = this.getValidators(form, rules, labels)

    // 遍历所有验证器
    for (const validator of validators) {
      if (attrs.length === 0) attrs = validator.attributes

      for (const attr of attrs) {
        try {
          await validator.validateAttribute(form, attr)
        } catch (message) {
          return Promise.reject([attr, message])
        }
      }
    }
    return Promise.resolve()
  }

  createValidator (form, [type, attributes, params = {}], labels) {
    const Validator = this.validators[type]

    if (!Validator) throw new Error('不支持的验证类型')

    return new Validator({
      ...params,
      attributes,
      form,
      labels,
    })
  }
}

export default new Validator()
