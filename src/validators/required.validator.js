import Validator from './validator'

export default class RequiredValidator extends Validator {

  constructor() {
    super();

    this.message = '{attribute}不能为空';
  }

  validateValue(value) {
    if (!value) {
      return [this.message, {}]
    }
    return null
  }
}
