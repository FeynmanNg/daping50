(window.webpackJsonp=window.webpackJsonp||[]).push([[979],{3455:function(t,e,a){"use strict";a.r(e);a(758),a(124);var s=a(762),n=a(0),i={components:{MyHeader:s.a}};n.default.use(s.a);var l=i,r=a(18),c=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu"}})}),[],!1,null,null,null);e.default=c.exports},485:function(t,e,a){"use strict";a(123);var s={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},n=a(18),i=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},543:function(t,e,a){},544:function(t,e,a){},545:function(t,e,a){"use strict";var s=a(53),n=a(485);e.a=Object(s.a)(n.a)},547:function(t,e,a){"use strict";var s=a(53),n={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},i=a(18),l=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(485);e.a=Object(s.a)(l),Object(s.a)(r.a)},758:function(t,e,a){},762:function(t,e,a){"use strict";var s=a(53),n=(a(123),a(31)),i=(a(543),a(124),a(545)),l=(a(544),a(547)),r=a(0),c={name:"MyHeader",components:{MyFloat:l.a,MyFloatItem:i.a},props:{title:String,icon:String,background:Boolean,size:{type:String,default:"",validator:function(t){return["","large","medium","small"].includes(t)}},theme:{type:String,default:"default",validator:function(t){return["default","border-left","border-top","border-bottom","bg-icon","bg-down","bg-right"].includes(t)}}},computed:{classes:function(){var t;return[(t={},Object(n.a)(t,"my-header--".concat(this.theme),!!this.theme),Object(n.a)(t,"is-background",this.background),Object(n.a)(t,"my-header--border-top","bg-icon"===this.theme),Object(n.a)(t,"is-".concat(this.size),!!this.size),t)]}}};r.default.use(l.a),r.default.use(i.a);var o=c,u=a(18),f=Object(u.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("my-float",{staticClass:"my-header",class:t.classes},[a("div",{staticClass:"my-header__content"},[t.icon?a("i",{staticClass:"my-header__icon",class:t.icon}):t._e(),t._v(" "),t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),t.$slots.handle?a("my-float-item",{staticClass:"my-header__handle",attrs:{float:"right"}},[t._t("handle")],2):t._e()],1)}),[],!1,null,null,null).exports;e.a=Object(s.a)(f)}}]);