import Validator from './base.validator'

export default class RegExpValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute} 必须是满足正则表达式 {regexp}',
      regexp: null
    }
  }

  validateValue (value, resolve) {
    if (typeof this.regexp === 'string') {
      this.regexp = new RegExp(this.regexp)
    }

    if (!this.regexp.test(value)) {
      throw new Error(this.message)
    }

    resolve()
  }
}

RegExpValidator.type = 'regexp'
