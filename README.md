# tag-validators

> 借鉴了yii2里面的表单验证 [项目地址](https://github.com/yiisoft/yii2/blob/master/framework/validators/Validator.php)

接触过YII2框架，很喜欢里面表单验证的写法，很简单，于是想用js实现一下。






## Install
`npm i tag-validators`



## Usage
```
// 注意一定要用大括号解析
// 目前是把Model也提供出来了，后期可能移除吧，到时候就不用加大括号了
import { Validator, Model } from 'tag-validators'

Validator
    // 具体每个参数请往下看
    .validate(form,rules,labels)
    .then(()=>{
        // success
    })
    .catch(([firstError,errors]) => {
        // error
    })
```


## form
比如我们有下面这样一个表单
```
const form = {
    name:'taoguo',
    password:'',
    age:9,
    birthday:'2000-10-01',
};
```

## rules
然后再进行规则的配置
```
const rules = [
    ['required', ['name', 'password', 'age', 'date']],
    // 多个字段也可以用逗号隔开
    // ['required','name,password,age,date'],
    ['number', 'age', {
        max: 100,
        min: 10,
    }],
    ['date', 'birthday'],
]
```
每一条rule的写法如下 `[type,attributes,params]`

|||||
|-|-|-|-|
|type|验证器类型|String
|attributes|验证的字段| [String,Array] | 由逗号隔开的字符串或单个字段名，或者字段名组成的数组
|params|验证器的参数|Object| 例如是Number验证的时候，可以传 { min : 0, max : 100, message:'自定义错误消息，支持模板替换'}


---

验证的时候，传入表单，以及rules，即可返回验证结果
```
Validator
    .validate(form,rules)
    .then(()=>{
        alert('验证通过')
    })
    // 这里通过数组形式返回两个值
    // 一个是第一个错误 String，因为有的时候我们只需要提示一个错误即可
    // 第二个是全部错误 Object
    .catch(([firstError,errors])=>{
        console.log(firstError,errors)
    })

// firstError
// 'password不能为空'

// errors
// {
//     password: ['password不能为空'],
//     age: ['age必须大于10'],
// }
```

注意，如果有error，每个字段的error都是一个数组，因为可能是多个验证器的验证结果。

## labels
验证的时候，还可以传入一个labels参数，用来替换error里面字段名的显示
```
const labels = {
    password:'密码',
    age:'年龄'
}
Validator
    .validate(form,rules,labels)
    .then(()=>{
        alert('验证通过')
    })
    .catch(([firstError,errors])=>{
        console.log(firstError,errors)
    })

// firstError
// '密码不能为空'

// model.error 
// {
//     password: ['密码不能为空'],
//     age: ['年龄必须大于10'],
// }
```



## 支持自己扩展验证器

### 比如写一个String类型验证

创建一个文件 string.validator.js 
```
import { BaseValidator } from 'tag-validators'

export default Class MyValidator extends BaseValidator {
    // 构造函数里写好错误消息的模板
    constructor(options){
        super(options);

        this.message = '{attribute} 必须是字符串类型'
    }

    // 验证的代码
    // 返回 null 则表示验证通过
    // 验证不通过需要返回错误信息
    // 错误信息为数组，第一个元素是this.message，第二个元素是其余参数，像Number验证的时候，参数可以有 min,max 等
    validateValue(value){
        if('string' === typeof value){
            return null
        }
        return [this.message]
    }

}

// 最后一定要加上这一句，指定验证器的类型
MyValidator.type = 'myValidator';
```

然后在项目入口文件(entry.js)里把添加进去
```
import { Validator } from 'tag-validators'
import myValidator from './string.validator.js'


Validator.addValidator(myValidator);
```

再然后就可以这么写rules了
```
const rules = [
    [
        'myValidator',
        'attr1,attr2'
    ],
]
```







## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

