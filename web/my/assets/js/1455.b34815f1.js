(window.webpackJsonp=window.webpackJsonp||[]).push([[1455],{1140:function(e,t,i){"use strict";var n,r=i(753),s=i(579),a=i(663),o=i(403),l=i(441),c=i(480),p=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),d="degrees",h="imperial",u="nautical",f="metric",m="us",_=[1,2,5],v=function(e){function t(t){var i=this,n=t||{},r=void 0!==n.className?n.className:n.bar?"ol-scale-bar":"ol-scale-line";return(i=e.call(this,{element:document.createElement("div"),render:n.render,target:n.target})||this).innerElement_=document.createElement("div"),i.innerElement_.className=r+"-inner",i.element.className=r+" "+a.e,i.element.appendChild(i.innerElement_),i.viewState_=null,i.minWidth_=void 0!==n.minWidth?n.minWidth:64,i.renderedVisible_=!1,i.renderedWidth_=void 0,i.renderedHTML_="",i.addEventListener(Object(c.b)("units"),i.handleUnitsChanged_),i.setUnits(n.units||f),i.scaleBar_=n.bar||!1,i.scaleBarSteps_=n.steps||4,i.scaleBarText_=n.text||!1,i.dpi_=n.dpi||void 0,i}return p(t,e),t.prototype.getUnits=function(){return this.get("units")},t.prototype.handleUnitsChanged_=function(){this.updateElement_()},t.prototype.setUnits=function(e){this.set("units",e)},t.prototype.setDpi=function(e){this.dpi_=e},t.prototype.updateElement_=function(){var e=this.viewState_;if(e){var t=e.center,i=e.projection,n=this.getUnits(),r=n==d?s.b.DEGREES:s.b.METERS,a=Object(o.k)(i,e.resolution,t,r),c=this.minWidth_*(this.dpi_||25.4/.28)/(25.4/.28),p=c*a,v="";if(n==d){var y=o.a[s.b.DEGREES];(p*=y)<y/60?(v="″",a*=3600):p<y?(v="′",a*=60):v="°"}else n==h?p<.9144?(v="in",a/=.0254):p<1609.344?(v="ft",a/=.3048):(v="mi",a/=1609.344):n==u?(a/=1852,v="nm"):n==f?p<.001?(v="μm",a*=1e6):p<1?(v="mm",a*=1e3):p<1e3?v="m":(v="km",a/=1e3):n==m?p<.9144?(v="in",a*=39.37):p<1609.344?(v="ft",a/=.30480061):(v="mi",a/=1609.3472):Object(l.a)(!1,33);for(var b,S,w,M,x=3*Math.floor(Math.log(c*a)/Math.log(10));;){w=Math.floor(x/3);var g=Math.pow(10,w);if(b=_[(x%3+3)%3]*g,S=Math.round(b/a),isNaN(S))return this.element.style.display="none",void(this.renderedVisible_=!1);if(S>=c)break;++x}M=this.scaleBar_?this.createScaleBar(S,b,v):b.toFixed(w<0?-w:0)+" "+v,this.renderedHTML_!=M&&(this.innerElement_.innerHTML=M,this.renderedHTML_=M),this.renderedWidth_!=S&&(this.innerElement_.style.width=S+"px",this.renderedWidth_=S),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},t.prototype.createScaleBar=function(e,t,i){for(var n="1 : "+Math.round(this.getScaleForResolution()).toLocaleString(),r=[],s=e/this.scaleBarSteps_,a="#ffffff",o=0;o<this.scaleBarSteps_;o++)0===o&&r.push(this.createMarker("absolute",o)),r.push('<div><div class="ol-scale-singlebar" style="width: '+s+"px;background-color: "+a+';"></div>'+this.createMarker("relative",o)+(o%2==0||2===this.scaleBarSteps_?this.createStepText(o,e,!1,t,i):"")+"</div>"),o===this.scaleBarSteps_-1&&r.push(this.createStepText(o+1,e,!0,t,i)),a="#ffffff"===a?"#000000":"#ffffff";return'<div style="display: flex;">'+(this.scaleBarText_?'<div class="ol-scale-text" style="width: '+e+'px;">'+n+"</div>":"")+r.join("")+"</div>"},t.prototype.createMarker=function(e,t){return'<div class="ol-scale-step-marker" style="position: '+e+";top: "+("absolute"===e?3:-10)+'px;"></div>'},t.prototype.createStepText=function(e,t,i,n,r){var s=(0===e?0:Math.round(n/this.scaleBarSteps_*e*100)/100)+(0===e?"":" "+r);return'<div class="ol-scale-step-text" style="margin-left: '+(0===e?-3:t/this.scaleBarSteps_*-1)+"px;text-align: "+(0===e?"left":"center")+"; min-width: "+(0===e?0:t/this.scaleBarSteps_*2)+"px;left: "+(i?t+"px":"unset")+';">'+s+"</div>"},t.prototype.getScaleForResolution=function(){var e=Object(o.k)(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center),t=this.dpi_||25.4/.28,i=this.viewState_.projection.getMetersPerUnit();return parseFloat(e.toString())*i*(1e3/25.4)*t},t.prototype.render=function(e){var t=e.frameState;this.viewState_=t?t.viewState:null,this.updateElement_()},t}(r.a);t.a=v},2285:function(e,t,i){"use strict";var n=i(47),r=(i(201),i(77),i(1140)),s={name:"MyMapScale",inject:["myMap"],render:function(){return null},props:{minWidth:{type:Number,default:64},units:{type:String,default:"metric"},bar:{type:Boolean},steps:{type:Number,default:4},text:{type:Boolean}},methods:{init:function(e){this.scaleLine=new r.a(this.$props),e.addControl(this.scaleLine)},dispose:function(){this.scaleLine&&this.myMap.map.removeControl(this.scaleLine)}},created:function(){this.myMap.mapReady(this.init)}};t.a=Object(n.a)(s)},3187:function(e,t,i){"use strict";i.r(t);var n=i(2285),r=i(491),s=i(0);s.default.use(r.a),s.default.use(n.a);var a={},o=i(19),l=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("my-map",[t("my-map-scale",{attrs:{bar:"",text:""}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);