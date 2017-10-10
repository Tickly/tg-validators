// import RequiredValidator from './required.validator'


// var Validators = {
//   required: RequiredValidator,
// }


class Validator {
  constructor({
    attributes = [],
  }) {
    this.attributes = attributes;
    this.message = null;

  }

  validateAttributes(model) {
    this.attributes.forEach(attribute => {
      this.validateAttribute(model, attribute);
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
    var regexp = /{(\w+)}/;

    function replacer(match, p1) {
      return params[p1];
    }
    return message.replace(regexp, replacer);
  }

  addError(model, attribute, message, params = {}) {
    params.attribute = model.getAttributeLabel(attribute);

    model.addError(attribute, this.formatMessage(message, params));
  }

}



Validator.createValidator = function (type, model, attributes, params = {}) {
  var RequiredValidator = require('./required.validator').default;
  params.attributes = attributes;
  return new RequiredValidator(params);
}




Validator.validate = function (form, rules) {
  // Validator.createValidators(model, rules).forEach(validator => {
  //   validator.validateAttributes(model, )
  // })
}

export default Validator
