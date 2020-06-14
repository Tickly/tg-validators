import Validator from './base.validator'

export default class DateValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute} 必须是时间类型'
    }
  }

  validateValue (value) {
    do {
      if (Date.parse(value)) break

      return this.message
    } while (false)

    return null
  }
}

DateValidator.type = 'date'
