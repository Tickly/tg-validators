import required from './required.validator'
import number from './number.validator'
import date from './date.validator'
import phone from './phone.validator'
import string from './string.validator'
import regexp from './regexp.validator'
import async from './async.validator'
import boolean from './boolean.validator'
import array from './array.validator'

export default [
  required,

  string,
  number,
  boolean,
  date,
  array,

  phone,
  regexp,

  async
]
