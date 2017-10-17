import Validator from './validator'

export default class NumberValidator extends Validator {

  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是数字',
      max: null,
      tooBig: '{attribute}不能大于{max}',
      min: null,
      tooSmall: '{attribute}不能小于{min}',
    };

    this.parse(attributes, options);
  }


  validateValue(value) {
    do {
      if (!value) break;
      // 如果是个数字
      if (!isNaN(value)) {
        if (this.max !== null) {
          if (!(this.max > value)) {
            return [this.tooBig, {
              max: this.max
            }]
          }
        }
        if (this.min !== null) {
          if (!(this.min < value)) {
            return [this.tooSmall, {
              min: this.min
            }]
          }
        }
      } else break;

      return [this.message]
    } while (false);

    return null;
  }

}
