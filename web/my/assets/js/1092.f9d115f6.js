(window.webpackJsonp=window.webpackJsonp||[]).push([[1092],{2441:function(t,e,i){},2772:function(t,e,i){"use strict";i(2441)},3573:function(t,e,i){"use strict";i.r(e);i(619),i(117);var n=i(620),s=i(0),o={components:{MyDrag:n.a}};s.default.use(n.a);var r=o,a=(i(2772),i(19)),l=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("my-drag",{staticClass:"demo"})],1)}),[],!1,null,"34e14135",null);e.default=l.exports},367:function(t,e,i){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var i=t.className,n=(e||"").split(" "),s=0,o=n.length;s<o;s++){var r=n[s];r&&(t.classList?t.classList.add(r):f(t,r)||(i+=" "+r))}t.classList||(t.className=i)},e.removeClass=function(t,e){if(!t||!e)return;for(var i=e.split(" "),n=" "+t.className+" ",s=0,o=i.length;s<o;s++){var r=i[s];r&&(t.classList?t.classList.remove(r):f(t,r)&&(n=n.replace(" "+r+" "," ")))}t.classList||(t.className=(n||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,i,s){if(!e||!i)return;if("object"===(void 0===i?"undefined":n(i)))for(var o in i)i.hasOwnProperty(o)&&t(e,o,i[o]);else"opacity"===(i=h(i))&&c<9?e.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":e.style[i]=s};var s,o=i(0);var r=((s=o)&&s.__esModule?s:{default:s}).default.prototype.$isServer,a=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,c=r?0:Number(document.documentMode),h=function(t){return t.replace(a,(function(t,e,i,n){return n?i.toUpperCase():i})).replace(l,"Moz$1")},d=e.on=!r&&document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)},u=e.off=!r&&document.removeEventListener?function(t,e,i){t&&e&&t.removeEventListener(e,i,!1)}:function(t,e,i){t&&e&&t.detachEvent("on"+e,i)};e.once=function(t,e,i){d(t,e,(function n(){i&&i.apply(this,arguments),u(t,e,n)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var g=e.getStyle=c<9?function(t,e){if(!r){if(!t||!e)return null;"float"===(e=h(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(i){return t.style[e]}}}:function(t,e){if(!r){if(!t||!e)return null;"float"===(e=h(e))&&(e="cssFloat");try{var i=document.defaultView.getComputedStyle(t,"");return t.style[e]||i?i[e]:null}catch(i){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!r)return g(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!r){for(var i=t;i;){if([window,document,document.documentElement].includes(i))return window;if(p(i,e))return i;i=i.parentNode}return i}},e.isInContainer=function(t,e){if(r||!t||!e)return!1;var i=t.getBoundingClientRect(),n=void 0;return n=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),i.top<n.bottom&&i.bottom>n.top&&i.right>n.left&&i.left<n.right}},382:function(t,e,i){"use strict";var n=i(2),s=i(49).find,o=i(120),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},619:function(t,e,i){},620:function(t,e,i){"use strict";var n=i(47),s=i(119),o=(i(116),i(201),i(382),i(30),i(367)),r=i(118),a=i(627);function l(t,e){var i=Object(s.a)(e);return"function"===i?e():"string"===i?t.querySelector(e):e instanceof HTMLElement?e:null}var c={left:-1e4,top:-1e4,width:2e4,height:2e4},h={name:"MyDrag",props:{handle:[String,HTMLElement,Function],axis:{type:String,default:"",validator:function(t){return["","v","h"].includes(t)}},delay:{type:Number,default:100},range:[Object,Function],target:[String,HTMLElement,Function],clone:[Boolean,Function],revert:Boolean,group:String,disabled:Boolean,data:[String,Number,Object,Array],cloneClass:String,origin:{type:[String,HTMLElement,Function],default:function(){return null}},appendBody:Boolean},data:function(){return this.handleEl=null,this.dragEl=null,this.cacheRange=null,this.cacheOrigin=null,{dragging:!1,dragged:!1,x:null,y:null,offsetX:0,offsetY:0,startX:0,startY:0,clientX:0,clientY:0,dropped:!1}},computed:{classes:function(){return{"is-clone":this.clone,"is-dragging":this.dragging,"is-disabled":this.disabled,"is-dragged":this.dragged,"my-drag__handle":this.$el===this.handleEl}}},methods:{getOrigin:function(){if(this.cacheOrigin)return this.cacheOrigin;var t=this.origin?l(this.document,this.origin):function(t){for(var e=t.parentNode;e!==document.documentElement&&"static"===Object(o.getStyle)(e,"position");)e=e.parentNode;return e}(this.$el);return this.cacheOrigin=t.getBoundingClientRect(),this.cacheOrigin},getHandle:function(){return this.handle&&l(this.$el,this.handle)||this.$el},getTarget:function(){return this.target?l(this.document,this.target):null},getRange:function(){if(this.cacheRange)return this.cacheRange;var t=this.getTarget();if(t){var e=t.getBoundingClientRect(),i=this.$el.getBoundingClientRect(),n=this.getOrigin();this.cacheRange={left:e.left-n.left,top:e.top-n.top,width:e.width-i.width,height:e.height-i.height}}else this.cacheRange="function"==typeof this.range?this.range():this.range||c;return this.cacheRange},createDragEl:function(t){if(this.clone){if("function"==typeof this.clone){if(this.dragEl=this.clone(this),!this.dragEl)throw new Error("参数clone函数并没有返回正确的HTMLElement")}else this.dragEl=this.$el.cloneNode(!0);Object(o.addClass)(this.dragEl,"my-drag__clone"),this.cloneClass&&Object(o.addClass)(this.dragEl,this.cloneClass),this.appendBody?this.document.body.appendChild(this.dragEl):this.$el.parentNode.appendChild(this.dragEl)}else this.dragEl=this.$el},setDragElStyle:function(){if(this.clone){var t={left:"".concat(this.startX,"px"),top:"".concat(this.startY,"px"),display:"inline-block"};"function"==typeof this.clone&&(t.display="inline-block"),Object(o.setStyle)(this.dragEl,t)}},revertDragEl:function(){this.dragEl&&this.clone&&(this.revert?(Object(o.addClass)(this.dragEl,"is-revert"),Object(o.setStyle)(this.dragEl,{left:"".concat(this.startX,"px"),top:"".concat(this.startY,"px")}),Object(o.once)(this.dragEl,"webkitTransitionEnd",this.clearDragEl),Object(o.once)(this.dragEl,"transitionend",this.clearDragEl),setTimeout(this.clearDragEl.bind(this),300)):this.clearDragEl())},clearDragEl:function(){this.dragEl&&this.clone&&(Object(o.removeClass)(this.dragEl,"is-revert"),this.dragEl.parentNode.removeChild(this.dragEl)),this.dragEl=null},updateOffset:function(t){var e=t.clientX,i=t.clientY;if(this.clone&&"function"==typeof this.clone){var n=function(t){var e=t.cloneNode(!0);Object(o.setStyle)(e,{visibility:"hidden",display:"inline-block"}),document.body.appendChild(e);var i=e.getBoundingClientRect();return e.parentNode.removeChild(e),{width:i.width,height:i.height}}(this.dragEl);this.offsetX=n.width/2,this.offsetY=n.height/2}else{var s=this.$el.getBoundingClientRect();this.offsetX=e-s.left,this.offsetY=i-s.top}},fixPosition:function(t){var e=this.getOrigin();return this.appendBody?{x:t.pageX-this.offsetX,y:t.pageY-this.offsetY}:{x:t.clientX-this.offsetX-e.left,y:t.clientY-this.offsetY-e.top}},isResizing:function(){return!!this.$children.find((function(t){return!(!t.$options||"MyResize"!==t.$options.name)&&t.resizing}))},userSelect:function(t){t?Object(o.addClass)(this.document.body,"user-select-none"):Object(o.removeClass)(this.document.body,"user-select-none")},start:function(t){this.cacheRange=null,this.dragging=!0,this.dropped=!1,this.createDragEl(t),this.updateOffset(t);var e=this.fixPosition(t);this.startX=e.x,this.startY=e.y,this.setDragElStyle(),this.userSelect(!0),this.$emit("start",this),a.a.$emit("my-drag:start",this)},lockAxis:function(t,e){switch(this.axis){case"h":this.x=t;break;case"v":this.y=e;break;default:this.x=t,this.y=e}},lockRange:function(t,e){var i=this.getRange();this.x=t,this.y=e,t<i.left&&(this.x=i.left),e<i.top&&(this.y=i.top),t>i.left+i.width&&(this.x=i.left+i.width),e>i.top+i.height&&(this.y=i.top+i.height)},move:function(t){var e=t.x,i=t.y;this.lockAxis(e,i),this.lockRange(this.x,this.y),Object(o.setStyle)(this.dragEl,{left:"".concat(this.x,"px"),top:"".concat(this.y,"px")}),this.dragged=!0,this.$emit("drag",this),a.a.$emit("my-drag:dragging",this)},stop:function(){this.$emit("stop",this),a.a.$emit("my-drag:stop",this),this.dropped?this.clearDragEl():this.revertDragEl(),this.cacheRange=null,this.cacheOrigin=null,this.dragging=!1,this.userSelect(!1)},handleMouseDown:function(t){var e=this;this.disabled||(this.timer=setTimeout((function(){e.isResizing()||(e.start(t),Object(o.on)(e.document,"mousemove",e.proxyMove))}),this.delay),Object(o.once)(this.document,"mouseup",this.handleMouseUp))},handleMouseMove:function(t){this.clientX=t.clientX,this.clientY=t.clientY;var e=this.fixPosition(t);this.move(e)},handleMouseUp:function(){clearTimeout(this.timer),Object(o.off)(this.document,"mousemove",this.proxyMove),this.dragging&&this.stop()},bindHandle:function(){var t=this.getHandle();Object(o.addClass)(t,"my-drag__handle"),Object(o.on)(t,"mousedown",this.handleMouseDown),this.handleEl=t},unbindHandle:function(){this.handleEl&&(Object(o.removeClass)(this.handleEl,"my-drag__handle"),Object(o.off)(this.handleEl,"mousedown",this.handleMouseDown),this.handleEl=null)}},created:function(){this.proxyMove=Object(r.g)(this.handleMouseMove,this)},mounted:function(){this.document=window.document,this.bindHandle()},beforeDestroy:function(){clearTimeout(this.timer),this.unbindHandle(),this.clearDragEl(),this.document=null}},d=i(19),u=Object(d.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-drag",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(u)},627:function(t,e,i){"use strict";var n=i(0);e.a=new n.default({})}}]);