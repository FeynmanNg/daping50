(window.webpackJsonp=window.webpackJsonp||[]).push([[1337],{1544:function(a,o,s){"use strict";var t=s(0);o.a=new t.default({})},1545:function(a,o,s){"use strict";s.d(o,"a",(function(){return t}));var t="ELEMENT_THEME_USER_CONFIG_UPDATE"},2305:function(a,o,s){},2578:function(a,o,s){"use strict";s(2305)},4159:function(a,o,s){"use strict";s.r(o);s(75),s(121);var t=s(1544),e=s(1545),d={"$--box-shadow-light":"boxShadowLight","$--box-shadow-base":"boxShadowBase","$--border-radius-base":"borderRadiusBase","$--border-radius-small":"borderRadiusSmall"},i={boxShadowLight:"0 2px 12px 0 rgba(0, 0, 0, 0.1)",boxShadowBase:"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)",borderRadiusBase:"4px",borderRadiusSmall:"2px"},n={created:function(){t.a.$on(e.a,this.setGlobal)},mounted:function(){this.setGlobal()},methods:{setGlobal:function(){window.userThemeConfig&&(this.global=window.userThemeConfig.global)}},data:function(){return{global:{},boxShadowLight:"",boxShadowBase:"",borderRadiusBase:"",borderRadiusSmall:""}},watch:{global:{immediate:!0,handler:function(a){var o=this;Object.keys(d).forEach((function(s){a[s]?o[d[s]]=a[s]:o[d[s]]=i[d[s]]}))}}}},r=(s(2578),s(19)),b=Object(r.a)(n,(function(){var a=this,o=a.$createElement,s=a._self._c||o;return s("div",[s("div",{staticClass:"demo-shadow",style:{boxShadow:a.boxShadowBase}}),a._v(" "),s("span",{staticClass:"demo-shadow-text"},[a._v("基础投影 box-shadow: "+a._s(a.boxShadowBase))]),a._v(" "),s("div",{staticClass:"demo-shadow",style:{boxShadow:a.boxShadowLight}}),a._v(" "),s("span",{staticClass:"demo-shadow-text"},[a._v("浅色投影 box-shadow: "+a._s(a.boxShadowLight))])])}),[],!1,null,"424b5aa6",null);o.default=b.exports}}]);