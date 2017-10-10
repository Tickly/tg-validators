import Validator from './validators/validator'

export default class Model {
  constructor({
    form,
    labels,
    rules
  }) {
    this.form = form;
    this._labels = labels;
    this._validators = null;
    this.rules = rules;

    // this.errors = {};
    this.clearErrors();

    // Object.assign(this, form);
  }


  createValidators() {
    return this.rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return Validator.createValidator(rule[1], this, rule[0]);
      }
      throw new Error('不支持的rules')
    })
  }

  getValidators() {
    if (this._validators === null) {
      this._validators = this.createValidators();
    }
    return this._validators;
  }

 

  getAttributeLabel(attribute) {
    return this._labels[attribute] || attribute
  }


  validate(attributeNames = null) {
    this.clearErrors();

    this.getValidators().forEach(validator => {
      validator.validateAttributes(this);
    });

    return this.hasErrors();
  }


  addError(attribute, error = '') {
    if (this.errors[attribute] == undefined)
      this.errors[attribute] = []

    this.errors[attribute].push(error);
  }
  clearErrors() {
    this.errors = {};
  }
  hasErrors() {
    return this.errors.length > 0
  }
}
