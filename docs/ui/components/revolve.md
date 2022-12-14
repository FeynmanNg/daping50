# 3D旋转

常用作人物额旋转展示。
组件文档 <api-link href="components/my-revolve">MyRevolve</api-link>

## 基本用法

:::demo
```html
<template>
  <div class="box">
    <my-revolve :data="data" :width="400" :height="500" auto></my-revolve>
  </div>
</template>

<script>
  import men from '$ui/components/my-revolve/men.js'
  export default {
    data() {
      return {
        data: men
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    background: #0a51a3;
    text-align: center;
  }
</style>

```
:::

## 停顿

可以设置转动几帧后，暂停等待指定时间在继续

:::demo
```html
<template>
  <div class="box">
    <my-revolve :data="data" :step="6" :wait="2000" auto></my-revolve>
  </div>
</template>

<script>
  import men from '$ui/components/my-revolve/men.js'
  export default {
    data() {
      return {
        data: men
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    background: #0a51a3;
    text-align: center;
  }
</style>

```
:::

## 仅鼠标控制转动


:::demo
```html
<template>
  <div class="box">
    <my-revolve :data="data" manual></my-revolve>
  </div>
</template>

<script>
  import men from '$ui/components/my-revolve/men.js'
  export default {
    data() {
      return {
        data: men
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    background: #0a51a3;
    text-align: center;
  }
</style>

```
:::
