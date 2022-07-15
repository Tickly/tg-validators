# tg-validators

本项目并非原创思路，借鉴 [yii](https://www.yiiframework.com/doc/guide/2.0/zh-cn/input-validation) 框架里面的表单验证思想，写了一版 JavaScript 版本的。

---

## 自动生成错误信息

因为大部分验证组件都需要在指定验证类型的时候同时写一个 message，
比如

```js
let rule = {
  name:{required:true,message:'请输入姓名'},
  age:{required:true,type:Number,min:18,'年龄必须大于18'}
}
```

每一个字段都得去写一遍错误信息很麻烦。

或者是有的不用写 message 的

```js
let rule = {
  name: { required: true },
  age: { required: true, type: Number, min: 18 }
};
```

但是这种最终的报错可能会是这样`请输入name`,`age必须大于18`,看着就很奇怪。
因为你表单的属性肯定都是英文，但是错误提示就不一定了，所以需要一个转换。

所以我还是喜欢这种验证器的设计，多了一个 labels 参数去优化提示。
而且这个 labels 还可以放到 Form 或者 Table 里面直接引用。

```js
let labels = { name: "姓名", age: "年龄" };
let rules = [
  ["required", "name,age"],
  ["number", "age", { min: 18 }]
];
```

这样错误信息就是 `请输入姓名`,`年龄必须大于18`。

它的流程就是先定义每一个验证器的错误信息模板，比如 required 验证错误的模板就是 "请输入{attr}"，然后会先去找该 attr 有没有对应的 label，有就用 label 填充，无就用 attr 填充。
