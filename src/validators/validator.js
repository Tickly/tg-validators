import Model from '../model';

class Validator {
  constructor({
    attributes = [],
    labels = {},
  }) {
    // 字段列表
    this.parseAttributes(attributes);
    // 字段的描述名
    this.labels = labels;


    this.message = null;
  }

  parseAttributes(attributes) {
    if ('string' === typeof attributes) {
      attributes = attributes.split(',')
    }

    this.attributes = attributes;
  }



  parse(attributes, options) {
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
  validateAttributes(model, attributes = null) {
    if (attributes == null) {
      attributes = this.attributes;
    } else {
      if ('string' === typeof attributes) {
        attributes = [attributes]
      }
    }

    let errors = [];

    let promises = attributes.map(attribute => {
      return this.validateAttribute(model, attribute).then((err) => {
        if (err) {
          errors.push(err);
        }
      })
      // .catch((a) => {
      //   console.log('catch validateAttribute', a)
      // })

      // do {
      //   // 先判断这个字段是否需要该验证器验证
      //   if (!this.attributes.some(attr => attr == attribute)) break;
      //   // 再判断这个字段是否有错，
      //   // if (model.hasErrors(attribute)) break;
      // } while (false);
    })

    return Promise.all(promises).then(() => {
      return errors
    })
  }
  validateAttribute(model, attribute) {
    return new Promise((resolve, reject) => {
      var result = this.validateValue(model[attribute], resolve);

      if (result === undefined) {
        // 如果undefined则代表异步验证，由子类自己触发callback
      } else {
        // 这里都是同步验证
        if (result === null) {
          // null表示验证成功
          resolve();
        } else {
          let [msg, params] = result;
          let err_msg = this.formatMessage(msg, {
            attribute: this.labels[attribute] || attribute,
            ...params,
          });
          resolve([attribute, err_msg]);
        }
      }
    })
  }






  /**
   * 返回 null 则验证通过，否则返回错误信息 Array
   * @param {*} value 要验证的值
   */
  validateValue(value) {
    throw new Error('这个类不支持验证')
  }

  formatMessage(message, params) {
    return message.replace(/{(\w+)}/g, (match, p1) => params[p1]);
  }

  addError(model, attribute, message, params = {}) {
    params.attribute = model.getAttributeLabel(attribute);

    model.addError(attribute, this.formatMessage(message, params));
  }

}

export default Validator
