(window.webpackJsonp=window.webpackJsonp||[]).push([[847],{1270:function(t,e,n){},1281:function(t,e,n){"use strict";var i=n(53),o=n(52),s=n(57),r=(n(380),n(124),n(381)),a=n(807),l=n(379),c={name:"MyMapPopup",directives:{clickoutside:n.n(l).a},components:{MyMapHtml:a.a,MyIcon:r.a},props:{width:String,height:String,title:String,icon:[String,Object],closable:{type:Boolean,default:!0},closeOnClick:Boolean,theme:{type:String,default:"light",validator:function(){return["dark","light"]}},showArrow:{type:Boolean,default:!0}},computed:{iconProps:function(){return this.icon?"object"===Object(s.a)(this.icon)?Object(o.a)({},this.icon):{name:this.icon}:null},classes:function(){return["my-map-popup","is-".concat(this.theme),"".concat(this.showArrow?"arrow":"")]}},methods:{show:function(t){var e=t||this.$refs.html.position;this.$refs.html.setPosition(e),this.$emit("show",e)},hide:function(){this.$refs.html.setPosition(null),this.$emit("hide")},handleClickOutside:function(){this.closeOnClick&&this.hide()}}},u=n(18),p=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MyMapHtml",t._b({directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.handleClickOutside,expression:"handleClickOutside"}],ref:"html",class:t.classes,style:{width:t.width},attrs:{positioning:"bottom-center"}},"MyMapHtml",t.$attrs,!1),[t.closable?n("i",{staticClass:"my-map-popup__close el-icon-close",on:{click:t.hide}}):t._e(),t._v(" "),t.title?n("div",{staticClass:"my-map-popup__title"},[t._t("title",[t.icon?n("MyIcon",t._b({},"MyIcon",t.iconProps,!1)):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")])],2):t._e(),t._v(" "),n("div",{staticClass:"my-map-popup__body",style:{height:t.height}},[t._t("default")],2)])}),[],!1,null,null,null).exports;n(1270),e.a=Object(i.a)(p)},3015:function(t,e,n){"use strict";n.r(e);var i=n(1281),o=n(449),s=n(0);s.default.use(o.a),s.default.use(i.a);var r={},a=n(18),l=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-popup",{attrs:{position:[113.261999,23.130592],title:"标题"}},[this._v("\n     主体内容\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports},360:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),o=0,s=i.length;o<s;o++){var r=i[o];r&&(t.classList?t.classList.add(r):f(t,r)||(n+=" "+r))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",o=0,s=n.length;o<s;o++){var r=n[o];r&&(t.classList?t.classList.remove(r):f(t,r)&&(i=i.replace(" "+r+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,o){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var s in n)n.hasOwnProperty(s)&&t(e,s,n[s]);else"opacity"===(n=u(n))&&c<9?e.style.filter=isNaN(o)?"":"alpha(opacity="+100*o+")":e.style[n]=o};var o,s=n(0);var r=((o=s)&&o.__esModule?o:{default:o}).default.prototype.$isServer,a=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,c=r?0:Number(document.documentMode),u=function(t){return t.replace(a,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(l,"Moz$1")},p=e.on=!r&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!r&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){p(t,e,(function i(){n&&n.apply(this,arguments),d(t,e,i)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var h=e.getStyle=c<9?function(t,e){if(!r){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!r){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var m=e.isScroll=function(t,e){if(!r)return h(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!r){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(m(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(r||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},375:function(t,e,n){var i=n(1),o=n(369).values;i({target:"Object",stat:!0},{values:function(t){return o(t)}})},379:function(t,e,n){"use strict";e.__esModule=!0;var i,o=n(0),s=(i=o)&&i.__esModule?i:{default:i},r=n(360);var a=[],l="@@clickoutsideContext",c=void 0,u=0;function p(t,e,n){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!(n&&n.context&&i.target&&o.target)||t.contains(i.target)||t.contains(o.target)||t===i.target||n.context.popperElm&&(n.context.popperElm.contains(i.target)||n.context.popperElm.contains(o.target))||(e.expression&&t[l].methodName&&n.context[t[l].methodName]?n.context[t[l].methodName]():t[l].bindingFn&&t[l].bindingFn())}}!s.default.prototype.$isServer&&(0,r.on)(document,"mousedown",(function(t){return c=t})),!s.default.prototype.$isServer&&(0,r.on)(document,"mouseup",(function(t){a.forEach((function(e){return e[l].documentHandler(t,c)}))})),e.default={bind:function(t,e,n){a.push(t);var i=u++;t[l]={id:i,documentHandler:p(t,e,n),methodName:e.expression,bindingFn:e.value}},update:function(t,e,n){t[l].documentHandler=p(t,e,n),t[l].methodName=e.expression,t[l].bindingFn=e.value},unbind:function(t){for(var e=a.length,n=0;n<e;n++)if(a[n][l].id===t[l].id){a.splice(n,1);break}delete t[l]}}},380:function(t,e,n){},381:function(t,e,n){"use strict";var i=n(53),o=n(418);e.a=Object(i.a)(o.a)},418:function(t,e,n){"use strict";n(123),n(32),n(375),n(201);var i=n(31),o={DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"},s={Theme:o,name:"MyIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(o).includes(t)}}},computed:{classes:function(){var t;return[(t={},Object(i.a)(t,"my-icon--".concat(this.theme),!!this.theme),Object(i.a)(t,"is-pointer",!!this.$listeners.click),Object(i.a)(t,"is-svg",this.svg),t),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=n(18),a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"my-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?n(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},793:function(t,e,n){"use strict";e.a={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},800:function(t,e,n){"use strict";var i,o=n(438),s=n(756),r=n(793),a=n(599),l=n(364),c=n(435),u=n(464),p=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d="element",f="map",h="offset",m="position",y="positioning",v=function(t){function e(e){var n=t.call(this)||this;n.options=e,n.id=e.id,n.insertFirst=void 0===e.insertFirst||e.insertFirst,n.stopEvent=void 0===e.stopEvent||e.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==e.className?e.className:"ol-overlay-container "+a.d,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var i=e.autoPan;return i&&"object"!=typeof i&&(i={animation:e.autoPanAnimation,margin:e.autoPanMargin}),n.autoPan=i||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addEventListener(Object(o.b)(d),n.handleElementChanged),n.addEventListener(Object(o.b)(f),n.handleMapChanged),n.addEventListener(Object(o.b)(h),n.handleOffsetChanged),n.addEventListener(Object(o.b)(m),n.handlePositionChanged),n.addEventListener(Object(o.b)(y),n.handlePositioningChanged),void 0!==e.element&&n.setElement(e.element),n.setOffset(void 0!==e.offset?e.offset:[0,0]),n.setPositioning(void 0!==e.positioning?e.positioning:r.a.TOP_LEFT),void 0!==e.position&&n.setPosition(e.position),n}return p(e,t),e.prototype.getElement=function(){return this.get(d)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(f)},e.prototype.getOffset=function(){return this.get(h)},e.prototype.getPosition=function(){return this.get(m)},e.prototype.getPositioning=function(){return this.get(y)},e.prototype.handleElementChanged=function(){Object(u.d)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(u.e)(this.element),Object(c.c)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=Object(c.a)(t,s.a.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(d,t)},e.prototype.setMap=function(t){this.set(f,t)},e.prototype.setOffset=function(t){this.set(h,t)},e.prototype.setPosition=function(t){this.set(m,t)},e.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},e.prototype.panIntoView=function(t){var e=this.getMap();if(e&&e.getTargetElement()&&this.get(m)){var n=this.getRect(e.getTargetElement(),e.getSize()),i=this.getElement(),o=this.getRect(i,[Object(u.c)(i),Object(u.b)(i)]),s=t||{},r=void 0===s.margin?20:s.margin;if(!Object(l.g)(n,o)){var a=o[0]-n[0],c=n[2]-o[2],p=o[1]-n[1],d=n[3]-o[3],f=[0,0];if(a<0?f[0]=a-r:c<0&&(f[0]=Math.abs(c)+r),p<0?f[1]=p-r:d<0&&(f[1]=Math.abs(d)+r),0!==f[0]||0!==f[1]){var h=e.getView().getCenterInternal(),y=e.getPixelFromCoordinateInternal(h),v=[y[0]+f[0],y[1]+f[1]],g=s.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(v),duration:g.duration,easing:g.easing})}}}},e.prototype.getRect=function(t,e){var n=t.getBoundingClientRect(),i=n.left+window.pageXOffset,o=n.top+window.pageYOffset;return[i,o,i+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(y,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var n=t.getPixelFromCoordinate(e),i=t.getSize();this.updateRenderedPosition(n,i)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var n=this.element.style,i=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=Math.round(t[0]+i[0])+"px",a=Math.round(t[1]+i[1])+"px",l="0%",c="0%";o==r.a.BOTTOM_RIGHT||o==r.a.CENTER_RIGHT||o==r.a.TOP_RIGHT?l="-100%":o!=r.a.BOTTOM_CENTER&&o!=r.a.CENTER_CENTER&&o!=r.a.TOP_CENTER||(l="-50%"),o==r.a.BOTTOM_LEFT||o==r.a.BOTTOM_CENTER||o==r.a.BOTTOM_RIGHT?c="-100%":o!=r.a.CENTER_LEFT&&o!=r.a.CENTER_CENTER&&o!=r.a.CENTER_RIGHT||(c="-50%");var u="translate("+l+", "+c+") translate("+s+", "+a+")";this.rendered.transform_!=u&&(this.rendered.transform_=u,n.transform=u,n.msTransform=u)},e.prototype.getOptions=function(){return this.options},e}(o.a);e.a=v},807:function(t,e,n){"use strict";n(85),n(199);var i=n(52),o=n(800);e.a={name:"MyMapHtml",inject:["myMap"],props:{id:[Number,String],offset:{type:Array,default:function(){return[0,0]}},position:Array,positioning:{type:String,default:"center-center"},stopEvent:{type:Boolean,default:!0},insertFirst:Boolean,autoPan:{type:Boolean,default:!1},autoPanAnimation:{type:Object,default:function(){return{}}},autoPanMargin:{type:Number,default:20},visible:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:"my-map-html",style:this.styles,on:Object(i.a)({},this.$listeners)},[this.$slots.default])},computed:{styles:function(){return{cursor:this.$listeners.click?"pointer":""}}},watch:{$props:{deep:!0,handler:function(){try{this.dispose(),this.init()}catch(t){}}}},methods:{init:function(){if(this.$el){var t=Object(i.a)(Object(i.a)({},this.$props),{},{element:this.$el});this.overlay=new o.a(t);try{this.myMap.map.addOverlay(this.overlay),this.setPosition(this.visible?this.position:null)}catch(t){}}},setPosition:function(t){this.overlay&&this.overlay.setPosition(this.visible?t:null)},dispose:function(){this.overlay&&this.myMap&&this.myMap.map&&this.myMap.map.removeOverlay(this.overlay)}},mounted:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){this.dispose()}}}}]);