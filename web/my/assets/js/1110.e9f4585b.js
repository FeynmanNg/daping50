(window.webpackJsonp=window.webpackJsonp||[]).push([[1110],{1194:function(n,t,e){},2344:function(n,t,e){},2657:function(n,t,e){"use strict";e(2344)},3073:function(n,t,e){"use strict";e.r(t);e(1194),e(368);var i=e(431),u=e.n(i),s=(e(682),e(381)),a=e.n(s),l=(e(411),e(376)),o=e.n(l),c=(e(468),e(0));c.default.use(o.a),c.default.use(a.a),c.default.use(u.a);var r={data:function(){return{dynamicTags:["标签一","标签二","标签三"],inputVisible:!1,inputValue:""}},methods:{handleClose:function(n){this.dynamicTags.splice(this.dynamicTags.indexOf(n),1)},showInput:function(){var n=this;this.inputVisible=!0,this.$nextTick((function(t){n.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var n=this.inputValue;n&&this.dynamicTags.push(n),this.inputVisible=!1,this.inputValue=""}}},f=(e(2657),e(20)),p=Object(f.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._l(n.dynamicTags,(function(t){return e("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(e){return n.handleClose(t)}}},[n._v("\n    "+n._s(t)+"\n  ")])})),n._v(" "),n.inputVisible?e("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:n.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.handleInputConfirm(t)}},model:{value:n.inputValue,callback:function(t){n.inputValue=t},expression:"inputValue"}}):e("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:n.showInput}},[n._v("+ New Tag")])],2)}),[],!1,null,null,null);t.default=p.exports},368:function(n,t,e){},411:function(n,t,e){},682:function(n,t,e){}}]);