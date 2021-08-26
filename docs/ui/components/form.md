# Form 表单

<api-link href="components/my-form">MyFrom</api-link>  是组件库的重要组成部分，
它是一个表单项的容器，用来收纳[表单项组件](form-item.md)，提供排版、验证和数据处理功能。


## 代码示例

### 基础用法

MyFrom继承 el-form的全部参数和事件。用法与el-from有差别， el-from需要与el-form-item结合使用。
MyForm不需要显式调用，表单项组件内置了el-form-item， 不需要显式调用。

:::demo(form-1)
```html
<template>
  <my-form @submit="handleSubmit">
     <my-input name="title" label="标题"></my-input>
  </my-form>
</template>

<script>
export default {
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 初始化数据

通过设置 `model` 属性回填表单数据

:::demo(form-2)
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
     <my-input name="title" label="标题"></my-input>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        title: '回填的数据'
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 布局排版

与排版和外观相关的参数包括：
`itemWidth`、`footerAlign`、`inline`、
`labelWidth`、`labelPosition`、`size`、
`submitText`、`submittingText`、`resetText`、`footerBlock`、
`footerExpandBlock`、`footerFloat`

:::demo(form-3)
```html
<template>
  <my-form @submit="handleSubmit"
           inline
           label-width="60px"
           item-width="calc(50% - 20px)"
           footer-block
           size="small"
           footer-align="right">
     <my-checkbox name="category" label="种类" :options="categories" width="100%"></my-checkbox>
     <my-select name="fruit" label="水果" :options="fruit"></my-select>
     <my-date-picker name="date" label="日期" :props="{valueFormat:'yyyy-MM-dd'}"></my-date-picker>
     <my-input name="title" label="标题" width="100%"></my-input>
     <my-input name="content" label="内容" width="100%" :props="{type:'textarea'}"></my-input>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      fruit: [
          { label:'香蕉', value:1 },
          { label:'苹果', value:2 },
          { label:'草莓', value:3 },
          { label:'雪梨', value:4 } 
      ],
      categories: [
          { label:'种类一', value:1 },
          { label:'种类二', value:2 },
          { label:'种类三', value:3 },
          { label:'种类四', value:4 }
      ]
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 验证

可以在MyForm或表单项组件配置`rules`实现验证，用法与el-form、el-form-item一样

:::demo(form-4)
```html
<template>
  <my-form @submit="handleSubmit" :rules="rules" label-width="80px">
     <my-input name="title" label="标题"></my-input>
     <my-input name="content" label="内容"
      :props="{type:'textarea'}" 
      :rules="{required:true, message:'内容不能为空'}"></my-input>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        title: {required: true, message: '标题是必填项'}
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 可折叠

设置 `collapsible` 可以实现折叠表单项，常用在筛选条件多的时候，把次要的折叠起来，节省空间。

:::demo(form-5)
```html
<template>
  <my-form @submit="handleSubmit" collapsible>
     <my-input name="title" label="标题"></my-input>
     <my-input name="content" label="内容" :props="{type:'textarea'}" collapsible></my-input>
  </my-form>
</template>

<script>
export default {
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 字典数据

通过`dictMap`设置静态字典数据

:::demo(form-6)
```html
<template>
  <my-form @submit="handleSubmit" :dict-map="dictMap" :model="model">
     <my-radio name="radio" dict="fruit" button></my-radio>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        radio: 1
      },
      dictMap: {
        fruit: [
          { label:'香蕉', value:1 },
          { label:'苹果', value:2 },
          { label:'草莓', value:3 },
          { label:'雪梨', value:4 } 
        ]
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  },
  mounted() {
    // 测试动态修改 dictMap
    setTimeout(()=>{
        this.dictMap.fruit.push({
          label:'水蜜桃', value:5
        })
    }, 1000)

  }
}
</script>

```
:::

### 数据加载函数

:::demo(form-7)
```html
<template>
  <my-form @submit="handleSubmit" :loader="loader" :model="model">
     <my-radio name="radio" dict="fruit" button></my-radio>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        radio: 1
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    },
    loader(model, {name, dict}) {
      // 可根据表单项远程请求数据
      const fruit = [
                      { label:'香蕉', value:1 },
                      { label:'苹果', value:2 },
                      { label:'草莓', value:3 },
                      { label:'雪梨', value:4 }]
      return Promise.resolve(fruit)
    }
  }
}
</script>

```
:::

### 动态表单
:::demo
```html
<template>
    <my-form @submit="handleSubmit"
             @change="handleChange"
             :model="model"
             label-width="100px"
             inline
             footer-block>
      <div v-for="(item, index) in model.users" :key="index">
        <my-input :name="`users.${index}.name`"
                  :rules="{required:true, message:'名称不能为空'}"
                  :label="`用户名称${index+1}`"
                  width="400px">
        </my-input>
        <my-form-custom>
          <el-button @click="handleAdd(item, index)">增加</el-button>
          <el-button v-if="index>0" @click="handleRemove(item, index)">删除</el-button>
        </my-form-custom>
      </div>
    </my-form>
</template>

<script>
  import {cloneDeep} from '$ui/utils/util'

  export default {
    data() {
      return {
        model: {
          users: [
            {name: '张三'},
            {name: '李四'}
          ]
        },
        currentModel: {}
      }
    },
    methods: {
      handleChange(model) {
        this.currentModel = model
      },
      handleSubmit(model) {
        alert(JSON.stringify(model))
      },
      handleAdd() {
        this.model.users.push({name: ''})
      },
      handleRemove(item, index) {
        this.currentModel.users.splice(index, 1)
        this.model = cloneDeep(this.currentModel)
      }
    }
  }
</script>


```
:::


### 事件

支持的事件包括： `submit`、`reset`、`change`、`collapse`

:::demo(form-8)
```html
<template>
  <my-form @submit="handleSubmit" 
           @reset="handleReset" 
           @change="handleChange" 
           @collapse="handleCollapse" 
           collapsible>
     <div>change: {{model}}</div>
     <my-input name="title" label="标题"></my-input>
     <my-input name="content" label="内容" :props="{type:'textarea'}" collapsible></my-input>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: null
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    },
    handleReset() {
      alert('reset')
    },
    handleChange(model) {
      this.model = model
    },
    handleCollapse(collapsed){
      alert(`collapsed: ${collapsed}`)
    }
  }
}
</script>

```
:::


### 非事件方式获取form值

实时获取form值,与onSubmit方式最大的区别就是不用通过事件的方式获取form值<br>
注：要是想获取form里某一项值,不建议v-model方式双向绑定获取<br>
特别是绑定的值为model的，会把form给初始化,用this.$refs.ref值.currentModel

:::demo(form-9)
```html
<template>
  <my-form 
           inline
           label-width="60px"
           item-width="calc(50% - 20px)"
           footer-block
           size="small"
           ref="myForm"
           :resetText="false"
           :submitText="false"
           :model="model"
           >
     <my-checkbox name="category" label="种类" :options="categories" width="100%"></my-checkbox>
     <my-select name="fruit" label="水果" :options="fruit"></my-select>
     <my-date-picker name="date" label="日期" :props="{valueFormat:'yyyy-MM-dd'}"></my-date-picker>
     <my-input name="title" label="标题" width="100%"></my-input>
     <my-input name="content" label="内容" width="100%" :props="{type:'textarea'}"></my-input>
     <el-button type="primary" @click="getForm">form值</el-button>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      fruit: [
          { la:'香蕉', value:1 },
          { la:'苹果', value:2 },
          { la:'草莓', value:3 },
          { la:'雪梨', value:4 } 
      ],
      categories: [
          { label:'种类一', value:1 },
          { label:'种类二', value:2 },
          { label:'种类三', value:3 },
          { label:'种类四', value:4 }
      ]
    }
  },
  methods: {
    getForm() {
      alert('提交的数据：'+JSON.stringify(this.$refs.myForm.currentModel))
    }
  }
}
</script>

```
:::


### 自定义表单项

在一些特殊情况下，myForm 需要结合 element-ui 的表单组件或者其他个性化表单组件使用， 可以使用“my-form-custom” 进行表单项个性化定制。
- “my-form-custom” 内的 表单组件，不能用v-model 直接绑定 myForm 对应的“model”
- “my-form-custom” 内的 表单组件修改后，需要通过“change”方法对myForm组件内的“currentModel”进行修改

:::demo(form-10)
```html
<template>
  <my-form 
    ref="form"
    @submit="handleSubmit"
    inline
    label-width="60px"
    item-width="calc(50% - 20px)"
    footer-block
    size="small" 
    > 
    <my-input name="title" label="标题" width="100%"></my-input>
     <!-- 自定义表单 -->
    <my-form-custom label="时间范围" name="timeArea" width="100%">
      <!--ele-ui的表单组件需要单独绑定外部一个变量“timeArea”-->
      <el-date-picker
        style="width: 95%"
        v-model="timeArea"
        @change="timeAreaChange"
        type="datetimerange"
        range-separator="至"
        format="yyyy-MM-dd HH:mm:ss"
        value-format="yyyy-MM-dd HH:mm:ss"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </my-form-custom>
      
  </my-form>
</template>

<script>
import {cloneDeep} from '$ui/utils/util'
export default {
  data() {
    return { 
      timeArea: [] 
    }
  },
  methods: {
    timeAreaChange(val) {
      const currentModel = cloneDeep(this.$refs.form.currentModel)
      currentModel.timeArea = val
      this.$refs.form.currentModel = currentModel
    },
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    },
    
  }
}
</script>

```
:::

