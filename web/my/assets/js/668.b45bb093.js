(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{1502:function(t,e,n){},1671:function(t,e,n){"use strict";var i=n(1502);n.n(i).a},1698:function(t,e,n){"use strict";var i=n(53),r=(n(373),n(52)),o={name:"MyDvBorder6",mixins:[n(858).a],computed:{svgStyle:function(){return Object(r.a)(Object(r.a)({},this.styles),{},{"box-shadow":"inset 0 0 40px rgba(255,255,255,0.05)",background:this.fill})}}},s=(n(1671),n(18)),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-6",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.svgStyle,attrs:{width:t.width,height:t.height}},[n("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:"0, 25 0, 0 25, 0"}}),t._v(" "),n("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:t.width-25+", 0 "+t.width+", 0 "+t.width+", 25"}}),t._v(" "),n("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:t.width-25+", "+t.height+" "+t.width+", "+t.height+" "+t.width+", "+(t.height-25)}}),t._v(" "),n("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:"0, "+(t.height-25)+" 0, "+t.height+" 25, "+t.height}}),t._v(" "),n("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:"0, 10 0, 0 10, 0"}}),t._v(" "),n("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:t.width-10+", 0 "+t.width+", 0 "+t.width+", 10"}}),t._v(" "),n("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:t.width-10+", "+t.height+" "+t.width+", "+t.height+" "+t.width+", "+(t.height-10)}}),t._v(" "),n("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:"0, "+(t.height-10)+" 0, "+t.height+" 10, "+t.height}})]),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},3095:function(t,e,n){"use strict";n.r(e);var i=n(437),r=n(1698),o=n(0);o.default.use(r.a),o.default.use(i.a);var s={},l=n(18),a=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border6",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=a.exports},360:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,o=i.length;r<o;r++){var s=i[r];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):h(t,s)&&(i=i.replace(" "+s+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=c(n))&&u<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,o=n(0);var s=((r=o)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,u=s?0:Number(document.documentMode),c=function(t){return t.replace(l,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function i(){n&&n.apply(this,arguments),d(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var v=e.getStyle=u<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!s)return v(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},373:function(t,e,n){var i=n(1),r=n(411),o=n(126);i({target:"Array",proto:!0},{fill:r}),o("fill")},377:function(t,e,n){"use strict";var i=n(1),r=n(35).findIndex,o=n(126),s=n(20),l=!0,a=s("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!a},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},384:function(t,e,n){"use strict";var i=n(204),r=n(208),o=n(10),s=n(22),l=n(408),a=n(206),u=n(19),c=n(205),f=n(91),d=n(2),h=[].push,v=Math.min,p=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);for(var l,a,u,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,d+"g");(l=f.call(p,i))&&!((a=p.lastIndex)>v&&(c.push(i.slice(v,l.index)),l.length>1&&l.index<i.length&&h.apply(c,l.slice(1)),u=l[0].length,v=a,c.length>=o));)p.lastIndex===l.index&&p.lastIndex++;return v===i.length?!u&&p.test("")||c.push(""):c.push(i.slice(v)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var f=o(t),d=String(this),h=l(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),m=new h(p?f:"^(?:"+f.source+")",y),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===d.length)return null===c(m,d)?[d]:[];for(var w=0,b=0,C=[];b<d.length;){m.lastIndex=p?b:0;var S,k=c(m,p?d:d.slice(b));if(null===k||(S=v(u(m.lastIndex+(p?0:b)),d.length))===w)b=a(d,b,g);else{if(C.push(d.slice(w,b)),C.length===x)return C;for(var _=1;_<=k.length-1;_++)if(C.push(k[_]),C.length===x)return C;b=w=S}}return C.push(d.slice(w)),C}]}),!p)},408:function(t,e,n){var i=n(10),r=n(60),o=n(3)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[o])?e:r(n)}},411:function(t,e,n){"use strict";var i=n(16),r=n(128),o=n(19);t.exports=function(t){for(var e=i(this),n=o(e.length),s=arguments.length,l=r(s>1?arguments[1]:void 0,n),a=s>2?arguments[2]:void 0,u=void 0===a?n:r(a,n);u>l;)e[l++]=t;return e}},439:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},469:function(t,e,n){"use strict";var i=n(38),r=n(9),o=n(3),s=n(8),l=o("species");t.exports=function(t){var e=i(t),n=r.f;s&&e&&!e[l]&&n(e,l,{configurable:!0,get:function(){return this}})}},472:function(t,e,n){var i=n(10),r=n(217),o=n(19),s=n(129),l=n(214),a=n(216),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,c,f){var d,h,v,p,g,y,m,x=s(e,n,c?2:1);if(f)d=t;else{if("function"!=typeof(h=l(t)))throw TypeError("Target is not iterable");if(r(h)){for(v=0,p=o(t.length);p>v;v++)if((g=c?x(i(m=t[v])[0],m[1]):x(t[v]))&&g instanceof u)return g;return new u(!1)}d=h.call(t)}for(y=d.next;!(m=y.call(d)).done;)if("object"==typeof(g=a(d,x,m.value,c))&&g&&g instanceof u)return g;return new u(!1)}).stop=function(t){return new u(!0,t)}},524:function(t,e,n){var i=n(23);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},560:function(t,e,n){"use strict";var i=n(1),r=n(4),o=n(130),s=n(23),l=n(212),a=n(472),u=n(439),c=n(5),f=n(2),d=n(218),h=n(92),v=n(213);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=p?"set":"add",m=r[t],x=m&&m.prototype,w=m,b={},C=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof m||!(g||x.forEach&&!f((function(){(new m).entries().next()})))))w=n.getConstructor(e,t,p,y),l.REQUIRED=!0;else if(o(t,!0)){var S=new w,k=S[y](g?{}:-0,1)!=S,_=f((function(){S.has(1)})),E=d((function(t){new m(t)})),I=!g&&f((function(){for(var t=new m,e=5;e--;)t[y](e,e);return!t.has(-0)}));E||((w=e((function(e,n){u(e,w,t);var i=v(new m,e,w);return null!=n&&a(n,i[y],i,p),i}))).prototype=x,x.constructor=w),(_||I)&&(C("delete"),C("has"),p&&C("get")),(I||k)&&C(y),g&&x.clear&&delete x.clear}return b[t]=w,i({global:!0,forced:w!=m},b),h(w,t),g||n.setStrong(w,t,p),w}},561:function(t,e,n){"use strict";var i=n(9).f,r=n(39),o=n(524),s=n(129),l=n(439),a=n(472),u=n(137),c=n(469),f=n(8),d=n(212).fastKey,h=n(61),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var c=t((function(t,i){l(t,c,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=i&&a(i,t[u],t,n)})),h=p(e),g=function(t,e,n){var i,r,o=h(t),s=y(t,e);return s?s.value=n:(o.last=s={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),f?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},y=function(t,e){var n,i=h(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){for(var t=h(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=h(this),n=y(this,t);if(n){var i=n.next,r=n.previous;delete e.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),e.first==n&&(e.first=i),e.last==n&&(e.last=r),f?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=h(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(i(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),o(c.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&i(c.prototype,"size",{get:function(){return h(this).size}}),c},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);u(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},603:function(t,e,n){},654:function(t,e,n){"use strict";var i=n(560),r=n(561);t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},856:function(t,e,n){},857:function(t,e,n){"use strict";var i=n(603);n.n(i).a},858:function(t,e,n){"use strict";n(373),n(199);var i=n(401),r=n(473),o=n(53),s={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},l=(n(857),n(18)),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,u=Object(o.a)(a),c=n(686);n(856),e.a={mixins:[r.a,c.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:u},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);