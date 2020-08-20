<template>
  <form @submit.prevent="handleSubmit">
    <button type="button" @click="toggle">Toggle input type</button>
    <label>
      绑定值
      <input v-if="type === 'input'" v-model="form.bind" />
      <input v-else type="number" v-model.number="form.bind" />
    </label>
    <button>Submit</button>
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
        ['number', 'bind', {
          min: 3,
          max: 10
        }]
      ],
      labels: {
        bind: '绑定值'
      }
    }
  },
  methods: {
    toggle () {
      this.type = this.type === 'input' ? 'number' : 'input'
      // 单纯的切换type还不行，得手动重新赋值一下对应的类型
      this.form.bind = this.type === 'input' ? '' : 0
    },
    handleSubmit () {
      this.validate(this.form, this.rules, this.labels)
    }
  }
}
</script>
