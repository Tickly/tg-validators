<template>
  <form @submit.prevent="handleSubmit">
    <label>验证值：</label>
    <input type="text" v-model="form.bind" />
    <button>Submit</button>
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
        ['custom', 'bind', {
          handler (value, resolve, reject) {
            if (value === 'a') setTimeout(resolve, 1000)
            else setTimeout(() => reject('{attribute}必须等于a'), 1000)
          }
        }]
      ],
      labels: {
        bind: '验证值'
      }
    }
  },
  methods: {
    handleSubmit () {
      this.validate(this.form, this.rules)
    }
  }
}
</script>