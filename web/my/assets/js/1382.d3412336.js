(window.webpackJsonp=window.webpackJsonp||[]).push([[1382],{2475:function(e,n,t){var o={"./dashboard-analysis.vue":[3671,0,1,2,3,459],"./dashboard-monitor.vue":[3672,0,1,2,8,560],"./dashboard-workplace.vue":[3673,0,1,2,3,456],"./dv-01.vue":[2415,0,1,5,6,469],"./dv-02.vue":[2418,0,1,2,3,455],"./dv-03.vue":[2416,0,1,2,3,446],"./dv-04.vue":[2419,0,1,2,3,448],"./dv-05.vue":[2417,0,1,4,5,490],"./form-advance.vue":[3674,0,1,2,3,482],"./form-basic.vue":[2793,0,1,2,3,484],"./form-step.vue":[3675,0,1,3,9,567],"./layout.vue":[3676,0,1,2,8,509],"./list-basic.vue":[3677,0,1,2,3,463],"./list-card.vue":[3678,0,1,2,3,501],"./list-crud.vue":[3679,0,1,2,3,461],"./list-query.vue":[3680,0,1,2,3,464],"./list-tree.vue":[3681,0,1,2,3,488],"./login.vue":[3682,0,1,3,9,664],"./profile-advanced.vue":[3683,0,1,2,3,483],"./profile-basic.vue":[3684,0,1,2,3,491],"./search-list-app.vue":[3685,0,1,2,3,465],"./search-list-article.vue":[3686,0,1,2,3,467],"./search-list-project.vue":[3687,0,1,2,3,466]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2475,e.exports=a},3985:function(e,n,t){"use strict";t.r(n);t(7);var o={name:"PageLoader",props:{page:String,local:String,options:Object},data:function(){return{component:null}},mounted:function(){var e=this;t(2475)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(18),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,e._b({tag:"component"},"component",e.options,!1)):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"76144524",null);n.default=r.exports}}]);