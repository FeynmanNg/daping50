# Table 表格

在el-table的基础上扩展功能，增加了通过列配置、工具区插槽、分页、滚动加载、虚拟列表、拖拽排序等功能。
 <api-link href="components/my-table">MyTable</api-link>
 
## 代码示例

### 基础用法

完全兼容el-table的参数、插槽、事件和方法

:::demo(table-1)
```html
<template>
    <div class="table-origin">
      <my-table :columns="columns" :data="list"></my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    }
  },
  created() {
    this.list = this.mock(5).list
  }
}
</script>

```
:::

### 自定义列和列头

:::demo(table-2)
```html
<template>
    <div class="table-origin">
      <my-table :columns="columns" :data="list">
         
         <template v-slot:name="{row}">
           <el-tag size="small">{{row.name}}</el-tag>
         </template>
         
         <template v-slot:action="{row}">
           <el-button size="small">详情</el-button>
           <el-button size="small" type="primary">编辑</el-button>
           <el-button size="small" type="warning">删除</el-button>
         </template>
         
         <template v-slot:date.header="{column}">
             <el-tag size="small">{{column.label}}</el-tag>
         </template>
         
      </my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id', showOverflowTooltip: true},
          { label: '年龄', prop: 'age',sortable: true},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'},
          { label: '操作', prop: 'action', width: 230}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    }
  },
  created() {
    this.list = this.mock(5).list
  }
}
</script>

```
:::

### 开启列筛选

设置 column-filter 开启列筛选。
仅对普通列（非type的特殊类型及设置了prop的列）进行筛选
columns的项对象display默认为true，支持以下值：

 - true 默认值，初始化显示
 - false 初始不显示
 - always 一直显示，筛选器禁用

:::demo
```html
<template>
  <div class="table-origin">
    <my-table :columns="columns"
              :loader="loader"
              border
              column-filter
              :page="1"
              :page-size="5"></my-table>
  </div>
</template>

<script>
  import Mock from 'mockjs'

  export default {
    data() {
      return {
        columns: [
          {
            type: 'index',
            label: '#'
          },
          {
            label: '姓名',
            prop: 'name',
            display: 'always'
          },
          {
            label: '身份证',
            prop: 'id'
          },
          {
            label: '年龄',
            prop: 'age',
            display: false
          },
          {
            label: '地址',
            prop: 'address',
            display: false
          },
          {
            label: '日期',
            prop: 'date',
            display: false
          }
        ]
      }
    },
    methods: {
      mock(limit) {
        return Mock.mock({
          [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
          ]
        })
      },
      loader(page, pageSize) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              total: 1000,
              list: this.mock(pageSize).list
            })
          }, 1000)
        })
      }
    }
  }
</script>


```
:::

### 开启列筛选2
- 设置 column-filter 开启列筛选。
- 设置 filter-confirm 开启筛选确认功能（filter功能显示确认按钮）
- 使用slot=filter-confirm 插槽自定义提交按钮（按业务需求覆盖filter功能上的确认按钮）
:::demo
```html
<template>
  <div class="table-origin">
    <my-table :columns="columns"
              :loader="loader"
              border
              column-filter
              filter-confirm
              :page="1"
              :page-size="5"
              @column-change="colChangeHandle"
      >
      <div slot="filter-confirm" style="text-align: center">
        <el-button type="text" :disabled="isColChanged" @click="submitCloChange">
          提交
          <span v-show="!isColChanged">*</span>
        </el-button>  
      </div>        
    </my-table>
  </div>
</template>

<script>
import Mock from 'mockjs'
import {isEqual} from '$ui/utils/util'
const Col = [
  {
    type: 'index',
    label: '#'
  },
  {
    label: '姓名',
    prop: 'name',
    display: 'always'
  },
  {
    label: '身份证',
    prop: 'id'
  },
  {
    label: '年龄',
    prop: 'age',
    display: false
  },
  {
    label: '地址',
    prop: 'address',
    display: false
  },
  {
    label: '日期',
    prop: 'date',
    display: false
  }
]
export default {
  data() {
    return {
      columns: Col,
      oriShowCols: [],
      showCols: [] 
    }
  },
  computed: {
    isColChanged() {
      return isEqual(this.oriShowCols, this.showCols)
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            id: '@id',
            name: '@cname',
            'age|10-100': 18,
            address: '@ctitle',
            date: '@date(yyyy-MM-dd)'
          }
        ]
      })
    },
    loader(page, pageSize) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            total: 1000,
            list: this.mock(pageSize).list
          })
        }, 1000)
      })
    },
    getShowColProps() {
      return Col.filter((col) => {
        if (!col.prop || col.type) return false
        return col.display !== false
      }).map(col => col.prop)
    },
    colChangeHandle(showCols) {
      this.showCols = showCols
    },
    submitCloChange() {
      this.$alert(`提交列表更改: ${JSON.stringify(this.showCols)}`).then(() => {
        this.oriShowCols = [...this.showCols]
      })
    }  
  },
  mounted() {
    this.oriShowCols = this.getShowColProps()
    this.showCols = this.getShowColProps()
  }
}
</script>
```
:::demo


### 定义工具区

:::demo(table-3)
```html
<template>
    <div class="table-origin">
      <my-table toolbar 
                header-background
                border
                title="表格标题文本"
                :columns="columns" 
                :data="list">
         <template v-slot:actions>
            <el-button type="primary" size="medium">新增</el-button>
            <el-button-group size="medium">
                <el-button>导入</el-button>
                <el-button>移动</el-button>
                <el-button>导出</el-button>
            </el-button-group>
            <el-button size="medium" type="warning">删除</el-button>
         </template>       
      </my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    }
  },
  created() {
    this.list = this.mock(5).list
  }
}
</script>

```
:::

### 页码分页

:::demo(table-4)
```html
<template>
    <div class="table-origin">
      <my-table :columns="columns" :loader="loader" :page="2" :page-size="5"></my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader(page, pageSize) {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 1000,
             list: this.mock(pageSize).list
          })
        }, 1000)
      })
    }
  }
}
</script>

```
:::

### 滚动分页

:::demo(table-5)
```html
<template>
    <div class="table-origin" style="height: 400px">
      <my-table fit mode="scroll" :columns="columns" :loader="loader"></my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader(page, pageSize) {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 50,
             list: this.mock(pageSize).list
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::

### 虚拟列表

:::demo(table-6)
```html
<template>
    <div class="table-origin" style="height: 400px">
      <my-table fit mode="virtual" :columns="columns" :loader="loader"></my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader() {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 1000,
             list: this.mock(1000).list
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::

### 拖动行与列

:::demo(table-7)

```html
<template>
    <div class="table-origin" style="height: 400px">
      <my-table fit
        :columns="columns" 
        :loader="loader"
        :pagination="null"
        column-sortable
        row-sortable
        column-filter
        @column-change="colFilterHandle"
        @on-column-sort="colSortHandle"
        @on-row-sort="rowSortHandle"
      ></my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
        { label: '姓名', prop: 'name'},
        { label: '身份证', prop: 'id'},
        { label: '年龄', prop: 'age'},
        { label: '地址', prop: 'address'}, 
        { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    colFilterHandle(val) {
      console.log('onColFilter', val)
    },
    colSortHandle(e, showCol, allCol) {
      console.log('onColSort', e, showCol, allCol)
    },
    rowSortHandle(e, showRow, allRow) {
      console.log('onRowSort', showRow, allRow)
    },
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader() {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 10,
             list: this.mock(10).list
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::

### 多级表头

:::demo(table-8)

```html
<template>
    <div class="table-origin" style="height: 400px">
      <my-table :columns="columns" :loader="loader" fit> 
        <template v-slot:other="scope">
          <el-table-column :prop="scope.column.prop" :label="scope.column.label"> 
            <el-table-column  v-for="subCol in scope.column.children"
              :key="subCol.prop"
              :prop="subCol.prop"
              :label="subCol.label"
              > 
            </el-table-column>
          </el-table-column>
        </template>
      </my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label: '#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          
          { 
            label: '其他', 
            prop: 'other', 
            children: [
              { label: '其他1', prop: 'other1' },
              { label: '其他2', prop: 'other2' }
            ]
          },
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: [
        // {
        //   name: 'a1',
        //   id: 'a2',
        //   age: 'a3',
        //   address: 'a4',
        //   date: 'a5',
        //   other1: 'a11', 
        //   other2: 'a21' 
        // }
      ]  
    }
  },
  methods: {
     
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)',
              other1: '@ctitle',
              other2: '@ctitle'
            }
        ]
      })
    },
    loader() {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 10,
             list: this.mock(10).list
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::

