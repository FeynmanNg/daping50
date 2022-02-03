(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1077:function(t,e,r){"use strict";var i=r(47),o=r(456),n=(r(205),r(526)),a=r(548),s=r(206),l=r.n(s),c=r(443),u={name:"MyDvChart",mixins:[n.a],components:{MyChart:o.a,Loading:a.a},props:{options:[Object,Function]},data:function(){return{currentOptions:null}},watch:{chartData:{immediate:!0,handler:function(t){this.mergeOptions(t)}},options:{handler:function(t){this.mergeOptions(this.chartData)}}},methods:{mergeOptions:function(t){var e="function"==typeof this.options?this.options(t):this.options||{};Object(c.a)(e,this.extend||{}),this.currentOptions=Object.freeze(l()({},this.currentOptions,e))}}},d=r(19),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Box",t._b({staticClass:"my-dv-chart",attrs:{"default-width":"400px","default-height":"400px"}},"Box",t.$attrs,!1),[t.loading?r("Loading",{attrs:{zoom:.6}}):r("MyChart",t._g({attrs:{debug:t.debug,theme:t.theme,options:t.currentOptions,extend:t.extend,width:t.width+"px",height:t.height+"px"}},t.$listeners))],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(h)},1121:function(t,e,r){"use strict";var i=r(47),o=r(46),n=r(78),a=(r(116),r(201),r(77),r(444),r(202),r(30),r(843),r(1077)),s=r(526),l=r(426),c={name:"MyDvRing",mixins:[s.a],components:{DvChart:a.a},props:{label:Boolean,legend:{type:[String,Boolean],default:!1,validator:function(t){return["v","h",!1].includes(t)}},radius:{type:Number,default:45},title:String,useGap:{type:Boolean,default:!1},blur:{type:Boolean,default:!1},trackWidth:{type:Number,default:15,validator:function(t){return Math.min(5,Math.max(t,15))}}},computed:{seriesData:function(){var t=this,e=this.chartData.rows,r=void 0===e?[]:e,i=r.map((function(e,r){var i=Object(n.a)(e,2),a=i[0],s=i[1],c={};if(t.blur){var u=t.extend&&t.extend.color||[],d=l.a.color||[];console.log(u,d,"ccccc"),c={itemStyle:{normal:{shadowBlur:15,shadowColor:u[r]||d[r]||"rgba(255, 255, 255, .6)"}}},console.log(c,"dddddd")}return Object(o.a)({name:a,value:s},c)}));if(this.useGap){var a=(.02*r.reduce((function(t,e){return t+=e[1]}),0)).toFixed(1);return i.reduce((function(t,e){return t=t.concat([e,{name:"",value:a,itemStyle:{normal:{borderColor:"rgba(0, 0, 0, 0)",borderWidth:0,color:"rgba(0, 0, 0, 0)",label:{show:!1},labelLine:{show:!1}}}}])}),[])}return i}},methods:{optionsFunc:function(){var t="v"===this.legend,e=["50%","50%"],r=this.radius;return{title:{text:this.title,x:"center",y:"center",textStyle:{fontSize:20,lineHeight:24}},legend:{show:!!this.legend,top:t?"center":20,left:t?void 0:"center",right:t?20:void 0,itemWidth:10,itemHeight:10,icon:"rect",align:"auto",orient:t?"vertical":"horizontal"},tooltip:{trigger:"item",borderColor:"rgba(255,255,255,.2)",backgroundColor:"rgba(13,5,30,.85)",borderWidth:1,padding:5,formatter:function(t){return t.marker+""+t.data.name+"</br>数量："+t.data.value+"</br>占比："+t.percent+"%"}},series:[{type:"pie",data:this.seriesData,z:3,center:e,radius:["".concat(r-this.trackWidth,"%"),"".concat(r,"%")],clockwise:!0,avoidLabelOverlap:!0,hoverOffset:15,label:{show:this.label,position:"outside",formatter:"{a|{b}：{d}%}\n{hr|}",rich:{hr:{backgroundColor:"t",borderRadius:3,width:3,height:3,padding:[3,3,0,-12]},a:{padding:[-30,15,-20,15]}}},labelLine:{normal:{length:20,length2:15,lineStyle:{width:1}}}},{name:"第一层环",type:"pie",z:2,tooltip:{show:!1},center:e,radius:["".concat(r,"%"),"".concat(r+15,"%")],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:1,shadowColor:"rgba(255,255,255,.2)",color:"rgba(1,15,80,.3)"},emphasis:{color:"rgba(1,15,80,.3)"}},label:{show:!1},data:[100]},{name:"第二层环",type:"pie",z:1,tooltip:{show:!1},center:e,radius:["".concat(r+15,"%"),"".concat(r+30,"%")],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:1,shadowColor:"rgba(255,255,255,.1)",color:"rgba(0,15,69,.2)"},emphasis:{color:"rgba(0,15,69,.2)"}},label:{show:!1},data:[100]}]}}}},u=r(19),d=Object(u.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("DvChart",this._b({staticClass:"my-dv-ring",attrs:{options:this.optionsFunc}},"DvChart",Object.assign({},this.$props,this.$attrs),!1))}),[],!1,null,null,null).exports;e.a=Object(i.a)(d)},3391:function(t,e,r){"use strict";r.r(e);var i=r(1121),o=r(476),n=r(0);n.default.use(o.a),n.default.use(i.a);var a={data:function(){return{columns:["渠道","访问量"],rows:[["直接访问",320],["邮件营销",302],["联盟广告",334],["视频广告",390],["搜索引擎",330]]}}},s=r(19),l=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-ring",{attrs:{fit:"",columns:this.columns,rows:this.rows,title:"渠道统计"}})],1)],1)}),[],!1,null,null,null);e.default=l.exports},366:function(t,e,r){"use strict";e.__esModule=!0,e.removeResizeListener=e.addResizeListener=void 0;var i,o=r(393),n=(i=o)&&i.__esModule?i:{default:i};var a="undefined"==typeof window,s=function(t){var e=t,r=Array.isArray(e),i=0;for(e=r?e:e[Symbol.iterator]();;){var o;if(r){if(i>=e.length)break;o=e[i++]}else{if((i=e.next()).done)break;o=i.value}var n=o.target.__resizeListeners__||[];n.length&&n.forEach((function(t){t()}))}};e.addResizeListener=function(t,e){a||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new n.default(s),t.__ro__.observe(t)),t.__resizeListeners__.push(e))},e.removeResizeListener=function(t,e){t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||t.__ro__.disconnect())}},367:function(t,e,r){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var r=t.className,i=(e||"").split(" "),o=0,n=i.length;o<n;o++){var a=i[o];a&&(t.classList?t.classList.add(a):f(t,a)||(r+=" "+a))}t.classList||(t.className=r)},e.removeClass=function(t,e){if(!t||!e)return;for(var r=e.split(" "),i=" "+t.className+" ",o=0,n=r.length;o<n;o++){var a=r[o];a&&(t.classList?t.classList.remove(a):f(t,a)&&(i=i.replace(" "+a+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,r,o){if(!e||!r)return;if("object"===(void 0===r?"undefined":i(r)))for(var n in r)r.hasOwnProperty(n)&&t(e,n,r[n]);else"opacity"===(r=u(r))&&c<9?e.style.filter=isNaN(o)?"":"alpha(opacity="+100*o+")":e.style[r]=o};var o,n=r(0);var a=((o=n)&&o.__esModule?o:{default:o}).default.prototype.$isServer,s=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,c=a?0:Number(document.documentMode),u=function(t){return t.replace(s,(function(t,e,r,i){return i?r.toUpperCase():r})).replace(l,"Moz$1")},d=e.on=!a&&document.addEventListener?function(t,e,r){t&&e&&r&&t.addEventListener(e,r,!1)}:function(t,e,r){t&&e&&r&&t.attachEvent("on"+e,r)},h=e.off=!a&&document.removeEventListener?function(t,e,r){t&&e&&t.removeEventListener(e,r,!1)}:function(t,e,r){t&&e&&t.detachEvent("on"+e,r)};e.once=function(t,e,r){d(t,e,(function i(){r&&r.apply(this,arguments),h(t,e,i)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var p=e.getStyle=c<9?function(t,e){if(!a){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(r){return t.style[e]}}}:function(t,e){if(!a){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var r=document.defaultView.getComputedStyle(t,"");return t.style[e]||r?r[e]:null}catch(r){return t.style[e]}}};var b=e.isScroll=function(t,e){if(!a)return p(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!a){for(var r=t;r;){if([window,document,document.documentElement].includes(r))return window;if(b(r,e))return r;r=r.parentNode}return r}},e.isInContainer=function(t,e){if(a||!t||!e)return!1;var r=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),r.top<i.bottom&&r.bottom>i.top&&r.right>i.left&&r.left<i.right}},373:function(t,e,r){var i=r(2),o=r(377).entries;i({target:"Object",stat:!0},{entries:function(t){return o(t)}})},377:function(t,e,r){var i=r(11),o=r(80),n=r(16),a=r(122).f,s=function(t){return function(e){for(var r,s=n(e),l=o(s),c=l.length,u=0,d=[];c>u;)r=l[u++],i&&!a.call(s,r)||d.push(t?[r,s[r]]:s[r]);return d}};t.exports={entries:s(!0),values:s(!1)}},381:function(t,e,r){var i=r(2),o=r(439),n=r(120);i({target:"Array",proto:!0},{fill:o}),n("fill")},389:function(t,e,r){"use strict";var i=r(2),o=r(49).findIndex,n=r(120),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("findIndex")},418:function(t,e,r){"use strict";var i=r(47),o=r(76),n=r(46),a=(r(201),r(116),r(389),r(202),r(31),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,r=this.layoutVm,i=this.free;if(r&&!i){var o=r.gap,n=r.direction,a=r.total,s=r.boxCount,l=r.boxes,c=l.findIndex((function(e){return e===t})),u=s-1,d="(100% - ".concat(o*u,"px) * ").concat(e," / ").concat(a),h=l.filter((function(t,e){return e<c})).reduce((function(t,e){return t+e.weight}),0),f="(100% - ".concat(o*u,"px) * ").concat(h," / ").concat(a," +  ").concat(c*o,"px");return"row"===n?{height:"calc(".concat(d,")"),top:"calc(".concat(f,")")}:{width:"calc(".concat(d,")"),left:"calc(".concat(f,")")}}return null},styles:function(){var t=this.inline,e=this.margin,r=this.padding,i=this.position,o=this.fit,a=this.width,s=this.height,l=this.left,c=this.top,u=this.right,d=this.bottom,h=this.zIndex,f=this.zoom,p=this.scale,b=this.xAlign,m=this.yAlign,g=this.defaultWidth,y=this.defaultHeight;return Object(n.a)({position:i?"absolute":"relative",width:o?"100%":a||g,height:o?"100%":s||y,zoom:f,left:b?null:l,top:m?null:c,right:b?null:u,bottom:m?null:d,transform:p?"scale(".concat(p,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:r,zIndex:h},this.layoutSize)},classes:function(){var t;return t={},Object(o.a)(t,"is-".concat(this.xAlign),!!this.xAlign),Object(o.a)(t,"is-".concat(this.yAlign),!!this.yAlign),Object(o.a)(t,"is-shadow",this.shadow),Object(o.a)(t,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(o.a)(t,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),t},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),s=(r(535),r(19)),l=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},426:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a}));var i={color:["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"]},o={x:["left","right"],y:["bottom","top"]},n={smooth:.2},a={shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},439:function(t,e,r){"use strict";var i=r(20),o=r(123),n=r(21);t.exports=function(t){for(var e=i(this),r=n(e.length),a=arguments.length,s=o(a>1?arguments[1]:void 0,r),l=a>2?arguments[2]:void 0,c=void 0===l?r:o(l,r);c>s;)e[s++]=t;return e}},443:function(t,e,r){"use strict";var i=r(78),o=(r(75),r(373),r(116),r(203),r(213)),n=r.n(o),a=r(206),s=r.n(a),l=r(12),c=r.n(l);e.a=function(t,e){Object.entries(e).forEach((function(e){var r=Object(i.a)(e,2),o=r[0],a=r[1];if(o.includes("."))n()(t,o,a);else if("function"==typeof a)t[o]=a(t[o]);else if(null===a)t[o]=a;else{var l=t[o];Array.isArray(l)&&c()(a)?l.forEach((function(t){s()(t,a)})):c()(l)?s()(l,a):t[o]=a}}))}},444:function(t,e,r){"use strict";var i=r(2),o=r(50),n=r(487),a=r(488),s=r(1),l=1..toFixed,c=Math.floor,u=function(t,e,r){return 0===e?r:e%2==1?u(t,e-1,r*t):u(t*t,e/2,r)},d=function(t,e,r){for(var i=-1,o=r;++i<6;)o+=e*t[i],t[i]=o%1e7,o=c(o/1e7)},h=function(t,e){for(var r=6,i=0;--r>=0;)i+=t[r],t[r]=c(i/e),i=i%e*1e7},f=function(t){for(var e=6,r="";--e>=0;)if(""!==r||0===e||0!==t[e]){var i=String(t[e]);r=""===r?i:r+a.call("0",7-i.length)+i}return r};i({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}))},{toFixed:function(t){var e,r,i,s,l=n(this),c=o(t),p=[0,0,0,0,0,0],b="",m="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(b="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*u(2,69,1))-69)<0?l*u(2,-e,1):l/u(2,e,1),r*=4503599627370496,(e=52-e)>0){for(d(p,0,r),i=c;i>=7;)d(p,1e7,0),i-=7;for(d(p,u(10,i,1),0),i=e-1;i>=23;)h(p,1<<23),i-=23;h(p,1<<i),d(p,1,1),h(p,2),m=f(p)}else d(p,0,r),d(p,1<<-e,0),m=f(p)+a.call("0",c);return m=c>0?b+((s=m.length)<=c?"0."+a.call("0",c-s)+m:m.slice(0,s-c)+"."+m.slice(s-c)):b+m}})},455:function(t,e,r){},456:function(t,e,r){"use strict";var i=r(47),o=r(78),n=r(76),a=(r(75),r(373),r(30),r(77),r(9),r(365)),s=r.n(a),l=(r(604),r(583),r(605),r(484)),c=r(118);r(121);var u=r(366),d=r(443),h=r(426),f={name:"MyChart",props:{width:{type:String,default:"auto"},height:{type:String,default:"400px"},fit:Boolean,options:{type:Object},extend:[Object,Function],theme:{type:[String,Object],default:function(){return h.a}},loading:Boolean,debug:{type:Boolean},settings:{type:Object,default:function(){return{}}},data:{type:[Object,Array],default:function(){return{}}},map:String,register:[Object,Function],onRegister:Function,coords:{type:[Object,Array],default:function(){return{}}}},data:function(){return this.coordinates=Object.create(null),{}},computed:{classes:function(){var t;return t={},Object(n.a)(t,"my-chart-".concat(this._uid),!0),Object(n.a)(t,"my-chart",!0),t},styles:function(){return{width:this.fit?"100%":this.width,height:this.fit?"100%":this.height}}},watch:{options:function(){this.$nextTick(this.proxySetOption)},extend:function(){this.$nextTick(this.proxySetOption)},settings:function(){this.$nextTick(this.proxySetOption)},data:function(){this.$nextTick(this.proxySetOption)},loading:function(t){this.chart&&(t?this.chart.showLoading():this.chart.hideLoading())},coords:{handler:function(t){var e=Array.isArray(t)?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",i=Object.create(null);return t.forEach((function(t){i[t[e]]=t[r]})),i}(t):t;this.coordinates=Object.assign(this.coordinates,e)},immediate:!0},map:function(){this.registerMap().then(this.proxySetOption)}},methods:{init:function(){var t=this;this.chart=s.a.init(this.$el,this.theme),Object.entries(this.$listeners).forEach((function(e){var r=Object(o.a)(e,2),i=r[0],n=r[1];t.chart.on(i,n)})),this.loading&&this.chart.showLoading(),this.proxySetOption(),Object(u.addResizeListener)(this.$el,this.proxyResize)},nativeSetOption:function(t){this.debug&&(Object(l.b)(this.$options.name,this._uid),Object(l.a)(t),Object(l.a)("----------")),this.chart.setOption(t)},setOption:function(){if(this.chart)if(this.options)this.nativeSetOption(this.options);else{var t=this.$options.adapter?this.$options.adapter(this):{};this.extend&&Object(d.a)(t,"function"==typeof this.extend?this.extend(t):this.extend),this.nativeSetOption(t)}},dispose:function(){var t=this;this.chart&&(Object.entries(this.$listeners).forEach((function(e){var r=Object(o.a)(e,2),i=r[0],n=r[1];t.chart.off(i,n)})),this.chart.dispose(),this.chart=null,Object(u.removeResizeListener)(this.$el,this.proxyResize))},resize:function(){this.chart&&this.chart.resize()},recordCoords:function(t){var e=this;t&&t.features&&t.features.forEach((function(t){var r=t.properties;r.cp&&(e.coordinates[r.name]=r.cp)}))},registerMap:function(){var t=this,e=this.register,r=this.map;if(!e||!r)return Promise.resolve();var i=s.a.getMap(r);return i?(this.recordCoords(i.geoJson),Promise.resolve()):"function"==typeof e?e(this).then((function(e){return s.a.registerMap(r,e),t.recordCoords(e),t.onRegister&&t.onRegister(r,e),t.$emit("register",r,e),e})):(s.a.registerMap(r,e),this.recordCoords(e),this.onRegister&&this.onRegister(r,e),Promise.resolve())}},render:function(){var t=arguments[0];return t("div",{class:this.classes,style:this.styles})},created:function(){this.proxyResize=Object(c.c)(this.resize,50),this.proxySetOption=Object(c.c)(this.setOption,50)},mounted:function(){this.registerMap().then(this.init)},beforeDestroy:function(){this.dispose()}};e.a=Object(i.a)(f)},459:function(t,e,r){},476:function(t,e,r){"use strict";var i=r(47),o=r(119),n=(r(201),r(202),r(366)),a=r(367),s=r(118),l=r(46),c={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(l.a)(Object(l.a)({},c),this.config)}}},d=r(506),h={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(o.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,r=t.clientHeight;e&&r&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=r/this.height))},fullScreen:function(){var t=this.getTarget();Object(d.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(d.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(a.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(s.c)(this.resize,100),Object(n.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(d.c)()},beforeDestroy:function(){this.proxyResize&&Object(n.removeResizeListener)(this.warpper,this.proxyResize),Object(a.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},f=(r(528),r(19)),p=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?r("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?r("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):r("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(p)},484:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));r(202);var i=r(48),o={default:"#35495E",primary:"#3488ff",success:"#43B883",warn:"#e6a23c",error:"#f56c6c"};function n(t,e){if(i.a.debug&&window&&window.console){var r=window.console[t];try{r.apply(window.console,e)}catch(t){}}}function a(){n("log",arguments)}function s(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary";a("%c ".concat(t," %c ").concat(e," %c"),"background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:".concat(o[r],"; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;"),"background:transparent")}},487:function(t,e,r){var i=r(25);t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},488:function(t,e,r){"use strict";var i=r(50),o=r(22);t.exports="".repeat||function(t){var e=String(o(this)),r="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},500:function(t,e,r){"use strict";var i=r(366);e.a={inject:{page:{default:null}},data:function(){return{width:0,height:0}},methods:{resize:function(){var t,e=null===(t=this.$el)||void 0===t?void 0:t.getBoundingClientRect();if(e){var r=this.page||{},i=r.widthScale,o=void 0===i?1:i,n=r.heightScale,a=void 0===n?1:n;this.width=e.width/o,this.height=e.height/a,this.$emit("resize",[this.width,this.height])}}},mounted:function(){this.resize(),Object(i.addResizeListener)(this.$el,this.resize)},beforeDestroy:function(){Object(i.removeResizeListener)(this.$el,this.resize)}}},506:function(t,e,r){"use strict";function i(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function o(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function n(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return n}))},526:function(t,e,r){"use strict";r(205),r(9);var i=r(500),o=r(418),n=(r(381),r(368));e.a={mixins:[i.a],inheritAttrs:!1,components:{Box:o.a},props:{columns:Array,rows:Array,loader:Function,settings:Object,extend:{type:[Object,Function]},debug:Boolean},data:function(){return{chartData:null,loading:!0}},computed:{theme:function(){var t,e=(null==this||null===(t=this.page)||void 0===t?void 0:t.settings)||{};return Object.freeze(function(t){var e=t.colors,r=t.textColor,i=t.dark;t.light,t.fill;return{color:e||["#1890ff","#a0d911","#13c2c2","#fdaa09","#2f54eb","#52c41a","#fa541c","#2a71c4","#f5222d","#eb3197","#722ed1"],backgroundColor:"transparent",textStyle:{fontSize:16},title:{textStyle:{color:r},subtextStyle:{color:"#aaaaaa"}},line:{itemStyle:{normal:{borderWidth:2}},lineStyle:{normal:{width:4}},symbolSize:8,symbol:"circle",smooth:!0},radar:{itemStyle:{borderWidth:"1"},areaStyle:{opacity:.5},lineStyle:{normal:{width:2}},symbolSize:"6",symbol:"emptyCircle",smooth:!0},bar:{itemStyle:{normal:{barBorderWidth:"1",barBorderColor:r},emphasis:{barBorderWidth:"1",barBorderColor:r}}},pie:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},scatter:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},boxplot:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},parallel:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},sankey:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},funnel:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},gauge:{itemStyle:{normal:{borderWidth:"1",borderColor:r},emphasis:{borderWidth:"1",borderColor:r}}},candlestick:{itemStyle:{normal:{color:"#fd1050",color0:"#0cf49b",borderColor:"#fd1050",borderColor0:"#0cf49b",borderWidth:1}}},graph:{itemStyle:{normal:{borderWidth:"1",borderColor:r}},lineStyle:{normal:{width:1,color:"#aaaaaa"}},symbolSize:"6",symbol:"emptyCircle",smooth:!0,color:["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],label:{normal:{textStyle:{color:r}}}},map:{itemStyle:{borderColor:"#215495",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#073684"},{offset:1,color:"#061E3D"}]}},emphasis:{label:{color:"#fff",show:!1},itemStyle:{areaColor:"#1890FF"}}},geo:{show:!0,roam:!1,layoutSize:"100%",z:2,itemStyle:{normal:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#073684"},{offset:1,color:"#061E3D"}]},borderColor:new n.LinearGradient(0,0,0,1,[{offset:0,color:"#00F6FF"},{offset:1,color:"#53D9FF"}],!1),borderWidth:3,shadowBlur:100,shadowColor:"rgba(10,76,139,0.8)",shadowOffsetY:0},emphasis:{label:{show:!1},areaColor:"#1890FF",borderWidth:1,shadowOffsetX:0,shadowOffsetY:0}},label:{normal:{textStyle:{color:"#fff"}},emphasis:{show:!1,textStyle:{color:"#fff"}}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:r,width:2}},axisTick:{show:!0,lineStyle:{color:r}},axisLabel:{show:!0,textStyle:{color:r}},splitLine:{show:!1,lineStyle:{color:["rgba(170,170,170,0.18)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},valueAxis:{nameTextStyle:{color:i},axisLine:{show:!1,lineStyle:{color:"rgba(238,238,238,0.2)"}},axisTick:{show:!0,lineStyle:{color:"rgba(24,76,115,0.5)"}},axisLabel:{show:!0,textStyle:{color:r}},splitLine:{show:!0,lineStyle:{type:"dotted",color:["rgba(24,76,115,0.5)"]}},splitArea:{show:!0,areaStyle:{color:["rgba(170,170,170,0.05)","rgba(170,170,170,0.01)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"rgba(238,238,238,0.2)"}},axisTick:{show:!0,lineStyle:{color:"rgba(238,238,238,0.12)"}},axisLabel:{show:!0,textStyle:{color:"#eeeeee"}},splitLine:{show:!0,lineStyle:{color:["rgba(170,170,170,0.18)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"rgba(238,238,238,0.2)"}},axisTick:{show:!0,lineStyle:{color:"rgba(238,238,238,0.12)"}},axisLabel:{show:!0,textStyle:{color:"#eeeeee"}},splitLine:{show:!0,lineStyle:{color:["rgba(170,170,170,0.18)"]}},splitArea:{show:!1,areaStyle:{color:["#eeeeee"]}}},toolbox:{iconStyle:{normal:{borderColor:r},emphasis:{borderColor:r}}},legend:{align:"auto",textStyle:{color:r}},tooltip:{trigger:"item",axisPointer:{type:"item",label:{backgroundColor:"#6a7985"},lineStyle:{color:"rgba(180,228,225,0.5)",width:"1"},crossStyle:{color:"rgba(180,228,225,0.5)",width:"1"}}},timeline:{lineStyle:{color:"#eeeeee",width:1},itemStyle:{normal:{color:"#dd6b66",borderWidth:1},emphasis:{color:"#a9334c"}},controlStyle:{normal:{color:r,borderColor:r,borderWidth:.5},emphasis:{color:r,borderColor:r,borderWidth:.5}},checkpointStyle:{color:"#e43c59",borderColor:"rgba(194,53,49,0.5)"},label:{normal:{textStyle:{color:r}},emphasis:{textStyle:{color:r}}}},visualMap:{left:40,bottom:10,color:["#f5222d","#fdaa09","#52c41a"],textStyle:{color:"#fff"}},dataZoom:{backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(255,255,255,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:r}},markPoint:{label:{normal:{textStyle:{color:r}},emphasis:{textStyle:{color:r}}}}}}(e))}},watch:{loader:{immediate:!0,handler:function(){this.load()}},rows:function(){this.load()},columns:function(){this.load()}},methods:{load:function(){var t=this;if(this.loader)this.loading=!0,this.loader(this).then((function(e){t.chartData=Object.freeze(e||{})})).finally((function(){t.loading=!1}));else{var e=this.columns,r=this.rows,i=this.type;e&&r&&(this.chartData=Object.freeze({columns:e,rows:r,type:i||"map"})),this.loading=!1}}}}},528:function(t,e,r){"use strict";r(455)},529:function(t,e,r){},535:function(t,e,r){"use strict";r(459)},548:function(t,e,r){"use strict";var i=r(47),o={name:"MyDvLoading",components:{Box:r(418).a}},n=(r(656),r(19)),a=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("Box",this._b({staticClass:"my-dv-loading",attrs:{"default-width":"auto","default-height":"auto","x-align":"center","y-align":"middle"}},"Box",this.$attrs,!1),[e("svg",{attrs:{width:"50px",height:"50px"}},[e("circle",{attrs:{cx:"25",cy:"25",r:"20",fill:"transparent","stroke-width":"3","stroke-dasharray":"31.415, 31.415",stroke:"#02bcfe","stroke-linecap":"round"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"0, 25 25;360, 25 25",dur:"1.5s",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"stroke",values:"#02bcfe;#3be6cb;#02bcfe",dur:"3s",repeatCount:"indefinite"}})],1),this._v(" "),e("circle",{attrs:{cx:"25",cy:"25",r:"10",fill:"transparent","stroke-width":"3","stroke-dasharray":"15.7, 15.7",stroke:"#3be6cb","stroke-linecap":"round"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"360, 25 25;0, 25 25",dur:"1.5s",repeatCount:"indefinite"}}),this._v(" "),e("animate",{attrs:{attributeName:"stroke",values:"#3be6cb;#02bcfe;#3be6cb",dur:"3s",repeatCount:"indefinite"}})],1)]),this._v(" "),e("div",{staticClass:"my-dv-loading__tip"},[this._t("default")],2)])}),[],!1,null,null,null).exports;e.a=Object(i.a)(a)},656:function(t,e,r){"use strict";r(529)}}]);