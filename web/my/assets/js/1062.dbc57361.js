(window.webpackJsonp=window.webpackJsonp||[]).push([[1062],{3105:function(t,e,i){"use strict";i.r(e);var n=i(531),s=i(0);i(743);s.default.use(n.a);var r={data:function(){return{options:{title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]}}}},o=i(18),a=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("my-chart",{attrs:{options:this.options,debug:""}})}),[],!1,null,null,null);e.default=a.exports},477:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"d",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o}));var n="",s={x:["left","right"],y:["bottom","top"]},r={smooth:.2},o={shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}},506:function(t,e,i){"use strict";i(54),i(124),i(365),i(199),i(55);var n=i(86),s=i(205),r=i.n(s),o=i(201),a=i.n(o),c=i(12),h=i.n(c);e.a=function(t,e){Object.entries(e).forEach((function(e){var i=Object(n.a)(e,2),s=i[0],o=i[1];if(s.includes("."))r()(t,s,o);else if("function"==typeof o)t[s]=o(t[s]);else if(null===o)t[s]=o;else{var c=t[s];Array.isArray(c)&&h()(o)?c.forEach((function(t){a()(t,o)})):h()(c)?a()(c,o):t[s]=o}}))}},531:function(t,e,i){"use strict";var n=i(53),s=(i(54),i(85),i(32),i(365),i(7),i(55),i(86)),r=i(31),o=i(369),a=i.n(o),c=(i(676),i(664),i(677),i(533)),h=i(125),u=i(360),d=i(201),f=i.n(d),p=i(506),l=i(477),b={name:"MyChart",props:{width:{type:String,default:"auto"},height:{type:String,default:"400px"},fit:Boolean,options:{type:Object},extend:[Object,Function],theme:{type:[String,Object],default:l.a},loading:Boolean,debug:{type:Boolean},settings:{type:Object,default:function(){return{}}},data:{type:[Object,Array],default:function(){return{}}},map:String,register:[Object,Function],coords:{type:Object,default:function(){return{}}}},data:function(){return{coordinates:{}}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"my-chart-".concat(this._uid),!0),Object(r.a)(t,"my-chart",!0),t},styles:function(){return{width:this.fit?"100%":this.width,height:this.fit?"100%":this.height}}},watch:{options:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},extend:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},settings:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},data:{deep:!0,handler:function(){this.$nextTick(this.setOption)}},loading:function(t){this.chart&&(t?this.chart.showLoading():this.chart.hideLoading())},map:function(){this.registerMap().then(this.setOption).catch((function(t){return t}))},coords:{handler:function(t){this.coordinates=Object.assign(this.coordinates,t)},immediate:!0}},methods:{init:function(){var t=this;this.chart=a.a.init(this.$el,this.theme),Object.entries(this.$listeners).forEach((function(e){var i=Object(s.a)(e,2),n=i[0],r=i[1];t.chart.on(n,r)})),this.loading&&this.chart.showLoading(),this.setOption(),Object(u.addResizeListener)(this.$el,this.proxyResize)},nativeSetOption:function(t){this.debug&&(Object(c.b)(this.$options.name,this._uid),Object(c.a)(t),Object(c.a)("----------")),this.chart.setOption(t)},setOption:function(){if(this.chart)if(this.options)this.nativeSetOption(this.options);else{var t=this.$options.adapter?this.$options.adapter(this):{},e=f()({},this.options||{},t);this.extend&&Object(p.a)(e,"function"==typeof this.extend?this.extend():this.extend),this.nativeSetOption(e)}},dispose:function(){var t=this;this.chart&&(Object.entries(this.$listeners).forEach((function(e){var i=Object(s.a)(e,2),n=i[0],r=i[1];t.chart.off(n,r)})),this.chart.dispose(),this.chart=null,Object(u.removeResizeListener)(this.$el,this.proxyResize))},resize:function(){this.chart&&this.$nextTick(this.chart.resize)},recordCoords:function(t){var e=this;t&&t.features&&t.features.forEach((function(t){var i=t.properties;e.coordinates[i.name]=i.cp}))},registerMap:function(){var t=this,e=this.register,i=this.map;if(!e||!i)return Promise.reject(new Error(null));var n=this.echarts.getMap(i);return n?(this.recordCoords(n.geoJson),Promise.resolve()):"function"==typeof e?e(this).then((function(e){return t.echarts.registerMap(i,e),t.recordCoords(e),e})):(this.echarts.registerMap(i,e),this.recordCoords(e),Promise.resolve())}},render:function(){var t=arguments[0];return t("div",{class:this.classes,style:this.styles},["my-chart"])},beforeCreate:function(){this.echarts=a.a},created:function(){this.registerMap().then(this.setOption).catch((function(t){return t})),this.proxyResize=Object(h.c)(this.resize,100)},mounted:function(){this.init()},beforeDestroy:function(){this.dispose()}};e.a=Object(n.a)(b)},533:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a}));i(198);var n=i(56),s={default:"#35495E",primary:"#3488ff",success:"#43B883",warn:"#e6a23c",error:"#f56c6c"};function r(t,e){if(n.a.debug&&window&&window.console){var i=window.console[t];try{i.apply(window.console,e)}catch(t){}}}function o(){r("log",arguments)}function a(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary";o("%c ".concat(t," %c ").concat(e," %c"),"background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:".concat(s[i],"; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;"),"background:transparent")}}}]);