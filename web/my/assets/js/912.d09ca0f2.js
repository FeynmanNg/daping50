(window.webpackJsonp=window.webpackJsonp||[]).push([[912],{1093:function(e,t,n){},1094:function(e,t,n){},1100:function(e,t,n){"use strict";var i=n(53),r=(n(123),n(199),n(57)),s=n(670),a=n(608),o={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},l={name:"MyFlex",provide:function(){return{flex:this}},props:{inline:Boolean,direction:{type:String,default:"row",validator:function(e){return["row","row-reverse","column","column-reverse"].includes(e)}},wrap:{type:String,default:"nowrap",validator:function(e){return["nowrap","wrap","wrap-reverse"].includes(e)}},justify:{type:String,default:"flex-start",validator:function(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}},alignItems:{type:String,default:"stretch",validator:function(e){return["flex-start","flex-end","center","baseline","stretch"].includes(e)}},alignContent:{type:String,default:"stretch",validator:function(e){return["flex-start","flex-end","center","space-between","space-around","stretch"].includes(e)}},border:{type:Boolean},fit:Boolean,column:[Number,Object]},data:function(){return{screens:{}}},computed:{classes:function(){return["my-flex","is-direction-".concat(this.direction),"is-wrap-".concat(this.wrap),"is-justify-".concat(this.justify),"is-align-items-".concat(this.alignItems),"is-align-content-".concat(this.alignContent),{"is-inline":this.inline,"is-border":this.border,"is-fit":this.fit}]}},methods:{getColumn:function(){if("object"===Object(r.a)(this.column))for(var e=0;e<a.b.length;e++){var t=a.b[e];if(this.screens[t])return this.column[t]||o[t]}return"number"==typeof this.column?this.column:null}},mounted:function(){var e=this;this.token=a.a.on((function(t){"object"===Object(r.a)(e.column)&&(e.screens=t)}))},created:function(){s.b||console.warn("浏览器不支持Flex布局")},beforeDestroy:function(){a.a.off(this.token)}},u=n(18),c=Object(u.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports;t.a=Object(i.a)(c)},1101:function(e,t,n){"use strict";var i=n(53),r=(n(123),n(199),n(201),{name:"MyFlexItem",inject:{flex:{default:null}},props:{order:{type:Number},grow:Number,shrink:Number,basis:String,align:{type:String,default:"auto",validator:function(e){return["auto","flex-start","flex-end","center","baseline","stretch"].includes(e)}},center:Boolean,middle:Boolean,shadow:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"hover"].includes(e)}}},data:function(){return{hover:!1}},computed:{classes:function(){return["my-flex-item","is-align-".concat(this.align),{"is-shadow":!0===this.shadow||this.hover&&"hover"===this.shadow}]},styles:function(){return{order:this.order,flexGrow:this.grow,flexShrink:this.shrink,flexBasis:this.basis,width:this.getWidth()}},helperClasses:function(){return{"my-flex-item__helper":!0,"is-middle":this.middle}},innerClasses:function(){return{"my-flex-item__inner":!0,"is-center":this.center}}},methods:{getWidth:function(){if(this.flex){var e=this.flex.getColumn();if(e)return this.flex.direction.includes("row")?"".concat(100/e,"%"):null}},handleMouseEnter:function(){"hover"===this.shadow&&(this.hover=!0)},handleMouseLeave:function(){this.hover=!1}}}),s=n(18),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,style:e.styles,on:{mouseenter:e.handleMouseEnter,mouseleave:e.handleMouseLeave}},[n("div",{class:e.innerClasses},[e.middle?n("div",{class:e.helperClasses},[e._t("default")],2):e._t("default")],2)])}),[],!1,null,null,null).exports;t.a=Object(i.a)(a)},2161:function(e,t,n){},2516:function(e,t,n){"use strict";var i=n(2161);n.n(i).a},2895:function(e,t,n){"use strict";n.r(t);var i=n(536),r=n.n(i),s=n(598),a=n.n(s),o=(n(1093),n(124),n(1101)),l=(n(1094),n(1100)),u=n(0),c={components:{MyFlex:l.a,MyFlexItem:o.a},data:function(){return{alignItems:"stretch",alignItemsArray:["flex-start","flex-end","center","baseline","stretch"]}}};u.default.use(a.a),u.default.use(r.a),u.default.use(l.a),u.default.use(o.a);var f=c,d=(n(2516),n(18)),h=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-radio-group",{model:{value:e.alignItems,callback:function(t){e.alignItems=t},expression:"alignItems"}},e._l(e.alignItemsArray,(function(t){return n("el-radio",{attrs:{label:t}},[e._v(e._s(t))])})),1),e._v(" "),n("my-flex",{attrs:{"align-items":e.alignItems}},e._l(4,(function(t){return n("my-flex-item",{key:t,class:{tall:t%2==0,auto:"stretch"===e.alignItems}},[e._v(e._s(t))])})),1)],1)}),[],!1,null,"00cf39b0",null);t.default=h.exports},608:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));n(21),n(55),n(85),n(89),n(7),n(88),n(56);var i,r=n(31),s=n(52);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(617)}var a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},l=[],u=-1,c={},f={fire:function(e){return c=e,!(l.length<1)&&(l.forEach((function(e){e.func(c)})),!0)},on:function(e){0===l.length&&this.register();var t=(++u).toString();return l.push({token:t,func:e}),e(c),t},off:function(e){0===(l=l.filter((function(t){return t.token!==e}))).length&&this.unregister()},register:function(){var e=this;Object.keys(o).forEach((function(t){i.register(o[t],{match:function(){var n=Object(s.a)(Object(s.a)({},c),{},Object(r.a)({},t,!0));e.fire(n)},unmatch:function(){var n=Object(s.a)(Object(s.a)({},c),{},Object(r.a)({},t,!1));e.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(o).map((function(e){return i.unregister(o[e])}))}};t.a=f},670:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n(215);var i=function(e){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},r=i(["flex","webkitFlex","Flex","msFlex"]);t.a=i}}]);