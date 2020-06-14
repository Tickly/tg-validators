<template>
  <form>
    <label>
      绑定值：
      <input
        type="date"
        v-model="form.bind"
      >
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
      form: {
        bind: ''
      },
      rules: [
        ['date', 'bind']
      ],
      labels: {
        bind: '绑定值'
      }
    }
  },
  methods: {
    handleChange (e) {
      this.form.bind = JSON.parse(e.target.value)
    },
    handleClick () {
      this.validate(this.form, this.rules, this.labels)
    }
  }
}
</script>
