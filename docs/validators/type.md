# 数据类型验证

## Boolean

<types-boolean />
<<< @/docs/.vuepress/components/types/boolean.vue


### 参数
| 参数 | 类型 | 描述 | 默认值
| - | - | - | - |
| message | String | 当类型不是 Boolean 时候的错误提示 | '{attribute}必须是布尔型'


## Number

<types-number />
<<< @/docs/.vuepress/components/types/number.vue


### 参数
| 参数 | 类型 | 描述 | 默认值
| - | - | - | - |
| message | String | 当类型不是 Number 时候的错误提示 | '{attribute}必须是数字'
| min | Number | 允许的数字最小值 | -Infinity
| message_min | String | 长度小于 min 时的错误提示 | '{attribute}不能小于{min}'
| max | Number | 允许的数字最大值 | Infinity
| message_max | String | 长度大于 max 时的错误提示 | '{attribute}不能大于{max}'

## String
<types-string />
<<< @/docs/.vuepress/components/types/string.vue

### 参数
| 参数 | 类型 | 描述 | 默认值
| - | - | - | - |
| message | String | 当类型不是 String 时候的错误提示 | '{attribute}必须是字符串'
| min | Number | 允许的字符串最小长度 | 0
| message_min | String | 长度小于 min 时的错误提示 | '{attribute}长度至少为{min}'
| max | Number | 允许的字符串最大长度 | Infinity
| message_max | String | 长度大于 max 时的错误提示 | '{attribute}长度不能超过{max}'

## Array
<types-array />
<<< @/docs/.vuepress/components/types/array.vue

### 参数
| 参数 | 类型 | 描述 | 默认值
| - | - | - | - |
| message | String | 当类型不是 Array 时候的错误提示 | '{attribute}必须是数组'
| min | Number | 允许的数组最小个数 | 0
| message_min | String | 个数小于 min 时的错误提示 | '{attribute}长度至少为{min}'
| max | Number | 允许的数组最大个数 | Infinity
| message_max | String | 个数大于 max 时的错误提示 | '{attribute}长度不能超过{max}'

## Date
<types-date />
<<< @/docs/.vuepress/components/types/date.vue

### 参数
| 参数 | 类型 | 描述 | 默认值
| - | - | - | - |
| message | String | 当类型不是 Date 时候的错误提示 | '{attribute} 必须是时间类型'
