import Validator from './base.validator'

export default class PhoneValidator extends Validator {

  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是11位数字的号码格式',
    };

    this.parse(attributes, options);
  }


  validateValue(value) {
    do {
      if (/^1\d{10}$/.test(value)) break;

      return this.message
    } while (false);

    return null;
  }

}


PhoneValidator.type = 'phone';
