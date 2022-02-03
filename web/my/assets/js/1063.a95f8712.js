(window.webpackJsonp=window.webpackJsonp||[]).push([[1063],{1031:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",o="month",a="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+h(i,2,"0")+":"+h(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,o),s=n-r<0,a=e.clone().add(i+(s?-1:1),o);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:o,y:u,w:s,d:r,D:c,h:i,m:n,s:e,ms:t,Q:a}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",p={};p[y]=d;var v=function(t){return t instanceof b},$=function(t,e,n){var i;if(!t)return y;if("string"==typeof t)p[t]&&(i=t),e&&(p[t]=e,i=t);else{var r=t.name;p[r]=t,i=r}return!n&&i&&(y=i),i||!n&&y},g=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},_=m;_.l=$,_.i=v,_.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function d(t){this.$L=$(t.locale,null,!0),this.parse(t)}var h=d.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return _},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return g(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<g(t)},h.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var l=this,f=!!_.u(a)||a,d=_.p(t),h=function(t,e){var n=_.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return f?n:n.endOf(r)},m=function(t,e){return _.w(l.toDate()[t].apply(l.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},y=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return f?h(1,0):h(31,11);case o:return f?h(1,p):h(0,p+1);case s:var g=this.$locale().weekStart||0,b=(y<g?y+7:y)-g;return h(f?v-b:v+(6-b),p);case r:case c:return m($+"Hours",0);case i:return m($+"Minutes",1);case n:return m($+"Seconds",2);case e:return m($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(s,a){var l,f=_.p(s),d="set"+(this.$u?"UTC":""),h=(l={},l[r]=d+"Date",l[c]=d+"Date",l[o]=d+"Month",l[u]=d+"FullYear",l[i]=d+"Hours",l[n]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[f],m=f===r?this.$D+(a-this.$W):a;if(f===o||f===u){var y=this.clone().set(c,1);y.$d[h](m),y.init(),this.$d=y.set(c,Math.min(this.$D,y.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[_.p(t)]()},h.add=function(t,a){var c,l=this;t=Number(t);var f=_.p(a),d=function(e){var n=g(l);return _.w(n.date(n.date()+Math.round(e*t)),l)};if(f===o)return this.set(o,this.$M+t);if(f===u)return this.set(u,this.$y+t);if(f===r)return d(1);if(f===s)return d(7);var h=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[f]||1,m=this.$d.getTime()+t*h;return _.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),r=this.$locale(),s=this.$H,o=this.$m,a=this.$M,u=r.weekdays,c=r.months,l=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},d=function(t){return _.s(s%12||12,t,"0")},h=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:_.s(a+1,2,"0"),MMM:l(r.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:_.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,o,!0),A:h(s,o,!1),m:String(o),mm:_.s(o,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return n.replace(f,(function(t,e){return e||m[t]||i.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,l){var f,d=_.p(c),h=g(t),m=6e4*(h.utcOffset()-this.utcOffset()),y=this-h,p=_.m(this,h);return p=(f={},f[u]=p/12,f[o]=p,f[a]=p/3,f[s]=(y-m)/6048e5,f[r]=(y-m)/864e5,f[i]=y/36e5,f[n]=y/6e4,f[e]=y/1e3,f)[d]||y,l?p:_.a(p)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return p[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=$(t,e,!0);return i&&(n.$L=i),n},h.clone=function(){return _.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}(),S=b.prototype;return g.prototype=S,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",o],["$y",u],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,b,g),t.$i=!0),g},g.locale=$,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=p[y],g.Ls=p,g.p={},g}()},1631:function(t,e,n){},1706:function(t,e,n){"use strict";var i=n(47),r=n(76),s=(n(201),n(116),n(202),n(205),n(1031)),o=n.n(s),a={name:"MyTimer",props:{target:[String,Number],format:{type:String,default:"HH:mm:ss"},countdown:Boolean,type:{type:String,validator:function(t){return["primary","success","warning","danger","info"].includes(t)}},auto:Boolean,interval:{type:Number,default:1e3}},data:function(){return this.timerId=null,{dayjs:null,targetDayjs:null,minDayjs:null,isFinish:!1}},computed:{classes:function(){var t;return t={"my-timer":!0},Object(r.a)(t,"is-".concat(this.type),!!this.type),Object(r.a)(t,"is-finish",this.isFinish),t},displayValue:function(){return this.dayjs?this.dayjs.format(this.format):""}},methods:{init:function(){this.reset(),this.auto&&this.start()},getTarget:function(){return this.target?"number"==typeof this.target?this.getMin().second(this.target):"string"==typeof this.target?o()("".concat(this.getMin().format("YYYY-MM-DD")," ").concat(this.target)):void 0:this.getMax()},getMin:function(){return o()().hour(0).minute(0).second(0).millisecond(0)},getMax:function(){return o()().hour(23).minute(59).second(59)},start:function(){var t=this;this.dayjs&&(clearInterval(this.timerId),this.timerId=setInterval((function(){t.tick()}),this.interval),this.$emit("start",this.dayjs))},stop:function(){clearInterval(this.timerId),this.$emit("stop",this.dayjs)},reset:function(){this.isFinish=!1,clearInterval(this.timerId),this.minDayjs=Object.freeze(this.getMin()),this.targetDayjs=Object.freeze(this.getTarget()),this.dayjs=this.countdown?Object.freeze(this.getTarget()):Object.freeze(this.getMin()),this.$emit("reset",this.dayjs)},tick:function(){this.dayjs&&(this.countdown?(this.dayjs=Object.freeze(this.dayjs.subtract(this.interval,"millisecond")),this.dayjs.valueOf()===this.minDayjs.valueOf()&&(this.isFinish=!0)):(this.dayjs=Object.freeze(this.dayjs.add(this.interval,"millisecond")),this.dayjs.valueOf()===this.targetDayjs.valueOf()&&(this.isFinish=!0)),this.isFinish?(clearInterval(this.timerId),this.$emit("finish",this.dayjs)):this.$emit("tick",this.dayjs))}},watch:{target:function(){this.init()}},mounted:function(){this.init()},beforeDestroy:function(){clearInterval(this.timerId)}},u=n(19),c=Object(u.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._v(this._s(this.displayValue))])}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},2445:function(t,e,n){},2771:function(t,e,n){"use strict";n(2445)},3495:function(t,e,n){"use strict";n.r(e);n(402),n(364);var i=n(371),r=n.n(i),s=(n(1631),n(117),n(1706)),o=n(0),a={components:{MyTimer:s.a},methods:{start:function(){this.$refs.timer.start()},stop:function(){this.$refs.timer.stop()},reset:function(){this.$refs.timer.reset()}}};o.default.use(r.a),o.default.use(s.a);var u=a,c=(n(2771),n(19)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n 默认计时： "),n("my-timer",{attrs:{countdown:"",auto:""}}),t._v(" "),n("br"),t._v("\n 指定结束时间： "),n("my-timer",{attrs:{target:10,countdown:"",auto:""}}),t._v(" "),n("my-timer",{attrs:{target:"00:01:00",countdown:"",auto:""}}),t._v(" "),n("br"),t._v("\n 指定显示格式： "),n("my-timer",{attrs:{target:60,countdown:"",auto:"",format:"ss"}}),t._v(" "),n("br"),t._v("\n 手动触发  "),n("my-timer",{ref:"timer",attrs:{countdown:""}}),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.start}},[t._v("开始")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.stop}},[t._v("停止")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.reset}},[t._v("重置")]),t._v(" "),n("br"),t._v("\n    \n   颜色："),n("my-timer",{attrs:{countdown:"",auto:"",type:"primary"}}),t._v(" "),n("my-timer",{attrs:{countdown:"",auto:"",type:"success"}}),t._v(" "),n("my-timer",{attrs:{countdown:"",auto:"",type:"warning"}}),t._v(" "),n("my-timer",{attrs:{countdown:"",auto:"",type:"danger"}}),t._v(" "),n("my-timer",{attrs:{countdown:"",auto:"",type:"info"}}),t._v(" "),n("br"),t._v("\n     \n   毫秒级：  "),n("my-timer",{attrs:{countdown:"",target:"1:00:00",auto:"",interval:10,format:"H:mm:ss.SSS"}})],1)}),[],!1,null,"8a112b48",null);e.default=l.exports},364:function(t,e,n){},371:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},97:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])};i._withStripped=!0;var r={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},s=n(0),o=Object(s.a)(r,i,[],!1,null,null,null);o.options.__file="packages/button/src/button.vue";var a=o.exports;a.install=function(t){t.component(a.name,a)};e.default=a}})},402:function(t,e,n){}}]);