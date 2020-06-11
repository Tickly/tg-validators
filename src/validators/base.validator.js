import Model from '../model';

class Validator {
  constructor ({
    attributes = [],
    labels = {},
  }) {
    // 字段列表
    this.parseAttributes(attributes);
    // 字段的描述名
    this.labels = labels;


    this.message = null;
  }

  parseAttributes (attributes) {
    if ('string' === typeof attributes) {
      attributes = attributes.split(',')
    }

    this.attributes = attributes;
  }



  parse (attributes, options) {
    Object.assign(this, attributes);

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        if (attributes.hasOwnProperty(key)) {
          this[key] = options[key];
        }
      }
    }
  }


  /**
   * 验证字段
   * 如果不指定 attributes ,则验证该验证器所有的字段，
   * @param {Model} model 
   * @param {Array,String} attributes 要验证的字段
   */
  async validateAttributes (model, attributes = null) {
    if (attributes === null) {
      attributes = this.attributes;
    } else {
      if ('string' === typeof attributes) {
        attributes = attributes.split(',')
      }
    }

    let errors = [];

    let promises = attributes.map(async attribute => {

      return this.validateAttribute(model, attribute)
        // 验证成功，啥都不做，只处理错误情况
        .catch(err => {
          let error_msg = this.formatMessage(err, {
            attribute: this.labels[attribute] || attribute,
            ...this,
          })

          errors.push([attribute, error_msg]);
        })
    })

    await Promise.all(promises);

    return errors;
  }


  validateAttribute (model, attribute) {
    return new Promise((resolve, reject) => {
      let result = this.validateValue(model[attribute], resolve, reject);

      // 异步验证，如果undefined则代表异步验证，由子类自己触发callback
      if (result === undefined) return;

      // 同步验证
      if (result) reject(result);
      else resolve();
    })
  }






  /**
   * 返回 null 则验证通过，否则返回错误信息 Array
   * @param {*} value 要验证的值
   */
  validateValue (value) {
    throw new Error('这个类不支持验证')
  }

  formatMessage (message, params) {
    return message.replace(/{(\w+)}/g, (match, p1) => params[p1]);
  }

  addError (model, attribute, message, params = {}) {
    params.attribute = model.getAttributeLabel(attribute);

    model.addError(attribute, this.formatMessage(message, params));
  }

}

export default Validator
