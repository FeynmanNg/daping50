(window.webpackJsonp=window.webpackJsonp||[]).push([[1331],{1301:function(t,s,i){},1303:function(t,s,i){"use strict";var e=i(47),o=(i(116),i(201),i(118)),n={name:"MyMarquee",props:{data:{type:Array,default:function(){return[]}},disabled:Boolean,direction:{type:String,default:"up",validator:function(t){return["up","down","left","right"].includes(t)}},auto:{type:Boolean,default:!0},speed:{type:Number,default:1},waitTime:{type:Number,default:3e3},scrollLength:Number},data:function(){return this.timerId=null,{copyHtml:"",contentWidth:0,contentHeight:0,scrollPosition:0,isPause:!1}},computed:{isHorizontal:function(){return["left","right"].includes(this.direction)},classes:function(){return{"my-marquee--horizontal":this.isHorizontal,"is-disabled":this.disabled}},scrollStyle:function(){return{transform:this.isHorizontal?"translate3d(-".concat(this.scrollPosition,"px, 0, 0)"):"translate3d(0, -".concat(this.scrollPosition,"px, 0)"),width:this.isHorizontal?"".concat(2*this.contentWidth,"px"):"100%"}}},watch:{data:{immediate:!0,handler:function(){this.$nextTick(this.renderCopyHtml)}},disabled:function(t){this.stop(),t?(this.copyHtml="",this.scrollPosition=0):(this.$nextTick(this.renderCopyHtml),this.auto&&this.start())}},methods:{renderCopyHtml:function(){this.$refs.content&&!this.disabled&&(this.copyHtml=this.$refs.content.innerHTML,this.updateView())},updateView:function(){if(this.$refs.content){var t=this.$refs.content.getBoundingClientRect();this.contentHeight=t.height,this.contentWidth=t.width,this.$emit("resize",t,this)}},start:function(){switch(this.isPause=!1,this.direction){case"up":this.scrollPosition=this.scrollPosition||0,this.scrollUp();break;case"down":this.scrollPosition=this.scrollPosition||this.contentHeight,this.scrollDown();break;case"left":this.scrollPosition=this.scrollPosition||0,this.scrollLeft();break;case"right":this.scrollPosition=this.scrollPosition||this.contentWidth,this.scrollRight()}},stop:function(){this.timerId&&Object(o.a)(this.timerId),this.resumeId&&clearTimeout(this.resumeId)},pause:function(){this.isPause=!0},scrollUp:function(){var t=this;this.timerId=Object(o.f)((function(){t.isPause||(t.scrollPosition+=t.speed,t.resume()?t.isPause=!0:(t.scrollPosition>=t.contentHeight&&(t.scrollPosition=0),t.scrollUp()))}))},scrollDown:function(){var t=this;this.timerId=Object(o.f)((function(){t.isPause||(t.scrollPosition-=t.speed,t.resume()?t.isPause=!0:(t.scrollPosition<=0&&(t.scrollPosition=t.contentHeight),t.scrollDown()))}))},scrollLeft:function(){var t=this;this.timerId=Object(o.f)((function(){t.isPause||(t.scrollPosition+=t.speed,t.resume()?t.isPause=!0:(t.scrollPosition>=t.contentWidth&&(t.scrollPosition=0),t.scrollLeft()))}))},scrollRight:function(){var t=this;this.timerId=Object(o.f)((function(){t.isPause||(t.scrollPosition-=t.speed,t.resume()?t.isPause=!0:(t.scrollPosition<=0&&(t.scrollPosition=t.contentWidth),t.scrollRight()))}))},resume:function(){var t=0===Math.floor(this.scrollPosition)%this.scrollLength;return t&&(this.resumeId&&clearTimeout(this.resumeId),this.resumeId=setTimeout(this.start,this.waitTime)),t},handleMouseEnter:function(){this.stop(),this.isPause=!0},handleMouseLeave:function(){this.start()}},mounted:function(){this.auto&&!this.disabled&&this.start()},beforeDestroy:function(){this.stop(),this.copyHtml=""}},l=i(19),r=Object(l.a)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"my-marquee",class:t.classes,on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[i("div",{staticClass:"my-marquee__scroll",style:t.scrollStyle},[i("div",{ref:"content",staticClass:"my-marquee__content"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"my-marquee__copy-content",domProps:{innerHTML:t._s(t.copyHtml)}})])])}),[],!1,null,null,null).exports;s.a=Object(e.a)(r)},2510:function(t,s,i){},2844:function(t,s,i){"use strict";i(2510)},3815:function(t,s,i){"use strict";i.r(s);i(1301),i(117);var e=i(1303);i(202);i(0).default.use(e.a);var o={data:function(){return{list:[]}},created:function(){for(var t=0;t<20;t++)this.list.push({title:"无缝滚动第".concat(t,"行无缝滚动第").concat(t,"行"),date:"2017-12-16"})}},n=(i(2844),i(19)),l=Object(n.a)(o,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("my-marquee",{staticClass:"container",attrs:{data:t.list}},t._l(t.list,(function(s){return i("div",{key:s.title,staticClass:"item"},[i("span",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),i("span",{staticClass:"date"},[t._v(t._s(s.date))])])})),0)}),[],!1,null,"76d52f90",null);s.default=l.exports}}]);