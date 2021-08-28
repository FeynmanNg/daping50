(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{1205:function(t,e,n){},1206:function(t,e,n){},1207:function(t,e,n){"use strict";var i=n(53),r=(n(377),n(123),n(450),n(199),{name:"MyDetailItem",inject:["detail"],props:{label:String,span:{type:Number,default:1},labelAlign:{type:String,default:function(){return this.detail.labelAlign},validator:function(t){return["left","center","right"].includes(t)}},contentAlign:{type:String,default:function(){return this.detail.contentAlign},validator:function(t){return["left","center","right"].includes(t)}},labelStyle:{type:Object,default:function(){return{}}},contentStyle:{type:Object,default:function(){return{}}}},data:function(){return{currentSpan:this.span}},watch:{span:function(t){this.currentSpan=t}},created:function(){this.detail&&this.detail.items.push(this)},mounted:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},updated:function(){var t=this,e=this.detail.items.findIndex((function(e){return e===t}));this.detail.items.splice(e,1,this)},beforeDestroy:function(){var t=this,e=this.detail.items.findIndex((function(e){return e===t}));this.detail.items.splice(e,1),this.$el=null}}),s=n(18),o=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}},[this._t("label"),this._v(" "),this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(o)},1208:function(t,e,n){"use strict";var i=n(53),r=(n(55),n(123),n(85),n(199),n(56),n(57)),s=n(451),o=n.n(s),a=n(52),l=n(31),c={functional:!0,props:{child:Object,border:Boolean,colon:Boolean,type:{type:String,validator:function(t){return["label","content"].includes(t)}},layout:{type:String,validator:function(t){return["horizontal","vertical"].includes(t)}}},render:function(t,e){var n,i=e.props,r=i.child,s=i.border,c=i.colon,u=i.type,d=i.layout,f=r.label,h=r.currentSpan,p=void 0===h?1:h,m=r.key,y=r.labelAlign,v=r.contentAlign,b=r.labelStyle,g=r.contentStyle,w={class:(n={"my-detail-item__label":!0,"my-detail-item--colon":c},Object(l.a)(n,"is-".concat(y),!!y),Object(l.a)(n,"my-detail-item--no-label",!(r.$slots.label||f)),n),key:m,style:Object(a.a)({},b)},x={style:Object(a.a)({},g)};return"vertical"===d&&(w.colspan=2*p-1),s?"label"===u?t("th",o()([{},w,{attrs:{colspan:w.colspan}}]),[r.$slots.label||f]):t("td",o()([{},x,{class:["my-detail-item__content","is-".concat(v)],key:m,attrs:{colspan:2*p-1}}]),[r.$slots.default]):"vertical"===d?"content"===u?t("td",o()([{},x,{attrs:{colspan:p},class:["my-detail-item__wrap","is-".concat(v)],key:m}]),[t("span",{class:"my-detail-item__content"},[r.$slots.default])]):t("td",{attrs:{colspan:p},class:["my-detail-item__wrap","is-".concat(v)],key:m},[t("span",{style:Object(a.a)({},b),class:{"my-detail-item__label":!0,"my-detail-item--colon":c}},[r.$slots.label||f])]):t("td",{attrs:{colspan:p},class:"my-detail-item__wrap",key:m},[t("span",o()([{},w]),[r.$slots.label||f]),t("span",o()([{},x,{class:"my-detail-item__content"}]),[r.$slots.default])])}},u=n(608),d={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},f={name:"MyDetail",components:{Col:c},provide:function(){return{detail:this}},props:{title:String,border:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default",validator:function(t){return["default","middle","small"].includes(t)}},layout:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].includes(t)}},colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}}},data:function(){return{items:[],screens:{}}},computed:{classes:function(){return["my-detail","is-".concat(this.size||"default"),"is-".concat(this.layout),{"is-border":this.border}]}},methods:{getColumn:function(){if("object"===Object(r.a)(this.column))for(var t=0;t<u.b.length;t++){var e=u.b[t];if(this.screens[e])return this.column[e]||d[e]}return"number"==typeof this.column?this.column:3},generateChildrenRows:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=[],i=null,r=0;return t.forEach((function(s,o){i||(r=e,i=[],n.push(i)),o===t.length-1&&(s.currentSpan=r);var a=s.currentSpan,l=void 0===a?1:a;i.push(s),(r-=l)<=0&&(i=null)})),n},renderRow:function(t,e){var n=this,i=this.$createElement,r=[],s=[];return t.forEach((function(t,e){r.push(n.renderCol(t,"label",e)),"vertical"===n.layout?s.push(n.renderCol(t,"content",e)):n.border&&r.push(n.renderCol(t,"content",e))})),"vertical"===this.layout?[i("tr",{class:"my-detail__row",key:"label-".concat(e)},[r]),i("tr",{class:"my-detail__row",key:"content-".concat(e)},[s])]:i("tr",{class:"my-detail__row",key:e},[r])},renderCol:function(t,e,n){return(0,this.$createElement)(c,{attrs:{child:t,border:this.border,colon:this.colon,type:e,layout:this.layout},key:t.key||n})}},render:function(){var t=this,e=arguments[0],n=this.generateChildrenRows(this.items,this.getColumn()),i=this.$slots.title||this.title,r=i?e("div",{class:"my-detail__title"},[i]):null;return e("div",{class:this.classes},[r,e("div",{class:"my-detail__view"},[e("table",[e("tbody",[n.map((function(e,n){return t.renderRow(e,n)}))])])]),this.$slots.default])},mounted:function(){var t=this;this.token=u.a.on((function(e){"object"===Object(r.a)(t.column)&&(t.screens=e)}))},beforeDestroy:function(){u.a.off(this.token)}},h=n(18),p=Object(h.a)(f,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(p)},3164:function(t,e,n){"use strict";n.r(e);n(1205),n(124);var i=n(1207),r=(n(1206),n(1208)),s=n(0),o={components:{MyDetail:r.a,MyDetailItem:i.a}};s.default.use(r.a),s.default.use(i.a);var a=o,l=n(18),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-origin"},[n("my-detail",{attrs:{title:"用户信息"}},[n("my-detail-item",{attrs:{label:"名称"}},[t._v("张三")]),t._v(" "),n("my-detail-item",{attrs:{label:"电话"}},[t._v("020-88888888")]),t._v(" "),n("my-detail-item",{attrs:{label:"籍贯"}},[t._v("广东 广州")]),t._v(" "),n("my-detail-item",{attrs:{label:"备注"}},[t._v("无")]),t._v(" "),n("my-detail-item",{attrs:{label:"地址"}},[t._v("广东省广州市越秀区东风东路")])],1)],1)}),[],!1,null,null,null);e.default=c.exports},377:function(t,e,n){"use strict";var i=n(1),r=n(35).findIndex,s=n(126),o=n(20),a=!0,l=o("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),i({target:"Array",proto:!0,forced:a||!l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},450:function(t,e,n){"use strict";var i=n(1),r=n(128),s=n(58),o=n(19),a=n(16),l=n(131),c=n(64),u=n(63),d=n(20),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min;i({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var n,i,u,d,f,h,y=a(this),v=o(y.length),b=r(t,v),g=arguments.length;if(0===g?n=i=0:1===g?(n=0,i=v-b):(n=g-2,i=m(p(s(e),0),v-b)),v+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=l(y,i),d=0;d<i;d++)(f=b+d)in y&&c(u,d,y[f]);if(u.length=i,n<i){for(d=b;d<v-i;d++)h=d+n,(f=d+i)in y?y[h]=y[f]:delete y[h];for(d=v;d>v-i+n;d--)delete y[d-1]}else if(n>i)for(d=v-i;d>b;d--)h=d+n-1,(f=d+i-1)in y?y[h]=y[f]:delete y[h];for(d=0;d<n;d++)y[d+b]=arguments[d+2];return y.length=v-i+n,u}})},451:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}var r=["attrs","props","domProps"],s=["class","style","directives"],o=["on","nativeOn"],a=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==r.indexOf(n))t[n]=i({},t[n],e[n]);else if(-1!==s.indexOf(n)){var l=t[n]instanceof Array?t[n]:[t[n]],c=e[n]instanceof Array?e[n]:[e[n]];t[n]=l.concat(c)}else if(-1!==o.indexOf(n))for(var u in e[n])if(t[n][u]){var d=t[n][u]instanceof Array?t[n][u]:[t[n][u]],f=e[n][u]instanceof Array?e[n][u]:[e[n][u]];t[n][u]=d.concat(f)}else t[n][u]=e[n][u];else if("hook"==n)for(var h in e[n])t[n][h]=t[n][h]?a(t[n][h],e[n][h]):e[n][h];else t[n]=e[n];else t[n]=e[n];return t}),{})}},520:function(t,e){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,i=t.length;n<i&&!1!==e(t[n],n);n++);}}},608:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n(21),n(55),n(85),n(89),n(7),n(88),n(56);var i,r=n(31),s=n(52);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(617)}var o=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},l=[],c=-1,u={},d={fire:function(t){return u=t,!(l.length<1)&&(l.forEach((function(t){t.func(u)})),!0)},on:function(t){0===l.length&&this.register();var e=(++c).toString();return l.push({token:e,func:t}),t(u),e},off:function(t){0===(l=l.filter((function(e){return e.token!==t}))).length&&this.unregister()},register:function(){var t=this;Object.keys(a).forEach((function(e){i.register(a[e],{match:function(){var n=Object(s.a)(Object(s.a)({},u),{},Object(r.a)({},e,!0));t.fire(n)},unmatch:function(){var n=Object(s.a)(Object(s.a)({},u),{},Object(r.a)({},e,!1));t.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(a).map((function(t){return i.unregister(a[t])}))}};e.a=d},617:function(t,e,n){var i=n(618);t.exports=new i},618:function(t,e,n){var i=n(619),r=n(520),s=r.each,o=r.isFunction,a=r.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(t,e,n){var r=this.queries,l=n&&this.browserIsIncapable;return r[t]||(r[t]=new i(t,l)),o(e)&&(e={match:e}),a(e)||(e=[e]),s(e,(function(e){o(e)&&(e={match:e}),r[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=l},619:function(t,e,n){var i=n(620),r=n(520).each;function s(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}s.prototype={constuctor:s,addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;r(e,(function(n,i){if(n.equals(t))return n.destroy(),!e.splice(i,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";r(this.handlers,(function(e){e[t]()}))}},t.exports=s},620:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n}}]);