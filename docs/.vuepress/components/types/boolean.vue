<template>
  <form>
    <button @click="toggle">Toggle input type</button>
    <label>绑定值
      <input
        v-model="form.bind"
        :type="type"
      />
    </label>
    <button
      type="button"
      @click="handleClick"
    >Submit</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      type: 'input',
      form: {
        bind: ''
      },
      rules: [
        ['boolean', 'bind']
      ],
      labels: {
        bind: '绑定值'
      }
    }
  },
  methods: {
    toggle () {
      this.type = this.type === 'input' ? 'checkbox' : 'input'
      // 单纯的切换type还不行，得手动重新赋值一下对应的类型
      this.form.bind = this.type === 'input' ? '' : false
    },
    handleClick () {
      this.validate(this.form, this.rules, this.labels)
    }
  }
}
</script>
