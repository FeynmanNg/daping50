(window.webpackJsonp=window.webpackJsonp||[]).push([[1239],{2293:function(t,e,n){},2610:function(t,e,n){"use strict";n(2293)},3122:function(t,e,n){"use strict";n.r(e);var a=n(479),r=n.n(a),o=n(487),s=n.n(o),l=(n(1713),n(119),n(2092)),u=(n(621),n(622)),d=n(0),c={components:{MyDrag:u.a,MyDrop:l.a},data:function(){return{text:"请放置在这里"}},methods:{handleEnter:function(){this.text="已进入"},handleLeave:function(){this.text="已离开"},handleDrop:function(){this.text="已放置"}}};d.default.use(s.a),d.default.use(r.a),d.default.use(u.a),d.default.use(l.a);var p=c,i=(n(2610),n(20)),f=Object(i.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{span:6}},[n("my-drag",{attrs:{group:"demo"}},[t._v("请把我拖到目标处")])],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("my-drag",[t._v("我是不能被放置的")])],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("my-drop",{attrs:{accept:"demo"},on:{enter:t.handleEnter,leave:t.handleLeave,drop:t.handleDrop}},[t._v(t._s(t.text))])],1)],1)}),[],!1,null,"3fe8d990",null);e.default=f.exports}}]);