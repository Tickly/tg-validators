import Validator from './validator'

export default class NumberValidator extends Validator {

  constructor(options) {
    super(options);

    this.message = '{attribute}必须是数字';
  }


  validateValue(value) {
    do {
      if (!value) break;
      if(!isNaN(value)) break;

      return [this.message]
    } while (false);

    return null;
  }

}
