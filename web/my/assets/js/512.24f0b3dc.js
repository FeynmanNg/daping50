(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{2985:function(t,e,n){"use strict";n.r(e);var i=n(880);n(0).default.use(i.a);var o={data:function(){return{data:{columns:["渠道","访问量"],rows:[["直接访问",320],["邮件营销",302],["联盟广告",334],["视频广告",390],["搜索引擎",330]]},settings:{label:"top"}}}},r=n(18),a=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("my-chart-bar",{attrs:{data:this.data,settings:this.settings}})}),[],!1,null,null,null);e.default=a.exports},374:function(t,e,n){var i=n(1),o=n(384).values;i({target:"Object",stat:!0},{values:function(t){return o(t)}})},381:function(t,e,n){"use strict";var i=n(1),o=n(36).find,r=n(126),a=n(20),s=!0,l=a("find");"find"in[]&&Array(1).find((function(){s=!1})),i({target:"Array",proto:!0,forced:s||!l},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},444:function(t,e,n){"use strict";var i=n(1),o=n(36).findIndex,r=n(126),a=n(20),s=!0,l=a("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s||!l},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("findIndex")},458:function(t,e,n){"use strict";var i=n(1),o=n(59),r=n(542),a=n(543),s=n(2),l=1..toFixed,c=Math.floor,u=function(t,e,n){return 0===e?n:e%2==1?u(t,e-1,n*t):u(t*t,e/2,n)};i({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}))},{toFixed:function(t){var e,n,i,s,l=r(this),h=o(t),f=[0,0,0,0,0,0],d="",p="0",m=function(t,e){for(var n=-1,i=e;++n<6;)i+=t*f[n],f[n]=i%1e7,i=c(i/1e7)},g=function(t){for(var e=6,n=0;--e>=0;)n+=f[e],f[e]=c(n/t),n=n%t*1e7},v=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==f[t]){var n=String(f[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(d="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*u(2,69,1))-69)<0?l*u(2,-e,1):l/u(2,e,1),n*=4503599627370496,(e=52-e)>0){for(m(0,n),i=h;i>=7;)m(1e7,0),i-=7;for(m(u(10,i,1),0),i=e-1;i>=23;)g(1<<23),i-=23;g(1<<i),m(1,1),g(2),p=v()}else m(0,n),m(1<<-e,0),p=v()+a.call("0",h);return p=h>0?d+((s=p.length)<=h?"0."+a.call("0",h-s)+p:p.slice(0,s-h)+"."+p.slice(s-h)):d+p}})},475:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a}));var i="",o={x:["left","right"],y:["bottom","top"]},r={smooth:.2},a={shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},495:function(t,e,n){"use strict";n(54),n(124),n(364),n(199),n(55);var i=n(86),o=n(205),r=n.n(o),a=n(201),s=n.n(a),l=n(12),c=n.n(l);e.a=function(t,e){Object.entries(e).forEach((function(e){var n=Object(i.a)(e,2),o=n[0],a=n[1];if(o.includes("."))r()(t,o,a);else if("function"==typeof a)t[o]=a(t[o]);else if(null===a)t[o]=a;else{var l=t[o];Array.isArray(l)&&c()(a)?l.forEach((function(t){s()(t,a)})):c()(l)?s()(l,a):t[o]=a}}))}},502:function(t,e,n){var i=n(1),o=n(525);i({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},525:function(t,e,n){var i=n(4),o=n(207).trim,r=n(208),a=i.parseFloat,s=1/a(r+"-0")!=-1/0;t.exports=s?function(t){var e=o(String(t)),n=a(e);return 0===n&&"-"==e.charAt(0)?-0:n}:a},528:function(t,e,n){"use strict";var i=n(53),o=(n(54),n(85),n(32),n(364),n(7),n(55),n(86)),r=n(31),a=n(368),s=n.n(a),l=(n(669),n(653),n(670),n(530)),c=n(125),u=n(360),h=n(201),f=n.n(h),d=n(495),p=n(475),m={name:"MyChart",props:{width:{type:String,default:"auto"},height:{type:String,default:"400px"},fit:Boolean,options:{type:Object},extend:[Object,Function],theme:{type:[String,Object],default:p.a},loading:Boolean,debug:{type:Boolean},settings:{type:Object,default:function(){return{}}},data:{type:[Object,Array],default:function(){return{}}},map:String,register:[Object,Function],coords:{type:Object,default:function(){return{}}}},data:function(){return{coordinates:{}}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"my-chart-".concat(this._uid),!0),Object(r.a)(t,"my-chart",!0),t},styles:function(){return{width:this.fit?"100%":this.width,height:this.fit?"100%":this.height}}},watch:{options:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},extend:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},settings:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},data:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},loading:function(t){this.chart&&(t?this.chart.showLoading():this.chart.hideLoading())},map:function(){this.registerMap().then(this.setOption).catch((function(t){return t}))},coords:{handler:function(t){this.coordinates=Object.assign(this.coordinates,t)},immediate:!0}},methods:{init:function(){var t=this;this.chart=s.a.init(this.$el,this.theme),Object.entries(this.$listeners).forEach((function(e){var n=Object(o.a)(e,2),i=n[0],r=n[1];t.chart.on(i,r)})),this.loading&&this.chart.showLoading(),this.setOption(),Object(u.addResizeListener)(this.$el,this.proxyResize)},nativeSetOption:function(t){this.debug&&(Object(l.b)(this.$options.name,this._uid),Object(l.a)(t),Object(l.a)("----------")),this.chart.setOption(t)},setOption:function(){if(this.chart)if(this.options)this.nativeSetOption(this.options);else{var t=this.$options.adapter?this.$options.adapter(this):{},e=f()({},this.options||{},t);this.extend&&Object(d.a)(e,"function"==typeof this.extend?this.extend():this.extend),this.nativeSetOption(e)}},dispose:function(){var t=this;this.chart&&(Object.entries(this.$listeners).forEach((function(e){var n=Object(o.a)(e,2),i=n[0],r=n[1];t.chart.off(i,r)})),this.chart.dispose(),this.chart=null,Object(u.removeResizeListener)(this.$el,this.proxyResize))},resize:function(){this.chart&&this.$nextTick(this.chart.resize)},recordCoords:function(t){var e=this;t&&t.features&&t.features.forEach((function(t){var n=t.properties;e.coordinates[n.name]=n.cp}))},registerMap:function(){var t=this,e=this.register,n=this.map;if(!e||!n)return Promise.reject(new Error(null));var i=this.echarts.getMap(n);return i?(this.recordCoords(i.geoJson),Promise.resolve()):"function"==typeof e?e(this).then((function(e){return t.echarts.registerMap(n,e),t.recordCoords(e),e})):(this.echarts.registerMap(n,e),this.recordCoords(e),Promise.resolve())}},render:function(){var t=arguments[0];return t("div",{class:this.classes,style:this.styles},["my-chart"])},beforeCreate:function(){this.echarts=s.a},created:function(){this.registerMap().then(this.setOption).catch((function(t){return t})),this.proxyResize=Object(c.c)(this.resize,100)},mounted:function(){this.init()},beforeDestroy:function(){this.dispose()}};e.a=Object(i.a)(m)},530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));n(198);var i=n(56),o={default:"#35495E",primary:"#3488ff",success:"#43B883",warn:"#e6a23c",error:"#f56c6c"};function r(t,e){if(i.a.debug&&window&&window.console){var n=window.console[t];try{n.apply(window.console,e)}catch(t){}}}function a(){r("log",arguments)}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary";a("%c ".concat(t," %c ").concat(e," %c"),"background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:".concat(o[n],"; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;"),"background:transparent")}},542:function(t,e,n){var i=n(28);t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},543:function(t,e,n){"use strict";var i=n(59),o=n(22);t.exports="".repeat||function(t){var e=String(o(this)),n="",r=i(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},566:function(t,e,n){var i=n(355),o=n(622).createSymbol,r=n(382),a=n(424).parsePercent,s=n(740).getDefaultLabel;function l(t,e,n){r.Group.call(this),this.updateData(t,e,n)}var c=l.prototype,u=l.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};function h(t){return[t[0]/2,t[1]/2]}function f(t,e){this.parent.drift(t,e)}c._createSymbol=function(t,e,n,i,r){this.removeAll();var a=e.getItemVisual(n,"color"),s=o(t,-1,-1,2,2,a,r);s.attr({z2:100,culling:!0,scale:h(i)}),s.drift=f,this._symbolType=t,this.add(s)},c.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},c.getSymbolPath=function(){return this.childAt(0)},c.getScale=function(){return this.childAt(0).scale},c.highlight=function(){this.childAt(0).trigger("emphasis")},c.downplay=function(){this.childAt(0).trigger("normal")},c.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},c.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":e.cursor},c.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",o=t.hostModel,a=u(t,e),s=i!==this._symbolType;if(s){var l=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,a,l)}else{(c=this.childAt(0)).silent=!1,r.updateProps(c,{scale:h(a)},o,e)}if(this._updateCommon(t,e,a,n),s){var c=this.childAt(0),f=n&&n.fadeIn,d={scale:c.scale.slice()};f&&(d.style={opacity:c.style.opacity}),c.scale=[0,0],f&&(c.style.opacity=0),r.initProps(c,d,o,e)}this._seriesModel=o};var d=["itemStyle"],p=["emphasis","itemStyle"],m=["label"],g=["emphasis","label"];function v(t,e){if(!this.incremental&&!this.useHoverLayer)if("emphasis"===e){var n=this.__symbolOriginalScale,i=n[1]/n[0],o={scale:[Math.max(1.1*n[0],n[0]+3),Math.max(1.1*n[1],n[1]+3*i)]};this.animateTo(o,400,"elasticOut")}else"normal"===e&&this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}c._updateCommon=function(t,e,n,o){var l=this.childAt(0),c=t.hostModel,u=t.getItemVisual(e,"color");"image"!==l.type?l.useStyle({strokeNoScale:!0}):l.setStyle({opacity:1,shadowBlur:null,shadowOffsetX:null,shadowOffsetY:null,shadowColor:null});var f=o&&o.itemStyle,y=o&&o.hoverItemStyle,b=o&&o.symbolOffset,x=o&&o.labelModel,S=o&&o.hoverLabelModel,O=o&&o.hoverAnimation,_=o&&o.cursorStyle;if(!o||t.hasItemOption){var I=o&&o.itemModel?o.itemModel:t.getItemModel(e);f=I.getModel(d).getItemStyle(["color"]),y=I.getModel(p).getItemStyle(),b=I.getShallow("symbolOffset"),x=I.getModel(m),S=I.getModel(g),O=I.getShallow("hoverAnimation"),_=I.getShallow("cursor")}else y=i.extend({},y);var w=l.style,A=t.getItemVisual(e,"symbolRotate");l.attr("rotation",(A||0)*Math.PI/180||0),b&&l.attr("position",[a(b[0],n[0]),a(b[1],n[1])]),_&&l.attr("cursor",_),l.setColor(u,o&&o.symbolInnerColor),l.setStyle(f);var N=t.getItemVisual(e,"opacity");null!=N&&(w.opacity=N);var k=t.getItemVisual(e,"liftZ"),M=l.__z2Origin;null!=k?null==M&&(l.__z2Origin=l.z2,l.z2+=k):null!=M&&(l.z2=M,l.__z2Origin=null);var P=o&&o.useNameLabel;r.setLabelStyle(w,y,x,S,{labelFetcher:c,labelDataIndex:e,defaultText:function(e,n){return P?t.getName(e):s(t,e)},isRectText:!0,autoColor:u}),l.__symbolOriginalScale=h(n),l.hoverStyle=y,l.highDownOnUpdate=O&&c.isAnimationEnabled()?v:null,r.setHoverStyle(l)},c.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,(!e||!e.keepLabel)&&(n.style.text=null),r.updateProps(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},i.inherits(l,r.Group);var y=l;t.exports=y},574:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l}));n(198),n(21),n(444),n(54),n(85),n(210),n(34),n(32),n(197),n(502),n(458),n(55);var i=n(12),o=n.n(i);function r(t){var e=[];return t.forEach((function(t,n){(t.unit||t.precision>=0)&&e.push(n)})),e}function a(t,e,n){e.forEach((function(e){var i=t[e],o=n[e],r=i.unit||"n",a=i.precision||0;switch(r.toLowerCase()){case"k":o/=1e3;break;case"w":o/=1e4;break;case"p":o*=100}n[e]=function(t,e){return Number.parseFloat(t.toFixed(e))}(o,a)}))}function s(t){var e=t.columns;return(void 0===e?[]:e).map((function(t){return o()(t)?t:{name:t}}))}function l(t,e,n){var i=e.id,o=e.rows,s=e.layout,l=void 0===s?"column":s,c=e.header,u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.map((function(t){return t.displayName||t.name})),o=i.length?[i]:[],s=r(t),l=[];e.forEach((function(e){var n=Array.isArray(e)?e:t.map((function(t){return e[t.name]}));a(t,s,n),l.push(n)}));var c=t.findIndex((function(t){return t.sort}));if(c>=0){var u=n.direction;l.sort((function(t,e){return"x"===u?e[c]-t[c]:t[c]-e[c]}))}return o.concat(l)}(t,function(t,e,n){if(!n||e.length<=n||!t[1])return e;var i=t[1].name;e.sort((function(t,e){var n=Array.isArray(t)?t[1]:t[i];return(Array.isArray(e)?e[1]:e[i])-n}));var o=["其他",e.filter((function(t,e){return e>=n})).reduce((function(t,e){return t+(Array.isArray(e)?e[1]:e[i])}),0)],r=e.slice(0,n);return r.push(o),r}(t,o,n.limit),n);return{id:i,dimensions:function(t,e,n){return"column"===t?e:n.map((function(t){return t[0]}))}(l,t,u),source:u,sourceHeader:c}}},575:function(t,e,n){"use strict";var i=n(0);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.default.extend({props:t}),o=new n({propsData:e});return o.$props}},580:function(t,e,n){var i=n(573).isDimensionStacked,o=n(355).map;e.prepareDataCoordInfo=function(t,e,n){var r,a=t.getBaseAxis(),s=t.getOtherAxis(a),l=function(t,e){var n=0,i=t.scale.getExtent();"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]);return n}(s,n),c=a.dim,u=s.dim,h=e.mapDimension(u),f=e.mapDimension(c),d="x"===u||"radius"===u?1:0,p=o(t.dimensions,(function(t){return e.mapDimension(t)})),m=e.getCalculationInfo("stackResultDimension");return(r|=i(e,p[0]))&&(p[0]=m),(r|=i(e,p[1]))&&(p[1]=m),{dataDimsForPoint:p,valueStart:l,valueAxisDim:u,baseAxisDim:c,stacked:!!r,valueDim:h,baseDim:f,baseDataOffset:d,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}},e.getStackedOnPoint=function(t,e,n,i){var o=NaN;t.stacked&&(o=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(o)&&(o=t.valueStart);var r=t.baseDataOffset,a=[];return a[r]=n.get(t.baseDim,i),a[1-r]=o,e.dataToPoint(a)}},581:function(t,e,n){var i=n(355).isFunction;t.exports=function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,o,r){var a=t.getData(),s=t.get("symbol"),l=t.get("symbolSize"),c=t.get("symbolKeepAspect"),u=t.get("symbolRotate"),h=i(s),f=i(l),d=i(u),p=h||f||d,m=!h&&s?s:e,g=f?null:l;if(a.setVisual({legendSymbol:n||m,symbol:m,symbolSize:g,symbolKeepAspect:c,symbolRotate:u}),!o.isSeriesFiltered(t))return{dataEach:a.hasItemOption||p?function(e,n){if(p){var i=t.getRawValue(n),o=t.getDataParams(n);h&&e.setItemVisual(n,"symbol",s(i,o)),f&&e.setItemVisual(n,"symbolSize",l(i,o)),d&&e.setItemVisual(n,"symbolRotate",u(i,o))}if(e.hasItemOption){var r=e.getItemModel(n),a=r.getShallow("symbol",!0),c=r.getShallow("symbolSize",!0),m=r.getShallow("symbolRotate",!0),g=r.getShallow("symbolKeepAspect",!0);null!=a&&e.setItemVisual(n,"symbol",a),null!=c&&e.setItemVisual(n,"symbolSize",c),null!=m&&e.setItemVisual(n,"symbolRotate",m),null!=g&&e.setItemVisual(n,"symbolKeepAspect",g)}}:null}}}}},623:function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{value}",n=null;switch(t.unit){case"p":n="".concat(e,"%");break;case"k":n="".concat(e,"k");break;case"w":n="".concat(e,"万")}return{formatter:n}}n.d(e,"a",(function(){return i}))},629:function(t,e,n){var i=n(355).map,o=n(718),r=n(573).isDimensionStacked;t.exports=function(t){return{seriesType:t,plan:o(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,o=t.pipelineContext.large;if(n){var a=i(n.dimensions,(function(t){return e.mapDimension(t)})).slice(0,2),s=a.length,l=e.getCalculationInfo("stackResultDimension");return r(e,a[0])&&(a[0]=l),r(e,a[1])&&(a[1]=l),s&&{progress:function(t,e){for(var i=t.end-t.start,r=o&&new Float32Array(i*s),l=t.start,c=0,u=[],h=[];l<t.end;l++){var f;if(1===s){var d=e.get(a[0],l);f=!isNaN(d)&&n.dataToPoint(d,null,h)}else{d=u[0]=e.get(a[0],l);var p=u[1]=e.get(a[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(u,null,h)}o?(r[c++]=f?f[0]:NaN,r[c++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}o&&e.setLayout("symbolPoints",r)}}}}}}},639:function(t,e,n){var i=n(382),o=n(566),r=n(355).isObject;function a(t){this.group=new i.Group,this._symbolCtor=t||o}var s=a.prototype;function l(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function c(t){return null==t||r(t)||(t={isIgnore:t}),t||{}}function u(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}s.updateData=function(t,e){e=c(e);var n=this.group,o=t.hostModel,r=this._data,a=this._symbolCtor,s=u(t);r||n.removeAll(),t.diff(r).add((function(i){var o=t.getItemLayout(i);if(l(t,o,i,e)){var r=new a(t,i,s);r.attr("position",o),t.setItemGraphicEl(i,r),n.add(r)}})).update((function(c,u){var h=r.getItemGraphicEl(u),f=t.getItemLayout(c);l(t,f,c,e)?(h?(h.updateData(t,c,s),i.updateProps(h,{position:f},o)):(h=new a(t,c)).attr("position",f),n.add(h),t.setItemGraphicEl(c,h)):n.remove(h)})).remove((function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut((function(){n.remove(e)}))})).execute(),this._data=t},s.isPersistent=function(){return!0},s.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl((function(e,n){var i=t.getItemLayout(n);e.attr("position",i)}))},s.incrementalPrepareUpdate=function(t){this._seriesScope=u(t),this._data=null,this.group.removeAll()},s.incrementalUpdate=function(t,e,n){function i(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}n=c(n);for(var o=t.start;o<t.end;o++){var r=e.getItemLayout(o);if(l(e,r,o,n)){var a=new this._symbolCtor(e,o,this._seriesScope);a.traverse(i),a.attr("position",r),this.group.add(a),e.setItemGraphicEl(o,a)}}},s.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl((function(t){t.fadeOut((function(){e.remove(t)}))})):e.removeAll()};var h=a;t.exports=h},697:function(t,e,n){var i=n(368);n(704),n(705);var o=n(581),r=n(629),a=n(707);n(722),i.registerVisual(o("line","circle","line")),i.registerLayout(r("line")),i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC,a("line"))},698:function(t,e,n){var i=n(524),o=n(505),r=n(800),a=o.min,s=o.max,l=o.scaleAndAdd,c=o.copy,u=[],h=[],f=[];function d(t){return isNaN(t[0])||isNaN(t[1])}function p(t,e,n,i,o,r,a,s,l,c,u){return"none"!==c&&c?m.apply(this,arguments):g.apply(this,arguments)}function m(t,e,n,i,o,r,a,s,l,u,p){for(var m=0,g=n,v=0;v<i;v++){var y=e[g];if(g>=o||g<0)break;if(d(y)){if(p){g+=r;continue}break}if(g===n)t[r>0?"moveTo":"lineTo"](y[0],y[1]);else if(l>0){var b=e[m],x="y"===u?1:0,S=(y[x]-b[x])*l;c(h,b),h[x]=b[x]+S,c(f,y),f[x]=y[x]-S,t.bezierCurveTo(h[0],h[1],f[0],f[1],y[0],y[1])}else t.lineTo(y[0],y[1]);m=g,g+=r}return v}function g(t,e,n,i,r,p,m,g,v,y,b){for(var x=0,S=n,O=0;O<i;O++){var _=e[S];if(S>=r||S<0)break;if(d(_)){if(b){S+=p;continue}break}if(S===n)t[p>0?"moveTo":"lineTo"](_[0],_[1]),c(h,_);else if(v>0){var I=S+p,w=e[I];if(b)for(;w&&d(e[I]);)w=e[I+=p];var A=.5,N=e[x];if(!(w=e[I])||d(w))c(f,_);else{var k,M;if(d(w)&&!b&&(w=_),o.sub(u,w,N),"x"===y||"y"===y){var P="x"===y?0:1;k=Math.abs(_[P]-N[P]),M=Math.abs(_[P]-w[P])}else k=o.dist(_,N),M=o.dist(_,w);l(f,_,u,-v*(1-(A=M/(M+k))))}a(h,h,g),s(h,h,m),a(f,f,g),s(f,f,m),t.bezierCurveTo(h[0],h[1],f[0],f[1],_[0],_[1]),l(h,_,u,v*A)}else t.lineTo(_[0],_[1]);x=S,S+=p}return O}function v(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var o=0;o<t.length;o++){var r=t[o];r[0]<n[0]&&(n[0]=r[0]),r[1]<n[1]&&(n[1]=r[1]),r[0]>i[0]&&(i[0]=r[0]),r[1]>i[1]&&(i[1]=r[1])}return{min:e?n:i,max:e?i:n}}var y=i.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:r(i.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,o=n.length,r=v(n,e.smoothConstraint);if(e.connectNulls){for(;o>0&&d(n[o-1]);o--);for(;i<o&&d(n[i]);i++);}for(;i<o;)i+=p(t,n,i,o,o,1,r.min,r.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),b=i.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:r(i.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,o=0,r=n.length,a=e.smoothMonotone,s=v(n,e.smoothConstraint),l=v(i,e.smoothConstraint);if(e.connectNulls){for(;r>0&&d(n[r-1]);r--);for(;o<r&&d(n[o]);o++);}for(;o<r;){var c=p(t,n,o,r,r,1,s.min,s.max,e.smooth,a,e.connectNulls);p(t,i,o+c-1,c,r,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),o+=c+1,t.closePath()}}});e.Polyline=y,e.Polygon=b},704:function(t,e,n){n(442).__DEV__;var i=n(663),o=n(563).extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return i(this.getSource(),this,{useEncodeDefaulter:!0})},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clip:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});t.exports=o},705:function(t,e,n){n(442).__DEV__;var i=n(355),o=n(736).fromPoints,r=n(639),a=n(566),s=n(706),l=n(382),c=n(445),u=n(698),h=u.Polyline,f=u.Polygon,d=n(675),p=n(580),m=p.prepareDataCoordInfo,g=p.getStackedOnPoint,v=n(721),y=v.createGridClipPath,b=v.createPolarClipPath;function x(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],o=e[n];if(i[0]!==o[0]||i[1]!==o[1])return}return!0}}function S(t,e){var n=[],i=[],r=[],a=[];return o(t,n,i),o(e,r,a),Math.max(Math.abs(n[0]-r[0]),Math.abs(n[1]-r[1]),Math.abs(i[0]-a[0]),Math.abs(i[1]-a[1]))}function O(t){return"number"==typeof t?t:t?.5:0}function _(t,e,n){for(var i=e.getBaseAxis(),o="x"===i.dim||"radius"===i.dim?0:1,r=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];r.push(l);var c=[];switch(n){case"end":c[o]=s[o],c[1-o]=l[1-o],r.push(c);break;case"middle":var u=(l[o]+s[o])/2,h=[];c[o]=h[o]=u,c[1-o]=l[1-o],h[1-o]=s[1-o],r.push(c),r.push(h);break;default:c[o]=l[o],c[1-o]=s[1-o],r.push(c)}}return t[a]&&r.push(t[a]),r}function I(t,e,n){var o=t.get("showAllSymbol"),r="auto"===o;if(!o||r){var s=n.getAxesByScale("ordinal")[0];if(s&&(!r||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var o=e.count(),r=Math.max(1,Math.round(o/5)),s=0;s<o;s+=r)if(1.5*a.getSymbolSize(e,s)[t.isHorizontal()?1:0]>i)return!1;return!0}(s,e))){var l=e.mapDimension(s.dim),c={};return i.each(s.getViewLabels(),(function(t){c[t.tickValue]=1})),function(t){return!c.hasOwnProperty(e.get(l,t))}}}}function w(t,e,n){if("cartesian2d"===t.type){var i=t.getBaseAxis().isHorizontal(),o=y(t,e,n);if(!n.get("clip",!0)){var r=o.shape,a=Math.max(r.width,r.height);i?(r.y-=a,r.height+=2*a):(r.x-=a,r.width+=2*a)}return o}return b(t,e,n)}var A=d.extend({type:"line",init:function(){var t=new l.Group,e=new r;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var o=t.coordinateSystem,r=this.group,a=t.getData(),s=t.getModel("lineStyle"),c=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),h="polar"===o.type,f=this._coordSys,d=this._symbolDraw,p=this._polyline,v=this._polygon,y=this._lineGroup,b=t.get("animation"),S=!c.isEmpty(),A=c.get("origin"),N=function(t,e,n){if(!n.valueDim)return[];for(var i=[],o=0,r=e.count();o<r;o++)i.push(g(n,t,e,o));return i}(o,a,m(o,a,A)),k=t.get("showSymbol"),M=k&&!h&&I(t,a,o),P=this._data;P&&P.eachItemGraphicEl((function(t,e){t.__temp&&(r.remove(t),P.setItemGraphicEl(e,null))})),k||d.remove(),r.add(y);var D,j=!h&&t.get("step");o&&o.getArea&&t.get("clip",!0)&&(null!=(D=o.getArea()).width?(D.x-=.1,D.y-=.1,D.width+=.2,D.height+=.2):D.r0&&(D.r0-=.5,D.r1+=.5)),this._clipShapeForSymbol=D,p&&f.type===o.type&&j===this._step?(S&&!v?v=this._newPolygon(u,N,o,b):v&&!S&&(y.remove(v),v=this._polygon=null),y.setClipPath(w(o,!1,t)),k&&d.updateData(a,{isIgnore:M,clipShape:D}),a.eachItemGraphicEl((function(t){t.stopAnimation(!0)})),x(this._stackedOnPoints,N)&&x(this._points,u)||(b?this._updateAnimation(a,N,o,n,j,A):(j&&(u=_(u,o,j),N=_(N,o,j)),p.setShape({points:u}),v&&v.setShape({points:u,stackedOnPoints:N})))):(k&&d.updateData(a,{isIgnore:M,clipShape:D}),j&&(u=_(u,o,j),N=_(N,o,j)),p=this._newPolyline(u,o,b),S&&(v=this._newPolygon(u,N,o,b)),y.setClipPath(w(o,!0,t)));var C=function(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var o,r,a=n.length-1;a>=0;a--){var s=n[a].dimension,c=t.dimensions[s],u=t.getDimensionInfo(c);if("x"===(o=u&&u.coordDim)||"y"===o){r=n[a];break}}if(r){var h=e.getAxis(o),f=i.map(r.stops,(function(t){return{coord:h.toGlobalCoord(h.dataToCoord(t.value)),color:t.color}})),d=f.length,p=r.outerColors.slice();d&&f[0].coord>f[d-1].coord&&(f.reverse(),p.reverse());var m=f[0].coord-10,g=f[d-1].coord+10,v=g-m;if(v<.001)return"transparent";i.each(f,(function(t){t.offset=(t.coord-m)/v})),f.push({offset:d?f[d-1].offset:.5,color:p[1]||"transparent"}),f.unshift({offset:d?f[0].offset:.5,color:p[0]||"transparent"});var y=new l.LinearGradient(0,0,0,0,f,!0);return y[o]=m,y[o+"2"]=g,y}}}(a,o)||a.getVisual("color");p.useStyle(i.defaults(s.getLineStyle(),{fill:"none",stroke:C,lineJoin:"bevel"}));var E=t.get("smooth");if(E=O(t.get("smooth")),p.setShape({smooth:E,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),v){var T=a.getCalculationInfo("stackedOnSeries"),L=0;v.useStyle(i.defaults(c.getAreaStyle(),{fill:C,opacity:.7,lineJoin:"bevel"})),T&&(L=O(T.get("smooth"))),v.setShape({smooth:E,stackedOnSmooth:L,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=o,this._stackedOnPoints=N,this._points=u,this._step=j,this._valueOrigin=A},dispose:function(){},highlight:function(t,e,n,i){var o=t.getData(),r=c.queryDataIndex(o,i);if(!(r instanceof Array)&&null!=r&&r>=0){var s=o.getItemGraphicEl(r);if(!s){var l=o.getItemLayout(r);if(!l)return;if(this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(l[0],l[1]))return;(s=new a(o,r)).position=l,s.setZ(t.get("zlevel"),t.get("z")),s.ignore=isNaN(l[0])||isNaN(l[1]),s.__temp=!0,o.setItemGraphicEl(r,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else d.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var o=t.getData(),r=c.queryDataIndex(o,i);if(null!=r&&r>=0){var a=o.getItemGraphicEl(r);a&&(a.__temp?(o.setItemGraphicEl(r,null),this.group.remove(a)):a.downplay())}else d.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new h({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new f({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,o,r){var a=this._polyline,c=this._polygon,u=t.hostModel,h=s(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,r),f=h.current,d=h.stackedOnCurrent,p=h.next,m=h.stackedOnNext;if(o&&(f=_(h.current,n,o),d=_(h.stackedOnCurrent,n,o),p=_(h.next,n,o),m=_(h.stackedOnNext,n,o)),S(f,p)>3e3||c&&S(d,m)>3e3)return a.setShape({points:p}),void(c&&c.setShape({points:p,stackedOnPoints:m}));a.shape.__points=h.current,a.shape.points=f,l.updateProps(a,{shape:{points:p}},u),c&&(c.setShape({points:f,stackedOnPoints:d}),l.updateProps(c,{shape:{points:p,stackedOnPoints:m}},u));for(var g=[],v=h.status,y=0;y<v.length;y++){if("="===v[y].cmd){var b=t.getItemGraphicEl(v[y].idx1);b&&g.push({el:b,ptIdx:y})}}a.animators&&a.animators.length&&a.animators[0].during((function(){for(var t=0;t<g.length;t++){g[t].el.attr("position",a.shape.__points[g[t].ptIdx])}}))},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl((function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))})),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});t.exports=A},706:function(t,e,n){var i=n(580),o=i.prepareDataCoordInfo,r=i.getStackedOnPoint;t.exports=function(t,e,n,i,a,s,l,c){for(var u=function(t,e){var n=[];return e.diff(t).add((function(t){n.push({cmd:"+",idx:t})})).update((function(t,e){n.push({cmd:"=",idx:e,idx1:t})})).remove((function(t){n.push({cmd:"-",idx:t})})).execute(),n}(t,e),h=[],f=[],d=[],p=[],m=[],g=[],v=[],y=o(a,e,l),b=o(s,t,c),x=0;x<u.length;x++){var S=u[x],O=!0;switch(S.cmd){case"=":var _=t.getItemLayout(S.idx),I=e.getItemLayout(S.idx1);(isNaN(_[0])||isNaN(_[1]))&&(_=I.slice()),h.push(_),f.push(I),d.push(n[S.idx]),p.push(i[S.idx1]),v.push(e.getRawIndex(S.idx1));break;case"+":var w=S.idx;h.push(a.dataToPoint([e.get(y.dataDimsForPoint[0],w),e.get(y.dataDimsForPoint[1],w)])),f.push(e.getItemLayout(w).slice()),d.push(r(y,a,e,w)),p.push(i[w]),v.push(e.getRawIndex(w));break;case"-":w=S.idx;var A=t.getRawIndex(w);A!==w?(h.push(t.getItemLayout(w)),f.push(s.dataToPoint([t.get(b.dataDimsForPoint[0],w),t.get(b.dataDimsForPoint[1],w)])),d.push(n[w]),p.push(r(b,s,t,w)),v.push(A)):O=!1}O&&(m.push(S),g.push(g.length))}g.sort((function(t,e){return v[t]-v[e]}));var N=[],k=[],M=[],P=[],D=[];for(x=0;x<g.length;x++){w=g[x];N[x]=h[w],k[x]=f[w],M[x]=d[w],P[x]=p[w],D[x]=m[w]}return{current:N,next:k,stackedOnCurrent:M,stackedOnNext:P,status:D}}},707:function(t,e){var n={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},i=function(t,e){return Math.round(t.length/2)};t.exports=function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,o){var r=t.getData(),a=t.get("sampling"),s=t.coordinateSystem;if("cartesian2d"===s.type&&a){var l,c=s.getBaseAxis(),u=s.getOtherAxis(c),h=c.getExtent(),f=Math.abs(h[1]-h[0]),d=Math.round(r.count()/f);if(d>1)"string"==typeof a?l=n[a]:"function"==typeof a&&(l=a),l&&t.setData(r.downSample(r.mapDimension(u.dim),1/d,l,i))}}}}},716:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));n(198),n(21),n(381),n(444),n(54),n(124),n(85),n(34),n(32),n(374),n(199),n(55);var i=n(31),o=n(52),r=n(12),a=n.n(r),s=n(623),l=n(475);function c(t,e){var n=Object(s.a)(e,"{@value}");return a()(t)?Object(o.a)(Object(o.a)(Object(o.a)({},n),t),{},{show:!0}):Object(o.a)(Object(o.a)({},n),{},{position:t,show:!0})}function u(t,e,n,i){return["".concat(t+e*n+i*n,"%"),"".concat(t+(n+1)*e+i*n,"%")]}function h(t,e,n,o){var r="line"===t?o.bars?[].concat(o.bars):[]:o.lines?[].concat(o.lines):[],s=o.valueAxis?[].concat(o.valueAxis):[],l="x"===o.direction?"yAxisIndex":"xAxisIndex";return n.slice(1).map((function(n){var c=0;s.length&&(c=s.findIndex((function(t){var e=a()(t)?t:{name:t};return[n.name,n.displayName].includes(e.name)}))),c=Math.max(0,c);var u="line"===t?r.includes(n.name)?"bar":t:r.includes(n.name)?"line":t,h=function(t,e){if(!t)return null;if(Array.isArray(t))return!!t.find((function(t){return[e.name,e.displayName,e].includes(t)}))?"stack":null;if(a()(t)){var n=Object.values(t).find((function(t){return!!t.find((function(t){return[e.name,e.displayName,e].includes(t)}))}));return n?n[0]:null}}(o.stack,n);return Object(i.a)({type:u,stack:h,areaStyle:h?{}:null,seriesLayoutBy:e},l,c)}))}function f(t){t.dimensions;var e=t.source,n=t.settings,i=n.level;if(!i)return{type:"pie",radius:n.radius,center:n.center,roseType:n.roseType,labelLine:l.b,itemStyle:n.roseType?l.c:{}};var o=i.length,r=n.radius||[0,90],a=parseInt(r[0]||0),s=parseInt(r[1]||0),c=n.levelGap;if(c*(o-1)>s-a)throw new Error("参数错误，环间距之和大于外径和内径差。请设置合适的levelGap参数(默认10%)");var h=(s-a-c*(o-1))/o;return i.map((function(t,i){var r=function(t,e,n){return e.filter((function(t){return n.includes(t[0])})).map((function(t){return{name:t[0],value:t[1]}}))}(0,e.slice(1),t),s=i===o-1;return{type:"pie",radius:u(a,h,i,c),center:n.center,roseType:n.roseType,label:s?{}:{position:"inside"},labelLine:l.b,itemStyle:n.roseType?l.c:{},data:r}}))}function d(t){var e=t.type,n=t.layout,i=void 0===n?"column":n,o=t.dimensions,r=t.settings,a=h(e,i,o,r);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;e&&(Array.isArray(e)?t.forEach((function(t,i){var o=n.slice(1)[i],r=e[i];r&&(t.label=c(r,o))})):t.forEach((function(t,i){var o=n.slice(1)[i];t.label=c(e,o)})))}(a,r.label,o),a}},717:function(t,e,n){"use strict";var i=n(52),o=n(125),r=n(574),a=n(575),s=(n(198),n(381),n(124),n(85),n(32),n(199),n(475)),l=n(12),c=n.n(l),u=n(623);var h=n(716),f=n(495);e.a=function(t,e,n){var l=t.data,d=t.settings,p=Object(o.b)(l),m=Object(r.a)(p),g=Object(a.a)(n,d),v=Object(r.b)(m,p,g),y=function(t,e){var n=t.direction,o=t.valueAxis,r=e.dimensions,a=r[0]?[{type:"category"}]:void 0,l=r[1]||{},h=o?[].concat(o):[],f=[{type:"value",axisLabel:Object(u.a)(l)}];h.length&&(f=h.map((function(t,e){var o=c()(t)?t:{name:t},a=r.find((function(t){return[t.name,t.displayName].includes(o.name)}))||{};return Object(i.a)(Object(i.a)({type:"value",position:s.d[n][e],axisLabel:Object(u.a)(a)},o),{},{name:a.displayName||a.name||o.name})})));var d="x"===n;return{xAxis:d?a:f,yAxis:d?f:a}}(g,v),b=Object(h.b)({type:e,layout:p.layout,dimensions:v.dimensions,settings:g}),x=Object(i.a)(Object(i.a)({tooltip:{},legend:{}},y),{},{series:b,dataset:v});return Object(f.a)(x,{series:{smooth:g.smooth},xAxis:{boundaryGap:!0,axisTick:{alignWithLabel:!0}},yAxis:{boundaryGap:!0,axisTick:{alignWithLabel:!0}}}),x}},880:function(t,e,n){"use strict";var i=n(528),o=(n(732),n(697),n(53)),r=(n(124),n(197),n(717)),a={direction:{type:String,default:"x",validator:function(t){return["x","y"].includes(t)}},label:[String,Object,Array],valueAxis:[String,Object,Array],stack:[Object,Array],lines:[String,Array],smooth:{type:[Boolean,Number],default:.5}},s={name:"MyChartBar",mixins:[i.a],adapter:function(t){return Object(r.a)(t,"bar",a)}};e.a=Object(o.a)(s)}}]);