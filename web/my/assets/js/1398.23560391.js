(window.webpackJsonp=window.webpackJsonp||[]).push([[1398],{2422:function(t,e,a){},2747:function(t,e,a){"use strict";a(2422)},2903:function(t,e,a){"use strict";a.r(e);var i=a(477),r=a(47),n=(a(202),{name:"MyDvAdorn13",mixins:[a(956).a],props:{},computed:{path:function(){var t=this.width,e=this.height,a=e/2;return"M0 1 L".concat(t-a," 1 A ").concat(a," ").concat(a," 0 0 1 ").concat(t-a," ").concat(e-1," L0 ").concat(e-1)}}}),s=(a(2747),a(19)),c=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Box",t._g(t._b({staticClass:"my-dv-adorn-13",class:t.classes,style:t.styles,attrs:{"default-width":"200px","default-height":"40px"}},"Box",t.$attrs,!1),t.$listeners),[a("svg",{attrs:{width:t.width+"px",height:t.height+"px"}},[a("path",{attrs:{d:t.path,fill:"transparent","stroke-width":"1",stroke:t.dark}}),t._v(" "),a("circle",{attrs:{cx:"16",cy:""+t.height/2,r:"4",fill:t.light}},[a("animate",{attrs:{attributeName:"opacity",values:"1;0;1",dur:t.duration+"s",repeatCount:"indefinite"}})]),t._v(" "),a("circle",{attrs:{cx:"16",cy:""+t.height/2,r:"7",fill:"transparent","stroke-width":"2",stroke:t.light}},[a("animate",{attrs:{attributeName:"opacity",values:"0;1;0",dur:t.duration+"s",repeatCount:"indefinite"}})])]),t._v(" "),a("div",{staticClass:"my-dv-adorn-13__content",style:{lineHeight:t.height+"px",color:t.light}},[t._t("default")],2)])}),[],!1,null,null,null).exports,l=Object(r.a)(c),o=a(0);o.default.use(l),o.default.use(i.a);var u={},d=Object(s.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-adorn13",{attrs:{"x-align":"center","y-align":"middle"}})],1)],1)}),[],!1,null,null,null);e.default=d.exports},956:function(t,e,a){"use strict";a(201);var i=a(422),r=a(501),n=a(733);e.a={mixins:[r.a,n.a],inheritAttrs:!1,components:{Box:i.a},props:{duration:{type:Number,default:3},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-adorn":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);