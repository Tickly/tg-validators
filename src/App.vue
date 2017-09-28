<template>
  <div id="app" class="container">
    <form class="form-horizontal" @submit.prevent="submit">
      <div class="form-group">
        <label for="exampleInputEmail1" class="col-sm-2 control-label">Email address</label>
        <div class="col-sm-10">
          <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
      </div>
      <div class="form-group has-error">
        <label for="exampleInputPassword1" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          <div class="help-block" v-if="form.errors.password" v-text="form.errors.password[0]"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
          <button type="submit" class="btn btn-default">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import Validator from './validators/validator'
import Model from './model'






export default {
  name: 'app',
  data() {
    var form = {
      email: '807081817@qq.com',
      password: null,
    },
      labels = {
        email: '邮箱',
        password: '密码',
      },
      rules = [
        [['password', 'email'], 'required'],

      ];
    return {
      form: new Model(form, labels, rules),
    }
  },
  mounted() {
    this.form.password = 1;
  },
  methods: {
    submit() {
      this.form.validate();
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
