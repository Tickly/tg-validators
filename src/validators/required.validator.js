import Validator from './base.validator'

export default class RequiredValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}不能为空'
    }
  }

  validateValue (value, resolve) {
    do {
      if (value === 0) {
        break
      }

      // 如果是有元素的数组
      if (Array.isArray(value) && value.length > 0) break
      // 布尔型通过验证
      if (typeof value === 'boolean') break
      // 如果有值
      if (value) break

      throw new Error(this.message)
    } while (false)
    // 只要break，就验证通过
    resolve()
  }
}

RequiredValidator.type = 'required'
