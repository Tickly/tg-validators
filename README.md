# tag-validators

> 借鉴了yii2里面的表单验证 [项目地址](https://github.com/yiisoft/yii2/blob/master/framework/validators/Validator.php)

接触过YII2框架，很喜欢里面表单验证的写法，很简单，于是想用js实现一下。


## 示例代码可在我的另一个包 tag-ui 的Form组件代码里看到

像下面这样的配置验证规则即可实现表单验证。

```
const rules = [
    [['name', 'password', 'number', 'date'], 'required'],
    ['number', 'number', {
    max: 100,
    min: 10,
    }],
    ['date', 'date'],
]
```

验证的时候，传入表单，以及rules，即可返回验证结果
```
const form = {
    name:'taoguo',
    password:'',
    number:9,
    date:'2017-10-01',
};

const labels = {
    password:'密码',
}

// 这里的用法还没优化好，目前是这样用。
// 之所以多个Model是因为要将attribute转为label，比如password显示为密码。
const model = new Model({form,labels,rules});
model.validate();


// model.error 
// {
//     password:'密码 不能为空',
//     number:'number 必须大于 10'
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

