import Validator from './base.validator'

export default class BooleanValidator extends Validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是布尔型',
    }

    this.parse(attributes, options)
  }

  validateValue(value) {
    if (typeof true === typeof value) {
      return null;
    }
    return this.message
  }

}

BooleanValidator.type = 'boolean';
