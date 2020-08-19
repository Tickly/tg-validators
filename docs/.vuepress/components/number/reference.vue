<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>
        单次最少
        <input type="number" v-model.number="form.once" />
        公里
      </label>
    </div>
    <div>
      <label>
        每天最多
        <input type="number" v-model.number="form.allDay" />
        公里
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
        once: 5,
        allDay: 3,
      },
      rules: [
        ['number', 'once', {
          max: 'allDay'
        }],
        ['number', 'allDay', {
          min: 'once'
        }]
      ],
      labels: {
        once: '单次',
        allDay: '每天',
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