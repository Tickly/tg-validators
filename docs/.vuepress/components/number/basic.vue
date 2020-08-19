<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>
        年龄1
        <input type="number" v-model="form.age1" />
      </label>
    </div>
    <div>
      <label>
        年龄2
        <input type="number" v-model.number="form.age2" />
      </label>
    </div>
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        age1: '0',
        age2: 0,
      },
      rules: [
        ['number', 'age1,age2']
      ],
      labels: {
        age1: '年龄1',
        age2: '年龄2',
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