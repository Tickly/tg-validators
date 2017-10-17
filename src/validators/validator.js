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
    var regexp = /{(\w+)}/g;

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

  const Validators = {
    required: require('./required.validator'),
    number: require('./number.validator'),
    date: require('./date.validator'),
  };


  var validate = Validators[type];

  if (validate) {
    let Validator = validate.default;
    params.attributes = attributes;
    return new Validator(params);
  }


}

export default Validator
