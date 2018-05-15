import Model from './model'

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
    const model = new Model({
      form,
      rules,
      labels
    });

    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (model.validate()) {
          resolve(form);
        } else {
          reject([model.getFirstError(), model.errors]);
        }
      }, 0);
    })
  }

  createValidator(type, model, attributes, params = {}) {
    const Validator = this.validators[type];

    if (!Validator) {
      throw new Error('不支持的验证类型')
    }

    params.attributes = attributes;

    return new Validator(params);
  }
}

// 相当于 Controller
export default new Validator()
