<template>
  <div>{{errors}}</div>
</template>
<script>
import { Validator } from '../../../src/index'
export default {
  data () {
    return {
      errors: null
    }
  },
  mounted () {
    let form = {
      username: '',
      password: ''
    }
    let rules = [
      ['required', 'username,password']
    ]

    // 只验证一个属性
    // 多个属性可以写成数组，或者用逗号分隔的字符串
    // 全部都验证就不传参数
    Validator.validate(form, rules, {}, 'username').catch(errors => {
      this.errors = errors
    })
  }
}
</script>