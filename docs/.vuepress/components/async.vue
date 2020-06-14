<template>
  <form>
    <label>验证值：</label>
    <input
      type="text"
      v-model="form.bind"
    >
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
      form: {
        bind: ''
      },
      rules: [
        ['async', 'bind', {
          handle (resolve, reject, value) {
            if (value === 'a') setTimeout(resolve, 1000)
            else setTimeout(reject, 1000)
          }
        }]
      ],
      labels: {
        bind: '验证值'
      }
    }
  },
  methods: {
    handleClick () {
      this.validate(this.form, this.rules)
    }
  }
}
</script>