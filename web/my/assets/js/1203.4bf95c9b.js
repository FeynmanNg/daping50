(window.webpackJsonp=window.webpackJsonp||[]).push([[1203],{3621:function(t,e,n){"use strict";n.r(e);n(818),n(368);var a=n(647),i=n.n(a),o=(n(819),n(648)),s=n.n(o),c=n(0);c.default.use(s.a),c.default.use(i.a);var l={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,tag:"家"},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333,tag:"公司"},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333,tag:"家"},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333,tag:"公司"}]}},methods:{indexMethod:function(t){return 2*t}}},r=n(20),d=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[e("el-table-column",{attrs:{type:"index",index:this.indexMethod}}),this._v(" "),e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)}),[],!1,null,null,null);e.default=d.exports},368:function(t,e,n){},373:function(t,e,n){"use strict";function a(t,e,n){this.$children.forEach((function(i){i.$options.componentName===t?i.$emit.apply(i,[e].concat(n)):a.apply(i,[t,e].concat([n]))}))}e.__esModule=!0,e.default={methods:{dispatch:function(t,e,n){for(var a=this.$parent||this.$root,i=a.$options.componentName;a&&(!i||i!==t);)(a=a.$parent)&&(i=a.$options.componentName);a&&a.$emit.apply(a,[e].concat(n))},broadcast:function(t,e,n){a.call(this,t,e,n)}}}},534:function(t,e,n){"use strict";e.__esModule=!0;n(371);e.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},818:function(t,e,n){},819:function(t,e,n){}}]);