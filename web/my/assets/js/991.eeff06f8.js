(window.webpackJsonp=window.webpackJsonp||[]).push([[991],{1020:function(t,e,i){"use strict";var o=i(820),n=i(819),r=i(501),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=Object(r.c)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new o.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:n.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(r.c)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}();e.a=s},1230:function(t,e,i){"use strict";var o=i(47),n=i(78),r=i(46),s=(i(201),i(380),i(202),i(534)),a=i(573),l=i(597),c=i(441),u={color:null,period:1.5,scale:5,strokeColor:null,strokeWidth:2,type:"fill"},f={name:"MyMapScatter",mixins:[l.a],props:{coordinate:Array,radius:{type:Number,default:10},effect:{type:Boolean,default:!0},fill:{type:String,default:"#409eff"},stroke:{type:Object},ripple:{type:Object,default:function(){return u}},delay:{type:Number,default:0},loop:{type:Boolean,default:!0}},computed:{rippleOptions:function(){var t=this.ripple.color||this.fill,e=this.ripple.strokeColor||this.fill;return Object(r.a)(Object(r.a)(Object(r.a)({},u),this.ripple),{},{color:t,strokeColor:e})}},methods:{drawHandler:function(){return new s.a(this.coordinate)},modifyHandler:function(t){t.setCoordinates(this.coordinate)},delayStart:function(t){this.delay?(clearTimeout(this.delayId),this.delayId=setTimeout(t,this.delay)):t()},setStyle:function(){var t=this;if(this.feature){var e=[Object(c.a)({zIndex:this.zIndex,circle:{fill:this.fill,radius:this.radius,stroke:this.stroke},text:this.styleText})];if(this.effect){var i=this.getRipple(this.rippleOptions),o=this.getRippleStroke(this.rippleOptions);e=[o,i].concat(e),this.delayStart((function(){t.rippleEffect(e,t.rippleOptions)}))}this.feature.setStyle(e)}},getRipple:function(t){var e=t.color,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.a)({zIndex:this.zIndex,circle:Object(r.a)({fill:e,radius:this.radius},i)})},getRippleStroke:function(t){var e=t.strokeColor,i=t.strokeWidth,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.a)({zIndex:this.zIndex,circle:Object(r.a)({fill:"transparent",radius:this.radius,stroke:{color:e,width:i}},o)})},rippleEffect:function(t,e){var i=this,o=e.scale,r=e.period,s=e.type,l=Object(n.a)(t,3),c=l[0],u=l[1],f=l[2],h=(new Date).getTime();!function n(){var l=((new Date).getTime()-h)/(1e3*r);if(l>1)i.loop&&i.rippleEffect(t,e);else{var p=Object(a.b)(l),d=i.radius*o*p,y=1-p;"fill"===s?(u=i.getRipple(i.rippleOptions,{radius:d})).getImage().setOpacity(y):(c=i.getRippleStroke(i.rippleOptions,{radius:d})).getImage().setOpacity(y),i.feature.setStyle([c,u,f]),i.aId=window.requestAnimationFrame(n)}}()}},beforeDestroy:function(){this.aId&&window.cancelAnimationFrame(this.aId)}};e.a=Object(o.a)(f)},3232:function(t,e,i){"use strict";i.r(e);var o=i(1230),n=i(466),r=i(0),s={methods:{getCoordinate:function(){return[113+Math.random()-Math.random(),23+Math.random()-Math.random()]}}};r.default.use(n.a),r.default.use(o.a);var a=s,l=i(19),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("my-map",t._l(50,(function(e){return i("my-map-scatter",{key:e,attrs:{coordinate:t.getCoordinate(),delay:5e3*Math.random()}})})),1)}),[],!1,null,null,null);e.default=c.exports},380:function(t,e,i){var o=i(2),n=i(424),r=i(120);o({target:"Array",proto:!0},{fill:n}),r("fill")},424:function(t,e,i){"use strict";var o=i(20),n=i(123),r=i(21);t.exports=function(t){for(var e=o(this),i=r(e.length),s=arguments.length,a=n(s>1?arguments[1]:void 0,i),l=s>2?arguments[2]:void 0,c=void 0===l?i:n(l,i);c>a;)e[a++]=t;return e}},441:function(t,e,i){"use strict";var o=i(78),n=i(119),r=(i(116),i(75),i(374),i(203),i(820)),s=i(1020),a=i(1152),l=i(1153),c=i(1543),u=i(1154),f=i(963),h={fill:r.a,text:s.a,stroke:a.a,circle:l.a,icon:c.a,regularShape:u.a,backgroundFill:r.a,backgroundStroke:a.a},p=[l.a,c.a,u.a];function d(t){return"object"===Object(n.a)(t)}function y(t,e,i){var o,n;if(null!=i)return t?["fill","backgroundFill"].includes(e)?(n=d(o=i)?o:{color:o},new r.a(n)):"text"===e?d(i)?g(i,t):i:g(i,t):i}function g(t,e){var i={};return Object.entries(t).forEach((function(t){var e=Object(o.a)(t,2),n=e[0],r=e[1],s=h[n];"font"===n&&(r="".concat(r," sans-serif")),i[p.includes(s)?"image":n]=y(s,n,r)})),new(e||f.c)(i)}e.a=g},527:function(t,e,i){"use strict";var o,n=i(456),r=i(398),s=i(422),a=i(454),l=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=function(t){function e(e){var i=t.call(this)||this;if(i.id_=void 0,i.geometryName_="geometry",i.style_=null,i.styleFunction_=void 0,i.geometryChangeKey_=null,i.addEventListener(Object(n.b)(i.geometryName_),i.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var o=e;i.setGeometry(o)}else{var r=e;i.setProperties(r)}return i}return l(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var o=this.getStyle();return o&&t.setStyle(o),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(a.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(a.a)(t,r.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(s.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(n.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(n.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(n.a);e.a=c},574:function(t,e,i){"use strict";i(201);e.a={props:{zIndex:Number,fill:{type:String,default:"rgba(255, 255,255, 0.5)"},stroke:{type:Object,default:function(){return{width:3,color:"#409eff"}}},text:[Object,String],styleFunction:Function},computed:{styleText:function(){return"string"==typeof this.text?{text:this.text,font:"12px"}:this.text||{}}}}},597:function(t,e,i){"use strict";var o=i(46),n=(i(380),i(527)),r=i(574),s=i(441);e.a={mixins:[r.a],inject:["myMap"],props:{props:{type:Object,default:function(){return{}}}},render:function(){return null},watch:{$props:{deep:!0,handler:function(){this.modify()}}},methods:{drawHandler:function(){},modifyHandler:function(t){},draw:function(){var t=this.drawHandler();t&&(this.feature=new n.a({geometry:t}),this.feature.__vm__=this,this.props&&this.feature.setProperties(Object(o.a)({},this.props)),this.myMap.addFeature(this.feature),this.setStyle(),this.$emit("feature-draw"))},setStyle:function(){if(this.feature){var t=this.styleFunction?this.styleFunction(this):Object(s.a)({fill:this.fill,stroke:this.stroke,zIndex:this.zIndex,text:this.styleText});this.feature.setStyle(t)}},modify:function(){if(this.feature){var t=this.feature.getGeometry();this.modifyHandler(t),this.setStyle(),this.props&&this.feature.setProperties(Object(o.a)({},this.props))}else this.draw()}},created:function(){this.myMap.mapReady(this.draw)},beforeDestroy:function(){this.feature&&(this.feature.__vm__=null,this.feature.disposeInternal(),this.myMap.removeFeature(this.feature))}}}}]);