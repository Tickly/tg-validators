<template>
  <form @submit.prevent="handleSubmit">
    <label>
      姓名
      <input v-model="form.name" />
    </label>
    <button>Submit</button>
  </form>
</template>
<script>

export default {
  data () {
    return {
      form: {
        name: ''
      },
      rules: [
        ['required', 'name']
      ],
      labels: {
        name: '姓名'
      }
    }
  },
  methods: {
    handleSubmit () {
      this.validate(this.form, this.rules, this.labels)
    }
  }
}
</script>