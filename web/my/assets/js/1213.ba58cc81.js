(window.webpackJsonp=window.webpackJsonp||[]).push([[1213],{2480:function(t,i,e){},2810:function(t,i,e){"use strict";e(2480)},2911:function(t,i,e){"use strict";e.r(i);var d=e(476),l=e(47),n=(e(201),e(848)),h=e(904),r={name:"MyDvBorder10",mixins:[n.a],props:{titleWidth:{type:Number,default:250},title:{type:String,default:""}},methods:{fade:h.b}},a=(e(2810),e(19)),s=Object(a.a)(r,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("Box",t._b({staticClass:"my-dv-border-10",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[e("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[e("defs",[e("filter",{attrs:{id:"filter-"+t._uid,height:"150%",width:"150%",x:"-25%",y:"-25%"}},[e("feMorphology",{attrs:{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"}}),t._v(" "),e("feGaussianBlur",{attrs:{in:"thicken",stdDeviation:"3",result:"blurred"}}),t._v(" "),e("feFlood",{attrs:{"flood-color":t.light,result:"glowColor"}}),t._v(" "),e("feComposite",{attrs:{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"}}),t._v(" "),e("feMerge",[e("feMergeNode",{attrs:{in:"softGlowColored"}}),t._v(" "),e("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1)]),t._v(" "),e("polygon",{attrs:{fill:t.fill,points:"\n      20, 32 "+(.5*t.width-t.titleWidth/2)+", 32 "+(.5*t.width-t.titleWidth/2+20)+", 53\n      "+(.5*t.width+t.titleWidth/2-20)+", 53 "+(.5*t.width+t.titleWidth/2)+", 32\n      "+(t.width-20)+", 32 "+(t.width-8)+", 48 "+(t.width-8)+", "+(t.height-25)+" "+(t.width-20)+", "+(t.height-8)+"\n      20, "+(t.height-8)+" 8, "+(t.height-25)+" 8, 50\n    "}}),t._v(" "),e("polyline",{attrs:{stroke:t.dark,filter:"url(#filter-"+t._uid+")",points:"\n        "+(t.width-t.titleWidth)/2+", 30\n        20, 30 7, 50 7, "+(50+(t.height-167)/2)+"\n        13, "+(55+(t.height-167)/2)+" 13, "+(135+(t.height-167)/2)+"\n        7, "+(140+(t.height-167)/2)+" 7, "+(t.height-27)+"\n        20, "+(t.height-7)+" "+(t.width-20)+", "+(t.height-7)+" "+(t.width-7)+", "+(t.height-27)+"\n        "+(t.width-7)+", "+(140+(t.height-167)/2)+" "+(t.width-13)+", "+(135+(t.height-167)/2)+"\n        "+(t.width-13)+", "+(55+(t.height-167)/2)+" "+(t.width-7)+", "+(50+(t.height-167)/2)+"\n        "+(t.width-7)+", 50 "+(t.width-20)+", 30 "+(t.width+t.titleWidth)/2+", 30\n        "+((t.width+t.titleWidth)/2-20)+", 7 "+((t.width-t.titleWidth)/2+20)+", 7\n        "+(t.width-t.titleWidth)/2+", 30 "+((t.width-t.titleWidth)/2+20)+", 52\n        "+((t.width+t.titleWidth)/2-20)+", 52 "+(t.width+t.titleWidth)/2+", 30\n      "}}),t._v(" "),e("polygon",{attrs:{stroke:t.dark,fill:"transparent",points:"\n        "+((t.width+t.titleWidth)/2-5)+", 30 "+((t.width+t.titleWidth)/2-21)+", 11\n        "+((t.width+t.titleWidth)/2-27)+", 11 "+((t.width+t.titleWidth)/2-8)+", 34\n      "}}),t._v(" "),e("polygon",{attrs:{stroke:t.dark,fill:"transparent",points:"\n        "+((t.width-t.titleWidth)/2+5)+", 30 "+((t.width-t.titleWidth)/2+22)+", 49\n        "+((t.width-t.titleWidth)/2+28)+", 49 "+((t.width-t.titleWidth)/2+8)+", 26\n      "}}),t._v(" "),e("polygon",{attrs:{stroke:t.dark,fill:t.fade(t.light,30),filter:"url(#filter-"+t._uid+")",points:"\n        "+((t.width+t.titleWidth)/2-11)+", 37 "+((t.width+t.titleWidth)/2-32)+", 11\n        "+((t.width-t.titleWidth)/2+23)+", 11 "+((t.width-t.titleWidth)/2+11)+", 23\n        "+((t.width-t.titleWidth)/2+33)+", 49 "+((t.width+t.titleWidth)/2-22)+", 49\n      "}}),t._v(" "),e("polygon",{attrs:{filter:"url(#filter-"+t._uid+")",fill:t.dark,opacity:"1",points:"\n        "+((t.width-t.titleWidth)/2-10)+", 37 "+((t.width-t.titleWidth)/2-31)+", 37\n        "+((t.width-t.titleWidth)/2-25)+", 46 "+((t.width-t.titleWidth)/2-4)+", 46\n      "}},[e("animate",{attrs:{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),e("polygon",{attrs:{filter:"url(#filter-"+t._uid+")",fill:t.dark,opacity:"0.7",points:"\n        "+((t.width-t.titleWidth)/2-40)+", 37 "+((t.width-t.titleWidth)/2-61)+", 37\n        "+((t.width-t.titleWidth)/2-55)+", 46 "+((t.width-t.titleWidth)/2-34)+", 46\n      "}},[e("animate",{attrs:{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),e("polygon",{attrs:{filter:"url(#filter-"+t._uid+")",fill:t.dark,opacity:"0.5",points:"\n        "+((t.width-t.titleWidth)/2-70)+", 37 "+((t.width-t.titleWidth)/2-91)+", 37\n        "+((t.width-t.titleWidth)/2-85)+", 46 "+((t.width-t.titleWidth)/2-64)+", 46\n      "}},[e("animate",{attrs:{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),e("polygon",{attrs:{filter:"url(#filter-"+t._uid+")",fill:t.dark,opacity:"1",points:"\n        "+((t.width+t.titleWidth)/2+30)+", 37 "+((t.width+t.titleWidth)/2+9)+", 37\n        "+((t.width+t.titleWidth)/2+3)+", 46 "+((t.width+t.titleWidth)/2+24)+", 46\n      "}},[e("animate",{attrs:{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),e("polygon",{attrs:{filter:"url(#filter-"+t._uid+")",fill:t.dark,opacity:"0.7",points:"\n        "+((t.width+t.titleWidth)/2+60)+", 37 "+((t.width+t.titleWidth)/2+39)+", 37\n        "+((t.width+t.titleWidth)/2+33)+", 46 "+((t.width+t.titleWidth)/2+54)+", 46\n      "}},[e("animate",{attrs:{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),e("polygon",{attrs:{filter:"url(#filter-"+t._uid+")",fill:t.dark,opacity:"0.5",points:"\n        "+((t.width+t.titleWidth)/2+90)+", 37 "+((t.width+t.titleWidth)/2+69)+", 37\n        "+((t.width+t.titleWidth)/2+63)+", 46 "+((t.width+t.titleWidth)/2+84)+", 46\n      "}},[e("animate",{attrs:{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),e("text",{staticClass:"dv-border-box-11-title",attrs:{x:""+t.width/2,y:"32",fill:"#fff","font-size":"18","text-anchor":"middle","dominant-baseline":"middle"}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("polygon",{attrs:{fill:t.dark,filter:"url(#filter-"+t._uid+")",points:"\n        7, "+(53+(t.height-167)/2)+" 11, "+(57+(t.height-167)/2)+"\n        11, "+(133+(t.height-167)/2)+" 7, "+(137+(t.height-167)/2)+"\n      "}}),t._v(" "),e("polygon",{attrs:{fill:t.dark,filter:"url(#filter-"+t._uid+")",points:"\n        "+(t.width-7)+", "+(53+(t.height-167)/2)+" "+(t.width-11)+", "+(57+(t.height-167)/2)+"\n        "+(t.width-11)+", "+(133+(t.height-167)/2)+" "+(t.width-7)+", "+(137+(t.height-167)/2)+"\n      "}})]),t._v(" "),e("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,o=Object(l.a)(s),u=e(0);u.default.use(o),u.default.use(d.a);var f={},p=Object(a.a)(f,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{height:"600px"}},[i("my-dv-page",{attrs:{target:"parent",fit:""}},[i("my-dv-border10",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);i.default=p.exports},723:function(t,i,e){},845:function(t,i,e){},846:function(t,i,e){"use strict";e(723)},848:function(t,i,e){"use strict";e(381),e(201);var d=e(418),l=e(500),n=e(47),h={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},r=(e(846),e(19)),a=Object(r.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,s=Object(n.a)(a),o=e(727);e(845),i.a={mixins:[l.a,o.a],inheritAttrs:!1,components:{Box:d.a,BoxContent:s},props:{fill:{type:String,default:function(){var t,i;return(null==this||null===(t=this.page)||void 0===t||null===(i=t.settings)||void 0===i?void 0:i.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);