<template>
  <form>
    <label>
      a1
      <input v-model="form.a1" />
    </label>
    <label>
      a2
      <input v-model="form.a2" />
    </label>
    <label>
      a3
      <input v-model="form.a3" />
    </label>
    <button type="button" @click="handleOne">ValidateOne</button>
    <button type="button" @click="handleAll">ValidateAll</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        a1: '',
        a2: '',
        a3: '',
      },
      rules: [
        ['required', ['a1', 'a2', 'a3']]
      ]
    }
  },
  methods: {
    handleOne () {
      this.validateOne(this.form, this.rules)
    },
    handleAll () {
      this.validate(this.form, this.rules)
    }
  }
}
</script>