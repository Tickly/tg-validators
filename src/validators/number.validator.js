import Validator from './base.validator'

export default class NumberValidator extends Validator {
  get defaultOptions () {
    return {
      message: '{attribute}必须是数字',
      // 最大值
      // 如果是数字，则直接判断与该数字的大小
      // 如果是字符串，则表示关联对比，字符串为form中对应的attribute
      max: null,
      message_max: '{attribute}不能大于{maxText}',
      // 规则与max相同
      min: null,
      message_min: '{attribute}不能小于{minText}',
      // 小于某个数
      lt: null,
      message_lt: '{attribute}必须小于{lt}',
      // 大于某个数
      gt: null,
      message_gt: '{attribute}必须大于{gt}',
    }
  }

  get maxText () {
    let max = this.max
    if (typeof max === typeof '') {
      max = this.getAttributeLabel(max)
    }
    return max
  }

  get minText () {
    let min = this.min
    if (typeof min === typeof '') {
      min = this.getAttributeLabel(min)
    }
    return min
  }

  validateValue (value, resolve, reject) {
    // 类型验证，必须是数字类型
    if (typeof value !== typeof 0) throw new Error(this.message)

    // 验证最大值与最小值
    this.validateMax(value)
    this.validateMin(value)

    // 如果设置了 小于某个数
    if (this.lt) {
      if (!(value < this.lt)) {
        throw new Error(this.message_lt)
      }
    }
    // 如果设置了 大于某个数
    if (this.gt) {
      if (!(value > this.gt)) {
        throw new Error(this.message_gt)
      }
    }

    resolve()
  }

  validateMax (value) {
    // 没有设置max就不验证
    if (this.max === null) return

    // 获取要对比的最大值
    let max = this.max

    // 如果max是数字，直接比较大小
    if (typeof max === typeof 0) { }

    // 如果max是字符串，则根据form中对应的属性判断
    if (typeof max === typeof '') {
      max = this.form[max]
    }

    if (value > max) {
      throw new Error(this.message_max)
    }
  }

  validateMin (value) {
    // 没有设置min就不验证
    if (this.min === null) return

    // 获取要对比的最大值
    let min = this.min

    // 如果min是数字，直接比较大小
    if (typeof min === typeof 0) { }

    // 如果min是字符串，则根据form中对应的属性判断
    if (typeof min === typeof '') {
      min = this.form[min]
    }

    if (value < min) {
      throw new Error(this.message_min)
    }
  }
}

NumberValidator.type = 'number'
