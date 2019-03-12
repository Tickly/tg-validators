<template>
  <form @submit.prevent="validate">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input v-model="form.name" class="form-control" :class="{'is-invalid':errors.name}" />
        <div class="invalid-feedback" v-if="errors.name" v-text="errors.name[0]"></div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Age</label>
      <div class="col-sm-10">
        <input type="number" v-model.number="form.age" class="form-control" :class="{'is-invalid':errors.age}" />
        <div class="invalid-feedback" v-if="errors.age" v-text="errors.age[0]"></div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
import { Validator } from '@'


export default {
  data() {
    return {
      // 表单数据
      form: {
        name: '',
        age: 0,
      },
      // 验证规则
      rules: [
        ['required', 'name'],
        ['string', 'name', { min: 4 }],
        ['number', 'age', { min: 20, max: 30 }],
      ],
      // 错误提示
      errors: {},
    }
  },
  methods: {
    validate() {
        
      Validator.validate(this.form, this.rules).then(console.log).catch(errs => this.errors = errs);
    }
  },
  watch: {
    // 如果需要实时验证，通过watch form的变更即可
    // form: {
    //   deep: true,
    //   handler() {
    //     this.validate();
    //   }
    // },
  }
}
</script>
