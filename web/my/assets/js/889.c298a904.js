(window.webpackJsonp=window.webpackJsonp||[]).push([[889],{3458:function(t,e,n){"use strict";n.r(e);var i=n(455),r=n(532),s=n(0);s.default.use(r.a),s.default.use(i.a);var a={},o=n(19),c=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-loading")],1)],1)}),[],!1,null,null,null);e.default=c.exports},367:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,s=i.length;r<s;r++){var a=i[r];a&&(t.classList?t.classList.add(a):h(t,a)||(n+=" "+a))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,s=n.length;r<s;r++){var a=n[r];a&&(t.classList?t.classList.remove(a):h(t,a)&&(i=i.replace(" "+a+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var s in n)n.hasOwnProperty(s)&&t(e,s,n[s]);else"opacity"===(n=u(n))&&l<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,s=n(0);var a=((r=s)&&r.__esModule?r:{default:r}).default.prototype.$isServer,o=/([\:\-\_]+(.))/g,c=/^moz([A-Z])/,l=a?0:Number(document.documentMode),u=function(t){return t.replace(o,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(c,"Moz$1")},d=e.on=!a&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},f=e.off=!a&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){d(t,e,(function i(){n&&n.apply(this,arguments),f(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var m=e.getStyle=l<9?function(t,e){if(!a){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!a){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!a)return m(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!a){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(a||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},385:function(t,e,n){"use strict";var i=n(2),r=n(49).findIndex,s=n(120),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},412:function(t,e,n){"use strict";var i=n(47),r=n(76),s=n(46),a=(n(201),n(116),n(385),n(202),n(31),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,n=this.layoutVm,i=this.free;if(n&&!i){var r=n.gap,s=n.direction,a=n.total,o=n.boxCount,c=n.boxes,l=c.findIndex((function(e){return e===t})),u=o-1,d="(100% - ".concat(r*u,"px) * ").concat(e," / ").concat(a),f=c.filter((function(t,e){return e<l})).reduce((function(t,e){return t+e.weight}),0),h="(100% - ".concat(r*u,"px) * ").concat(f," / ").concat(a," +  ").concat(l*r,"px");return"row"===s?{height:"calc(".concat(d,")"),top:"calc(".concat(h,")")}:{width:"calc(".concat(d,")"),left:"calc(".concat(h,")")}}return null},styles:function(){var t=this.inline,e=this.margin,n=this.padding,i=this.position,r=this.fit,a=this.width,o=this.height,c=this.left,l=this.top,u=this.right,d=this.bottom,f=this.zIndex,h=this.zoom,m=this.scale,p=this.xAlign,g=this.yAlign,y=this.defaultWidth,b=this.defaultHeight;return Object(s.a)({position:i?"absolute":"relative",width:r?"100%":a||y,height:r?"100%":o||b,zoom:h,left:p?null:c,top:g?null:l,right:p?null:u,bottom:g?null:d,transform:m?"scale(".concat(m,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:n,zIndex:f},this.layoutSize)},classes:function(){var t;return t={},Object(r.a)(t,"is-".concat(this.xAlign),!!this.xAlign),Object(r.a)(t,"is-".concat(this.yAlign),!!this.yAlign),Object(r.a)(t,"is-shadow",this.shadow),Object(r.a)(t,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(r.a)(t,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),t},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),o=(n(521),n(19)),c=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},442:function(t,e,n){},452:function(t,e,n){},455:function(t,e,n){"use strict";var i=n(47),r=n(119),s=(n(201),n(202),n(369)),a=n(367),o=n(118),c=n(46),l={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(c.a)(Object(c.a)({},l),this.config)}}},d=n(503),f={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(r.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,n=t.clientHeight;e&&n&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=n/this.height))},fullScreen:function(){var t=this.getTarget();Object(d.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(d.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(a.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(o.c)(this.resize,100),Object(s.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(d.c)()},beforeDestroy:function(){this.proxyResize&&Object(s.removeResizeListener)(this.warpper,this.proxyResize),Object(a.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},h=(n(510),n(19)),m=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?n("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?n("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):n("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(m)},503:function(t,e,n){"use strict";function i(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function r(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function s(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return s}))},510:function(t,e,n){"use strict";n(442)},515:function(t,e,n){},521:function(t,e,n){"use strict";n(452)},532:function(t,e,n){"use strict";var i=n(47),r={name:"MyDvLoading",components:{Box:n(412).a}},s=(n(612),n(19)),a=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Box",this._b({staticClass:"my-dv-loading",attrs:{"default-width":"auto","default-height":"auto","x-align":"center","y-align":"middle"}},"Box",this.$attrs,!1),[e("svg",{attrs:{width:"50px",height:"50px"}},[e("circle",{attrs:{cx:"25",cy:"25",r:"20",fill:"transparent","stroke-width":"3","stroke-dasharray":"31.415, 31.415",stroke:"#02bcfe","stroke-linecap":"round"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"0, 25 25;360, 25 25",dur:"1.5s",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"stroke",values:"#02bcfe;#3be6cb;#02bcfe",dur:"3s",repeatCount:"indefinite"}})],1),this._v(" "),e("circle",{attrs:{cx:"25",cy:"25",r:"10",fill:"transparent","stroke-width":"3","stroke-dasharray":"15.7, 15.7",stroke:"#3be6cb","stroke-linecap":"round"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"360, 25 25;0, 25 25",dur:"1.5s",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"stroke",values:"#3be6cb;#02bcfe;#3be6cb",dur:"3s",repeatCount:"indefinite"}})],1)]),this._v(" "),e("div",{staticClass:"my-dv-loading__tip"},[this._t("default")],2)])}),[],!1,null,null,null).exports;e.a=Object(i.a)(a)},612:function(t,e,n){"use strict";n(515)}}]);