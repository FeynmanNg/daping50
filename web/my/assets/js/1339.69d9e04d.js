(window.webpackJsonp=window.webpackJsonp||[]).push([[1339],{2318:function(t,e,n){},2604:function(t,e,n){t.exports=n.p+"assets/img/dingtalk.bbfa5d64.png"},2605:function(t,e,n){"use strict";n(2318)},371:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function o(t,e,n,o,i,r,s,u){var a,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=a):i&&(a=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(l.functional){l._injectStyles=a;var c=l.render;l.render=function(t,e){return a.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,a):[a]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},97:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])};o._withStripped=!0;var i={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=n(0),s=Object(r.a)(i,o,[],!1,null,null,null);s.options.__file="packages/button/src/button.vue";var u=s.exports;u.install=function(t){t.component(u.name,u)};e.default=u}})},4172:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ercode"},[e("div",[this._v("交流钉钉群")]),this._v(" "),e("img",{attrs:{src:n(2604),alt:""}})])}],i=n(371),r=n.n(i),s=n(0),u={name:"setup",methods:{go:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?window.open(t):location.href=t}},mounted:function(){null}};s.default.use(r.a);var a=u,l=(n(2605),n(19)),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setup"},[n("h1",{staticClass:"setup__title"},[t._t("title",[t._v("\n      MyUI 4.x\n    ")])],2),t._v(" "),n("h3",{staticClass:"setup__description"},[t._t("description",[n("div",[t._v("为Web前端开发提供基于Vue项目的一站式解决方案。")]),t._v(" "),n("div",{staticClass:"setup__buttons"},[n("el-button",{attrs:{round:"",type:"primary",icon:"el-icon-view"},on:{click:function(e){return t.go("http://newgateway.gitee.io/my-web/")}}},[t._v("演示预览\n        ")]),t._v(" "),n("el-button",{attrs:{round:"",type:"success",icon:"el-icon-video-play"},on:{click:function(e){return t.go("/my/guide/")}}},[t._v("快速上手")]),t._v(" "),n("el-button",{attrs:{round:"",icon:"el-icon-s-promotion"},on:{click:function(e){return t.go("https://gitee.com/newgateway/my",!0)}}},[t._v("源码仓库\n        ")])],1)])],2),t._v(" "),n("div",{staticClass:"copyright"},[t._t("setup__footer",[t._m(0)])],2)])}),o,!1,null,"42b96690",null);e.default=c.exports}}]);