(window.webpackJsonp=window.webpackJsonp||[]).push([[1312],{1226:function(t,e,n){},3235:function(t,e,n){"use strict";n.r(e);n(1226),n(365);var i=n(429),o=n.n(i);n(0).default.use(o.a);var r={},s=n(19),l=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-tag",{attrs:{closable:""}},[this._v("默认标签")]),this._v(" "),e("el-tag",{attrs:{size:"medium",closable:""}},[this._v("中等标签")]),this._v(" "),e("el-tag",{attrs:{size:"small",closable:""}},[this._v("小型标签")]),this._v(" "),e("el-tag",{attrs:{size:"mini",closable:""}},[this._v("超小标签")])],1)}),[],!1,null,null,null);e.default=l.exports},365:function(t,e,n){},429:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=124)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,l){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},124:function(t,e,n){"use strict";n.r(e);var i={name:"ElTag",props:{text:String,closable:Boolean,type:String,hit:Boolean,disableTransitions:Boolean,color:String,size:String,effect:{type:String,default:"light",validator:function(t){return-1!==["dark","light","plain"].indexOf(t)}}},methods:{handleClose:function(t){t.stopPropagation(),this.$emit("close",t)},handleClick:function(t){this.$emit("click",t)}},computed:{tagSize:function(){return this.size||(this.$ELEMENT||{}).size}},render:function(t){var e=this.type,n=this.tagSize,i=this.hit,o=this.effect,r=t("span",{class:["el-tag",e?"el-tag--"+e:"",n?"el-tag--"+n:"",o?"el-tag--"+o:"",i&&"is-hit"],style:{backgroundColor:this.color},on:{click:this.handleClick}},[this.$slots.default,this.closable&&t("i",{class:"el-tag__close el-icon-close",on:{click:this.handleClose}})]);return this.disableTransitions?r:t("transition",{attrs:{name:"el-zoom-in-center"}},[r])}},o=n(0),r=Object(o.a)(i,void 0,void 0,!1,null,null,null);r.options.__file="packages/tag/src/tag.vue";var s=r.exports;s.install=function(t){t.component(s.name,s)};e.default=s}})}}]);