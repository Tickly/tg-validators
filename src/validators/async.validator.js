import Base from './base.validator'

export default class AsyncValidator extends Base {
  get defaultOptions () {
    return {
      message: '{attribute} 没有通过异步验证',
      handle (resolve, reject) {
        reject(this.message)
      },
    }
  }

  validateValue (value, resolve, reject) {
    this.handle(resolve, () => {
      reject(this.message);
    }, value);
  }
}

AsyncValidator.type = 'async';
