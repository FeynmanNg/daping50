(window.webpackJsonp=window.webpackJsonp||[]).push([[1184],{2342:function(t,e,i){},2629:function(t,e,i){"use strict";i(2342)},2894:function(t,e,i){"use strict";i.r(e);var s=i(477),n=i(47),a={name:"MyDvBorder4",mixins:[i(853).a]},l=(i(2629),i(19)),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Box",t._b({staticClass:"my-dv-border-4",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[i("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[i("polygon",{attrs:{fill:t.fill,points:"\n      10, 22 "+(t.width-22)+", 22 "+(t.width-22)+", "+(t.height-86)+" "+(t.width-84)+", "+(t.height-24)+" 10, "+(t.height-24)+"\n    "}}),t._v(" "),i("polyline",{staticClass:"dv-bb5-line-1",attrs:{fill:"transparent",stroke:t.light,points:"8, 5 "+(t.width-5)+", 5 "+(t.width-5)+", "+(t.height-100)+"\n        "+(t.width-100)+", "+(t.height-5)+" 8, "+(t.height-5)+" 8, 5"}}),t._v(" "),i("polyline",{staticClass:"dv-bb5-line-2",attrs:{fill:"transparent",stroke:t.dark,points:"3, 5 "+(t.width-20)+", 5 "+(t.width-20)+", "+(t.height-60)+"\n        "+(t.width-74)+", "+(t.height-5)+" 3, "+(t.height-5)+" 3, 5"}}),t._v(" "),i("polyline",{staticClass:"dv-bb5-line-3",attrs:{"stroke-width":"5",stroke:t.dark,points:"50, 13 "+(t.width-35)+", 13"}}),t._v(" "),i("polyline",{staticClass:"dv-bb5-line-4",attrs:{"stroke-width":"2",stroke:t.dark,points:"15, 20 "+(t.width-35)+", 20"}}),t._v(" "),i("polyline",{staticClass:"dv-bb5-line-5",attrs:{"stroke-width":"2",stroke:t.dark,points:"15, "+(t.height-20)+" "+(t.width-110)+", "+(t.height-20)}}),t._v(" "),i("polyline",{staticClass:"dv-bb5-line-6",attrs:{"stroke-width":"5",stroke:t.dark,points:"15, "+(t.height-13)+" "+(t.width-110)+", "+(t.height-13)}})]),t._v(" "),i("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,d=Object(n.a)(r),o=i(0);o.default.use(d),o.default.use(s.a);var h={},c=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border4",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=c.exports},729:function(t,e,i){},850:function(t,e,i){},851:function(t,e,i){"use strict";i(729)},853:function(t,e,i){"use strict";i(383),i(201);var s=i(422),n=i(501),a=i(47),l={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},r=(i(851),i(19)),d=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,o=Object(a.a)(d),h=i(733);i(850),e.a={mixins:[n.a,h.a],inheritAttrs:!1,components:{Box:s.a,BoxContent:o},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);