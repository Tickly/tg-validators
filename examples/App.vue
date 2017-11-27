<template>
  <div id="app" class="container"></div>
</template>

<script>
import Validator from '@'


export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() {
    this.validate_required();
    this.validate_number();
  },
  methods: {
    validate(form, rules, labels) {
      Validator.validate(form, rules, labels)
        .then(this.success)
        .catch(this.error)
    },
    success() {
      console.log('验证通过');
    },
    error(err) {
      console.log(err, JSON.stringify(err));
    },
    validate_required() {
      var form = {
        username: 'taoguo',
        password: '',
      },
        rules = [
          [
            'required',
            ['username', 'password'],
          ]
        ], labels;
      this.validate(form, rules, labels);
    },
    validate_number() {
      var form = {
        number: 99,
        price: 123.5,
        age: '15',
      }, rules = [
        [
          'number',
          ['price', 'age'],
        ],
        [
          'number',
          ['price', 'number'],
          {
            min: 100,
            max: 150,
          },
        ],
      ], labels = {
        number: '数字',
        age: '年龄'
      };
      this.validate(form, rules, labels);
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
