(window.webpackJsonp=window.webpackJsonp||[]).push([[1119],{1762:function(t,e,i){},1779:function(t,e,i){"use strict";var n=i(47),o=i(46),r=(i(201),i(9),i(116),i(202),i(2219)),s=i.n(r),a=i(26),l=i(55),c=function(){function t(e,i){Object(a.a)(this,t),this.loader=e,this.uploadFunc=i}return Object(l.a)(t,[{key:"upload",value:function(){var t=this.loader;return this.uploadFunc(t)}},{key:"abort",value:function(){}}]),t}(),u=(i(2220),{simple:["bold","italic","bulletedList","numberedList"],classic:["heading","|","bold","italic","link","bulletedList","numberedList","imageUpload","blockQuote","insertTable"],all:["heading","|","bold","italic","link","bulletedList","numberedList","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo"]});function d(t){return new Promise((function(e,i){if(!window.FileReader)return i(new Error("浏览器不支持FileReader"));var n=new FileReader;n.onload=function(i){t.uploadTotal=i.total,t.uploaded=i.loaded,e({default:n.result})},n.onerror=function(t){i(t)},t.file.then((function(t){n.readAsDataURL(t)}))}))}var h={props:{value:{type:String,default:""},toolbar:{type:[String,Array],default:"classic",validator:function(t){return Array.isArray(t)||["simple","classic","all"].includes(t)}},config:{type:Object,default:function(){return{language:"zh-cn"}}},height:{type:Number},upload:{type:Function},readonly:Boolean,disabled:Boolean},data:function(){return this.ckeditor=null,this.styleElement=null,{currentValue:this.value}},computed:{ckeditorConfig:function(){return Object(o.a)({toolbar:u[this.toolbar]||this.toolbar},this.config)},componentId:function(){return"my-editor-".concat(this._uid)}},watch:{value:{immediate:!0,handler:function(t){this.currentValue=t}},currentValue:function(t){this.$emit("input",t),this.$emit("change",t)},height:{immediate:!0,handler:function(t){t&&this.setStyle(t)}},readonly:function(t){this.ckeditor&&(this.ckeditor.isReadOnly=t)},disabled:function(t){this.ckeditor&&(this.ckeditor.isReadOnly=t)}},methods:{init:function(){var t=this;s.a.create(this.$refs.textarea,this.ckeditorConfig).then((function(e){t.ckeditor=e,t.ckeditor.isReadOnly=t.readonly||t.disabled,t.ckeditor.plugins.get("FileRepository").createUploadAdapter=function(e){return new c(e,t.upload||d)},t.bindEvents(e)})).catch((function(t){console.error("init CKEditor error",t)}))},bindEvents:function(t){var e=this;t.model.document.on("change:data",(function(){e.currentValue=e.getData()})),t.editing.view.document.on("focus",(function(i){e.$emit("focus",i,t)})),t.editing.view.document.on("blur",(function(i){e.$emit("blur",i,t)}))},getData:function(){return this.ckeditor?this.ckeditor.getData():null},setData:function(t){this.currentValue=t,this.ckeditor&&this.ckeditor.setData(t)},setStyle:function(t){this.styleElement||(this.styleElement=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(this.styleElement)),this.styleElement.innerText="#".concat(this.componentId," .ck-content {height: ").concat(t,"px; }")}},mounted:function(){this.init()},beforeDestroy:function(){this.styleElement&&this.styleElement.parentNode.removeChild(this.styleElement),this.ckeditor&&this.ckeditor.destroy(),this.ckeditor=null}},m=i(19),f=Object(m.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-editor",attrs:{id:t.componentId}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"textarea",staticStyle:{display:"none"},domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=e.target.value)}}})])}),[],!1,null,null,null).exports,p={name:"MyEditor",mixins:[i(486).a],components:{Editor:f},props:{value:String,height:Number,toolbar:[String,Array],stopEnterEvent:{type:Boolean,default:!0}},render:function(){var t=this,e=arguments[0],i=e(f,{ref:"comp",props:Object(o.a)({},Object(o.a)(Object(o.a)({},this.innerProps),{},{height:this.height,toolbar:this.toolbar})),on:Object(o.a)({},Object(o.a)({},this.$listeners)),model:{value:t.fieldValue,callback:function(e){t.fieldValue=e}}});return this.renderComponent(i)},watch:{"myForm.model":function(){this.resetData()}},methods:{resetData:function(){var t=this;this.$nextTick((function(){t.$refs.comp.setData(t.fieldValue)}))}},mounted:function(){this.extendMethods(this.$refs.comp,["setData","getData"]),this.myForm&&this.myForm.$on("reset",this.resetData)},beforeDestroy:function(){this.myForm&&this.myForm.$off("reset",this.resetData)}};e.a=Object(n.a)(p)},3251:function(t,e,i){"use strict";i.r(e);i(555),i(117);var n=i(556),o=(i(1762),i(1779)),r=i(0),s={methods:{handleSubmit:function(t){alert("submit: ".concat(JSON.stringify(t)))}}};r.default.use(o.a),r.default.use(n.a);var a=s,l=i(19),c=Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-form",{on:{submit:this.handleSubmit}},[e("my-editor",{attrs:{name:"content",height:300}})],1)}),[],!1,null,null,null);e.default=c.exports},364:function(t,e,i){},486:function(t,e,i){"use strict";var n=i(477),o=i.n(n),r=i(46),s=(i(508),i(364),i(430)),a=i.n(s),l=(i(201),i(30),i(77),i(75),i(9),i(367)),c=i(366),u=i(118),d=i(127),h=i(213);e.a={inject:{myForm:{default:null}},components:{FormItem:a.a},props:{name:String,width:String,props:Object,options:Array,keyMap:{type:Object,default:function(){return{id:"id",label:"label",value:"value",disabled:"disabled",parentId:"parentId"}}},collapsible:Boolean,stopEnterEvent:Boolean,depend:String,dependValue:[String,Number,Boolean,Object,Array,Function],cascade:String,loader:Function,dict:String,disabled:Boolean,readonly:Boolean,placeholder:String,size:String},data:function(){return{cascadeValue:null,currentOptions:[],loading:!1}},computed:{fieldValue:{get:function(){if(this.name&&this.myForm){var t=this.myForm.currentModel;return d(t,this.name,this.getDefaultValue())}return this.value||this.getDefaultValue()},set:function(t){if(this.name&&this.myForm){var e=this.myForm.currentModel,i=Object(u.b)(e);h(i,this.name,t),Object(u.e)(e,i)||(this.myForm.currentModel[this.name]=i[this.name],this.myForm.currentModel=i)}else this.$emit("input",t)}},itemWidth:function(){return this.width||(this.myForm&&this.myForm.itemWidth?this.myForm.itemWidth:null)},itemStyle:function(){return{width:this.itemWidth}},innerProps:function(){return Object(r.a)({disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder,size:this.size},this.props)}},watch:{itemWidth:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){t.setContentWidth()}))}},"myForm.currentCollapsed":function(t){var e=this,i=this.myForm,n=i.resetCollapsed,o=i.model;t&&n&&o&&this.collapsible&&this.$nextTick((function(){e.fieldValue=d(e.myForm.model,e.name,e.getDefaultValue())})),this.collapsible&&(t?Object(c.removeResizeListener)(this.$el,this.setContentWidth):(this.currentOptions&&0!==this.currentOptions.length||this.loadOptions(this.myForm.currentModel,this),this.$nextTick((function(){Object(c.addResizeListener)(e.$el,e.setContentWidth),e.setContentWidth()}))))},options:{immediate:!0,handler:function(t){var e=this;this.currentOptions=Object(u.b)(t)||[],this.$nextTick((function(){e.clearValidate()}))}}},methods:{getDefaultValue:function(){return""},resetField:function(){this.$refs.elItem&&this.$refs.elItem.resetField()},clearValidate:function(){this.$refs.elItem&&this.$refs.elItem.clearValidate()},isCollapsed:function(){if(!this.myForm)return!1;var t=this.myForm,e=t.collapsible,i=t.currentCollapsed;return e&&i&&this.collapsible},isMatchDepend:function(){if(!this.depend||!this.myForm)return!0;var t=this.myForm.currentModel,e=t[this.depend],i=!0;return!(i="function"==typeof this.dependValue?this.dependValue(e,t,this):Object(u.e)(this.dependValue,e))&&this.name&&t[this.name]&&(this.fieldValue=this.getDefaultValue(),delete t[this.name]),i},createSlots:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=this.$createElement;return e.map((function(e){return i("template",{slot:e},[t.$slots[e]])}))},renderComponent:function(t){var e=this,i=this.$createElement;if(!this.myForm)return t;var n=this.$scopedSlots.error?{error:function(t){return i("div",{class:"el-form-item__error my-from__custom-error"},[e.$scopedSlots.error(t)])}}:null,r=this.isCollapsed(),s=this.isMatchDepend();return i("transition",{attrs:{name:this.myForm.collapseEffect}},[!r&&s?i("FormItem",o()([{ref:"elItem",class:"my-form-item"},{props:this.$attrs,scopedSlots:n,style:this.itemStyle},{attrs:{prop:this.name},nativeOn:{keyup:function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.stopEvent(t)}}}]),[this.$slots.label?i("template",{slot:"label"},[this.$slots.label]):null,this.$slots.before,t,this.$slots.after]):i("div",{style:{display:"none"}},[this.name])])},extendMethods:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t&&i.forEach((function(i){e[i]=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t[i].apply(t,n)}}))},setContentWidth:function(){if(this.itemWidth&&this.$el){var t=this.$el.querySelector(".el-form-item__content"),e=this.$el.querySelector(".el-form-item__label");if(t){var i=e?e.getBoundingClientRect():{width:0},n=this.$el.getBoundingClientRect().width-i.width;Object(l.setStyle)(t,{width:"".concat(n,"px")})}}},stopEvent:function(t){this.stopEnterEvent&&t.stopPropagation()},loadOptions:function(t){var e=this;if(!this.isCollapsed()&&this.isMatchDepend())if(this.options)this.currentOptions=Object(u.b)(this.options);else{if(this.loader)return this.loading=!0,void this.loader(t,this).then((function(t){e.currentOptions=Object(u.b)(t)})).finally((function(){e.loading=!1}));if(this.myForm){if(this.dict){var i=(this.myForm.dictMap||{})[this.dict];if(i)return void(this.currentOptions=i)}this.myForm.loader&&(this.loading=!0,this.myForm.loader(t,this).then((function(t){e.currentOptions=Object(u.b)(t)})).finally((function(){e.loading=!1})))}}},handleWatch:function(t){var e=t[this.cascade];Object(u.e)(this.cascadeValue,e)||(this.fieldValue=this.getDefaultValue(),this.cascadeValue=e,this.loadOptions(t))},bindCascade:function(){if(this.cascade&&this.myForm){var t=this.myForm.currentModel;this.cascadeValue=t[this.cascade],this.unwatch=this.$watch("myForm.currentModel",this.handleWatch,{deep:!0})}},unbindCascade:function(){this.unwatch&&this.unwatch()}},mounted:function(){Object(c.addResizeListener)(this.$el,this.setContentWidth)},created:function(){var t=null;this.myForm&&(this.myForm.addItem(this),t=this.myForm.currentModel),this.loadOptions(t,this),this.bindCascade()},beforeDestroy:function(){Object(c.removeResizeListener)(this.$el,this.setContentWidth),this.unbindCascade(),this.myForm&&this.myForm.removeItem(this)}}},508:function(t,e,i){},555:function(t,e,i){},556:function(t,e,i){"use strict";var n=i(47),o=i(76),r=i(371),s=i.n(r),a=i(430),l=i.n(a),c=i(457),u=i.n(c),d=(i(116),i(75),i(121),i(9),i(30),i(118)),h={name:"MyForm",components:{Form:u.a,FormItem:l.a,Button:s.a},provide:function(){return{myForm:this}},props:{model:Object,itemWidth:String,footer:{type:Boolean,default:!0},footerAlign:{type:String,validator:function(t){return["","left","right","center"].includes(t)}},submitText:{type:[String,Boolean],default:"提交"},submittingText:{type:String,default:"正在提交数据..."},onSubmit:{type:Function},resetText:{type:[String,Boolean],default:"重置"},resetSubmitSuccess:Boolean,collapsible:Boolean,collapsed:{type:Boolean,default:!0},collapseEffect:String,resetCollapsed:Boolean,footerBlock:Boolean,footerExpandBlock:{type:Boolean,default:!0},footerFloat:Boolean,loader:Function,dictMap:Object,prevent:{type:Boolean,default:!0}},data:function(){return this.items={},{currentModel:{},submitting:!1,currentCollapsed:!0}},computed:{footerClass:function(){var t;return t={},Object(o.a)(t,"is-align-".concat(this.footerAlign),!!this.footerAlign),Object(o.a)(t,"is-block",this.footerBlock||!this.currentCollapsed&&this.footerExpandBlock),Object(o.a)(t,"is-float-right",this.footerFloat),t}},watch:{model:{immediate:!0,deep:!0,handler:function(t){Object(d.e)(t,this.currentModel)||(this.currentModel=Object(d.b)(t||{}))}},collapsed:{immediate:!0,handler:function(t){this.currentCollapsed=t}},currentModel:{deep:!0,handler:function(t,e){Object(d.e)(t,e)||this.triggerChange(t)}},dictMap:function(t){var e=this;t&&Object.keys(this.items).forEach((function(i){var n=e.items[i],o=n.dict,r=n.loader;n.options||r||!o||(n.currentOptions=t[o]||[])}))}},methods:{submit:function(){var t=this;this.$refs.elForm.validate((function(e,i){if(e){t.$emit("validate-success");var n=Object(d.b)(t.currentModel);t.onSubmit&&(t.submitting=!0,t.onSubmit(n,t).then((function(){t.resetSubmitSuccess&&t.reset()})).finally((function(){t.submitting=!1}))),t.$emit("submit",n,t)}else t.$emit("validate-fail",i)}))},reset:function(){var t=this;this.currentModel=Object(d.b)(this.getDefaultValue()),this.$nextTick((function(){t.$refs.elForm&&t.$refs.elForm.clearValidate(),t.$emit("reset",t)}))},toggleCollapsed:function(){this.currentCollapsed=!this.currentCollapsed,this.$emit("collapse",this.currentCollapsed,this)},addItem:function(t){var e=t.name;if(e){if(e in this.items)throw new Error("表单中的项中 name：".concat(e," 重复，请确保在同一个表单中保持唯一"));this.items[e]=t}},removeItem:function(t){t.name&&delete this.items[t.name]},getDefaultValue:function(){return Object(d.b)(this.model||{})},triggerChange:function(t){var e=this;clearTimeout(this.changeTimer),this.changeTimer=setTimeout((function(){e.$emit("change",Object(d.b)(t))}),100)}}},m=i(19),f=Object(m.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Form",t._g(t._b({ref:"elForm",staticClass:"my-form",attrs:{model:t.currentModel},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}}},"Form",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.footer?i("FormItem",{staticClass:"my-form__footer",class:t.footerClass,attrs:{label:" "}},[t._t("footer",[t.submitText?i("Button",{attrs:{type:"primary",loading:t.prevent&&t.submitting},on:{click:t.submit}},[t._v(t._s(t.prevent&&t.submitting?t.submittingText:t.submitText)+"\n      ")]):t._e(),t._v(" "),t.resetText?i("Button",{attrs:{disabled:t.prevent&&t.submitting,type:"default"},on:{click:t.reset}},[t._v(t._s(t.resetText))]):t._e(),t._v(" "),t._t("actions"),t._v(" "),t.collapsible?i("Button",{staticClass:"my-form__collapse",attrs:{disabled:t.prevent&&t.submitting,type:"text"},on:{click:t.toggleCollapsed}},[i("span",[t._v("\n         "+t._s(t.currentCollapsed?"展开":"收起")+"\n         "),i("i",{class:t.currentCollapsed?"el-icon-arrow-down":"el-icon-arrow-up"})])]):t._e()])],2):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(f)}}]);