<template>
  <form @submit.prevent="handleSubmit">
    <label>
      选择要验证的值：
      <select @change="handleChange">
        <option>'abc'</option>
        <option>[]</option>
        <option>[1]</option>
        <option>[1,2,3]</option>
      </select>
    </label>

    <button>Submit</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        bind: 0
      },
      rules: [
        ['array', 'bind', {
          min: 1,
          max: 2
        }]
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
    handleSubmit () {
      this.validate(this.form, this.rules, this.labels)
    }
  }
}
</script>
