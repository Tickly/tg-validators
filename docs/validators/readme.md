# 编写验证规则

验证规则是一个数组，它是由多条验证组成，每条验证对应一个验证器

### 语法

```js
let rules = [
  [type, attributes, params],
  ...
]
```

|参数|说明|类型||
|-|-|-|-|
|type|验证器类型|String
|attributes|验证的字段| [String,Array] | 由逗号隔开的字符串或单个字段名，或者字段名组成的数组
|params|验证器的参数|Object| 例如是Number验证的时候，可以传 { min : 0, max : 100, message:'自定义错误消息，支持模板替换'}

### 示例

比如有个用户注册页面，要求是用户名，密码都必填，然后密码最少8个字符

那么规则就可以这么写

```js
let rules = [
  ['required', 'username,password'],
  ['string','password',{ min: 8 }]
]
```