import Validator from './validator'

export default class DateValidator extends Validator {
  constructor(options) {
    super(options);

    this.message = '{attribute}必须是时间'
  }

  validateValue(value) {
    do {
      if (!value) break;
      if (Date.parse(value)) break;

      return [this.message]
    } while (false);
    return null;
  }

}


DateValidator.type = 'date'