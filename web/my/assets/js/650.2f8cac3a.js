(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1074:function(t,e,n){"use strict";n(934)},1076:function(t,e,n){"use strict";var i=n(47),r=n(46),s=(n(816),n(117),n(818)),a=(n(403),n(32),n(77),n(766),n(201),n(448),n(922));delete s.a.props.type;var o={name:"MyDvNumber",inheritAttrs:!1,components:{MyNumber:s.a,DvTitle:a.a},props:Object(r.a)(Object(r.a)({},s.a.props),{},{background:Boolean}),computed:{classes:function(){return{"is-background":this.background}}},methods:{getArray:function(t){return String(t).split("").map((function(t){return{value:t,number:!Number.isNaN(Number.parseInt(t))}}))}}},u=(n(1074),n(19)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DvTitle",t._b({staticClass:"my-dv-number",class:t.classes},"DvTitle",t.$attrs,!1),[n("MyNumber",t._g(t._b({scopedSlots:t._u([t.background?{key:"default",fn:function(e){var i=e.displayValue;return t._l(t.getArray(i),(function(e,i){return n("span",{key:i,class:{"is-number":e.number}},[t._v(t._s(e.value))])}))}}:null],null,!0)},"MyNumber",t.$props,!1),t.$listeners))],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},2385:function(t,e,n){},2704:function(t,e,n){"use strict";n(2385)},3168:function(t,e,n){"use strict";n.r(e);var i=n(477),r=n(1076),s=n(0);s.default.use(r.a),s.default.use(i.a);var a={},o=(n(2704),n(19)),u=Object(o.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-number",{attrs:{value:1434329,trend:"up",position:!1,inline:""}}),this._v(" "),e("my-dv-number",{attrs:{value:1434329,trend:"down",position:!1,inline:""}}),this._v(" "),e("my-dv-number",{attrs:{value:"2002",trend:"-",position:!1,inline:""}})],1)],1)}),[],!1,null,"30cbb1b8",null);e.default=u.exports},366:function(t,e,n){"use strict";e.__esModule=!0,e.removeResizeListener=e.addResizeListener=void 0;var i,r=n(395),s=(i=r)&&i.__esModule?i:{default:i};var a="undefined"==typeof window,o=function(t){var e=t,n=Array.isArray(e),i=0;for(e=n?e:e[Symbol.iterator]();;){var r;if(n){if(i>=e.length)break;r=e[i++]}else{if((i=e.next()).done)break;r=i.value}var s=r.target.__resizeListeners__||[];s.length&&s.forEach((function(t){t()}))}};e.addResizeListener=function(t,e){a||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new s.default(o),t.__ro__.observe(t)),t.__resizeListeners__.push(e))},e.removeResizeListener=function(t,e){t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||t.__ro__.disconnect())}},367:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,s=i.length;r<s;r++){var a=i[r];a&&(t.classList?t.classList.add(a):h(t,a)||(n+=" "+a))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,s=n.length;r<s;r++){var a=n[r];a&&(t.classList?t.classList.remove(a):h(t,a)&&(i=i.replace(" "+a+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var s in n)n.hasOwnProperty(s)&&t(e,s,n[s]);else"opacity"===(n=c(n))&&l<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,s=n(0);var a=((r=s)&&r.__esModule?r:{default:r}).default.prototype.$isServer,o=/([\:\-\_]+(.))/g,u=/^moz([A-Z])/,l=a?0:Number(document.documentMode),c=function(t){return t.replace(o,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(u,"Moz$1")},f=e.on=!a&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},p=e.off=!a&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function i(){n&&n.apply(this,arguments),p(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var d=e.getStyle=l<9?function(t,e){if(!a){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!a){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var m=e.isScroll=function(t,e){if(!a)return d(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!a){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(m(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(a||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},377:function(t,e,n){var i=n(11),r=n(80),s=n(16),a=n(122).f,o=function(t){return function(e){for(var n,o=s(e),u=r(o),l=u.length,c=0,f=[];l>c;)n=u[c++],i&&!a.call(o,n)||f.push(t?[n,o[n]]:o[n]);return f}};t.exports={entries:o(!0),values:o(!1)}},388:function(t,e,n){var i=n(2),r=n(377).values;i({target:"Object",stat:!0},{values:function(t){return r(t)}})},389:function(t,e,n){"use strict";var i=n(2),r=n(49).findIndex,s=n(120),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},403:function(t,e,n){"use strict";var i=n(207),r=n(212),s=n(7),a=n(22),o=n(415),u=n(209),l=n(21),c=n(208),f=n(82),p=n(1),h=[].push,d=Math.min,m=!p((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,u,l,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=new RegExp(t.source,p+"g");(o=f.call(m,i))&&!((u=m.lastIndex)>d&&(c.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&h.apply(c,o.slice(1)),l=o[0].length,d=u,c.length>=s));)m.lastIndex===o.index&&m.lastIndex++;return d===i.length?!l&&m.test("")||c.push(""):c.push(i.slice(d)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var f=s(t),p=String(this),h=o(f,RegExp),v=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),b=new h(m?f:"^(?:"+f.source+")",g),y=void 0===r?4294967295:r>>>0;if(0===y)return[];if(0===p.length)return null===c(b,p)?[p]:[];for(var _=0,V=0,x=[];V<p.length;){b.lastIndex=m?V:0;var N,F=c(b,m?p:p.slice(V));if(null===F||(N=d(l(b.lastIndex+(m?0:V)),p.length))===_)V=u(p,V,v);else{if(x.push(p.slice(_,V)),x.length===y)return x;for(var E=1;E<=F.length-1;E++)if(x.push(F[E]),x.length===y)return x;V=_=N}}return x.push(p.slice(_)),x}]}),!m)},415:function(t,e,n){var i=n(7),r=n(81),s=n(3)("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||null==(n=i(a)[s])?e:r(n)}},446:function(t,e,n){"use strict";var i=n(2),r=n(50),s=n(490),a=n(491),o=n(1),u=1..toFixed,l=Math.floor,c=function(t,e,n){return 0===e?n:e%2==1?c(t,e-1,n*t):c(t*t,e/2,n)},f=function(t,e,n){for(var i=-1,r=n;++i<6;)r+=e*t[i],t[i]=r%1e7,r=l(r/1e7)},p=function(t,e){for(var n=6,i=0;--n>=0;)i+=t[n],t[n]=l(i/e),i=i%e*1e7},h=function(t){for(var e=6,n="";--e>=0;)if(""!==n||0===e||0!==t[e]){var i=String(t[e]);n=""===n?i:n+a.call("0",7-i.length)+i}return n};i({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){u.call({})}))},{toFixed:function(t){var e,n,i,o,u=s(this),l=r(t),d=[0,0,0,0,0,0],m="",v="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(m="-",u=-u),u>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(u*c(2,69,1))-69)<0?u*c(2,-e,1):u/c(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(d,0,n),i=l;i>=7;)f(d,1e7,0),i-=7;for(f(d,c(10,i,1),0),i=e-1;i>=23;)p(d,1<<23),i-=23;p(d,1<<i),f(d,1,1),p(d,2),v=h(d)}else f(d,0,n),f(d,1<<-e,0),v=h(d)+a.call("0",l);return v=l>0?m+((o=v.length)<=l?"0."+a.call("0",l-o)+v:v.slice(0,o-l)+"."+v.slice(o-l)):m+v}})},448:function(t,e,n){var i=n(2),r=n(524);i({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},453:function(t,e,n){var i=n(2),r=n(473);i({target:"Number",stat:!0,forced:Number.parseFloat!=r},{parseFloat:r})},473:function(t,e,n){var i=n(4),r=n(210).trim,s=n(211),a=i.parseFloat,o=1/a(s+"-0")!=-1/0;t.exports=o?function(t){var e=r(String(t)),n=a(e);return 0===n&&"-"==e.charAt(0)?-0:n}:a},487:function(t,e,n){var i=n(22),r=/"/g;t.exports=function(t,e,n,s){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(s).replace(r,"&quot;")+'"'),o+">"+a+"</"+e+">"}},488:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},490:function(t,e,n){var i=n(25);t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},491:function(t,e,n){"use strict";var i=n(50),r=n(22);t.exports="".repeat||function(t){var e=String(r(this)),n="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(n+=e);return n}},524:function(t,e,n){var i=n(4),r=n(210).trim,s=n(211),a=i.parseInt,o=/^[+-]?0[Xx]/,u=8!==a(s+"08")||22!==a(s+"0x16");t.exports=u?function(t,e){var n=r(String(t));return a(n,e>>>0||(o.test(n)?16:10))}:a},766:function(t,e,n){var i=n(2),r=n(811),s=Math.abs;i({target:"Number",stat:!0},{isSafeInteger:function(t){return r(t)&&s(t)<=9007199254740991}})},811:function(t,e,n){var i=n(5),r=Math.floor;t.exports=function(t){return!i(t)&&isFinite(t)&&r(t)===t}},816:function(t,e,n){},818:function(t,e,n){"use strict";var i=n(47),r=n(46),s=n(76),a=(n(201),n(116),n(824),n(453),n(766),n(825),n(446),n(51),n(32),n(403),n(79),n(826)),o={auto:!0,startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,separator:","},u={name:"MyNumber",mixins:[{data:function(){return this.counter=null,{}},watch:{value:function(t){this.update(t)},countUpOptions:function(){this.countUpOptions&&this.init()}},methods:{init:function(){this.setCountUp(),this.countUpOptions.auto&&this.start()},setCountUp:function(){this.counter&&(this.counter=null),this.counter=new a.a(this.$refs.container,this.value,this.countUpOptions)},restart:function(){this.setCountUp(),this.start()},start:function(){this.reset(),this.counter&&this.counter.start(this.onComplete)},pauseResume:function(){this.counter&&this.counter.pauseResume()},reset:function(){this.counter&&this.counter.reset()},update:function(t){t?this.counter&&this.counter.update(t):this.counter&&this.counter.update(this.value)},onComplete:function(){this.$emit("complete")}},mounted:function(){this.countUpOptions&&this.init()},beforeDestroy:function(){this.counter=null}}],props:{value:[Number,String],defaultValue:{type:[Number,String],default:0},countUp:{type:[Boolean,Object]},trend:{type:String,validator:function(t){return["up","down","-"].includes(t)}},precision:{type:Number,default:0},separator:{type:String,default:","},prefix:{type:String},suffix:String,percentage:Boolean,type:{type:String,default:"",validator:function(t){return["","primary","success","warning","danger","info"].includes(t)}},sup:Boolean},computed:{displayValue:function(){return this.isNumber(this.value)?this.percentage?this.getPercent(this.value):this.format(this.value,this.precision,this.separator):this.defaultValue?this.getPercent(this.defaultValue):""},trendIcon:function(){if(!this.trend)return null;return{up:"el-icon-top",down:"el-icon-bottom","-":"el-icon-minus"}[this.trend]},trendClasses:function(){if(this.trend)return"-"===this.trend?"is-default":"is-".concat(this.trend)},classes:function(){return Object(s.a)({"my-number":!0,"is-pointer":this.$listeners.click},"is-".concat(this.type),!!this.type)},supClass:function(){return{"my-number__sup":!!this.sup}},countUpOptions:function(){return this.countUp?Object(r.a)(Object(r.a)(Object(r.a)({},o),this.countUp),{},{separator:this.separator,decimalPlaces:this.precision}):null}},methods:{isNumber:function(t){var e=Number.parseFloat(t);return!Number.isNaN(e)&&Number.isFinite(e)},getPercent:function(t){return this.percentage?"".concat((100*Number.parseFloat(t)).toFixed(this.precision),"%"):t},format:function(t,e,n){for(var i=Number.parseFloat(String(t).replace(/[^\d.-]/g,"")).toFixed(e)+"",r=i.split(".")[0].split("").reverse(),s=i.split(".")[1],a="",o=0;o<r.length;o++)a+=r[o]+((o+1)%3==0&&o+1!==r.length?"".concat(n):"");return a.split("").reverse().join("")+(s?".".concat(s):"")}}},l=n(19),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({class:t.classes},t.$listeners),[t.prefix||t.$slots.prefix?n("span",{staticClass:"my-number__prefix"},[t._t("prefix",[t._v(t._s(t.prefix))])],2):t._e(),t._v(" "),n("span",{ref:"container",staticClass:"my-number__value"},[t._t("default",[t._v(t._s(t.displayValue))],{value:t.value,displayValue:t.displayValue})],2),t._v(" "),t.suffix||t.$slots.suffix?n("span",{staticClass:"my-number__suffix"},[t._t("suffix",[t._v(t._s(t.suffix))])],2):t._e(),t._v(" "),t.trend||t.$slots.trend?n("span",{staticClass:"my-number__trend",class:t.trendClasses},[t._t("trend",[n("i",{class:t.trendIcon})],{trend:t.trend})],2):t._e()])}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},824:function(t,e,n){"use strict";var i=n(2),r=n(487);i({target:"String",proto:!0,forced:n(488)("sup")},{sup:function(){return r(this,"sup","","")}})},825:function(t,e,n){n(2)({target:"Number",stat:!0},{isFinite:n(832)})},826:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=function(){function t(t,e,n){var r=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.countDown?r.frameVal=r.startVal-(r.startVal-r.endVal)*(e/r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration),r.countDown?r.frameVal=r.frameVal<r.endVal?r.endVal:r.frameVal:r.frameVal=r.frameVal>r.endVal?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.callback&&r.callback()},this.formatNumber=function(t){var e,n,i,s,a,o=t<0?"-":"";if(e=Math.abs(t).toFixed(r.options.decimalPlaces),i=(n=(e+="").split("."))[0],s=n.length>1?r.options.decimal+n[1]:"",r.options.useGrouping){a="";for(var u=0,l=i.length;u<l;++u)0!==u&&u%3==0&&(a=r.options.separator+a),a=i[l-u-1]+a;i=a}return r.options.numerals&&r.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),o+r.options.prefix+i+s+r.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},832:function(t,e,n){var i=n(4).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&i(t)}},934:function(t,e,n){}}]);