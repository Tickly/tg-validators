import Validator from './base.validator'

export default class ArrayValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}必须是数组',
      max: null,
      message_max: '{attribute}最多{max}个',
      min: null,
      message_min: '{attribute}最少{min}个',
    }
  }

  validateValue (value, resolve) {
    if (!Array.isArray(value)) {
      throw new Error(this.message)
    }

    if (this.max !== null && value.length > this.max) {
      throw new Error(this.message_max)
    }
    if (this.min !== null && value.length < this.min) {
      throw new Error(this.message_min)
    }

    resolve()
  }
}

ArrayValidator.type = 'array'
