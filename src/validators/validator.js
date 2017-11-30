import Model from '../model';

class Validator {
  constructor({
    attributes = [],
  }) {

    if ('string' === typeof attributes) {
      attributes = attributes.split(',')
    }

    this.attributes = attributes;
    this.message = null;
  }



  parse(attributes, options) {
    Object.assign(this, attributes);

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        if (attributes.hasOwnProperty(key)) {
          this[key] = options[key];
        }
      }
    }
  }


  /**
   * 验证字段
   * 如果不指定 attributes ,则验证该验证器所有的字段，
   * @param {Model} model 
   * @param {Array,String} attributes 要验证的字段
   */
  validateAttributes(model, attributes = null) {
    if (attributes == null) {
      attributes = this.attributes;
    } else {
      if ('string' === typeof attributes) {
        attributes = [attributes]
      }
    }

    attributes.forEach(attribute => {
      do {
        // 先判断这个字段是否需要该验证器验证
        if (!this.attributes.some(attr => attr == attribute)) break;
        // 再判断这个字段是否有错，
        // if (model.hasErrors(attribute)) break;

        this.validateAttribute(model, attribute);
      } while (false);
    })
  }
  validateAttribute(model, attribute) {
    var result = this.validateValue(model.form[attribute]);
    if (result) {
      this.addError(model, attribute, result[0], result[1])
    }
  }




  validate(value, error) {
    var result = this.validateValue(value);
    if (!result) return true;
  }


  validateValue(value) {
    throw new Error('这个类不支持验证')
  }

  formatMessage(message, params) {
    return message.replace(/{(\w+)}/g, (match, p1) => params[p1]);
  }

  addError(model, attribute, message, params = {}) {
    params.attribute = model.getAttributeLabel(attribute);

    model.addError(attribute, this.formatMessage(message, params));
  }

}

Validator.createValidator = function (type, model, attributes, params = {}) {
  const Validators = {
    required: require('./required.validator'),
    number: require('./number.validator'),
    date: require('./date.validator'),
    phone: require('./phone.validator'),
  };

  var validate = Validators[type];

  if (validate) {
    let Validator = validate.default;
    params.attributes = attributes;
    return new Validator(params);
  } else {
    throw new Error('不支持的验证类型')
  }
}



Validator.validate = function (form, rules, labels) {
  var model = new Model({
    form,
    rules,
    labels
  });

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (model.validate()) {
        resolve();
      } else {
        reject(model.errors);
      }
    }, 0);
  })
}


export default Validator
