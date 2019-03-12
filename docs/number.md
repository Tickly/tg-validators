验证value是否是Number类型，字符串的数字不通过验证。

| Property | Type | Description
| - | - | - |
| message | 
| max | Number | 允许的数字最大值
| min | Number | 允许的数字最小值



```
const form = {
    a:'1',
    b:0,
    c:'0',
}
const rules = [
    ['number','a,b,c'],
]

```