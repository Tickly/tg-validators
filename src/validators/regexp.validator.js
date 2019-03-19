import Validator from './base.validator'

export default class RegExpValidator extends Validator {
  constructor(options) {
    super(options);


    const attributes = {
      message: '{attribute}必须是满足正则表达式{regexp}',
      regexp: null,
    }

    this.parse(attributes, options)

    if (typeof options.regexp === typeof '')
      this.regexp = new RegExp(options.regexp);
  }

  validateValue(value) {
    do {
      if (this.regexp.test(value)) {
        break;
      }
      return this.message
    } while (false)
    return null;
  }

}

RegExpValidator.type = 'regexp';
