class Validator {
  constructor() {
    this.validators = {};
  }

  addValidator(validator) {
    if (!validator.type) {
      throw new Error('验证器必须有 type 属性')
    }
    this.validators[validator.type] = validator;
  }

  validate(form, rules, labels) {

    let validators = rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return this.createValidator(rule, labels);
      }
      throw new Error('不支持的rules')
    })

    let errors = {};

    let promises = validators.map(validator => {
      return validator.validateAttributes(form).then(_errors => {
        _errors.forEach(([attr, err]) => {
          if (errors[attr] === undefined) errors[attr] = [];
          errors[attr].push(err);
        })
      })
    })


    return Promise.all(promises).then(() => {
      if (Object.keys(errors).length) return Promise.reject(errors)
    })
  }

  createValidator([type, attributes, params = {}], labels) {
    const Validator = this.validators[type];

    if (!Validator) throw new Error('不支持的验证类型')

    return new Validator({
      ...params,
      attributes,
      labels,
    });
  }
}

// 相当于 Controller
export default new Validator()
