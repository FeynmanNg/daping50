(window.webpackJsonp=window.webpackJsonp||[]).push([[1176],{1522:function(t,e,n){},1578:function(t,e,n){"use strict";n(1522)},1610:function(t,e,n){"use strict";var i=n(53),a=(n(200),n(52)),r={name:"MyDvIndicator",components:{Box:n(393).a},inheritAttrs:!1,inject:{page:{default:null}},props:{type:{type:String,default:"horizontal",validator:function(){return["horizontal","vertical"]}},interval:{type:Number,default:1e4},auto:Boolean},computed:{screens:function(){var t;return(null===(t=this.page)||void 0===t?void 0:t.screens)||[]},activeIndex:function(){var t;return null===(t=this.page)||void 0===t?void 0:t.screenActiveIndex},boxProps:function(){return Object(a.a)(Object(a.a)({},{horizontal:{width:"100%",height:"40px",xAlign:"center",yAlign:"bottom"},vertical:{width:"40px",height:"100%",xAlign:"right",yAlign:"middle"}}[this.type]),this.$attrs)}},methods:{change:function(t){this.page&&(this.page.screenActiveIndex=Math.abs(t%this.screens.length))},autoChange:function(){var t=this;clearInterval(this.timer);var e=this.activeIndex;this.timer=setInterval((function(){t.change(++e)}),this.interval)}},mounted:function(){this.auto&&this.autoChange()},beforeDestroy:function(){clearInterval(this.timer)}},s=(n(1578),n(18)),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-indicator"},"Box",t.boxProps,!1),[n("div",{staticClass:"my-dv-indicator__dots"},t._l(t.screens,(function(e,i){return n("div",{key:e._uid,staticClass:"my-dv-indicator__item",class:{"is-active":t.activeIndex===i},on:{click:function(e){return t.change(i)}}})})),0)])}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},3092:function(t,e,n){"use strict";n.r(e);var i=n(2003),a=n(428),r=n(1610),s=n(0);s.default.use(r.a),s.default.use(a.a),s.default.use(i.a);var c={},o=n(18),l=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-screen",[this._v("场景 一")]),this._v(" "),e("my-dv-screen",[this._v("场景 二")]),this._v(" "),e("my-dv-screen",[this._v("场景 三")]),this._v(" "),e("my-dv-indicator",{attrs:{type:"vertical"}})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);