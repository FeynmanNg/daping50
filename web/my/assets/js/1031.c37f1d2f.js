(window.webpackJsonp=window.webpackJsonp||[]).push([[1031],{3604:function(t,e,i){"use strict";i.r(e);var n=i(456),r=i(0);i(584);r.default.use(n.a);var s={data:function(){return{options:{title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]}}}},o=i(19),a=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("my-chart",{attrs:{options:this.options,debug:""}})}),[],!1,null,null,null);e.default=a.exports},366:function(t,e,i){"use strict";e.__esModule=!0,e.removeResizeListener=e.addResizeListener=void 0;var n,r=i(393),s=(n=r)&&n.__esModule?n:{default:n};var o="undefined"==typeof window,a=function(t){var e=t,i=Array.isArray(e),n=0;for(e=i?e:e[Symbol.iterator]();;){var r;if(i){if(n>=e.length)break;r=e[n++]}else{if((n=e.next()).done)break;r=n.value}var s=r.target.__resizeListeners__||[];s.length&&s.forEach((function(t){t()}))}};e.addResizeListener=function(t,e){o||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new s.default(a),t.__ro__.observe(t)),t.__resizeListeners__.push(e))},e.removeResizeListener=function(t,e){t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||t.__ro__.disconnect())}},373:function(t,e,i){var n=i(2),r=i(377).entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},377:function(t,e,i){var n=i(11),r=i(80),s=i(16),o=i(122).f,a=function(t){return function(e){for(var i,a=s(e),c=r(a),h=c.length,u=0,f=[];h>u;)i=c[u++],n&&!o.call(a,i)||f.push(t?[i,a[i]]:a[i]);return f}};t.exports={entries:a(!0),values:a(!1)}},426:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"d",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o}));var n={color:["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"]},r={x:["left","right"],y:["bottom","top"]},s={smooth:.2},o={shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},443:function(t,e,i){"use strict";var n=i(78),r=(i(75),i(373),i(116),i(203),i(213)),s=i.n(r),o=i(206),a=i.n(o),c=i(12),h=i.n(c);e.a=function(t,e){Object.entries(e).forEach((function(e){var i=Object(n.a)(e,2),r=i[0],o=i[1];if(r.includes("."))s()(t,r,o);else if("function"==typeof o)t[r]=o(t[r]);else if(null===o)t[r]=o;else{var c=t[r];Array.isArray(c)&&h()(o)?c.forEach((function(t){a()(t,o)})):h()(c)?a()(c,o):t[r]=o}}))}},456:function(t,e,i){"use strict";var n=i(47),r=i(78),s=i(76),o=(i(75),i(373),i(30),i(77),i(9),i(365)),a=i.n(o),c=(i(604),i(583),i(605),i(484)),h=i(118);i(121);var u=i(366),f=i(443),d=i(426),l={name:"MyChart",props:{width:{type:String,default:"auto"},height:{type:String,default:"400px"},fit:Boolean,options:{type:Object},extend:[Object,Function],theme:{type:[String,Object],default:function(){return d.a}},loading:Boolean,debug:{type:Boolean},settings:{type:Object,default:function(){return{}}},data:{type:[Object,Array],default:function(){return{}}},map:String,register:[Object,Function],onRegister:Function,coords:{type:[Object,Array],default:function(){return{}}}},data:function(){return this.coordinates=Object.create(null),{}},computed:{classes:function(){var t;return t={},Object(s.a)(t,"my-chart-".concat(this._uid),!0),Object(s.a)(t,"my-chart",!0),t},styles:function(){return{width:this.fit?"100%":this.width,height:this.fit?"100%":this.height}}},watch:{options:function(){this.$nextTick(this.proxySetOption)},extend:function(){this.$nextTick(this.proxySetOption)},settings:function(){this.$nextTick(this.proxySetOption)},data:function(){this.$nextTick(this.proxySetOption)},loading:function(t){this.chart&&(t?this.chart.showLoading():this.chart.hideLoading())},coords:{handler:function(t){var e=Array.isArray(t)?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"value",n=Object.create(null);return t.forEach((function(t){n[t[e]]=t[i]})),n}(t):t;this.coordinates=Object.assign(this.coordinates,e)},immediate:!0},map:function(){this.registerMap().then(this.proxySetOption)}},methods:{init:function(){var t=this;this.chart=a.a.init(this.$el,this.theme),Object.entries(this.$listeners).forEach((function(e){var i=Object(r.a)(e,2),n=i[0],s=i[1];t.chart.on(n,s)})),this.loading&&this.chart.showLoading(),this.proxySetOption(),Object(u.addResizeListener)(this.$el,this.proxyResize)},nativeSetOption:function(t){this.debug&&(Object(c.b)(this.$options.name,this._uid),Object(c.a)(t),Object(c.a)("----------")),this.chart.setOption(t)},setOption:function(){if(this.chart)if(this.options)this.nativeSetOption(this.options);else{var t=this.$options.adapter?this.$options.adapter(this):{};this.extend&&Object(f.a)(t,"function"==typeof this.extend?this.extend(t):this.extend),this.nativeSetOption(t)}},dispose:function(){var t=this;this.chart&&(Object.entries(this.$listeners).forEach((function(e){var i=Object(r.a)(e,2),n=i[0],s=i[1];t.chart.off(n,s)})),this.chart.dispose(),this.chart=null,Object(u.removeResizeListener)(this.$el,this.proxyResize))},resize:function(){this.chart&&this.chart.resize()},recordCoords:function(t){var e=this;t&&t.features&&t.features.forEach((function(t){var i=t.properties;i.cp&&(e.coordinates[i.name]=i.cp)}))},registerMap:function(){var t=this,e=this.register,i=this.map;if(!e||!i)return Promise.resolve();var n=a.a.getMap(i);return n?(this.recordCoords(n.geoJson),Promise.resolve()):"function"==typeof e?e(this).then((function(e){return a.a.registerMap(i,e),t.recordCoords(e),t.onRegister&&t.onRegister(i,e),t.$emit("register",i,e),e})):(a.a.registerMap(i,e),this.recordCoords(e),this.onRegister&&this.onRegister(i,e),Promise.resolve())}},render:function(){var t=arguments[0];return t("div",{class:this.classes,style:this.styles})},created:function(){this.proxyResize=Object(h.c)(this.resize,50),this.proxySetOption=Object(h.c)(this.setOption,50)},mounted:function(){this.registerMap().then(this.init)},beforeDestroy:function(){this.dispose()}};e.a=Object(n.a)(l)},484:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a}));i(202);var n=i(48),r={default:"#35495E",primary:"#3488ff",success:"#43B883",warn:"#e6a23c",error:"#f56c6c"};function s(t,e){if(n.a.debug&&window&&window.console){var i=window.console[t];try{i.apply(window.console,e)}catch(t){}}}function o(){s("log",arguments)}function a(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary";o("%c ".concat(t," %c ").concat(e," %c"),"background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:".concat(r[i],"; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;"),"background:transparent")}},496:function(t,e,i){var n=i(368),r=i(374).round;function s(t,e,i){var r=t.getArea(),s=t.getBaseAxis().isHorizontal(),o=r.x,a=r.y,c=r.width,h=r.height,u=i.get("lineStyle.width")||2;o-=u/2,a-=u/2,c+=u,h+=u,o=Math.floor(o),c=Math.round(c);var f=new n.Rect({shape:{x:o,y:a,width:c,height:h}});return e&&(f.shape[s?"width":"height"]=0,n.initProps(f,{shape:{width:c,height:h}},i)),f}function o(t,e,i){var s=t.getArea(),o=new n.Sector({shape:{cx:r(t.cx,1),cy:r(t.cy,1),r0:r(s.r0,1),r:r(s.r,1),startAngle:s.startAngle,endAngle:s.endAngle,clockwise:s.clockwise}});return e&&(o.shape.endAngle=s.startAngle,n.initProps(o,{shape:{endAngle:s.endAngle}},i)),o}e.createGridClipPath=s,e.createPolarClipPath=o,e.createClipPath=function(t,e,i){return t?"polar"===t.type?o(t,e,i):"cartesian2d"===t.type?s(t,e,i):null:null}},539:function(t,e,i){var n=i(544).retrieveRawValue;e.getDefaultLabel=function(t,e){var i=t.mapDimension("defaultedLabel",!0),r=i.length;if(1===r)return n(t,e,i[0]);if(r){for(var s=[],o=0;o<i.length;o++){var a=n(t,e,i[o]);s.push(a)}return s.join(" ")}}}}]);