import Validator from './base.validator'

export default class BooleanValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}必须是布尔型'
    }
  }

  validateValue (value, resolve) {
    if (typeof true !== typeof value) {
      throw new Error(this.message)
    }
    resolve()
  }
}

BooleanValidator.type = 'boolean'
