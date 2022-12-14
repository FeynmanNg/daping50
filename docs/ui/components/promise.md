# Promise 异步状态控件

## 何时使用

在需要对异步请求的各个状态展示对应视图时使用, 文档
<api-link href="components/my-promise">MyPromise</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <div>
    数据总量：
    <my-promise :promise="createPromise()">
      <template v-slot:pending>正在拼命加载中...</template>
      <template v-slot="{total}">{{total}}条</template>
    </my-promise>
  </div>
</template>

<script>
import {MyPromise} from '$ui'
export default {
  components: {
    MyPromise
  },
  methods: {
    createPromise() {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({ total: 12324 })
        }, 2000)
         
      })
    }
  }
}
</script>

```
:::

### 定义容器标签
