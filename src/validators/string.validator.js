import Validator from './validator'

export default class StringValidator extends Validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是字符串',
      min: null,
      isMin: '{attribute}长度至少为{min}',
      max: null,
      isMax: '{attribute}长度不能超过{max}',
    }

    this.parse(attributes, options)
  }

  validateValue(value) {
    do {
      if (typeof '' === typeof value) {
        if (this.min && value.length < this.min)
          return [this.isMin, {
            min: this.min,
          }]

        if (this.max && value.length > this.max)
          return [this.isMax, {
            max: this.max,
          }]

        break;
      }

      return [this.message]
    } while (false)
    return null;
  }

}

StringValidator.type = 'string';
