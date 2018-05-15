import Validator from './validator'

export default class StringValidator extends Validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是字符串',
    }

    this.parse(attributes, options)
  }

  validateValue(value) {
    do {
      if (typeof '' === typeof value) {
        break;
      }

      return [this.message]
    } while (false)
    return null;
  }
  
}

StringValidator.type = 'string';
