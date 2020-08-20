import Validator from './base.validator'

export default class StringValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}必须是字符串',
      min: 0,
      message_min: '{attribute}长度至少为{min}',
      max: Infinity,
      message_max: '{attribute}长度不能超过{max}'
    }
  }

  validateValue (value, resolve) {
    if (typeof value !== typeof '') {
      throw new Error(this.message)
    }

    if (this.min && value.length < this.min) {
      throw new Error(this.message_min)
    }

    if (this.max && value.length > this.max) {
      throw new Error(this.message_max)
    }

    resolve()
  }
}

StringValidator.type = 'string'
