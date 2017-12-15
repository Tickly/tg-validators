# tag-validators

> 借鉴了yii2里面的表单验证 [项目地址](https://github.com/yiisoft/yii2/blob/master/framework/validators/Validator.php)

接触过YII2框架，很喜欢里面表单验证的写法，很简单，于是想用js实现一下。


## 示例代码可在我的另一个包 tag-ui 的Form组件代码里看到


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
每一条rule的写法如下
[type,attributes,params]

- type: 验证器类型
- attributes: 验证的字段
- params: 验证器的参数

验证的时候，传入表单，以及rules，即可返回验证结果
```
Validator
    .validate(form,rules)
    .then(()=>{
        alert('验证通过')
    })
    // 这里通过数组形式返回两个值
    // 一个是第一个错误 String
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

