(window.webpackJsonp=window.webpackJsonp||[]).push([[922],{2959:function(e,t,a){"use strict";a.r(t);a(640),a(124);var r=a(641),n=a(0),i={components:{MyHeader:r.a}};n.default.use(r.a);var o=i,l=a(18),s=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",background:"",size:"small"}}),e._v(" "),a("hr"),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",theme:"border-left",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",theme:"border-left",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",theme:"border-left",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",theme:"border-left",background:"",size:"small"}}),e._v(" "),a("hr"),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-top",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-top",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-top",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-top",background:"",size:"small"}}),e._v(" "),a("hr"),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-bottom",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-bottom",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-bottom",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"border-bottom",background:"",size:"small"}}),e._v(" "),a("hr"),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-icon",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-icon",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-icon",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-icon",background:"",size:"small"}}),e._v(" "),a("hr"),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-down",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-down",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-down",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-down",background:"",size:"small"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-right",background:"",size:"large"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-right",background:""}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-right",background:"",size:"medium"}}),e._v(" "),a("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu",theme:"bg-right",background:"",size:"small"}})],1)}),[],!1,null,null,null);t.default=s.exports},437:function(e,t,a){"use strict";a(125);var r={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(e){return["none","left","right"].includes(e)}}},computed:{classes:function(){if(this.wrapper){var e=this.float;return this.wrapper.reverse&&(e="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(e),{"is-fit":this.wrapper.fit}]}}}},n=a(18),i=Object(n.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);t.a=i.exports},479:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){"use strict";var r=a(53),n=a(437);t.a=Object(r.a)(n.a)},484:function(e,t,a){"use strict";var r=a(53),n={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},i=a(18),o=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,l=a(437);t.a=Object(r.a)(o),Object(r.a)(l.a)},640:function(e,t,a){},641:function(e,t,a){"use strict";var r=a(53),n=(a(125),a(31)),i=(a(479),a(124),a(481)),o=(a(480),a(484)),l=a(0),s={name:"MyHeader",components:{MyFloat:o.a,MyFloatItem:i.a},props:{title:String,icon:String,background:Boolean,size:{type:String,default:"",validator:function(e){return["","large","medium","small"].includes(e)}},theme:{type:String,default:"default",validator:function(e){return["default","border-left","border-top","border-bottom","bg-icon","bg-down","bg-right"].includes(e)}}},computed:{classes:function(){var e;return[(e={},Object(n.a)(e,"my-header--".concat(this.theme),!!this.theme),Object(n.a)(e,"is-background",this.background),Object(n.a)(e,"my-header--border-top","bg-icon"===this.theme),Object(n.a)(e,"is-".concat(this.size),!!this.size),e)]}}};l.default.use(o.a),l.default.use(i.a);var c=s,m=a(18),u=Object(m.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("my-float",{staticClass:"my-header",class:e.classes},[a("div",{staticClass:"my-header__content"},[e.icon?a("i",{staticClass:"my-header__icon",class:e.icon}):e._e(),e._v(" "),e._t("title",[e._v(e._s(e.title))])],2),e._v(" "),e.$slots.handle?a("my-float-item",{staticClass:"my-header__handle",attrs:{float:"right"}},[e._t("handle")],2):e._e()],1)}),[],!1,null,null,null).exports;t.a=Object(r.a)(u)}}]);