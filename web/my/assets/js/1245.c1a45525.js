(window.webpackJsonp=window.webpackJsonp||[]).push([[1245],{1702:function(t,e,a){},2391:function(t,e,a){},2708:function(t,e,a){"use strict";a(2391)},3188:function(t,e,a){"use strict";a.r(e);a(1702),a(364);var l=a(1806),n=a.n(l),o=(a(402),a(371)),s=a.n(o),r=a(0),c={data:function(){this.$createElement;return{data:function(t){for(var e=[],a=1;a<=15;a++)e.push({key:a,label:"备选项 ".concat(a),disabled:a%4==0});return e}(),value:[1],value4:[1],renderFunc:function(t,e){return t("span",[e.key," - ",e.label])}}},methods:{handleChange:function(t,e,a){console.log(t,e,a)}}};r.default.use(s.a),r.default.use(n.a);var i=c,u=(a(2708),a(19)),f=Object(u.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{"text-align":"center",margin:"0 0 20px"}},[t._v("使用 render-content 自定义数据项")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":t.renderFunc,titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:t.data},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-button",{staticClass:"transfer-footer",attrs:{slot:"left-footer",size:"small"},slot:"left-footer"},[t._v("操作")]),t._v(" "),a("el-button",{staticClass:"transfer-footer",attrs:{slot:"right-footer",size:"small"},slot:"right-footer"},[t._v("操作")])],1)],1),t._v(" "),a("p",{staticStyle:{"text-align":"center",margin:"50px 0 20px"}},[t._v("使用 scoped-slot 自定义数据项")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:t.data},on:{change:t.handleChange},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.option;return a("span",{},[t._v(t._s(l.key)+" - "+t._s(l.label))])}}]),model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}},[t._v(" "),a("el-button",{staticClass:"transfer-footer",attrs:{slot:"left-footer",size:"small"},slot:"left-footer"},[t._v("操作")]),t._v(" "),a("el-button",{staticClass:"transfer-footer",attrs:{slot:"right-footer",size:"small"},slot:"right-footer"},[t._v("操作")])],1)],1)])}),[],!1,null,null,null);e.default=f.exports},364:function(t,e,a){},402:function(t,e,a){}}]);