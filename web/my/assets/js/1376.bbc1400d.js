(window.webpackJsonp=window.webpackJsonp||[]).push([[1376],{3211:function(t,e,n){"use strict";n.r(e);var a=n(757),i=n(466),r=n(0);r.default.use(i.a),r.default.use(a.a);var l={},s=n(19),c=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-placement",[e("div",{staticStyle:{padding:"20px"}},[this._v("默认浅色")])]),this._v(" "),e("my-map-placement",{attrs:{theme:"dark",placement:"right-bottom"}},[e("div",{staticStyle:{padding:"20px"}},[this._v("默认浅色")])])],1)}),[],!1,null,null,null);e.default=c.exports},757:function(t,e,n){"use strict";var a=n(47),i=(n(116),n(201),n(79),n(77),n(202),{name:"MyMapPlacement",props:{placement:{type:String,default:"left-bottom",validator:function(t){return["left-top","center-top","right-top","left-center","center-center","right-center","left-bottom","center-bottom","right-bottom"].includes(t)}},zIndex:{type:Number,default:1},margin:{type:[Array,Number],default:10},theme:{type:String,default:"light",validator:function(){return["light","dark"]}}},computed:{styles:function(){return{zIndex:this.zIndex,margin:[].concat(this.margin).map((function(t){return"".concat(t,"px")})).join(" ")}},classes:function(){return["is-".concat(this.theme),this.placement]}}}),r=n(19),l=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-map-placement",class:this.classes,style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports;n(760),e.a=Object(a.a)(l)},760:function(t,e,n){}}]);