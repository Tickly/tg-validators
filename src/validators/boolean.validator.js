import Validator from './base.validator'

export default class BooleanValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}必须是布尔型'
    }
  }

  validateValue (value) {
    if (typeof true === typeof value) {
      return null
    }
    return this.message
  }
}

BooleanValidator.type = 'boolean'
