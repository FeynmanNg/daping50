(window.webpackJsonp=window.webpackJsonp||[]).push([[1097],{1652:function(t,e,a){},1794:function(t,e,a){"use strict";var s=a(53),i=(a(198),a(54),a(197),a(55),{name:"MyWatermark",props:{disabled:Boolean,text:{type:[String,Array],default:""},lineHeight:{type:Number,default:10},width:{type:Number,default:300},height:{type:Number,default:300},font:{type:String,default:"20px 黑体"},rotate:{type:Number,default:-20},color:{type:String,default:"rgba(100, 100, 100, 0.1)"},x:{type:Number,default:0},y:{type:Number,default:100},mask:{type:Boolean,default:!0}},data:function(){return{dataUrl:null}},computed:{classes:function(){return{"my-watermark":!0,"is-mask":this.mask,"is-disabled":this.disabled}},styles:function(){return!this.dataUrl||this.mask||this.disabled?null:{backgroundImage:"url(".concat(this.dataUrl,")")}},maskStyle:function(){return this.dataUrl&&this.mask&&!this.disabled?{backgroundImage:"url(".concat(this.dataUrl,")")}:null}},methods:{draw:function(){var t=this;if(this.text){var e=[].concat(this.text),a=this.$refs.canvas.getContext("2d"),s=this.rotate*Math.PI/180;a.clearRect(0,0,this.width,this.height),a.rotate(s),a.font=this.font,a.fillStyle=this.color;var i=parseInt(a.font)||20;e.forEach((function(e,s){var r=t.y+(i+t.lineHeight)*s;a.fillText(e,t.x,r)})),this.dataUrl=a.canvas.toDataURL()}},reset:function(){var t=this.$refs.canvas.getContext("2d");t.clearRect(0,0,this.width,this.height);var e=this.rotate*Math.PI/180;t.rotate(-e)}},watch:{text:function(){this.reset(),this.draw()}},mounted:function(){!this.disabled&&this.draw()}}),r=a(18),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.classes,style:t.styles},[t._t("default"),t._v(" "),a("canvas",{ref:"canvas",staticStyle:{display:"none"},attrs:{width:t.width,height:t.height}}),t._v(" "),t.mask?a("div",{staticClass:"my-watermark__mask",style:t.maskStyle}):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(s.a)(n)},3052:function(t,e,a){"use strict";a.r(e);a(1652),a(123);var s=a(1794);a(0).default.use(s.a);var i={data:function(){return{text:["第一行文本","第二行文本"]}}},r=a(18),n=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-watermark",{attrs:{text:this.text,width:200,height:200}},[e("div",{staticStyle:{height:"400px"}})])}),[],!1,null,null,null);e.default=n.exports}}]);