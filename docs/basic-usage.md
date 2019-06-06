# 基本用法


```js
// 引入验证器
import { Validator } from 'tag-validators'

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
  .then(function () {
  })
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