(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1749:function(t,e,i){"use strict";var n=i(47),s=(i(201),i(412)),r=i(498),a=i(26),o=i(55),c=(i(380),window.innerWidth),l=window.innerHeight;function u(t){return t*Math.PI/180}function h(){return Math.sin(Math.floor(360*Math.random())*Math.PI/180)}var d={obj:{x:0,y:0,z:150},dest:{x:0,y:0,z:1},dist:{x:0,y:0,z:200},ang:{cplane:0,splane:0,ctheta:0,stheta:0},zoom:1,disp:{x:c/2,y:l/2,z:0},upd:function(){d.dist.x=d.dest.x-d.obj.x,d.dist.y=d.dest.y-d.obj.y,d.dist.z=d.dest.z-d.obj.z,d.ang.cplane=-d.dist.z/Math.sqrt(d.dist.x*d.dist.x+d.dist.z*d.dist.z),d.ang.splane=d.dist.x/Math.sqrt(d.dist.x*d.dist.x+d.dist.z*d.dist.z),d.ang.ctheta=Math.sqrt(d.dist.x*d.dist.x+d.dist.z*d.dist.z)/Math.sqrt(d.dist.x*d.dist.x+d.dist.y*d.dist.y+d.dist.z*d.dist.z),d.ang.stheta=-d.dist.y/Math.sqrt(d.dist.x*d.dist.x+d.dist.y*d.dist.y+d.dist.z*d.dist.z)}},f={parts:{sz:function(t,e){return{x:t.x*e.x,y:t.y*e.y,z:t.z*e.z}},rot:{x:function(t,e){return{x:t.x,y:t.y*Math.cos(u(e.x))-t.z*Math.sin(u(e.x)),z:t.y*Math.sin(u(e.x))+t.z*Math.cos(u(e.x))}},y:function(t,e){return{x:t.x*Math.cos(u(e.y))+t.z*Math.sin(u(e.y)),y:t.y,z:-t.x*Math.sin(u(e.y))+t.z*Math.cos(u(e.y))}},z:function(t,e){return{x:t.x*Math.cos(u(e.z))-t.y*Math.sin(u(e.z)),y:t.x*Math.sin(u(e.z))+t.y*Math.cos(u(e.z)),z:t.z}}},pos:function(t,e){return{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}}},pov:{plane:function(t){return{x:t.x*d.ang.cplane+t.z*d.ang.splane,y:t.y,z:t.x*-d.ang.splane+t.z*d.ang.cplane}},theta:function(t){return{x:t.x,y:t.y*d.ang.ctheta-t.z*d.ang.stheta,z:t.y*d.ang.stheta+t.z*d.ang.ctheta}},set:function(t){return{x:t.x-d.obj.x,y:t.y-d.obj.y,z:t.z-d.obj.z}}},persp:function(t){return{x:t.x*d.dist.z/t.z*d.zoom,y:t.y*d.dist.z/t.z*d.zoom,z:t.z*d.zoom,p:d.dist.z/t.z}},disp:function(t,e){return{x:t.x+e.x,y:-t.y+e.y,z:t.z+e.z,p:t.p}},steps:function(t,e,i,n,s){var r=f.parts.sz(t,e);return r=f.parts.rot.x(r,i),r=f.parts.rot.y(r,i),r=f.parts.rot.z(r,i),r=f.parts.pos(r,n),r=f.pov.plane(r),r=f.pov.theta(r),r=f.pov.set(r),r=f.persp(r),r=f.disp(r,s)}},p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(a.a)(this,t);var i=e.vtx,n=e.sz,s=e.rot,r=e.pos;this.transIn={},this.transOut={},this.transIn.vtx=i,this.transIn.sz=n,this.transIn.rot=s,this.transIn.pos=r}return Object(o.a)(t,[{key:"vupd",value:function(){this.transOut=f.steps(this.transIn.vtx,this.transIn.sz,this.transIn.rot,this.transIn.pos,d.disp)}}]),t}(),y=function(){function t(e,i){Object(a.a)(this,t),this.canvas=e,this.vm=i,this.vel=.04,this.lim=360,this.diff=200,this.initPos=100,this.toX=0,this.toY=0,this.go()}return Object(o.a)(t,[{key:"go",value:function(){this.$=this.canvas.getContext("2d"),this.$.globalCompositeOperation="source-over",this.varr=[],this.dist=[],this.calc=[];for(var t=0,e=this.vm.amount;t<e;t++)this.add();this.rotObj={x:0,y:0,z:0},this.objSz={x:c/5,y:l/5,z:c/5}}},{key:"add",value:function(){this.varr.push(new p({vtx:{x:h(),y:h(),z:h()},sz:{x:0,y:0,z:0},rot:{x:20,y:-20,z:0},pos:{x:this.diff*Math.sin(360*Math.random()*Math.PI/180),y:this.diff*Math.sin(360*Math.random()*Math.PI/180),z:this.diff*Math.sin(360*Math.random()*Math.PI/180)}})),this.calc.push({x:360*Math.random(),y:360*Math.random(),z:360*Math.random()})}},{key:"upd",value:function(){d.obj.x+=.05*(this.toX-d.obj.x),d.obj.y+=.05*(this.toY-d.obj.y)}},{key:"draw",value:function(){this.$.clearRect(0,0,this.canvas.width,this.canvas.height),d.upd(),this.rotObj.x+=.1,this.rotObj.y+=.1,this.rotObj.z+=.1;for(var t=0;t<this.varr.length;t++){for(var e in this.calc[t])Object.prototype.hasOwnProperty.call(this.calc[t],e)&&(this.calc[t][e]+=this.vel,this.calc[t][e]>this.lim&&(this.calc[t][e]=0));if(this.varr[t].transIn.pos={x:this.diff*Math.cos(this.calc[t].x*Math.PI/180),y:this.diff*Math.sin(this.calc[t].y*Math.PI/180),z:this.diff*Math.sin(this.calc[t].z*Math.PI/180)},this.varr[t].transIn.rot=this.rotObj,this.varr[t].transIn.sz=this.objSz,this.varr[t].vupd(),!(this.varr[t].transOut.p<0)){var i=this.$.createRadialGradient(this.varr[t].transOut.x,this.varr[t].transOut.y,this.varr[t].transOut.p,this.varr[t].transOut.x,this.varr[t].transOut.y,2*this.varr[t].transOut.p);this.$.globalCompositeOperation="lighter",i.addColorStop(0,"hsla(255, 255%, 255%, 1)"),i.addColorStop(.5,"hsla("+(t+2)+",85%, 40%,1)"),i.addColorStop(1,"hsla("+t+",85%, 40%,.5)"),this.$.fillStyle=i,this.$.beginPath(),this.$.arc(this.varr[t].transOut.x,this.varr[t].transOut.y,2*this.varr[t].transOut.p,0,2*Math.PI,!1),this.$.fill(),this.$.closePath()}}}},{key:"anim",value:function(){window.requestAnimationFrame=window.requestAnimationFrame||function(t,e){window.setTimeout(t,1e3/60)};var t=function(){this.upd(),this.draw(),window.requestAnimationFrame(t)}.bind(this);window.requestAnimationFrame(t)}},{key:"run",value:function(){this.anim(),this.mousemoveHandler=function(t){this.toX=-.8*(t.clientX-this.canvas.width/2),this.toY=.8*(t.clientY-this.canvas.height/2)}.bind(this),window.addEventListener("mousemove",this.mousemoveHandler)}},{key:"destroy",value:function(){window.removeEventListener("mousemove",this.mousemoveHandler)}}]),t}(),m={name:"MyDvStarry",mixins:[r.a],components:{Box:s.a},props:{amount:{type:Number,default:300}},mounted:function(){this.starry=new y(this.$refs.canvas,this),this.starry.run()},beforeDestroy:function(){this.starry&&this.starry.destroy()}},v=i(19),g=Object(v.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("Box",this._g(this._b({staticClass:"my-dv-starry",attrs:{"default-width":"100%","default-height":"100%"}},"Box",this.$attrs,!1),this.$listeners),[e("canvas",{ref:"canvas",attrs:{width:this.width,height:this.height}})])}),[],!1,null,null,null).exports;e.a=Object(n.a)(g)},3193:function(t,e,i){"use strict";i.r(e);var n=i(1749),s=i(455),r=i(0);r.default.use(s.a),r.default.use(n.a);var a={},o=i(19),c=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-starry",{attrs:{opacity:.4}})],1)],1)}),[],!1,null,null,null);e.default=c.exports},367:function(t,e,i){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var i=t.className,n=(e||"").split(" "),s=0,r=n.length;s<r;s++){var a=n[s];a&&(t.classList?t.classList.add(a):f(t,a)||(i+=" "+a))}t.classList||(t.className=i)},e.removeClass=function(t,e){if(!t||!e)return;for(var i=e.split(" "),n=" "+t.className+" ",s=0,r=i.length;s<r;s++){var a=i[s];a&&(t.classList?t.classList.remove(a):f(t,a)&&(n=n.replace(" "+a+" "," ")))}t.classList||(t.className=(n||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,i,s){if(!e||!i)return;if("object"===(void 0===i?"undefined":n(i)))for(var r in i)i.hasOwnProperty(r)&&t(e,r,i[r]);else"opacity"===(i=u(i))&&l<9?e.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":e.style[i]=s};var s,r=i(0);var a=((s=r)&&s.__esModule?s:{default:s}).default.prototype.$isServer,o=/([\:\-\_]+(.))/g,c=/^moz([A-Z])/,l=a?0:Number(document.documentMode),u=function(t){return t.replace(o,(function(t,e,i,n){return n?i.toUpperCase():i})).replace(c,"Moz$1")},h=e.on=!a&&document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)},d=e.off=!a&&document.removeEventListener?function(t,e,i){t&&e&&t.removeEventListener(e,i,!1)}:function(t,e,i){t&&e&&t.detachEvent("on"+e,i)};e.once=function(t,e,i){h(t,e,(function n(){i&&i.apply(this,arguments),d(t,e,n)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var p=e.getStyle=l<9?function(t,e){if(!a){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(i){return t.style[e]}}}:function(t,e){if(!a){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var i=document.defaultView.getComputedStyle(t,"");return t.style[e]||i?i[e]:null}catch(i){return t.style[e]}}};var y=e.isScroll=function(t,e){if(!a)return p(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!a){for(var i=t;i;){if([window,document,document.documentElement].includes(i))return window;if(y(i,e))return i;i=i.parentNode}return i}},e.isInContainer=function(t,e){if(a||!t||!e)return!1;var i=t.getBoundingClientRect(),n=void 0;return n=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),i.top<n.bottom&&i.bottom>n.top&&i.right>n.left&&i.left<n.right}},380:function(t,e,i){var n=i(2),s=i(424),r=i(120);n({target:"Array",proto:!0},{fill:s}),r("fill")},385:function(t,e,i){"use strict";var n=i(2),s=i(49).findIndex,r=i(120),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),n({target:"Array",proto:!0,forced:a},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("findIndex")},412:function(t,e,i){"use strict";var n=i(47),s=i(76),r=i(46),a=(i(201),i(116),i(385),i(202),i(31),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,i=this.layoutVm,n=this.free;if(i&&!n){var s=i.gap,r=i.direction,a=i.total,o=i.boxCount,c=i.boxes,l=c.findIndex((function(e){return e===t})),u=o-1,h="(100% - ".concat(s*u,"px) * ").concat(e," / ").concat(a),d=c.filter((function(t,e){return e<l})).reduce((function(t,e){return t+e.weight}),0),f="(100% - ".concat(s*u,"px) * ").concat(d," / ").concat(a," +  ").concat(l*s,"px");return"row"===r?{height:"calc(".concat(h,")"),top:"calc(".concat(f,")")}:{width:"calc(".concat(h,")"),left:"calc(".concat(f,")")}}return null},styles:function(){var t=this.inline,e=this.margin,i=this.padding,n=this.position,s=this.fit,a=this.width,o=this.height,c=this.left,l=this.top,u=this.right,h=this.bottom,d=this.zIndex,f=this.zoom,p=this.scale,y=this.xAlign,m=this.yAlign,v=this.defaultWidth,g=this.defaultHeight;return Object(r.a)({position:n?"absolute":"relative",width:s?"100%":a||v,height:s?"100%":o||g,zoom:f,left:y?null:c,top:m?null:l,right:y?null:u,bottom:m?null:h,transform:p?"scale(".concat(p,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:i,zIndex:d},this.layoutSize)},classes:function(){var t;return t={},Object(s.a)(t,"is-".concat(this.xAlign),!!this.xAlign),Object(s.a)(t,"is-".concat(this.yAlign),!!this.yAlign),Object(s.a)(t,"is-shadow",this.shadow),Object(s.a)(t,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(s.a)(t,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),t},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),o=(i(521),i(19)),c=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(n.a)(c)},424:function(t,e,i){"use strict";var n=i(20),s=i(123),r=i(21);t.exports=function(t){for(var e=n(this),i=r(e.length),a=arguments.length,o=s(a>1?arguments[1]:void 0,i),c=a>2?arguments[2]:void 0,l=void 0===c?i:s(c,i);l>o;)e[o++]=t;return e}},442:function(t,e,i){},452:function(t,e,i){},455:function(t,e,i){"use strict";var n=i(47),s=i(119),r=(i(201),i(202),i(369)),a=i(367),o=i(118),c=i(46),l={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(c.a)(Object(c.a)({},l),this.config)}}},h=i(503),d={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(s.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,i=t.clientHeight;e&&i&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=i/this.height))},fullScreen:function(){var t=this.getTarget();Object(h.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(h.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(a.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(o.c)(this.resize,100),Object(r.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(h.c)()},beforeDestroy:function(){this.proxyResize&&Object(r.removeResizeListener)(this.warpper,this.proxyResize),Object(a.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},f=(i(510),i(19)),p=Object(f.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?i("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?i("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):i("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(p)},498:function(t,e,i){"use strict";var n=i(369);e.a={inject:{page:{default:null}},data:function(){return{width:0,height:0}},methods:{resize:function(){var t,e=null===(t=this.$el)||void 0===t?void 0:t.getBoundingClientRect();if(e){var i=this.page||{},n=i.widthScale,s=void 0===n?1:n,r=i.heightScale,a=void 0===r?1:r;this.width=e.width/s,this.height=e.height/a,this.$emit("resize",[this.width,this.height])}}},mounted:function(){this.resize(),Object(n.addResizeListener)(this.$el,this.resize)},beforeDestroy:function(){Object(n.removeResizeListener)(this.$el,this.resize)}}},503:function(t,e,i){"use strict";function n(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function s(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function r(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return r}))},510:function(t,e,i){"use strict";i(442)},521:function(t,e,i){"use strict";i(452)}}]);