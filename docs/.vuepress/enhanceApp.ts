import { Validator } from "../../src/main";

export default ({ Vue, router }) => {
  Vue.prototype.$Validator = Validator;

  Vue.mixin({
    methods: {
      validate(form, rules, labels) {
        this.handleResult(this.$Validator.validate(form, rules, labels));
      },
      validateOne(form, rules, labels) {
        this.handleResult(this.$Validator.validateOne(form, rules, labels));
      },
      handleResult(validate) {
        validate
          .then(() => {
            alert("验证通过");
          })
          .catch(errors => {
            console.log(errors);
            alert(JSON.stringify(errors));
          });
      }
    }
  });


  /**
   * 路由切换事件处理
   */
   router.beforeEach((to, from, next) => {
    console.log("切换路由", to.fullPath, from.fullPath);

    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
        console.log("上报百度统计", to.fullPath);
      }
    }

    // continue
    next();
  });
};
