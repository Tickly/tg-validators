<template>
  <form>
    <label>要测试的文本:
      <input
        type="text"
        v-model="form.bind"
      >
    </label>
    <label>正则表达式:
      <input
        type="text"
        v-model="regexp"
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
      regexp: '^\\d+$',
      form: {
        bind: ''
      },
      labels: {
        bind: '绑定值'
      }
    }
  },
  computed: {
    rules () {
      return [
        ['regexp', 'bind', {
          regexp: this.regexp
        }]
      ]
    }
  },
  methods: {
    handleClick () {
      this.validate(this.form, this.rules, this.labels)
    }
  }
}
</script>