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

  getValidators (rules, labels) {
    return rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return this.createValidator(rule, labels)
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
    const validators = this.getValidators(rules, labels)

    const errors = {}

    const promises = validators.map(validator => {
      return validator.validateAttributes(form, attrs).then(_errors => {
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
   */
  validateOne (form, rules, labels) {

  }

  createValidator ([type, attributes, params = {}], labels) {
    const Validator = this.validators[type]

    if (!Validator) throw new Error('不支持的验证类型')

    return new Validator({
      ...params,
      attributes,
      labels,
    })
  }
}

export default new Validator()
