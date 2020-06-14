import Validator from './base.validator'

export default class RegExpValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute} 必须是满足正则表达式 {regexp}',
      regexp: null
    }
  }

  validateValue (value) {
    if (typeof this.regexp === 'string') { this.regexp = new RegExp(this.regexp) }

    do {
      if (this.regexp.test(value)) break

      return this.message
    } while (false)

    return null
  }
}

RegExpValidator.type = 'regexp'
