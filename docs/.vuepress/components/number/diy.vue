<template>
  <form @change="validate">
    <p>
      <label>
        输入数字
        <input v-model.number="form.value" type="number" />
        <span v-if="error">{{ error }}</span>
      </label>
    </p>
    <div>
      <label>
        min
        <input v-model.number="form.min" type="number" />
        验证规则为：不能小于该数字
      </label>
    </div>
    <div>
      <label>
        max
        <input v-model.number="form.max" type="number" />
        验证规则为：不能大于该数字
      </label>
    </div>
    <div>
      <label>
        greater than
        <input v-model.number="form.gt" type="number" />
        验证规则为：必须大于该数字
      </label>
    </div>
    <div>
      <label>
        less than
        <input v-model.number="form.lt" type="number" />
        验证规则为：必须小于该数字
      </label>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        value: 1,
        min: 1,
        gt: 3,
        max: 10,
        lt: 8,
      },
      error: '',
    }
  },
  created () {
    this.validate()
  },
  methods: {
    validate () {
      let rules = [
        ['number', 'value', {
          min: this.form.min,
          max: this.form.max,
          lt: this.form.lt,
          gt: this.form.gt,
        }]
      ]
      let labels = {
        value: '输入数字'
      }

      this.$Validator.validate(this.form, rules, labels)
        .then(() => {
          this.error = ''
        })
        .catch(errors => {
          let messages = errors.value
          console.log(messages)
          if (messages.length) {
            this.error = messages[0]
          }
        })
    }
  }
}
</script>