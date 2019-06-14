import Validator from './base.validator'

export default class StringValidator extends Validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是字符串',
      min: 0,
      message_min: '{attribute}长度至少为{min}',
      max: Infinity,
      message_max: '{attribute}长度不能超过{max}',
    }

    this.parse(attributes, options)
  }

  validateValue(value) {
    do {
      if (typeof '' === typeof value) {
        if (this.min && value.length < this.min)
          return this.message_min

        if (this.max && value.length > this.max)
          return this.message_max

        break;
      }

      return this.message
    } while (false)
    return null;
  }

}

StringValidator.type = 'string';
