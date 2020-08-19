# 数字验证

## 基本用法
- 年龄1没有使用.number修饰符
- 年龄2使用了.number修饰符
<number-basic />

<<< @/docs/.vuepress/components/number/basic.vue

## 关联比较
当业务场景里面需要做到某个字段不能大于或小于另一个字段的时候，可以直接将max/min指定为要对比的字段名称即可

- 单次数值不得大于每天数值
- 每天数值也不能小于单次数值

<number-reference />
<<< @/docs/.vuepress/components/number/reference.vue
