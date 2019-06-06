# Number 

> 验证value是否是Number类型，字符串的数字不通过验证。


## 参数
| 参数 | 类型 | 描述 | 默认值
| - | - | - | - |
| message | String || '{attribute}必须是数字'
| max | Number | 允许的数字最大值 | Infinity
| min | Number | 允许的数字最小值 | -Infinity


## 示例
```js
let form = {
    a:'1',
    b:0,
    c:'0',
}
let rules = [
    ['number','a,b,c'],
]

```