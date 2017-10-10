import Validator from './validator'

export default class RequiredValidator extends Validator {

  constructor(options) {
    super(options);

    this.message = '{attribute}不能为空';
  }

  validateValue(value) {
    do {
      // 如果是有元素的数组
      if (Array.isArray(value)) {
        if (value.length > 0) break;
      } else {
        // 如果有值
        if (!!value) break;
      }

      return [this.message, {}]
    } while (false);
    return null
  }
}
