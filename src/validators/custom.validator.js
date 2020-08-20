/**
 * 自定义验证
 */
import Base from './base.validator'

export default class CustomValidator extends Base {
  get defaultOptions () {
    return {
      message: '{attribute} 没有通过验证',
      handler (value, resolve, reject) {
        reject(this.message)
      }
    }
  }

  validateValue (value, resolve, reject) {
    return this.handler(value, resolve, reject)
  }
}

CustomValidator.type = 'custom'
