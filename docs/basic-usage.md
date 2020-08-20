# 基本用法

## 简单的例子
```js
// 引入验证器
import { Validator } from 'tg-validators'

// 假如有这样一个表单
let form = {
  name: '',
  age: 15,
  cash: 233.4
}

// 定义验证规则
let rules = [
  // 姓名必填
  ['required', 'name'],
  // 要求年龄至少18，你懂得
  ['number', 'age', { min: 18 }],
]

// 然后就开始验证吧

// 为了支持异步验证，所以验证方法写成了Promise形式的
Validator.validate(form, rules)
  // 验证通过
  .then(function () { })
  // 验证不通过会给出哪些字段报哪些错
  .catch(function (error) {
    console.log(error)
  })




```

执行如上代码之后，会输出一个error对象，格式如下
```js
{
  name: ['name不能为空'],
  age: ['age不能小于18']
}
```

error 的 key表示验证不通过的字段名

value 是一个Array，返回该字段所有不通过的条件


## 验证单个
这里的单个不是指只验证一个属性，而是一个一个的去验证，只要有一个验证不通过就返回验证结果。

<basic-usage-validate-one />

## 验证全部
验证所有规则，返回所有验证结果。

## 验证部分属性
在验证的时候指定需要验证的属性。

<basic-usage-validate-some-attribute />
<<< @/docs/.vuepress/components/basic-usage/validate-some-attribute.vue