(window.webpackJsonp=window.webpackJsonp||[]).push([[1193],{2409:function(t,e,n){},2731:function(t,e,n){"use strict";n(2409)},3291:function(t,e,n){"use strict";n.r(e);var i=n(993),o=n(491),s=n(0);s.default.use(o.a),s.default.use(i.a);var r={data:function(){return{dragOverlay:!1,htmlPoint:[120.05,30.05]}},methods:{overLayMouseDown:function(t){var e=this.$refs.html1.overlay;this.dragOverlay=e},overLayMouseMove:function(t){this.dragOverlay&&(this.htmlPoint=t.coordinate)},overLayMouseUp:function(t){this.dragOverlay=null}},mounted:function(){}},a=(n(2731),n(19)),p=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",{ref:"map",attrs:{center:[120,30],zoom:6},on:{pointermove:this.overLayMouseMove}},[e("my-map-html",{ref:"html1",attrs:{id:"html1",position:this.htmlPoint},on:{mousedown:this.overLayMouseDown,mouseup:this.overLayMouseUp}},[e("div",{staticClass:"warp"},[e("h2",[this._v("hello world")])])])],1)}),[],!1,null,null,null);e.default=p.exports},836:function(t,e,n){"use strict";e.a={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},841:function(t,e,n){"use strict";var i,o=n(480),s=n(799),r=n(836),a=n(663),p=n(375),l=n(478),u=n(503),h=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d="element",c="map",f="offset",m="position",y="positioning",v=function(t){function e(e){var n=t.call(this)||this;n.options=e,n.id=e.id,n.insertFirst=void 0===e.insertFirst||e.insertFirst,n.stopEvent=void 0===e.stopEvent||e.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==e.className?e.className:"ol-overlay-container "+a.d,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var i=e.autoPan;return i&&"object"!=typeof i&&(i={animation:e.autoPanAnimation,margin:e.autoPanMargin}),n.autoPan=i||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addEventListener(Object(o.b)(d),n.handleElementChanged),n.addEventListener(Object(o.b)(c),n.handleMapChanged),n.addEventListener(Object(o.b)(f),n.handleOffsetChanged),n.addEventListener(Object(o.b)(m),n.handlePositionChanged),n.addEventListener(Object(o.b)(y),n.handlePositioningChanged),void 0!==e.element&&n.setElement(e.element),n.setOffset(void 0!==e.offset?e.offset:[0,0]),n.setPositioning(void 0!==e.positioning?e.positioning:r.a.TOP_LEFT),void 0!==e.position&&n.setPosition(e.position),n}return h(e,t),e.prototype.getElement=function(){return this.get(d)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(c)},e.prototype.getOffset=function(){return this.get(f)},e.prototype.getPosition=function(){return this.get(m)},e.prototype.getPositioning=function(){return this.get(y)},e.prototype.handleElementChanged=function(){Object(u.d)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(u.e)(this.element),Object(l.c)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=Object(l.a)(t,s.a.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(d,t)},e.prototype.setMap=function(t){this.set(c,t)},e.prototype.setOffset=function(t){this.set(f,t)},e.prototype.setPosition=function(t){this.set(m,t)},e.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},e.prototype.panIntoView=function(t){var e=this.getMap();if(e&&e.getTargetElement()&&this.get(m)){var n=this.getRect(e.getTargetElement(),e.getSize()),i=this.getElement(),o=this.getRect(i,[Object(u.c)(i),Object(u.b)(i)]),s=t||{},r=void 0===s.margin?20:s.margin;if(!Object(p.g)(n,o)){var a=o[0]-n[0],l=n[2]-o[2],h=o[1]-n[1],d=n[3]-o[3],c=[0,0];if(a<0?c[0]=a-r:l<0&&(c[0]=Math.abs(l)+r),h<0?c[1]=h-r:d<0&&(c[1]=Math.abs(d)+r),0!==c[0]||0!==c[1]){var f=e.getView().getCenterInternal(),y=e.getPixelFromCoordinateInternal(f);if(!y)return;var v=[y[0]+c[0],y[1]+c[1]],g=s.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(v),duration:g.duration,easing:g.easing})}}}},e.prototype.getRect=function(t,e){var n=t.getBoundingClientRect(),i=n.left+window.pageXOffset,o=n.top+window.pageYOffset;return[i,o,i+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(y,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var n=t.getPixelFromCoordinate(e),i=t.getSize();this.updateRenderedPosition(n,i)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var n=this.element.style,i=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=Math.round(t[0]+i[0])+"px",a=Math.round(t[1]+i[1])+"px",p="0%",l="0%";o==r.a.BOTTOM_RIGHT||o==r.a.CENTER_RIGHT||o==r.a.TOP_RIGHT?p="-100%":o!=r.a.BOTTOM_CENTER&&o!=r.a.CENTER_CENTER&&o!=r.a.TOP_CENTER||(p="-50%"),o==r.a.BOTTOM_LEFT||o==r.a.BOTTOM_CENTER||o==r.a.BOTTOM_RIGHT?l="-100%":o!=r.a.CENTER_LEFT&&o!=r.a.CENTER_CENTER&&o!=r.a.CENTER_RIGHT||(l="-50%");var u="translate("+p+", "+l+") translate("+s+", "+a+")";this.rendered.transform_!=u&&(this.rendered.transform_=u,n.transform=u,n.msTransform=u)},e.prototype.getOptions=function(){return this.options},e}(o.a);e.a=v},852:function(t,e,n){"use strict";var i=n(46),o=(n(201),n(77),n(841));e.a={name:"MyMapHtml",inject:["myMap"],props:{id:[Number,String],offset:{type:Array,default:function(){return[0,0]}},position:Array,positioning:{type:String,default:"center-center"},stopEvent:{type:Boolean,default:!0},insertFirst:Boolean,autoPan:{type:Boolean,default:!1},autoPanAnimation:{type:Object,default:function(){return{}}},autoPanMargin:{type:Number,default:20},visible:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:"my-map-html",style:this.styles,on:Object(i.a)({},this.$listeners)},[this.$slots.default])},computed:{styles:function(){return{cursor:this.$listeners.click?"pointer":""}}},watch:{$props:{deep:!0,handler:function(){try{this.dispose(),this.init()}catch(t){}}}},methods:{init:function(){if(this.$el){var t=Object(i.a)(Object(i.a)({},this.$props),{},{element:this.$el});this.overlay=new o.a(t);try{this.myMap.map.addOverlay(this.overlay),this.setPosition(this.visible?this.position:null)}catch(t){}}},setPosition:function(t){this.overlay&&this.overlay.setPosition(this.visible?t:null)},dispose:function(){this.overlay&&this.myMap&&this.myMap.map&&this.myMap.map.removeOverlay(this.overlay)}},mounted:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){this.dispose()}}},993:function(t,e,n){"use strict";var i=n(47),o=n(852);e.a=Object(i.a)(o.a)}}]);