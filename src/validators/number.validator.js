import Validator from './base.validator'

export default class NumberValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}必须是数字',
      max: Infinity,
      message_max: '{attribute}不能大于{max}',
      min: -Infinity,
      message_min: '{attribute}不能小于{min}'
    }
  }

  validateValue (value) {
    do {
      // 如果是个数字
      if (typeof 0 === typeof value) {
        if (this.max !== null && value > this.max) {
          return this.message_max
        }
        if (this.min !== null && value < this.min) {
          return this.message_min
        }
        break
      };

      return this.message
    } while (false)

    return null
  }
}

NumberValidator.type = 'number'
