(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{359:function(e,t,n){"use strict";function o(e,t,n){this.$children.forEach((function(i){i.$options.componentName===e?i.$emit.apply(i,[t].concat(n)):o.apply(i,[e,t].concat([n]))}))}t.__esModule=!0,t.default={methods:{dispatch:function(e,t,n){for(var o=this.$parent||this.$root,i=o.$options.componentName;o&&(!i||i!==e);)(o=o.$parent)&&(i=o.$options.componentName);o&&o.$emit.apply(o,[t].concat(n))},broadcast:function(e,t,n){o.call(this,e,t,n)}}}},462:function(e,t,n){"use strict";t.__esModule=!0;n(357);t.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},722:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=101)}({0:function(e,t,n){"use strict";function o(e,t,n,o,i,r,s,u){var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):i&&(a=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(l.functional){l._injectStyles=a;var d=l.render;l.render=function(e,t){return a.call(t),d(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:l}}n.d(t,"a",(function(){return o}))},101:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"el-menu-item",class:{"is-active":e.active,"is-disabled":e.disabled},style:[e.paddingStyle,e.itemStyle,{backgroundColor:e.backgroundColor}],attrs:{role:"menuitem",tabindex:"-1"},on:{click:e.handleClick,mouseenter:e.onMouseEnter,focus:e.onMouseEnter,blur:e.onMouseLeave,mouseleave:e.onMouseLeave}},["ElMenu"===e.parentMenu.$options.componentName&&e.rootMenu.collapse&&e.$slots.title?n("el-tooltip",{attrs:{effect:"dark",placement:"right"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._t("title")],2),n("div",{staticStyle:{position:"absolute",left:"0",top:"0",height:"100%",width:"100%",display:"inline-block","box-sizing":"border-box",padding:"0 20px"}},[e._t("default")],2)]):[e._t("default"),e._t("title")]],2)};o._withStripped=!0;var i=n(37),r=n(29),s=n.n(r),u=n(4),a=n.n(u),l={name:"ElMenuItem",componentName:"ElMenuItem",mixins:[i.a,a.a],components:{ElTooltip:s.a},props:{index:{default:null,validator:function(e){return"string"==typeof e||null===e}},route:[String,Object],disabled:Boolean},computed:{active:function(){return this.index===this.rootMenu.activeIndex},hoverBackground:function(){return this.rootMenu.hoverBackground},backgroundColor:function(){return this.rootMenu.backgroundColor||""},activeTextColor:function(){return this.rootMenu.activeTextColor||""},textColor:function(){return this.rootMenu.textColor||""},mode:function(){return this.rootMenu.mode},itemStyle:function(){var e={color:this.active?this.activeTextColor:this.textColor};return"horizontal"!==this.mode||this.isNested||(e.borderBottomColor=this.active?this.rootMenu.activeTextColor?this.activeTextColor:"":"transparent"),e},isNested:function(){return this.parentMenu!==this.rootMenu}},methods:{onMouseEnter:function(){("horizontal"!==this.mode||this.rootMenu.backgroundColor)&&(this.$el.style.backgroundColor=this.hoverBackground)},onMouseLeave:function(){("horizontal"!==this.mode||this.rootMenu.backgroundColor)&&(this.$el.style.backgroundColor=this.backgroundColor)},handleClick:function(){this.disabled||(this.dispatch("ElMenu","item-click",this),this.$emit("click",this))}},mounted:function(){this.parentMenu.addItem(this),this.rootMenu.addItem(this)},beforeDestroy:function(){this.parentMenu.removeItem(this),this.rootMenu.removeItem(this)}},d=n(0),c=Object(d.a)(l,o,[],!1,null,null,null);c.options.__file="packages/menu/src/menu-item.vue";var p=c.exports;p.install=function(e){e.component(p.name,p)};t.default=p},29:function(e,t){e.exports=n(377)},37:function(e,t,n){"use strict";t.a={inject:["rootMenu"],computed:{indexPath:function(){for(var e=[this.index],t=this.$parent;"ElMenu"!==t.$options.componentName;)t.index&&e.unshift(t.index),t=t.$parent;return e},parentMenu:function(){for(var e=this.$parent;e&&-1===["ElMenu","ElSubmenu"].indexOf(e.$options.componentName);)e=e.$parent;return e},paddingStyle:function(){if("vertical"!==this.rootMenu.mode)return{};var e=20,t=this.$parent;if(this.rootMenu.collapse)e=20;else for(;t&&"ElMenu"!==t.$options.componentName;)"ElSubmenu"===t.$options.componentName&&(e+=20),t=t.$parent;return{paddingLeft:e+"px"}}}}},4:function(e,t){e.exports=n(359)}})},723:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=129)}({0:function(e,t,n){"use strict";function o(e,t,n,o,i,r,s,u){var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):i&&(a=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(l.functional){l._injectStyles=a;var d=l.render;l.render=function(e,t){return a.call(t),d(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:l}}n.d(t,"a",(function(){return o}))},129:function(e,t,n){"use strict";n.r(t);var o=n(28),i=n.n(o),r=n(37),s=n(4),u=n.n(s),a=n(5),l=n.n(a),d={props:{transformOrigin:{type:[Boolean,String],default:!1},offset:l.a.props.offset,boundariesPadding:l.a.props.boundariesPadding,popperOptions:l.a.props.popperOptions},data:l.a.data,methods:l.a.methods,beforeDestroy:l.a.beforeDestroy,deactivated:l.a.deactivated},c={name:"ElSubmenu",componentName:"ElSubmenu",mixins:[r.a,u.a,d],components:{ElCollapseTransition:i.a},props:{index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0}},data:function(){return{popperJS:null,timeout:null,items:{},submenus:{},mouseInChild:!1}},watch:{opened:function(e){var t=this;this.isMenuPopup&&this.$nextTick((function(e){t.updatePopper()}))}},computed:{appendToBody:function(){return void 0===this.popperAppendToBody?this.isFirstLevel:this.popperAppendToBody},menuTransitionName:function(){return this.rootMenu.collapse?"el-zoom-in-left":"el-zoom-in-top"},opened:function(){return this.rootMenu.openedMenus.indexOf(this.index)>-1},active:function(){var e=!1,t=this.submenus,n=this.items;return Object.keys(n).forEach((function(t){n[t].active&&(e=!0)})),Object.keys(t).forEach((function(n){t[n].active&&(e=!0)})),e},hoverBackground:function(){return this.rootMenu.hoverBackground},backgroundColor:function(){return this.rootMenu.backgroundColor||""},activeTextColor:function(){return this.rootMenu.activeTextColor||""},textColor:function(){return this.rootMenu.textColor||""},mode:function(){return this.rootMenu.mode},isMenuPopup:function(){return this.rootMenu.isMenuPopup},titleStyle:function(){return"horizontal"!==this.mode?{color:this.textColor}:{borderBottomColor:this.active?this.rootMenu.activeTextColor?this.activeTextColor:"":"transparent",color:this.active?this.activeTextColor:this.textColor}},isFirstLevel:function(){for(var e=!0,t=this.$parent;t&&t!==this.rootMenu;){if(["ElSubmenu","ElMenuItemGroup"].indexOf(t.$options.componentName)>-1){e=!1;break}t=t.$parent}return e}},methods:{handleCollapseToggle:function(e){e?this.initPopper():this.doDestroy()},addItem:function(e){this.$set(this.items,e.index,e)},removeItem:function(e){delete this.items[e.index]},addSubmenu:function(e){this.$set(this.submenus,e.index,e)},removeSubmenu:function(e){delete this.submenus[e.index]},handleClick:function(){var e=this.rootMenu,t=this.disabled;"hover"===e.menuTrigger&&"horizontal"===e.mode||e.collapse&&"vertical"===e.mode||t||this.dispatch("ElMenu","submenu-click",this)},handleMouseenter:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.showTimeout;if("ActiveXObject"in window||"focus"!==e.type||e.relatedTarget){var o=this.rootMenu,i=this.disabled;"click"===o.menuTrigger&&"horizontal"===o.mode||!o.collapse&&"vertical"===o.mode||i||(this.dispatch("ElSubmenu","mouse-enter-child"),clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.rootMenu.openMenu(t.index,t.indexPath)}),n),this.appendToBody&&this.$parent.$el.dispatchEvent(new MouseEvent("mouseenter")))}},handleMouseleave:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.rootMenu;"click"===n.menuTrigger&&"horizontal"===n.mode||!n.collapse&&"vertical"===n.mode||(this.dispatch("ElSubmenu","mouse-leave-child"),clearTimeout(this.timeout),this.timeout=setTimeout((function(){!e.mouseInChild&&e.rootMenu.closeMenu(e.index)}),this.hideTimeout),this.appendToBody&&t&&"ElSubmenu"===this.$parent.$options.name&&this.$parent.handleMouseleave(!0))},handleTitleMouseenter:function(){if("horizontal"!==this.mode||this.rootMenu.backgroundColor){var e=this.$refs["submenu-title"];e&&(e.style.backgroundColor=this.rootMenu.hoverBackground)}},handleTitleMouseleave:function(){if("horizontal"!==this.mode||this.rootMenu.backgroundColor){var e=this.$refs["submenu-title"];e&&(e.style.backgroundColor=this.rootMenu.backgroundColor||"")}},updatePlacement:function(){this.currentPlacement="horizontal"===this.mode&&this.isFirstLevel?"bottom-start":"right-start"},initPopper:function(){this.referenceElm=this.$el,this.popperElm=this.$refs.menu,this.updatePlacement()}},created:function(){var e=this;this.$on("toggle-collapse",this.handleCollapseToggle),this.$on("mouse-enter-child",(function(){e.mouseInChild=!0,clearTimeout(e.timeout)})),this.$on("mouse-leave-child",(function(){e.mouseInChild=!1,clearTimeout(e.timeout)}))},mounted:function(){this.parentMenu.addSubmenu(this),this.rootMenu.addSubmenu(this),this.initPopper()},beforeDestroy:function(){this.parentMenu.removeSubmenu(this),this.rootMenu.removeSubmenu(this)},render:function(e){var t=this,n=this.active,o=this.opened,i=this.paddingStyle,r=this.titleStyle,s=this.backgroundColor,u=this.rootMenu,a=this.currentPlacement,l=this.menuTransitionName,d=this.mode,c=this.disabled,p=this.popperClass,h=this.$slots,f=this.isFirstLevel,m=e("transition",{attrs:{name:l}},[e("div",{ref:"menu",directives:[{name:"show",value:o}],class:["el-menu--"+d,p],on:{mouseenter:function(e){return t.handleMouseenter(e,100)},mouseleave:function(){return t.handleMouseleave(!0)},focus:function(e){return t.handleMouseenter(e,100)}}},[e("ul",{attrs:{role:"menu"},class:["el-menu el-menu--popup","el-menu--popup-"+a],style:{backgroundColor:u.backgroundColor||""}},[h.default])])]),v=e("el-collapse-transition",[e("ul",{attrs:{role:"menu"},class:"el-menu el-menu--inline",directives:[{name:"show",value:o}],style:{backgroundColor:u.backgroundColor||""}},[h.default])]),b="horizontal"===u.mode&&f||"vertical"===u.mode&&!u.collapse?"el-icon-arrow-down":"el-icon-arrow-right";return e("li",{class:{"el-submenu":!0,"is-active":n,"is-opened":o,"is-disabled":c},attrs:{role:"menuitem","aria-haspopup":"true","aria-expanded":o},on:{mouseenter:this.handleMouseenter,mouseleave:function(){return t.handleMouseleave(!1)},focus:this.handleMouseenter}},[e("div",{class:"el-submenu__title",ref:"submenu-title",on:{click:this.handleClick,mouseenter:this.handleTitleMouseenter,mouseleave:this.handleTitleMouseleave},style:[i,r,{backgroundColor:s}]},[h.title,e("i",{class:["el-submenu__icon-arrow",b]})]),this.isMenuPopup?m:v])}},p=n(0),h=Object(p.a)(c,void 0,void 0,!1,null,null,null);h.options.__file="packages/menu/src/submenu.vue";var f=h.exports;f.install=function(e){e.component(f.name,f)};t.default=f},28:function(e,t){e.exports=n(759)},37:function(e,t,n){"use strict";t.a={inject:["rootMenu"],computed:{indexPath:function(){for(var e=[this.index],t=this.$parent;"ElMenu"!==t.$options.componentName;)t.index&&e.unshift(t.index),t=t.$parent;return e},parentMenu:function(){for(var e=this.$parent;e&&-1===["ElMenu","ElSubmenu"].indexOf(e.$options.componentName);)e=e.$parent;return e},paddingStyle:function(){if("vertical"!==this.rootMenu.mode)return{};var e=20,t=this.$parent;if(this.rootMenu.collapse)e=20;else for(;t&&"ElMenu"!==t.$options.componentName;)"ElSubmenu"===t.$options.componentName&&(e+=20),t=t.$parent;return{paddingLeft:e+"px"}}}}},4:function(e,t){e.exports=n(359)},5:function(e,t){e.exports=n(378)}})},724:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=69)}({0:function(e,t,n){"use strict";function o(e,t,n,o,i,r,s,u){var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):i&&(a=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(l.functional){l._injectStyles=a;var d=l.render;l.render=function(e,t){return a.call(t),d(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:l}}n.d(t,"a",(function(){return o}))},11:function(e,t){e.exports=n(462)},2:function(e,t){e.exports=n(358)},4:function(e,t){e.exports=n(359)},69:function(e,t,n){"use strict";n.r(t);var o=n(4),i=n.n(o),r=n(11),s=n.n(r),u=u||{};u.Utils=u.Utils||{},u.Utils.focusFirstDescendant=function(e){for(var t=0;t<e.childNodes.length;t++){var n=e.childNodes[t];if(u.Utils.attemptFocus(n)||u.Utils.focusFirstDescendant(n))return!0}return!1},u.Utils.focusLastDescendant=function(e){for(var t=e.childNodes.length-1;t>=0;t--){var n=e.childNodes[t];if(u.Utils.attemptFocus(n)||u.Utils.focusLastDescendant(n))return!0}return!1},u.Utils.attemptFocus=function(e){if(!u.Utils.isFocusable(e))return!1;u.Utils.IgnoreUtilFocusChanges=!0;try{e.focus()}catch(e){}return u.Utils.IgnoreUtilFocusChanges=!1,document.activeElement===e},u.Utils.isFocusable=function(e){if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return"hidden"!==e.type&&"file"!==e.type;case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},u.Utils.triggerEvent=function(e,t){var n=void 0;n=/^mouse|click/.test(t)?"MouseEvents":/^key/.test(t)?"KeyboardEvent":"HTMLEvents";for(var o=document.createEvent(n),i=arguments.length,r=Array(i>2?i-2:0),s=2;s<i;s++)r[s-2]=arguments[s];return o.initEvent.apply(o,[t].concat(r)),e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+t,o),e},u.Utils.keys={tab:9,enter:13,space:32,left:37,up:38,right:39,down:40,esc:27};var a=u.Utils,l=function(e,t){this.domNode=t,this.parent=e,this.subMenuItems=[],this.subIndex=0,this.init()};l.prototype.init=function(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()},l.prototype.gotoSubIndex=function(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e},l.prototype.addListeners=function(){var e=this,t=a.keys,n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(function(o){o.addEventListener("keydown",(function(o){var i=!1;switch(o.keyCode){case t.down:e.gotoSubIndex(e.subIndex+1),i=!0;break;case t.up:e.gotoSubIndex(e.subIndex-1),i=!0;break;case t.tab:a.triggerEvent(n,"mouseleave");break;case t.enter:case t.space:i=!0,o.currentTarget.click()}return i&&(o.preventDefault(),o.stopPropagation()),!1}))}))};var d=l,c=function(e){this.domNode=e,this.submenu=null,this.init()};c.prototype.init=function(){this.domNode.setAttribute("tabindex","0");var e=this.domNode.querySelector(".el-menu");e&&(this.submenu=new d(this,e)),this.addListeners()},c.prototype.addListeners=function(){var e=this,t=a.keys;this.domNode.addEventListener("keydown",(function(n){var o=!1;switch(n.keyCode){case t.down:a.triggerEvent(n.currentTarget,"mouseenter"),e.submenu&&e.submenu.gotoSubIndex(0),o=!0;break;case t.up:a.triggerEvent(n.currentTarget,"mouseenter"),e.submenu&&e.submenu.gotoSubIndex(e.submenu.subMenuItems.length-1),o=!0;break;case t.tab:a.triggerEvent(n.currentTarget,"mouseleave");break;case t.enter:case t.space:o=!0,n.currentTarget.click()}o&&n.preventDefault()}))};var p=c,h=function(e){this.domNode=e,this.init()};h.prototype.init=function(){var e=this.domNode.childNodes;[].filter.call(e,(function(e){return 1===e.nodeType})).forEach((function(e){new p(e)}))};var f=h,m=n(2),v={name:"ElMenu",render:function(e){var t=e("ul",{attrs:{role:"menubar"},key:+this.collapse,style:{backgroundColor:this.backgroundColor||""},class:{"el-menu--horizontal":"horizontal"===this.mode,"el-menu--collapse":this.collapse,"el-menu":!0}},[this.$slots.default]);return this.collapseTransition?e("el-menu-collapse-transition",[t]):t},componentName:"ElMenu",mixins:[i.a,s.a],provide:function(){return{rootMenu:this}},components:{"el-menu-collapse-transition":{functional:!0,render:function(e,t){return e("transition",{props:{mode:"out-in"},on:{beforeEnter:function(e){e.style.opacity=.2},enter:function(e){Object(m.addClass)(e,"el-opacity-transition"),e.style.opacity=1},afterEnter:function(e){Object(m.removeClass)(e,"el-opacity-transition"),e.style.opacity=""},beforeLeave:function(e){e.dataset||(e.dataset={}),Object(m.hasClass)(e,"el-menu--collapse")?(Object(m.removeClass)(e,"el-menu--collapse"),e.dataset.oldOverflow=e.style.overflow,e.dataset.scrollWidth=e.clientWidth,Object(m.addClass)(e,"el-menu--collapse")):(Object(m.addClass)(e,"el-menu--collapse"),e.dataset.oldOverflow=e.style.overflow,e.dataset.scrollWidth=e.clientWidth,Object(m.removeClass)(e,"el-menu--collapse")),e.style.width=e.scrollWidth+"px",e.style.overflow="hidden"},leave:function(e){Object(m.addClass)(e,"horizontal-collapse-transition"),e.style.width=e.dataset.scrollWidth+"px"}}},t.children)}}},props:{mode:{type:String,default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:Array,uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0}},data:function(){return{activeIndex:this.defaultActive,openedMenus:this.defaultOpeneds&&!this.collapse?this.defaultOpeneds.slice(0):[],items:{},submenus:{}}},computed:{hoverBackground:function(){return this.backgroundColor?this.mixColor(this.backgroundColor,.2):""},isMenuPopup:function(){return"horizontal"===this.mode||"vertical"===this.mode&&this.collapse}},watch:{defaultActive:function(e){this.items[e]||(this.activeIndex=null),this.updateActiveIndex(e)},defaultOpeneds:function(e){this.collapse||(this.openedMenus=e)},collapse:function(e){e&&(this.openedMenus=[]),this.broadcast("ElSubmenu","toggle-collapse",e)}},methods:{updateActiveIndex:function(e){var t=this.items[e]||this.items[this.activeIndex]||this.items[this.defaultActive];t?(this.activeIndex=t.index,this.initOpenedMenu()):this.activeIndex=null},getMigratingConfig:function(){return{props:{theme:"theme is removed."}}},getColorChannels:function(e){if(e=e.replace("#",""),/^[0-9a-fA-F]{3}$/.test(e)){e=e.split("");for(var t=2;t>=0;t--)e.splice(t,0,e[t]);e=e.join("")}return/^[0-9a-fA-F]{6}$/.test(e)?{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}:{red:255,green:255,blue:255}},mixColor:function(e,t){var n=this.getColorChannels(e),o=n.red,i=n.green,r=n.blue;return t>0?(o*=1-t,i*=1-t,r*=1-t):(o+=(255-o)*t,i+=(255-i)*t,r+=(255-r)*t),"rgb("+Math.round(o)+", "+Math.round(i)+", "+Math.round(r)+")"},addItem:function(e){this.$set(this.items,e.index,e)},removeItem:function(e){delete this.items[e.index]},addSubmenu:function(e){this.$set(this.submenus,e.index,e)},removeSubmenu:function(e){delete this.submenus[e.index]},openMenu:function(e,t){var n=this.openedMenus;-1===n.indexOf(e)&&(this.uniqueOpened&&(this.openedMenus=n.filter((function(e){return-1!==t.indexOf(e)}))),this.openedMenus.push(e))},closeMenu:function(e){var t=this.openedMenus.indexOf(e);-1!==t&&this.openedMenus.splice(t,1)},handleSubmenuClick:function(e){var t=e.index,n=e.indexPath;-1!==this.openedMenus.indexOf(t)?(this.closeMenu(t),this.$emit("close",t,n)):(this.openMenu(t,n),this.$emit("open",t,n))},handleItemClick:function(e){var t=this,n=e.index,o=e.indexPath,i=this.activeIndex,r=null!==e.index;r&&(this.activeIndex=e.index),this.$emit("select",n,o,e),("horizontal"===this.mode||this.collapse)&&(this.openedMenus=[]),this.router&&r&&this.routeToItem(e,(function(e){if(t.activeIndex=i,e){if("NavigationDuplicated"===e.name)return;console.error(e)}}))},initOpenedMenu:function(){var e=this,t=this.activeIndex,n=this.items[t];n&&"horizontal"!==this.mode&&!this.collapse&&n.indexPath.forEach((function(t){var n=e.submenus[t];n&&e.openMenu(t,n.indexPath)}))},routeToItem:function(e,t){var n=e.route||e.index;try{this.$router.push(n,(function(){}),t)}catch(e){console.error(e)}},open:function(e){var t=this,n=this.submenus[e.toString()].indexPath;n.forEach((function(e){return t.openMenu(e,n)}))},close:function(e){this.closeMenu(e)}},mounted:function(){this.initOpenedMenu(),this.$on("item-click",this.handleItemClick),this.$on("submenu-click",this.handleSubmenuClick),"horizontal"===this.mode&&new f(this.$el),this.$watch("items",this.updateActiveIndex)}},b=n(0),g=Object(b.a)(v,void 0,void 0,!1,null,null,null);g.options.__file="packages/menu/src/menu.vue";var y=g.exports;y.install=function(e){e.component(y.name,y)};t.default=y}})},759:function(e,t,n){"use strict";t.__esModule=!0;var o=n(358);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.beforeEnter=function(e){(0,o.addClass)(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},e.prototype.enter=function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},e.prototype.afterEnter=function(e){(0,o.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},e.prototype.beforeLeave=function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},e.prototype.leave=function(e){0!==e.scrollHeight&&((0,o.addClass)(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},e.prototype.afterLeave=function(e){(0,o.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},e}();t.default={name:"ElCollapseTransition",functional:!0,render:function(e,t){var n=t.children;return e("transition",{on:new i},n)}}}}]);