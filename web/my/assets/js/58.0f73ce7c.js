(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1588:function(t,e,a){t.exports=a(1667)},1667:function(t,e,a){var r=a(364),n=a(401);a(1668),a(1669);var o=a(1670);if(!o.isSupported)throw new Error("Sorry your browser not support wordCloud");r.registerLayout((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var i=n.getLayoutRect(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),s=a.getData(),l=document.createElement("canvas");l.width=i.width,l.height=i.height;var d=l.getContext("2d"),f=a.get("maskImage");if(f)try{d.drawImage(f,0,0,l.width,l.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),r=e.createImageData(a),n=0,o=0,i=0;i<a.data.length;i+=4){if(a.data[i+3]>128)n+=l=a.data[i]+a.data[i+1]+a.data[i+2],++o}var s=n/o;for(i=0;i<a.data.length;i+=4){var l=a.data[i]+a.data[i+1]+a.data[i+2];a.data[i+3]<128||l>s?(r.data[i]=0,r.data[i+1]=0,r.data[i+2]=0,r.data[i+3]=0):(r.data[i]=255,r.data[i+1]=255,r.data[i+2]=255,r.data[i+3]=255)}e.putImageData(r,0,0)}(l)}catch(t){console.error("Invalid mask image"),console.error(t.toString())}var u=a.get("sizeRange"),c=a.get("rotationRange"),h=s.getDataExtent("value"),g=Math.PI/180,m=a.get("gridSize");function v(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=i.x/m,t.detail.drawn.gy+=i.y/m,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}o(l,{list:s.mapArray("value",(function(t,e){var a=s.getItemModel(e);return[s.getName(e),a.get("textStyle.normal.textSize",!0)||r.number.linearMap(t,h,u),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.normal.fontFamily")||a.get("textStyle.emphasis.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.normal.fontWeight")||a.get("textStyle.emphasis.fontWeight")||t.get("textStyle.fontWeight"),gridSize:m,ellipticity:i.height/i.width,minRotation:c[0]*g,maxRotation:c[1]*g,clearCanvas:!f,rotateRatio:1,rotationStep:a.get("rotationStep")*g,drawOutOfBound:a.get("drawOutOfBound"),shuffle:!1,shape:a.get("shape")}),l.addEventListener("wordclouddrawn",v),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){l.removeEventListener("wordclouddrawn",v),l.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),r.registerPreprocessor((function(t){var e=(t||{}).series;!r.util.isArray(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function n(t){t&&r.util.each(a,(function(e){t.hasOwnProperty(e)&&(t["text"+r.format.capitalFirst(e)]=t[e])}))}r.util.each(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};n(e.normal),n(e.emphasis)}}))}))},1668:function(t,e,a){var r=a(1024),n=a(364);n.extendSeriesModel({type:"series.wordCloud",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=r(["value"],t.data),o=new n.List(a,this);return o.initData(t.data),o},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{normal:{fontWeight:"normal"}}}})},1669:function(t,e,a){var r=a(364);r.extendChartView({type:"wordCloud",render:function(t,e,a){var n=this.group;n.removeAll();var o=t.getData(),i=t.get("gridSize");t.layoutInstance.ondraw=function(t,e,a,s){var l=o.getItemModel(a),d=l.getModel("textStyle.normal"),f=l.getModel("textStyle.emphasis"),u=new r.graphic.Text({style:r.graphic.setTextStyle({},d,{x:s.info.fillTextOffsetX,y:s.info.fillTextOffsetY+.5*e,text:t,textBaseline:"middle",textFill:o.getItemVisual(a,"color"),fontSize:e}),scale:[1/s.info.mu,1/s.info.mu],position:[(s.gx+s.info.gw/2)*i,(s.gy+s.info.gh/2)*i],rotation:s.rot});n.add(u),o.setItemGraphicEl(a,u),r.graphic.setHoverStyle(u,r.graphic.setTextStyle({},f,null,{forMerge:!0},!0))},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}})},1670:function(t,e,a){"use strict";var r,n,o,i,s;
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var r=parseInt(a.data.substr(e.length),36);t[r]&&(t[r](),t[r]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var r=t.length;return t.push(a),window.postMessage(e+r.toString(36),"*"),r}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),n=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),o=function(){if(n){for(var t,e,a=document.createElement("canvas").getContext("2d"),r=20;r;){if(a.font=r.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===e)return r+1;t=a.measureText("Ｗ").width,e=a.measureText("m").width,r--}return 0}}(),i=function(t){for(var e,a,r=t.length;r;e=Math.floor(Math.random()*r),a=t[--r],t[r]=t[e],t[e]=a);return t},(s=function(t,e){if(n){Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."}));var a={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var r in e)r in a&&(a[r]=e[r]);if("function"!=typeof a.weightFactor){var s=a.weightFactor;a.weightFactor=function(t){return t*s}}if("function"!=typeof a.shape)switch(a.shape){case"circle":default:a.shape="circle";break;case"cardioid":a.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":a.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":a.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":a.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":a.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":a.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}a.gridSize=Math.max(Math.floor(a.gridSize),4);var l,d,f,u,c,h,g,m=a.gridSize,v=m-a.maskGapWidth,w=Math.abs(a.maxRotation-a.minRotation),p=Math.min(a.maxRotation,a.minRotation),x=a.rotationStep;switch(a.color){case"random-dark":g=function(){return z(10,50)};break;case"random-light":g=function(){return z(50,90)};break;default:"function"==typeof a.color&&(g=a.color)}var y=null;"function"==typeof a.classes&&(y=a.classes);var M,I=!1,S=[],b=function(t){var e,a,r=t.currentTarget,n=r.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var o=e-n.left,i=a-n.top,s=Math.floor(o*(r.width/n.width||1)/m),l=Math.floor(i*(r.height/n.height||1)/m);return S[s][l]},C=function(t){var e=b(t);M!==e&&(M=e,e?a.hover(e.item,e.dimension,t):a.hover(void 0,void 0,t))},T=function(t){var e=b(t);e&&(a.click(e.item,e.dimension,t),t.preventDefault())},E=[],k=function(t){if(E[t])return E[t];var e=8*t,r=e,n=[];for(0===t&&n.push([u[0],u[1],0]);r--;){var o=1;"circle"!==a.shape&&(o=a.shape(r/e*2*Math.PI)),n.push([u[0]+t*o*Math.cos(-r/e*2*Math.PI),u[1]+t*o*Math.sin(-r/e*2*Math.PI)*a.ellipticity,r/e*2*Math.PI])}return E[t]=n,n},F=function(){return a.abortThreshold>0&&(new Date).getTime()-h>a.abortThreshold},O=function(e,a,r,n,o){e>=d||a>=f||e<0||a<0||(l[e][a]=!1,r&&t[0].getContext("2d").fillRect(e*m,a*m,v,v),I&&(S[e][a]={item:o,dimension:n}))},R=function(e){var r,n,s;Array.isArray(e)?(r=e[0],n=e[1]):(r=e.word,n=e.weight,s=e.attributes);var u=0===a.rotateRatio||Math.random()>a.rotateRatio?0:0===w?p:p+Math.round(Math.random()*w/x)*x,h=function(t,e,r){var n=a.weightFactor(e);if(n<=a.minSize)return!1;var i=1;n<o&&(i=function(){for(var t=2;t*n<o;)t+=2;return t}());var s=document.createElement("canvas"),l=s.getContext("2d",{willReadFrequently:!0});l.font=a.fontWeight+" "+(n*i).toString(10)+"px "+a.fontFamily;var d=l.measureText(t).width/i,f=Math.max(n*i,l.measureText("m").width,l.measureText("Ｗ").width)/i,u=d+2*f,c=3*f,h=Math.ceil(u/m),g=Math.ceil(c/m);u=h*m,c=g*m;var v=-d/2,w=.4*-f,p=Math.ceil((u*Math.abs(Math.sin(r))+c*Math.abs(Math.cos(r)))/m),x=Math.ceil((u*Math.abs(Math.cos(r))+c*Math.abs(Math.sin(r)))/m),y=x*m,M=p*m;s.setAttribute("width",y),s.setAttribute("height",M),l.scale(1/i,1/i),l.translate(y*i/2,M*i/2),l.rotate(-r),l.font=a.fontWeight+" "+(n*i).toString(10)+"px "+a.fontFamily,l.fillStyle="#000",l.textBaseline="middle",l.fillText(t,v*i,(w+.5*n)*i);var I=l.getImageData(0,0,y,M).data;if(F())return!1;for(var S,b,C,T=[],E=x,k=[p/2,x/2,p/2,x/2];E--;)for(S=p;S--;){C=m;t:for(;C--;)for(b=m;b--;)if(I[4*((S*m+C)*y+(E*m+b))+3]){T.push([E,S]),E<k[3]&&(k[3]=E),E>k[1]&&(k[1]=E),S<k[0]&&(k[0]=S),S>k[2]&&(k[2]=S);break t}}return{mu:i,occupied:T,bounds:k,gw:x,gh:p,fillTextOffsetX:v,fillTextOffsetY:w,fillTextWidth:d,fillTextHeight:f,fontSize:n}}(r,n,u);if(!h)return!1;if(F())return!1;if(!a.drawOutOfBound){var v=h.bounds;if(v[1]-v[3]+1>d||v[2]-v[0]+1>f)return!1}for(var M=c+1,S=function(o){var i=Math.floor(o[0]-h.gw/2),v=Math.floor(o[1]-h.gh/2);return h.gw,h.gh,!!function(t,e,r,n,o){for(var i=o.length;i--;){var s=t+o[i][0],u=e+o[i][1];if(s>=d||u>=f||s<0||u<0){if(!a.drawOutOfBound)return!1}else if(!l[s][u])return!1}return!0}(i,v,0,0,h.occupied)&&(function(e,r,n,o,i,s,l,d,f){var u,c,h=n.fontSize;u=g?g(o,i,h,s,l):a.color,c=y?y(o,i,h,s,l):a.classes;var v=n.bounds;v[3],v[0],v[1],v[3],v[2],v[0],t.forEach((function(t){if(t.getContext){var i=t.getContext("2d"),s=n.mu;i.save(),i.scale(1/s,1/s),i.font=a.fontWeight+" "+(h*s).toString(10)+"px "+a.fontFamily,i.fillStyle=u,i.translate((e+n.gw/2)*m*s,(r+n.gh/2)*m*s),0!==d&&i.rotate(-d),i.textBaseline="middle",i.fillText(o,n.fillTextOffsetX*s,(n.fillTextOffsetY+.5*h)*s),i.restore()}else{var l=document.createElement("span"),g="";g="rotate("+-d/Math.PI*180+"deg) ",1!==n.mu&&(g+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var v={position:"absolute",display:"block",font:a.fontWeight+" "+h*n.mu+"px "+a.fontFamily,left:(e+n.gw/2)*m+n.fillTextOffsetX+"px",top:(r+n.gh/2)*m+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:h+"px",whiteSpace:"nowrap",transform:g,webkitTransform:g,msTransform:g,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var w in u&&(v.color=u),l.textContent=o,v)l.style[w]=v[w];if(f)for(var p in f)l.setAttribute(p,f[p]);c&&(l.className+=c),t.appendChild(l)}}))}(i,v,h,r,n,c-M,o[2],u,s),function(e,r,n,o,i,s){var l,u,c=i.occupied,h=a.drawMask;if(h&&((l=t[0].getContext("2d")).save(),l.fillStyle=a.maskColor),I){var g=i.bounds;u={x:(e+g[3])*m,y:(r+g[0])*m,w:(g[1]-g[3]+1)*m,h:(g[2]-g[0]+1)*m}}for(var v=c.length;v--;){var w=e+c[v][0],p=r+c[v][1];w>=d||p>=f||w<0||p<0||O(w,p,h,u,s)}h&&l.restore()}(i,v,0,0,h,e),{gx:i,gy:v,rot:u,info:h})};M--;){var b=k(c-M);a.shuffle&&(b=[].concat(b),i(b));for(var C=0;C<b.length;C++){var T=S(b[C]);if(T)return T}}return null},P=function(e,a,r){if(a)return!t.some((function(t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,a,r||{}),!t.dispatchEvent(n)}),this);t.forEach((function(t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,a,r||{}),t.dispatchEvent(n)}),this)};!function(){var e=t[0];if(e.getContext)d=Math.ceil(e.width/m),f=Math.ceil(e.height/m);else{var r=e.getBoundingClientRect();d=Math.ceil(r.width/m),f=Math.ceil(r.height/m)}if(P("wordcloudstart",!0)){var n,o,i,s,g;if(u=a.origin?[a.origin[0]/m,a.origin[1]/m]:[d/2,f/2],c=Math.floor(Math.sqrt(d*d+f*f)),l=[],!e.getContext||a.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=a.backgroundColor,e.clearRect(0,0,d*(m+1),f*(m+1)),e.fillRect(0,0,d*(m+1),f*(m+1))}else t.textContent="",t.style.backgroundColor=a.backgroundColor,t.style.position="relative"})),n=d;n--;)for(l[n]=[],o=f;o--;)l[n][o]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=a.backgroundColor,v.fillRect(0,0,1,1);var w,p,x=v.getImageData(0,0,1,1).data,y=e.getContext("2d").getImageData(0,0,d*m,f*m).data;for(n=d;n--;)for(l[n]=[],o=f;o--;){p=m;t:for(;p--;)for(w=m;w--;)for(i=4;i--;)if(y[4*((o*m+p)*d*m+(n*m+w))+i]!==x[i]){l[n][o]=!1;break t}!1!==l[n][o]&&(l[n][o]=!0)}y=v=x=void 0}if(a.hover||a.click){for(I=!0,n=d+1;n--;)S[n]=[];a.hover&&e.addEventListener("mousemove",C),a.click&&(e.addEventListener("click",T),e.addEventListener("touchstart",T),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",C),e.removeEventListener("click",T),M=void 0}))}i=0,0!==a.wait?(s=window.setTimeout,g=window.clearTimeout):(s=window.setImmediate,g=window.clearImmediate);var b=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},E=function t(){b("wordcloudstart",t),g(k)};!function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)}("wordcloudstart",E);var k=s((function t(){if(i>=a.list.length)return g(k),P("wordcloudstop",!1),void b("wordcloudstart",E);h=(new Date).getTime();var e=R(a.list[i]),r=!P("wordclouddrawn",!0,{item:a.list[i],drawn:e});if(F()||r)return g(k),a.abort(),P("wordcloudabort",!1),P("wordcloudstop",!1),void b("wordcloudstart",E);i++,k=s(t,a.wait)}),a.wait)}}()}function z(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=n,s.minFontSize=o,void 0===(r=function(){return s}.apply(e,[]))||(t.exports=r)},374:function(t,e,a){var r=a(2),n=a(375).entries;r({target:"Object",stat:!0},{entries:function(t){return n(t)}})},375:function(t,e,a){var r=a(11),n=a(80),o=a(16),i=a(122).f,s=function(t){return function(e){for(var a,s=o(e),l=n(s),d=l.length,f=0,u=[];d>f;)a=l[f++],r&&!i.call(s,a)||u.push(t?[a,s[a]]:s[a]);return u}};t.exports={entries:s(!0),values:s(!1)}},385:function(t,e,a){"use strict";var r=a(2),n=a(49).findIndex,o=a(120),i=!0;"findIndex"in[]&&Array(1).findIndex((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},439:function(t,e,a){"use strict";var r=a(2),n=a(50),o=a(479),i=a(480),s=a(1),l=1..toFixed,d=Math.floor,f=function(t,e,a){return 0===e?a:e%2==1?f(t,e-1,a*t):f(t*t,e/2,a)},u=function(t,e,a){for(var r=-1,n=a;++r<6;)n+=e*t[r],t[r]=n%1e7,n=d(n/1e7)},c=function(t,e){for(var a=6,r=0;--a>=0;)r+=t[a],t[a]=d(r/e),r=r%e*1e7},h=function(t){for(var e=6,a="";--e>=0;)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+i.call("0",7-r.length)+r}return a};r({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}))},{toFixed:function(t){var e,a,r,s,l=o(this),d=n(t),g=[0,0,0,0,0,0],m="",v="0";if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(a=(e=function(t){for(var e=0,a=t;a>=4096;)e+=12,a/=4096;for(;a>=2;)e+=1,a/=2;return e}(l*f(2,69,1))-69)<0?l*f(2,-e,1):l/f(2,e,1),a*=4503599627370496,(e=52-e)>0){for(u(g,0,a),r=d;r>=7;)u(g,1e7,0),r-=7;for(u(g,f(10,r,1),0),r=e-1;r>=23;)c(g,1<<23),r-=23;c(g,1<<r),u(g,1,1),c(g,2),v=h(g)}else u(g,0,a),u(g,1<<-e,0),v=h(g)+i.call("0",d);return v=d>0?m+((s=v.length)<=d?"0."+i.call("0",d-s)+v:v.slice(0,s-d)+"."+v.slice(s-d)):m+v}})},459:function(t,e,a){var r=a(2),n=a(465);r({target:"Number",stat:!0,forced:Number.parseFloat!=n},{parseFloat:n})},465:function(t,e,a){var r=a(4),n=a(211).trim,o=a(212),i=r.parseFloat,s=1/i(o+"-0")!=-1/0;t.exports=s?function(t){var e=n(String(t)),a=i(e);return 0===a&&"-"==e.charAt(0)?-0:a}:i},479:function(t,e,a){var r=a(25);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},480:function(t,e,a){"use strict";var r=a(50),n=a(22);t.exports="".repeat||function(t){var e=String(n(this)),a="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}}}]);