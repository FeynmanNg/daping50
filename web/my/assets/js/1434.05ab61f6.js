(window.webpackJsonp=window.webpackJsonp||[]).push([[1434],{2476:function(e,n,t){var o={"./dashboard-analysis.vue":[3715,0,1,2,3,454],"./dashboard-monitor.vue":[3716,0,1,2,8,547],"./dashboard-workplace.vue":[3717,0,1,2,3,448],"./dv-01.vue":[2164,0,1,5,6,472],"./dv-02.vue":[2167,0,1,2,3,453],"./dv-03.vue":[2165,0,1,2,3,443],"./dv-04.vue":[2168,0,1,2,3,445],"./dv-05.vue":[2166,0,1,4,5,490],"./form-advance.vue":[3718,0,1,2,3,477],"./form-basic.vue":[2851,0,1,2,3,480],"./form-step.vue":[3719,0,1,3,10,557],"./layout.vue":[3720,0,1,2,8,486],"./list-basic.vue":[3721,0,1,2,3,460],"./list-card.vue":[3722,0,1,2,3,487],"./list-crud.vue":[3723,0,1,2,3,458],"./list-query.vue":[3724,0,1,2,3,461],"./list-tree.vue":[3725,0,1,2,3,481],"./login.vue":[3726,0,1,3,10,623],"./profile-advanced.vue":[3727,0,1,2,3,479],"./profile-basic.vue":[3728,0,1,2,3,484],"./search-list-app.vue":[3729,0,1,2,3,462],"./search-list-article.vue":[3730,0,1,2,3,464],"./search-list-project.vue":[3731,0,1,2,3,463]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2476,e.exports=a},4025:function(e,n,t){"use strict";t.r(n);t(7);var o={name:"PageLoader",props:{page:String,local:String,options:Object},data:function(){return{component:null}},mounted:function(){var e=this;t(2476)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(18),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,e._b({tag:"component"},"component",e.options,!1)):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"47aaa830",null);n.default=r.exports}}]);