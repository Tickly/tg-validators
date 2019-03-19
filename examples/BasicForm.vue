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
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Birthday</label>
      <div class="col-sm-10">
        <input type="date" v-model="form.birthday" class="form-control" :class="{'is-invalid':errors.birthday}" />
        <div class="invalid-feedback" v-if="errors.birthday" v-text="errors.birthday[0]"></div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input v-model="form.phone" class="form-control" :class="{'is-invalid':errors.phone}" />
        <div class="invalid-feedback" v-if="errors.phone" v-text="errors.phone[0]"></div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input v-model="form.password" class="form-control" :class="{'is-invalid':errors.password}" />
        <div class="invalid-feedback" v-if="errors.password" v-text="errors.password[0]"></div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    <button class="btn btn-info" @click.prevent="handleReset">Reset</button>
  </form>
</template>
<script>
import { Validator } from '@'

let form = {
  name: '',
  age: 0,
  birthday: null,
  phone: null,
  password: null,
  password_confirm: null,
}

export default {
  data() {
    return {
      // 表单数据
      form: {
        ...form,
      },
      // 验证规则
      rules: [
        ['required', 'name'],
        ['string', 'name', { min: 4 }],
        ['number', 'age', { min: 20, max: 30 }],
        ['date', 'birthday'],
        ['phone', 'phone'],
        ['regexp', 'password', {
          regexp: '^\\w+\\d+$',
          message: '密码必须是字母开头数字结尾',
        }],
        ['async', 'name', {
          handle(resolve, reject, value) {
            setTimeout(() => {
              reject();
            }, 1000);
          },
          message: '{attribute}已被占用',
        }]
      ],
      labels: {
        name: '姓名',
      },
      // 错误提示
      errors: {},
    }
  },
  methods: {
    validate() {
      Validator.validate(this.form, this.rules, this.labels)
        .then(console.log)
        .catch(errs => {
          this.errors = errs;
          console.log(typeof errs, errs)
        });
    },
    handleReset() {
      this.form = {
        ...form,
      }
      this.errors = {};
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
