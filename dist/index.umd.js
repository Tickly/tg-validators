(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    const descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Model", function() { return /* reexport */ model_Model; });
__webpack_require__.d(__webpack_exports__, "Validator", function() { return /* reexport */ src_validator; });
__webpack_require__.d(__webpack_exports__, "BaseValidator", function() { return /* reexport */ base_validator; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/validator.js
class Validator {
  constructor () {
    this.validators = {};
  }

  addValidator (validator) {
    if (!validator.type) {
      throw new Error('验证器必须有 type 属性')
    }
    this.validators[validator.type] = validator;
  }

  getValidators (rules, labels) {
    return rules.map(rule => {
      if (Array.isArray(rule) && rule.length >= 2) {
        return this.createValidator(rule, labels);
      }
      throw new Error('不支持的rules')
    })
  }

  /**
   * 验证所有属性
   * @param {Object} form 
   * @param {Array} rules 
   * @param {Object} labels 
   * @returns {Array} 返回所有验证结果
   */
  validate (form, rules, labels) {
    let validators = this.getValidators(rules, labels)

    let errors = {};

    let promises = validators.map(validator => {
      return validator.validateAttributes(form).then(_errors => {
        _errors.forEach(([attr, err]) => {
          if (errors[attr] === undefined) errors[attr] = [];
          errors[attr].push(err);
        })
      })
    })

    return Promise.all(promises).then(() => {
      if (Object.keys(errors).length) return Promise.reject(errors)
    })
  }

  /**
   * 验证单个属性，只要有一个属性不满足条件就返回错误信息
   * @param {*} form 
   * @param {*} rules 
   * @param {*} labels 
   */
  validateOne (form, rules, labels) {

  }

  createValidator ([type, attributes, params = {}], labels) {
    const Validator = this.validators[type];

    if (!Validator) throw new Error('不支持的验证类型')

    return new Validator({
      ...params,
      attributes,
      labels,
    });
  }
}

/* harmony default export */ var src_validator = (new Validator());
// CONCATENATED MODULE: ./src/model.js


const labels = Symbol('labels');
const rules = Symbol('rules');



class model_Model {

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
        return src_validator.createValidator(rule, this.labels);
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
    return src_validator.validate(this.form, this.rules, this.labels)

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

// CONCATENATED MODULE: ./src/validators/base.validator.js


class base_validator_Validator {
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
  async validateAttributes(model, attributes = null) {
    if (attributes == null) {
      attributes = this.attributes;
    } else {
      if ('string' === typeof attributes) {
        attributes = [attributes]
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


  validateAttribute(model, attribute) {
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

/* harmony default export */ var base_validator = (base_validator_Validator);

// CONCATENATED MODULE: ./src/validators/required.validator.js


class required_validator_RequiredValidator extends base_validator {

  constructor (options) {
    super(options);

    this.message = '{attribute}不能为空';
  }

  validateValue (value) {
    do {
      if (0 === value) {
        break;
      }

      // 如果是有元素的数组
      if (Array.isArray(value) && value.length > 0) break;
      // 布尔型通过验证
      if ('boolean' === typeof value) break
      // 如果有值
      if (!!value) break;

      return this.message
    } while (false);
    // 只要break，就验证通过
    return null
  }
}

required_validator_RequiredValidator.type = 'required';

// CONCATENATED MODULE: ./src/validators/number.validator.js


class number_validator_NumberValidator extends base_validator {

  constructor (options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是数字',
      max: Infinity,
      message_max: '{attribute}不能大于{max}',
      min: -Infinity,
      message_min: '{attribute}不能小于{min}',
    };

    this.parse(attributes, options);
  }


  validateValue (value) {
    do {
      // 如果是个数字
      if (typeof 0 === typeof value) {
        if (this.max !== null && value > this.max) {
          return this.message_max
        }
        if (this.min !== null && value < this.min) {
          return this.message_min
        }
        break;
      };

      return this.message
    } while (false);

    return null;
  }

}


number_validator_NumberValidator.type = 'number';

// CONCATENATED MODULE: ./src/validators/date.validator.js


class date_validator_DateValidator extends base_validator {
  constructor(options) {
    super(options);

    this.message = '{attribute}必须是时间'
  }

  validateValue(value) {
    do {
      if (Date.parse(value)) break;

      return this.message
    } while (false);

    return null;
  }

}


date_validator_DateValidator.type = 'date'

// CONCATENATED MODULE: ./src/validators/phone.validator.js


class phone_validator_PhoneValidator extends base_validator {

  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是11位数字的号码格式',
    };

    this.parse(attributes, options);
  }


  validateValue(value) {
    do {
      if (/^1\d{10}$/.test(value)) break;

      return this.message
    } while (false);

    return null;
  }

}


phone_validator_PhoneValidator.type = 'phone';

// CONCATENATED MODULE: ./src/validators/string.validator.js


class string_validator_StringValidator extends base_validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是字符串',
      min: 0,
      message_min: '{attribute}长度至少为{min}',
      max: Infinity,
      message_max: '{attribute}长度不能超过{max}',
    }

    this.parse(attributes, options)
  }

  validateValue(value) {
    do {
      if (typeof '' === typeof value) {
        if (this.min && value.length < this.min)
          return this.message_min

        if (this.max && value.length > this.max)
          return this.message_max

        break;
      }

      return this.message
    } while (false)
    return null;
  }

}

string_validator_StringValidator.type = 'string';

// CONCATENATED MODULE: ./src/validators/regexp.validator.js


class regexp_validator_RegExpValidator extends base_validator {
  constructor(options) {
    super(options);


    const attributes = {
      message: '{attribute}必须是满足正则表达式{regexp}',
      regexp: null,
    }

    this.parse(attributes, options)

    if (typeof options.regexp === typeof '')
      this.regexp = new RegExp(options.regexp);
  }

  validateValue(value) {
    do {
      if (this.regexp.test(value)) {
        break;
      }
      return this.message
    } while (false)
    return null;
  }

}

regexp_validator_RegExpValidator.type = 'regexp';

// CONCATENATED MODULE: ./src/validators/async.validator.js


class async_validator_AsyncValidator extends base_validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}没有通过验证',
      handle(resolve, reject) {
        reject(this.message);
      },
    }

    this.parse(attributes, options);
  }

  validateValue(value, resolve, reject) {
    this.handle(resolve, () => {
      reject(this.message);
    }, value);
  }
}

async_validator_AsyncValidator.type = 'async';

// CONCATENATED MODULE: ./src/validators/boolean.validator.js


class boolean_validator_BooleanValidator extends base_validator {
  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是布尔型',
    }

    this.parse(attributes, options)
  }

  validateValue(value) {
    if (typeof true === typeof value) {
      return null;
    }
    return this.message
  }

}

boolean_validator_BooleanValidator.type = 'boolean';

// CONCATENATED MODULE: ./src/validators/array.validator.js


class array_validator_ArrayValidator extends base_validator {

  constructor(options) {
    super(options);

    const attributes = {
      message: '{attribute}必须是数组',
      max: null,
      message_max: '{attribute}最多{max}个',
      min: null,
      message_min: '{attribute}最少{min}个',
    };

    this.parse(attributes, options);
  }


  validateValue(value) {
    do {
      if (Array.isArray(value)) {
        if (this.max !== null && value.length > this.max) {
          return this.message_max
        }
        if (this.min !== null && value.length < this.min) {
          return this.message_min
        }
        break;
      };

      return this.message
    } while (false);

    return null;
  }

}


array_validator_ArrayValidator.type = 'array';

// CONCATENATED MODULE: ./src/validators/index.js










/* harmony default export */ var validators = ([
  required_validator_RequiredValidator,

  string_validator_StringValidator,
  number_validator_NumberValidator,
  boolean_validator_BooleanValidator,
  date_validator_DateValidator,
  array_validator_ArrayValidator,


  phone_validator_PhoneValidator,
  regexp_validator_RegExpValidator,

  async_validator_AsyncValidator,
]);

// CONCATENATED MODULE: ./src/index.js







validators.forEach(validator => {
  src_validator.addValidator(validator);
})



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map