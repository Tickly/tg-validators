import Validator from './base.validator'

export default class RequiredValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}不能为空'
    }
  }

  validateValue (value, resolve) {
    do {
      // 数值类型通过验证
      if (typeof value === typeof 0) break
      // 布尔类型通过验证
      if (typeof value === typeof true) break
      // 数组，必须有元素
      if (Array.isArray(value) && value.length > 0) break
      // 字符串必须有值
      if (typeof value === typeof '') {
        if (value) break
      }
      // 对象暂时不作判断
      throw new Error(this.message)
    } while (false)
    // 只要break，就验证通过
    resolve()
  }
}

RequiredValidator.type = 'required'
