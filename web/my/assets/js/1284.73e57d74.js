(window.webpackJsonp=window.webpackJsonp||[]).push([[1284],{3540:function(t,e,a){"use strict";a.r(e);var n=a(565),i=a.n(n),o=a(566),s=a.n(o),c=a(0);c.default.use(s.a),c.default.use(i.a);var l={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333,tag:"家"},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333,tag:"公司"},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333,tag:"家"},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333,tag:"公司"}]}},methods:{indexMethod:function(t){return 2*t}}},r=a(18),d=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[e("el-table-column",{attrs:{type:"index",index:this.indexMethod}}),this._v(" "),e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)}),[],!1,null,null,null);e.default=d.exports},366:function(t,e,a){"use strict";function n(t,e,a){this.$children.forEach((function(i){i.$options.componentName===t?i.$emit.apply(i,[e].concat(a)):n.apply(i,[t,e].concat([a]))}))}e.__esModule=!0,e.default={methods:{dispatch:function(t,e,a){for(var n=this.$parent||this.$root,i=n.$options.componentName;n&&(!i||i!==t);)(n=n.$parent)&&(i=n.$options.componentName);n&&n.$emit.apply(n,[e].concat(a))},broadcast:function(t,e,a){n.call(this,t,e,a)}}}},514:function(t,e,a){"use strict";e.__esModule=!0;a(361);e.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}}}]);