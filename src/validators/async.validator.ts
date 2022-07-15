import Base from './base.validator'

export default class AsyncValidator extends Base {
  get defaultOptions () {
    return {
      message: '{attribute} 没有通过异步验证',
      handler (value, resolve, reject) {
        reject(this.message)
      }
    }
  }

  validateValue (value, resolve, reject) {
    this.handler(value, resolve, () => {
      reject(this.message)
    })
  }
}

AsyncValidator.type = 'async'
