import Validator from './base.validator'

export default class ArrayValidator extends Validator {

  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是数组',
      max: null,
      isMax: '{attribute}最多{max}个',
      min: null,
      isMin: '{attribute}最少{min}个',
    };

    this.parse(attributes, options);
  }


  validateValue(value) {
    do {
      if (Array.isArray(value)) {
        if (this.max !== null && value.length > this.max) {
          return this.isMax
        }
        if (this.min !== null && value.length < this.min) {
          return this.isMin
        }
        break;
      };

      return this.message
    } while (false);

    return null;
  }

}


ArrayValidator.type = 'array';
