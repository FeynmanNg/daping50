(window.webpackJsonp=window.webpackJsonp||[]).push([[1113],{2389:function(t,e,a){},2706:function(t,e,a){"use strict";a(2389)},3172:function(t,e,a){"use strict";a.r(e);a(551),a(117);var s=a(553),i=(a(552),a(554)),l=a(0),n={components:{MyFloat:i.a,MyFloatItem:s.a}};l.default.use(i.a),l.default.use(s.a);var r=n,c=(a(2706),a(19)),o=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("my-float",{attrs:{fit:"",reverse:""}},[e("my-float-item",{staticClass:"left"},[this._v("左边内容")]),this._v(" "),e("my-float-item",{staticClass:"right",attrs:{float:"right"}},[this._v("右边内容")])],1)],1)}),[],!1,null,"5f8c68d8",null);e.default=o.exports},494:function(t,e,a){"use strict";a(116);var s={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},i=a(19),l=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},551:function(t,e,a){},552:function(t,e,a){},553:function(t,e,a){"use strict";var s=a(47),i=a(494);e.a=Object(s.a)(i.a)},554:function(t,e,a){"use strict";var s=a(47),i={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},l=a(19),n=Object(l.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(494);e.a=Object(s.a)(n),Object(s.a)(r.a)}}]);