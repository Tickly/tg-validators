import Base from './base.validator'

export default class AsyncValidator extends Base {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}没有通过验证',
      handle(resolve, reject) {
        reject(this.message);
      },
    }

    this.parse(attributes, options);
  }

  validateValue(value, resolve, reject) {
    this.handle(resolve, () => {
      reject(this.message);
    }, value);
  }
}

AsyncValidator.type = 'async';
