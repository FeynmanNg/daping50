(window.webpackJsonp=window.webpackJsonp||[]).push([[1359],{2389:function(e,n,t){var o={"./dashboard-analysis.vue":[3561,0,1,2,3,455],"./dashboard-monitor.vue":[3562,0,1,2,8,534],"./dashboard-workplace.vue":[3563,0,1,2,3,452],"./dv-01.vue":[2079,0,1,5,6,465],"./dv-02.vue":[2082,0,1,2,3,451],"./dv-03.vue":[2080,0,1,2,3,444],"./dv-04.vue":[2083,0,1,2,3,446],"./dv-05.vue":[2081,0,1,4,5,484],"./form-advance.vue":[3564,0,1,2,3,477],"./form-basic.vue":[2707,0,1,2,3,479],"./form-step.vue":[3565,0,1,3,10,549],"./layout.vue":[3566,0,1,2,8,498],"./list-basic.vue":[3567,0,1,2,3,459],"./list-card.vue":[3568,0,1,2,3,489],"./list-crud.vue":[3569,0,1,2,3,457],"./list-query.vue":[3570,0,1,2,3,460],"./list-tree.vue":[3571,0,1,2,3,482],"./login.vue":[3572,0,1,3,10,648],"./profile-advanced.vue":[3573,0,1,2,3,478],"./profile-basic.vue":[3574,0,1,2,3,485],"./search-list-app.vue":[3575,0,1,2,3,461],"./search-list-article.vue":[3576,0,1,2,3,463],"./search-list-project.vue":[3577,0,1,2,3,462]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2389,e.exports=a},3868:function(e,n,t){"use strict";t.r(n);t(7);var o={name:"PageLoader",props:{page:String,local:String,options:Object},data:function(){return{component:null}},mounted:function(){var e=this;t(2389)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(18),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,e._b({tag:"component"},"component",e.options,!1)):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"47aaa830",null);n.default=r.exports}}]);