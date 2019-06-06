<template>
  <div id="app">
    <div class="container-fluid">

      <div class="row flex-xl-nowrap">
        <div class="col-12 col-md-3 col-xl-2 bd-sidebar">

          <nav class="collapse bd-links" id="bd-docs-nav">
            <div class="bd-toc-item">
              <router-link class="bd-toc-link" to="/getting-started">
                Getting started
              </router-link>

              <ul class="nav bd-sidenav">
                <li>
                  <a href="/docs/4.3/getting-started/introduction/">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/download/">
                    Download
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/contents/">
                    Contents
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/browsers-devices/">
                    Browsers &amp; devices
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/javascript/">
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/theming/">
                    Theming
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/build-tools/">
                    Build tools
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/webpack/">
                    Webpack
                  </a>
                </li>
                <li>
                  <a href="/docs/4.3/getting-started/accessibility/">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div class="bd-toc-item active">
              <router-link class="bd-toc-link" to="/basic-form"> Components </router-link>
              <ul class="nav bd-sidenav">
                <li>
                  <router-link to="/basic-form"> BasicForm </router-link>
                </li>
              </ul>
            </div>

          </nav>

        </div>

        <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
          <router-view />

          <pre>
        <code class="js">
labels = {
  number: '数字',
  age: '年龄'
}
        </code>
      </pre>
        </main>
      </div>

      <!-- <required-validator /> -->
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/default.css'
import RequiredValidator from './required.validator'
// import BasicForm from './BasicForm.vue'
import { Validator } from '@'
import hljs from 'highlight.js'


export default {
  name: 'app',
  components: {
    // BasicForm,
    // RequiredValidator,
  },
  data () {
    return {}
  },
  mounted () {
    // this.validate_required();
    // this.validate_number();

    hljs.initHighlightingOnLoad()
  },
  methods: {
    validate (form, rules, labels) {
      Validator.validate(form, rules, labels)
        .then(this.success)
        .catch(this.error)
    },
    success () {
      console.log('验证通过');
    },
    error (err) {
      console.log(err, JSON.stringify(err));
    },
    validate_required () {
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
    validate_number () {
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
}

.bd-sidebar {
  height: 100vh;
}
</style>
