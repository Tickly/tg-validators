<template>
  <div>
    <form>
      <label>姓名
        <input v-model="form.name">
      </label>
      <button
        type="button"
        @click="handleClick"
      >submit</button>
    </form>
  </div>
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
      ]
    }
  },
  created () {

  },
  methods: {
    handleClick () {
      this.$Validator.validate(this.form, this.rules).catch(console.log)
    }
  }
}
</script>