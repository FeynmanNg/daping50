(window.webpackJsonp=window.webpackJsonp||[]).push([[53,1456],{2890:function(t,a,i){"use strict";i.r(a);var r=i(47),o=i(46),s=(i(116),i(77),i(470),i(32),i(75),i(380),i(202),i(369)),n={maxNum:200,initSpeed:50,radius:1.5,speed:.5,scaleSpeed:.01,direction:"",rebound:!1,hole:50,color:"rgba(0,188,212,0.9)"},e={name:"MyParticle",props:{options:{type:Object,default:function(){return{}}},width:{type:String,default:"100%"},height:{type:String,default:"400px"},handleParticle:{type:[Function]},handleDraw:{type:[Function]},initParticle:{type:[Function]}},watch:{options:{deep:!0,handler:function(){this.reset()}}},computed:{styles:function(){return{width:this.width,height:this.height}}},data:function(){return{canvas:null,setArr:[],transColor:[],animateStop:!1,drawOption:{},resetTimeout:null}},methods:{initOption:function(){var t,a,i;if(["shrink"].includes(this.drawOption.direction)){var r=.5*this.canvas.width,s=.5*this.canvas.height,n=Math.max(r,s)-100+100*Math.random();i=Math.random()*Math.PI*2,t=r+n*Math.sin(i),a=s+n*Math.cos(i)}else if(["expand"].includes(this.drawOption.direction)){var e=this.drawOption.hole+Math.random()*(this.drawOption.hole+20);i=Math.random()*Math.PI*2,t=this.canvas.width/2+e*Math.cos(i),a=this.canvas.height/2+e*Math.sin(i)}else t=Math.ceil(Math.random()*this.canvas.width),a=Math.ceil(Math.random()*this.canvas.height);var h=this.drawOption.speed,c=0,d=0;if(c=.25*(-h+Math.random()*h*2),d=-h+Math.random()*h*2,"bottom"===this.drawOption.direction)c=.25*(-h+Math.random()*h*2),d=Math.random()*h;else if("top"===this.drawOption.direction)c=.25*(-h+Math.random()*h*2),d=-Math.random()*h;else if("left"===this.drawOption.direction)c=-Math.random()*h,d=.25*(-h+Math.random()*h*2);else if("right"===this.drawOption.direction)c=Math.random()*h,d=.25*(-h+Math.random()*h*2);else if("shrink"===this.drawOption.direction){var l=Math.random()*h;d=-l*Math.cos(i),c=-l*Math.sin(i)}else if("expand"===this.drawOption.direction){var u=Math.random()*h;c=u*Math.cos(i),d=u*Math.sin(i)}var p=3;p=this.drawOption.radius instanceof Array?(this.drawOption.radius[0]||.5)+Math.ceil(Math.random()*((this.drawOption.radius[1]||2)-(this.drawOption.radius[0]||.5))):.2+Math.ceil(Math.random()*this.drawOption.radius);var v={};return"function"==typeof this.initParticle&&(v=this.initParticle(this)),Object(o.a)({x:t,y:a,vX:c,vY:d,radius:p,color:"",colorArr:[],colorDelay:Math.floor(1e3*Math.random())},v)},setCanvas:function(){this.drawOption=Object.assign({},n,this.options);var t=document.createElement("canvas");this.canvas=t,this.$el.appendChild(t),this.cxt=t.getContext("2d"),Object(s.addResizeListener)(this.$el,this.setScreenSize),this.setScreenSize(),this.reset()},setScreenSize:function(){var t=this.$el.getBoundingClientRect();this.canvas.width=t.width,this.canvas.height=t.height},reset:function(){var t=this;this.resetTimeout&&clearTimeout(this.resetTimeout),this.resetTimeout=setTimeout((function(){t.animateStop=!0,t.drawOption=Object.assign({},n,t.options),t.setArr=[],t.drawOption.color instanceof Array&&(t.transColor=t.drawOption.color.map((function(t){var a=t.color.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?((\d)|(\d(?:\.\d{1,5}?)))\))?/),i=a?[parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]),parseFloat(void 0===a[4]?1:a[4])]:"";return Object(o.a)(Object(o.a)({},t),{},{color:i})}))),t.cxt.clearRect(0,0,t.canvas.width,t.canvas.height),t.ballSet(),t.animateStop=!1,t.ballDraw(t.cxt)}),400)},ballSet:function(){var t=this,a=setInterval((function(){t.setArr.length>=t.drawOption.maxNum&&clearInterval(a);var i=t.initOption();(Math.abs(i.vX)>.005||Math.abs(i.vY)>.005)&&t.setArr.push(i)}),1e3/this.drawOption.initSpeed)},ballDraw:function(t){var a=this;this.animateStop||(this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height),this.setArr.forEach((function(i){a.getPosition(i,t),a.getColor(i,t),"function"!=typeof a.handleDraw?a.drawParticle(a.cxt,i,t):a.handleDraw(a.cxt,i,t)})),requestAnimationFrame(this.ballDraw))},drawParticle:function(t,a,i){t.beginPath(),t.fillStyle=a.color,t.arc(a.x,a.y,a.radius,0,2*Math.PI),t.fill()},getColor:function(t,a){if("string"==typeof this.drawOption.color)t.color=this.drawOption.color;else if(void 0===t.status||t.colorDelay)t.colorDelay--,t.colorTime=a,t.status=0,t.colorArr=this.transColor[t.status].color,t.color="rgba(".concat(t.colorArr[0],",").concat(t.colorArr[1],",").concat(t.colorArr[2],",").concat(t.colorArr[3],")");else if(a-t.colorTime>this.transColor[t.status].duration)t.status++,t.status=t.status%this.transColor.length,t.colorTime=a;else if(this.transColor[t.status].duration-(a-t.colorTime)<this.transColor[t.status].transitionTime){var i=(t.status+1)%this.transColor.length,r=this.transColor[i].color;this.approtchColor(t,r,a)}else t.colorArr=this.transColor[t.status].color,t.color="rgba(".concat(t.colorArr[0],",").concat(t.colorArr[1],",").concat(t.colorArr[2],",").concat(t.colorArr[3],")")},approtchColor:function(t,a,i){var r=(i-t.colorTime-(this.transColor[t.status].duration-this.transColor[t.status].transitionTime))/this.transColor[t.status].transitionTime,o=t.colorArr[0]+(a[0]-t.colorArr[0])*r,s=t.colorArr[1]+(a[1]-t.colorArr[1])*r,n=t.colorArr[2]+(a[2]-t.colorArr[2])*r,e=t.colorArr[3]+(a[3]-t.colorArr[3])*r;t.color="rgba(".concat(o,", ").concat(s,", ").concat(n,", ").concat(e,")")},getPosition:function(t,a){if(this.handleParticle&&"function"==typeof this.handleParticle)this.handleParticle(t,this.canvas,a);else{var i=this.drawOption.speed;if(["shrink"].includes(this.drawOption.direction)){var r=t.x-this.canvas.width/2,o=t.y-this.canvas.height/2;if(Math.sqrt(r*r+o*o)<this.drawOption.hole){this.drawOption.radius instanceof Array?t.radius=(this.drawOption.radius[0]||.5)+Math.ceil(Math.random()*((this.drawOption.radius[1]||2)-(this.drawOption.radius[0]||.5))):t.radius=.3+Math.ceil(Math.random()*this.drawOption.radius);var s=.5*this.canvas.width,n=.5*this.canvas.height,e=Math.max(s,n)-100+100*Math.random(),h=Math.random()*Math.PI*2;t.x=s+e*Math.sin(h),t.y=n+e*Math.cos(h);var c=Math.random()*i;t.vY=-c*Math.cos(h),t.vX=-c*Math.sin(h)}t.radius-=Math.max(Math.abs(t.vY),Math.abs(t.vX))*this.drawOption.scaleSpeed,t.radius=t.radius<=.1?.1:t.radius}else if(["expand"].includes(this.drawOption.direction)){if(t.x+t.radius>=this.canvas.width||t.x-t.radius<=0||t.y+t.radius>=this.canvas.height||t.y-t.radius<=0){this.drawOption.radius instanceof Array?t.radius=(this.drawOption.radius[0]||.5)+Math.ceil(Math.random()*((this.drawOption.radius[1]||2)-(this.drawOption.radius[0]||.5))):t.radius=.3+Math.ceil(Math.random()*this.drawOption.radius);var d=this.drawOption.hole+Math.random()*(this.drawOption.hole+20),l=Math.random()*Math.PI*2;t.x=this.canvas.width/2+d*Math.cos(l),t.y=this.canvas.height/2+d*Math.sin(l);var u=Math.random()*i;t.vX=u*Math.cos(l),t.vY=u*Math.sin(l)}t.radius+=Math.max(Math.abs(t.vY),Math.abs(t.vX))*this.drawOption.scaleSpeed}else(t.x+t.radius>=this.canvas.width||t.x-t.radius<=0)&&(this.drawOption.rebound?t.vX*=-1:t.x=t.vX<0?this.canvas.width-t.radius:t.radius),(t.y+t.radius>=this.canvas.height||t.y-t.radius<=0)&&(this.drawOption.rebound?t.vY*=-1:t.y=t.vY<0?this.canvas.height-t.radius:t.radius);t.x+=t.vX,t.y+=t.vY}return t}},mounted:function(){this.animateStop=!0,this.setCanvas()},beforeDestroy:function(){this.animateStop=!0,Object(s.removeResizeListener)(this.$el,this.setScreenSize)}},h=i(19),c=Object(h.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-particle",style:this.styles},[this._t("default")],2)}),[],!1,null,"1b422e8c",null).exports;a.default=Object(r.a)(c)},380:function(t,a,i){var r=i(2),o=i(424),s=i(120);r({target:"Array",proto:!0},{fill:o}),s("fill")},424:function(t,a,i){"use strict";var r=i(20),o=i(123),s=i(21);t.exports=function(t){for(var a=r(this),i=s(a.length),n=arguments.length,e=o(n>1?arguments[1]:void 0,i),h=n>2?arguments[2]:void 0,c=void 0===h?i:o(h,i);c>e;)a[e++]=t;return a}},470:function(t,a,i){"use strict";var r=i(207),o=i(7),s=i(21),n=i(22),e=i(209),h=i(208);r("match",1,(function(t,a,i){return[function(a){var i=n(this),r=null==a?void 0:a[t];return void 0!==r?r.call(a,i):new RegExp(a)[t](String(i))},function(t){var r=i(a,t,this);if(r.done)return r.value;var n=o(t),c=String(this);if(!n.global)return h(n,c);var d=n.unicode;n.lastIndex=0;for(var l,u=[],p=0;null!==(l=h(n,c));){var v=String(l[0]);u[p]=v,""===v&&(n.lastIndex=e(c,s(n.lastIndex),d)),p++}return 0===p?null:u}]}))}}]);