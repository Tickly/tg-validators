import Validator from './validator'

export default class NumberValidator extends Validator {

  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是数字',
      max: null,
      isMax: '{attribute}不能大于{max}',
      min: null,
      isMin: '{attribute}不能小于{min}',
    };

    this.parse(attributes, options);
  }


  validateValue(value) {
    do {
      // 如果是个数字
      if (typeof 0 === typeof value) {
        if (this.max !== null && value > this.max) {
          return [this.isMax, {
            max: this.max
          }]
        }
        if (this.min !== null && value < this.min) {
          return [this.isMin, {
            min: this.min
          }]
        }
        break;
      };

      return [this.message]
    } while (false);

    return null;
  }

}


NumberValidator.type = 'number';
