import { Validator } from '../../src/index'
export default ({ Vue }) => {

  Vue.prototype.$Validator = Validator

  Vue.mixin({
    methods: {
      validate (form, rules, labels) {
        this.$Validator.validate(form, rules, labels)
          .then(() => {
            alert('验证通过')
          })
          .catch(errors => {
            alert(JSON.stringify(errors))
          })
      }
    }
  })
}