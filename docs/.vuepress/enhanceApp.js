import { Validator } from '../../src/main'
export default ({ Vue }) => {

  Vue.prototype.$Validator = Validator

  Vue.mixin({
    methods: {
      validate (form, rules, labels) {
        this.handleResult(this.$Validator.validate(form, rules, labels))
      },
      validateOne (form, rules, labels) {
        this.handleResult(this.$Validator.validateOne(form, rules, labels))
      },
      handleResult (validate) {
        validate
          .then(() => {
            alert('验证通过')
          })
          .catch(errors => {
            console.log(errors)
            alert(JSON.stringify(errors))
          })
      }
    }
  })
}