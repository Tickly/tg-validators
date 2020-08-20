import Validator from './base.validator'

export default class DateValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute} 必须是时间类型'
    }
  }

  validateValue (value, resolve) {
    if (!Date.parse(value)) {
      throw new Error(this.message)
    }

    resolve()
  }
}

DateValidator.type = 'date'
