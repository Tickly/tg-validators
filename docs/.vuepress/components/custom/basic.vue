<template>
  <form @submit.prevent="handleSubmit">
    <label>
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
        ['custom', 'name', {
          handler (value, resolve, reject) {
            if (value.indexOf('帅') === -1) {
              throw new Error('你不够帅')
            }
          }
        }]
      ]
    }
  },
  methods: {
    handleSubmit () {
      this.validate(this.form, this.rules)
    }
  }
}
</script>