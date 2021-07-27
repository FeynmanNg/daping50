(window.webpackJsonp=window.webpackJsonp||[]).push([[1553],{4146:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常量和静态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量和静态配置"}},[s._v("#")]),s._v(" 常量和静态配置")]),s._v(" "),a("h2",{attrs:{id:"常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[s._v("#")]),s._v(" 常量")]),s._v(" "),a("p",[s._v("在项目中经常需要定义常量（应用运行后不更改的属性）复用，以提高代码可维护性。例如：服务接口地址、秘钥、应用名称、站点路径等等。")]),s._v(" "),a("h3",{attrs:{id:"定义常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义常量"}},[s._v("#")]),s._v(" 定义常量")]),s._v(" "),a("p",[s._v("项目中的常量统一在 "),a("code",[s._v("/src/constant.js")]),s._v(" 文件中定义，如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API_HOST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:8080'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"调用常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用常量"}},[s._v("#")]),s._v(" 调用常量")]),s._v(" "),a("p",[s._v("需要调用时导入即可，如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/constant'")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"静态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态配置"}},[s._v("#")]),s._v(" 静态配置")]),s._v(" "),a("h3",{attrs:{id:"什么是静态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是静态配置"}},[s._v("#")]),s._v(" 什么是静态配置？")]),s._v(" "),a("p",[s._v("项目代码需要经过webpack打包，任何代码的改动都需要重新编译。\n在实践中经常需要同一份代码需要部署到多个环境，各个环境的常量值会不同。静态配置就是把常量抽取到一个不通过webpack打包的文件，在编译后依然可以修改。")]),s._v(" "),a("h3",{attrs:{id:"定义静态配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义静态配置"}},[s._v("#")]),s._v(" 定义静态配置")]),s._v(" "),a("p",[s._v("静态配置是在 "),a("code",[s._v("/public/config.js")]),s._v(" 文件中定义")]),s._v(" "),a("p",[s._v("静态配置需要与常量定义结合, 如：")]),s._v(" "),a("p",[a("code",[s._v("/src/constant.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 读取静态配置\n * @private\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" __MY_CONFIG__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__MY_CONFIG__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 接口服务器\n * @type {*|string}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API_HOST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" __MY_CONFIG__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'API_HOST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:8080'")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("code",[s._v("/public/config.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__MY_CONFIG__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接口服务")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("API_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://172.21.14.99:8000'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("上述代码实现了把 常量 "),a("code",[s._v("API_HOST")]),s._v(" 抽到了静态配置， 在编译打包后的产物依然可以对 "),a("code",[s._v("config.js")]),s._v(" 进行修改，而不需要重复打包。")])])}),[],!1,null,null,null);t.default=e.exports}}]);