import Validator from './validators/validator'

export default class Model {
  constructor({
    form,
    labels,
    rules
  }) {
    this.form = form;
    this._labels = labels;
    this._validators = null;
    this.rules = rules;
    this.errors = {};
  }


  createValidators() {
    return this.rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return Validator.createValidator(rule[1], this, rule[0], rule[2]);
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

  activeAttributes() {
    return Object.keys(this.form);
  }



  getAttributeLabel(attribute) {
    return this._labels[attribute] || attribute
  }


  /**
   * 验证
   * 可以指定验证的字段
   * @param {Array} attributeNames 要验证的字段
   * @param {Boolean} clearErrors 是否清空错误信息，当验证指定字段的时候，应该不要清空
   */
  validate(attributeNames = null, clearErrors = true) {
    if (clearErrors) this.clearErrors();

    if (attributeNames === null) {
      attributeNames = this.activeAttributes();
    }

    this.getValidators().forEach(validator => {
      validator.validateAttributes(this, attributeNames);
    });

    return this.hasErrors();
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
}
