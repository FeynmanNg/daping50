(window.webpackJsonp=window.webpackJsonp||[]).push([[1169],{1703:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(51),n(32),n(575),n(204);function o(t,e,n){if(!t)return new Date;var o="string"==typeof t?new Date(t.replace(/-/g,"/")):t,r={y:0,M:0,d:0,h:0,m:0,s:0};Object.assign(r,n||{});var i={"M+":(o=new Date(r.y+o.getFullYear(),r.M+o.getMonth(),r.d+o.getDate(),r.h+o.getHours(),r.m+o.getMinutes(),r.s+o.getSeconds())).getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),S:o.getMilliseconds()};if(e){for(var u in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,4===RegExp.$1.length?o.getFullYear():(o.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+u+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[u]:("00"+i[u]).substr((""+i[u]).length)));return e}return o}},2260:function(t,e,n){},2275:function(t,e,n){"use strict";var o=n(47),r=n(371),i=n.n(r),u=(n(9),n(13),n(17),n(0)),a=n(637),c=n(1703),s={name:"MyCapture",props:{dom:{type:HTMLElement,default:function(){return document.body}},options:{type:Object},beforeCapture:{type:Function,default:function(){return Promise.resolve()}}},data:function(){return{h2c:null}},computed:{h2cOpt:function(){return Object.assign({logging:!1,allowTain:!0,useCORS:!0},this.options||{})}},methods:{capture:function(){var t=this;this.beforeCapture().then((function(){t.$emit("on-capture",t.dom),t.h2c?t._renderImg(t.h2c):n.e(1842).then(n.t.bind(null,4157,7)).then((function(e){e&&(t.h2c=e.default||e,t._renderImg(t.h2c))})).catch((function(e){console.log(e),t.$alert("控件加载失败")}))}))},_renderImg:function(t){var e=this,n=this.h2cOpt;t(this.dom,n).then((function(t){var n=t.toDataURL(),o=Object(c.a)(new Date,"yyyyMMddhhmmss");Object(a.c)(null,"".concat(o,".png"),n),e.$emit("on-output",n)})).catch((function(t){e.$emit("on-failed",t)}))}}};u.default.use(i.a);var l=s,f=n(19),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"xdh-capture",on:{click:function(e){return e.preventDefault(),t.capture(e)}}},[t._t("button",[n("el-button",{attrs:{circle:"",icon:"el-icon-view"}})])],2)}),[],!1,null,null,null).exports;e.a=Object(o.a)(d)},371:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,u,a){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(s.functional){s._injectStyles=c;var l=s.render;s.render=function(t,e){return c.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:s}}n.d(e,"a",(function(){return o}))},97:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])};o._withStripped=!0;var r={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},i=n(0),u=Object(i.a)(r,o,[],!1,null,null,null);u.options.__file="packages/button/src/button.vue";var a=u.exports;a.install=function(t){t.component(a.name,a)};e.default=a}})},3848:function(t,e,n){"use strict";n.r(e);n(2260),n(117);var o=n(2275);n(0).default.use(o.a);var r={},i=n(19),u=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(" hello world ")]),this._v(" "),e("p",[this._v("capture控件默认以document.body作为目标dom进行截图")]),this._v(" "),e("my-capture")],1)}),[],!1,null,"1bf7bd28",null);e.default=u.exports},492:function(t,e,n){"use strict";var o=n(35),r=n(8),i=n(3),u=n(11),a=i("species");t.exports=function(t){var e=o(t),n=r.f;u&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},575:function(t,e,n){var o=n(11),r=n(4),i=n(125),u=n(215),a=n(8).f,c=n(56).f,s=n(212),l=n(131),f=n(220),d=n(23),p=n(1),g=n(52).set,h=n(492),b=n(3)("match"),m=r.RegExp,v=m.prototype,_=/a/g,y=/a/g,x=new m(_)!==_,S=f.UNSUPPORTED_Y;if(o&&i("RegExp",!x||S||p((function(){return y[b]=!1,m(_)!=_||m(y)==y||"/a/i"!=m(_,"i")})))){for(var E=function(t,e){var n,o=this instanceof E,r=s(t),i=void 0===e;if(!o&&r&&t.constructor===E&&i)return t;x?r&&!i&&(t=t.source):t instanceof E&&(i&&(e=l.call(t)),t=t.source),S&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=u(x?new m(t,e):m(t,e),o?this:v,E);return S&&n&&g(a,{sticky:n}),a},O=function(t){t in E||a(E,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=c(m),$=0;w.length>$;)O(w[$++]);v.constructor=E,E.prototype=v,d(r,"RegExp",E)}h("RegExp")},637:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));n(788),n(9),n(13),n(17),n(75),n(121),n(30);var o={jpg:"data:image/jpg;base64,",png:"data:image/png;base64,",csv:"data:text/csv;charset=utf-8,"};function r(t,e,n){var r=document.createElement("a");r.download=e,r.href=null===t?n:(o[t]||"")+n,r.click()}function i(t,e){var n=document.createElement("a");n.download=e,n.href=t,n.click()}function u(t,e){var n=new FileReader;n.onload=function(t){i(t.target.result,e)},n.readAsDataURL(t)}}}]);