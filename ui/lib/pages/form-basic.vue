---
title: 基础表单
---
<template>
  <my-wrapper title="基础表单">
    <template v-slot:extra>
      表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
    </template>
    <my-panel theme="border-top" title="发布文章" size="large" shadow="never" :border="false">
      <my-form label-width="100px"
               :model="form"
               :rules="rules"
               @submit="handleSubmit">
        <my-input label="标题" name="title" placeholder="给目标起个名字"></my-input>
        <my-date-picker label="起止日期" name="range" :props="{
          type: 'daterange',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期'
        }"></my-date-picker>
        <my-input label="目标描述" name="info" :props="{type:'textarea',rows:5}"></my-input>
        <my-input label="衡量标准" name="standard" :props="{type:'textarea'}"></my-input>
        <my-select label="客户" name="customer" :props="{multiple:true}" :loader="loader"></my-select>
        <my-select label="邀评人" name="commenter" :loader="loader"></my-select>
        <my-input-number label="权重" name="weight" width="300px"
                         :props="{controlsPosition:'right',min:1, max:10}"></my-input-number>
        <my-radio label="目标公开" name="opening" dict="option" :loader="loader">
        </my-radio>
      </my-form>
    </my-panel>
  </my-wrapper>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          opening: 1
        },
        rules: {
          title: {required: true, message: '标题位必填项'}
        }
      }
    },
    methods: {
      loader(model, {name, dict}) {
        const options = [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3}
        ]
        return Promise.resolve(options)
      },
      handleSubmit(model) {
        this.$message.success('提交成功')
      }
    }
  }
</script>

