(window.webpackJsonp=window.webpackJsonp||[]).push([[1432],{1119:function(t,i,e){},1122:function(t,i,e){"use strict";var n=e(47),s=e(75),l=e(46),a=(e(201),e(116),{name:"MyDescription",props:{title:String,width:Number,gutter:{type:Number,default:10},align:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},top:Boolean,inline:Boolean,border:{type:Boolean,default:!1}},computed:{hasTitle:function(){return this.title||this.$slots.title},titleStyle:function(){return{width:this.top?null:"".concat(this.width,"px")}},contentStyle:function(){var t={};return this.border&&(t={backgroundSize:"calc(100% - ".concat((this.width||0)+this.gutter,"px) 100%"),backgroundPosition:"".concat((this.width||0)+this.gutter,"px 0")}),Object(l.a)({display:this.top||this.width?"block":"inline",paddingLeft:this.hasTitle&&!this.top?"".concat((this.width||0)+this.gutter,"px"):null,paddingTop:this.top&&this.hasTitle?"".concat(this.gutter,"px"):null},t)},titleClass:function(){return Object(s.a)({},"is-".concat(this.align),!!this.align)},contentClass:function(){var t;return t={},Object(s.a)(t,"is-".concat(this.align),this.top&&!!this.align),Object(s.a)(t,"is-border",this.border),t}}}),c=e(19),o=Object(c.a)(a,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"my-description",class:{"is-top":t.top,"is-inline":t.inline}},[e("div",{staticClass:"my-description__title",class:t.titleClass,style:t.titleStyle},[t._t("title",[t._v(t._s(t.title)+":")])],2),t._v(" "),e("div",{staticClass:"my-description__content",class:t.contentClass,style:t.contentStyle},[t._t("default")],2)])}),[],!1,null,null,null).exports;i.a=Object(n.a)(o)},3052:function(t,i,e){"use strict";e.r(i);e(1119),e(117);var n=e(1122);e(0).default.use(n.a);var s={},l=e(19),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("my-description",{attrs:{title:"标题"}},[this._v("数据项内容")])}),[],!1,null,null,null);i.default=a.exports}}]);