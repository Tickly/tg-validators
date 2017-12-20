import Model from './model'

import Validator from './validator'
import validators from './validators'

import BaseValidator from './validators/validator'

validators.forEach(validator => {
  Validator.addValidator(validator);
})

export {
  Model,
  Validator,
  BaseValidator,
}
