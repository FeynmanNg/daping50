(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{1851:function(t,e,n){},2540:function(t,e,n){"use strict";n(1851)},3288:function(t,e,n){"use strict";n.r(e);n(658),n(124);var i=n(664),r=n(0),o={components:{MyLayout:i.a}};r.default.use(i.a);var s=o,a=(n(2540),n(18)),u=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",{attrs:{border:"",direction:"horizontal"},scopedSlots:t._u([{key:"north",fn:function(){return[t._v("North")]},proxy:!0},{key:"west",fn:function(){return[t._v("West")]},proxy:!0},{key:"east",fn:function(){return[t._v("East")]},proxy:!0},{key:"south",fn:function(){return[t._v("South")]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),t._v(" "),n("div",[t._v("Main")])])}),[],!1,null,"fa314f3a",null);e.default=u.exports},359:function(t,e,n){},410:function(t,e,n){"use strict";var i=n(203),r=n(206),o=n(8),s=n(22),a=n(466),u=n(205),l=n(19),c=n(204),h=n(90),d=n(2),f=[].push,p=Math.min,g=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);for(var a,u,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,d+"g");(a=h.call(g,i))&&!((u=g.lastIndex)>p&&(c.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&f.apply(c,a.slice(1)),l=a[0].length,p=u,c.length>=o));)g.lastIndex===a.index&&g.lastIndex++;return p===i.length?!l&&g.test("")||c.push(""):c.push(i.slice(p)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var h=o(t),d=String(this),f=a(h,RegExp),v=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new f(g?h:"^(?:"+h.source+")",y),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var x=0,_=0,w=[];_<d.length;){b.lastIndex=g?_:0;var R,O=c(b,g?d:d.slice(_));if(null===O||(R=p(l(b.lastIndex+(g?0:_)),d.length))===x)_=u(d,_,v);else{if(w.push(d.slice(x,_)),w.length===m)return w;for(var j=1;j<=O.length-1;j++)if(w.push(O[j]),w.length===m)return w;_=x=R}}return w.push(d.slice(x)),w}]}),!g)},431:function(t,e,n){var i=n(1),r=n(536);i({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},466:function(t,e,n){var i=n(8),r=n(61),o=n(3)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[o])?e:r(n)}},536:function(t,e,n){var i=n(4),r=n(207).trim,o=n(208),s=i.parseInt,a=/^[+-]?0[Xx]/,u=8!==s(o+"08")||22!==s(o+"0x16");t.exports=u?function(t,e){var n=r(String(t));return s(n,e>>>0||(a.test(n)?16:10))}:s},653:function(t,e,n){},654:function(t,e,n){},655:function(t,e,n){},656:function(t,e,n){},658:function(t,e,n){},659:function(t,e,n){},664:function(t,e,n){"use strict";var i=n(53),r=(n(125),n(198),n(431),n(33),n(410),n(52)),o=n(31),s=(n(653),n(359),n(709)),a=n.n(s),u=(n(654),n(710)),l=n.n(u),c=(n(659),n(722)),h=n.n(c),d=(n(655),n(711)),f=n.n(d),p=(n(656),n(712)),g=n.n(p),v={north:g.a,default:f.a,south:h.a,east:l.a,west:l.a},y={name:"MyLayout",components:{Container:a.a,Header:g.a,Main:f.a,Footer:h.a,Aside:l.a},props:{fit:Boolean,border:Boolean,split:Boolean,direction:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},north:Object,south:Object,east:Object,west:Object},data:function(){return{}},computed:{classes:function(){return Object(o.a)({"my-layout":!0,"is-fit":this.fit,"is-border":this.border,"is-split":this.split},"is-".concat(this.direction),!!this.direction)}},methods:{getDirection:function(){if(this.direction)return this.direction;var t=this.$slots,e=t.north,n=t.south,i=t.west,r=t.east,o=!i&&!r;return o||!o&&!(!e&&!n)?"vertical":"horizontal"},getRegionOptions:function(t){return Object(r.a)({},this[t]||{})},regionRender:function(t){var e=this.$createElement;if(this.$slots[t]){var n=this.getRegionOptions(t),i={north:"height",south:"height",west:"width",east:"width"}[t],r=Number.parseInt(void 0===n[i]?{north:60,south:60,west:256,east:256}[t]:n[i]);return this.$createElement(v[t],{class:["my-layout__region","my-layout__".concat(t),{"is-split":this.split,"is-border":this.border}],style:Object(o.a)({},i,"number"==typeof r?"".concat(r,"px"):r)},this.fit&&r?[e("div",{class:"my-layout__fit"},[this.$slots[t]])]:this.$slots[t])}}},render:function(){var t=this,e=arguments[0],n=this.$slots,i=n.north,r=n.south,o=n.west,s=n.east,a=this.getDirection(),u=function(){return o||s?e("Container",{class:"my-layout__wrapper",attrs:{direction:"horizontal"}},[[t.regionRender("west"),t.regionRender("default"),t.regionRender("east")]]):t.regionRender("default")},l=function(){return i||r?e("Container",{class:"my-layout__wrapper",attrs:{direction:"vertical"}},[[t.regionRender("north"),t.regionRender("default"),t.regionRender("south")]]):t.regionRender("default")};return e("Container",{attrs:{direction:a},class:this.classes},["vertical"===a?[this.regionRender("north"),u(),this.regionRender("south")]:[this.regionRender("west"),l(),this.regionRender("east")]])}},b=n(18),m=Object(b.a)(y,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(m)}}]);