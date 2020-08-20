<template>
  <form @submit.prevent="handleSubmit">
    <label>
      账号
      <input />
    </label>
    <label>
      密码
      <input />
    </label>
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: [
        ['required', 'username,password']
      ]
    }
  },
  methods: {
    handleSubmit () {
      // 只验证一个属性
      // 多个属性可以写成数组，或者用逗号分隔的字符串
      // 全部都验证就不传参数
      this.validate(this.form, this.rules, {}, 'username')
    }
  }
}
</script>