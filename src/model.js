import Validator from './validator'

const labels = Symbol('labels');
const rules = Symbol('rules');



export default class Model {

  constructor(attributes = {}) {
    this._validators = null;
    this.errors = {};

    if (typeof attributes === typeof {}) {
      this.attributes.forEach(key => {
        if (attributes.hasOwnProperty(key)) {
          // 如果传了值过来就赋值
          this[key] = attributes[key]
        } else {
          // 没传值就设为null
          this[key] = null;
        }
      })
    }

  }

  get labels() {
    return {}
  }


  get rules() {
    return []
  }

  get attributes() {
    return [];
  }

  get form() {
    return this.attributes.reduce((p, c) => {
      p[c] = this[c];
      return p;
    }, {})
  }


  createValidators() {
    return this.rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return Validator.createValidator(rule, this.labels);
      }
      throw new Error('不支持的rules')
    })
  }

  getValidators() {
    if (this._validators === null) {
      this._validators = this.createValidators();
    }
    return this._validators;
  }




  getAttributeLabel(attribute) {
    return this.labels[attribute] || attribute
  }


  /**
   * 验证
   * 可以指定验证的字段
   * @param {Array} attributeNames 要验证的字段
   * @param {Boolean} clearErrors 是否清空错误信息，当验证指定字段的时候，应该不要清空
   */
  validate(attributeNames = null, clearErrors = true) {
    return Validator.validate(this.form, this.rules, this.labels)

    // if (clearErrors) this.clearErrors();

    // if (attributeNames === null) {
    //   attributeNames = this.attributes;
    // }

    // this.getValidators().forEach(validator => {
    //   validator.validateAttributes(this, attributeNames);
    // });

    // return !this.hasErrors();
  }


  addError(attribute, error = '') {
    if (this.errors[attribute] == undefined)
      this.errors[attribute] = []
    this.errors[attribute].push(error);
  }

  clearErrors(attribute = null) {
    if (attribute === null) {
      this.errors = {};
    } else {
      // 必须通过这种方式合并对象，不然Vue检测不到更新
      this.errors = Object.assign({}, this.errors, {
        [attribute]: [],
      })
      // this.errors[attribute] = [];
    }
  }
  hasErrors(attribute = null) {
    if (attribute === null) {
      return Object.keys(this.errors).length
    }

    let errors = this.errors[attribute];

    if (errors == undefined) {
      return false
    }

    return errors.length
  }


  get firstError() {
    if (this.hasErrors()) {
      let first = Object.keys(this.errors)[0];
      return this.errors[first][0]
    }
  }

}
