(window.webpackJsonp=window.webpackJsonp||[]).push([[1552],{4145:function(s,a,t){"use strict";t.r(a);var e=t(20),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[t("code",[s._v("My")]),s._v(" 遵循约定大于配置的原则，"),t("code",[s._v("MyWeb")]),s._v("工程模板默认已是最佳的实践配置，能满足绝大部分的应用场景， 通常不需要修改配置。\n但也避免不了会出现特殊的情况，因此"),t("code",[s._v("My")]),s._v("也提供了几种方式的配置。")]),s._v(" "),t("h2",{attrs:{id:"my-config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#my-config-js"}},[s._v("#")]),s._v(" my.config.js")]),s._v(" "),t("p",[t("code",[s._v("my.config.js")]),s._v(" 是工程配置，即对开发环境、编译、辅助工具等与项目实现功能或业务无关的配置。")]),s._v(" "),t("p",[s._v("配置文件名必须为 "),t("code",[s._v("my.config.js")]),s._v(", 并且只能放置在项目工程根目录下， 如果不存在该文件可以手动新建。")]),s._v(" "),t("p",[s._v("文件用"),t("code",[s._v("js")]),s._v("编写，采用CommonJS规范导出模块。如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  devServerPort"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"publicpath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publicpath"}},[s._v("#")]),s._v(" publicPath")]),s._v(" "),t("p",[s._v("部署应用时的基本 URL, 与 "),t("code",[s._v("vue-cli")]),s._v(" 的 "),t("code",[s._v("publicPath")]),s._v(" 配置一样。\n默认：'/'")]),s._v(" "),t("h3",{attrs:{id:"entry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[s._v("#")]),s._v(" entry")]),s._v(" "),t("p",[t("code",[s._v("Webpack")]),s._v(" 配置的入口文件路径， 默认：'./src/main.js'")]),s._v(" "),t("h3",{attrs:{id:"devserverport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devserverport"}},[s._v("#")]),s._v(" devServerPort")]),s._v(" "),t("p",[s._v("开发环境启动端口号，默认: 8000")]),s._v(" "),t("h3",{attrs:{id:"devserverproxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devserverproxy"}},[s._v("#")]),s._v(" devServerProxy")]),s._v(" "),t("p",[s._v("开发环境代理配置, 默认：null\n如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。")]),s._v(" "),t("p",[s._v("建议还是由后端解决接口跨域问题。")]),s._v(" "),t("p",[s._v("配置示例：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  devServerProxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<url>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        ws"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        changeOrigin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/foo'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<other_url>'")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("不能设置为空对象 {}")])]),s._v(" "),t("h3",{attrs:{id:"previewserverport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#previewserverport"}},[s._v("#")]),s._v(" previewServerPort")]),s._v(" "),t("p",[s._v("预览服务器端口，默认：7000")]),s._v(" "),t("h3",{attrs:{id:"outputdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outputdir"}},[s._v("#")]),s._v(" outputDir")]),s._v(" "),t("p",[s._v("生成的生产环境构建文件的目录， 默认：dist")]),s._v(" "),t("h3",{attrs:{id:"assetsdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assetsdir"}},[s._v("#")]),s._v(" assetsDir")]),s._v(" "),t("p",[s._v("放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。\n默认：assets")]),s._v(" "),t("h3",{attrs:{id:"extendcontentbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extendcontentbase"}},[s._v("#")]),s._v(" extendContentBase")]),s._v(" "),t("p",[s._v("扩展的静态资源目录，数组形式，支持多个，只对主站有效。默认：[]")]),s._v(" "),t("h3",{attrs:{id:"lintonsave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lintonsave"}},[s._v("#")]),s._v(" lintOnSave")]),s._v(" "),t("p",[s._v("是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码， 默认：error")]),s._v(" "),t("p",[s._v("设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。")]),s._v(" "),t("p",[s._v("如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。")]),s._v(" "),t("h3",{attrs:{id:"prefetch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prefetch"}},[s._v("#")]),s._v(" prefetch")]),s._v(" "),t("p",[s._v("开启预加载，页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。默认：true")]),s._v(" "),t("p",[s._v("Prefetch 链接将会消耗带宽。\n如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，\n那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。")]),s._v(" "),t("h3",{attrs:{id:"dll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dll"}},[s._v("#")]),s._v(" dll")]),s._v(" "),t("p",[s._v("生产环境打包dll。默认：['vue', 'vue-router', 'vuex', 'axios', 'path-to-regexp', 'nprogress', 'qiankun']")]),s._v(" "),t("h3",{attrs:{id:"docsdevport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docsdevport"}},[s._v("#")]),s._v(" docsDevPort")]),s._v(" "),t("p",[s._v("文档开发环境启动端口号。默认：3001")]),s._v(" "),t("h3",{attrs:{id:"docsbaseurl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docsbaseurl"}},[s._v("#")]),s._v(" docsBaseUrl")]),s._v(" "),t("p",[s._v("文档部署目录。默认：'/my/'")]),s._v(" "),t("h3",{attrs:{id:"docsoutputdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docsoutputdir"}},[s._v("#")]),s._v(" docsOutputDir")]),s._v(" "),t("p",[s._v("文档编译输出目录。默认：web")]),s._v(" "),t("h3",{attrs:{id:"autoroutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoroutes"}},[s._v("#")]),s._v(" autoRoutes")]),s._v(" "),t("p",[s._v("自动生成路由配置。默认： true")]),s._v(" "),t("h3",{attrs:{id:"serverport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serverport"}},[s._v("#")]),s._v(" serverPort")]),s._v(" "),t("p",[s._v("服务端启动端口号，默认：7001")]),s._v(" "),t("h3",{attrs:{id:"staticconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staticconfig"}},[s._v("#")]),s._v(" staticConfig")]),s._v(" "),t("p",[s._v("开启静态配置。默认：true")]),s._v(" "),t("h3",{attrs:{id:"coder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coder"}},[s._v("#")]),s._v(" coder")]),s._v(" "),t("p",[s._v("代码生成器配置对象。请参考"),t("RouterLink",{attrs:{to:"/guide/coder.html"}},[s._v("代码生成器")])],1),s._v(" "),t("h3",{attrs:{id:"transpiledependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transpiledependencies"}},[s._v("#")]),s._v(" transpileDependencies")]),s._v(" "),t("p",[s._v("默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。")]),s._v(" "),t("p",[s._v("默认：['@xdh/my']")]),s._v(" "),t("h3",{attrs:{id:"productionsourcemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#productionsourcemap"}},[s._v("#")]),s._v(" productionSourceMap")]),s._v(" "),t("p",[s._v("生成环境是否生成SourceMap, 默认不生成")]),s._v(" "),t("h3",{attrs:{id:"mock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock"}},[s._v("#")]),s._v(" mock")]),s._v(" "),t("p",[s._v("开启模拟支持，默认值： process.env.NODE_ENV !== 'production'， 默认在开发环境下开启")]),s._v(" "),t("h3",{attrs:{id:"microapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microapp"}},[s._v("#")]),s._v(" microApp")]),s._v(" "),t("p",[s._v("开启微应用支持，默认：false\n在项目不需要做主应用时，建议关闭，设置为false，可高减少打包文件体积，提高性能。")]),s._v(" "),t("h3",{attrs:{id:"chainwebpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chainwebpack"}},[s._v("#")]),s._v(" chainWebpack")]),s._v(" "),t("p",[s._v("Webpack自定义配置。")]),s._v(" "),t("p",[s._v("是一个函数，会接收一个基于 "),t("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack-chain"),t("OutboundLink")],1),s._v(" 的 "),t("code",[s._v("ChainableConfig")]),s._v(" 实例。允许对内部的 "),t("code",[s._v("webpack")]),s._v(" 配置进行更细粒度的修改。")]),s._v(" "),t("p",[s._v("更多细节可查阅：配合 "),t("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack > 链式操作"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"ui-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui-config"}},[s._v("#")]),s._v(" ui/config")]),s._v(" "),t("p",[t("code",[s._v("ui/config")]),s._v(" 是项目的运行时配置。支持获取和设置。项目的源码目录 "),t("code",[s._v("@/config.js")]),s._v(" 文件就是用来设置 "),t("code",[s._v("ui/config")])]),s._v(" "),t("p",[s._v("设置：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" setConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$ui/config'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  router"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hash'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("获取：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$ui/config'")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[s._v("#")]),s._v(" debug")]),s._v(" "),t("p",[s._v("开启debug模式，默认在开发模式开启，在产品模式关闭。关闭后 Vue实例内置与"),t("code",[s._v("$log")]),s._v("相关的方法不再打印信息。")]),s._v(" "),t("h3",{attrs:{id:"appname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appname"}},[s._v("#")]),s._v(" appName")]),s._v(" "),t("p",[s._v("子应用名称")]),s._v(" "),t("h3",{attrs:{id:"routeprefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routeprefix"}},[s._v("#")]),s._v(" routePrefix")]),s._v(" "),t("p",[s._v("路由path前缀，只对hash模式的子应用有效")]),s._v(" "),t("h3",{attrs:{id:"router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[s._v("#")]),s._v(" router")]),s._v(" "),t("p",[s._v("实例化VueRouter 参数选项对象，有2个属性 {mode, base}")]),s._v(" "),t("h4",{attrs:{id:"mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[s._v("#")]),s._v(" mode")]),s._v(" "),t("p",[s._v("路由模式，可选值：hash / history ， 默认：hash")]),s._v(" "),t("h4",{attrs:{id:"base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[s._v("#")]),s._v(" base")]),s._v(" "),t("p",[s._v('应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"')]),s._v(" "),t("h3",{attrs:{id:"autoroutes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoroutes-2"}},[s._v("#")]),s._v(" autoRoutes")]),s._v(" "),t("p",[s._v("应用自动创建的路由表配置，默认: true")]),s._v(" "),t("h3",{attrs:{id:"vuex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[s._v("#")]),s._v(" vuex")]),s._v(" "),t("p",[s._v("Vuex实例化参数配置")]),s._v(" "),t("h4",{attrs:{id:"strict"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strict"}},[s._v("#")]),s._v(" strict")]),s._v(" "),t("p",[s._v("进入严格模式，默认：true， 在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。")]),s._v(" "),t("h3",{attrs:{id:"keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[s._v("#")]),s._v(" keys")]),s._v(" "),t("p",[s._v("属性名映射 用来适配前后端接口交互参数和响应数据字段名称。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  keys"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    code"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'code'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 响应状态码 ")]),s._v("\n    data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 响应数据")]),s._v("\n    message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'msg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误信息")]),s._v("\n    total"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'total'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录数")]),s._v("\n    list"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'list'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列表数据")]),s._v("\n    page"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'page'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 页码")]),s._v("\n    limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'limit'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每页几条")]),s._v("\n    pages"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pages'")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 总页数")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"statuscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#statuscode"}},[s._v("#")]),s._v(" statusCode")]),s._v(" "),t("p",[s._v("请求响应状态码")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  statusCode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 响应成功")]),s._v("\n    success"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 未登录, 或登录失效")]),s._v("\n    notLogin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 权限不足")]),s._v("\n    authorize"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 系统内部错误")]),s._v("\n    error"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"axios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[s._v("#")]),s._v(" axios")]),s._v(" "),t("p",[s._v("axios 实例配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  axios"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 请求头\n     */")]),s._v("\n    headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json;charset=UTF-8'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 超时时间\n     */")]),s._v("\n    timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 携带验证\n     */")]),s._v("\n    withCredentials"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 响应数据类型\n     */")]),s._v("\n    responseType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 请求内容长度\n     */")]),s._v("\n    maxContentLength"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h3",{attrs:{id:"svg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[s._v("#")]),s._v(" svg")]),s._v(" "),t("p",[s._v("svg图标配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  svg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    viewBox"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0 0 1024 1024'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    width"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1em'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    height"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1em'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    fill"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'currentColor'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"mock-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock-2"}},[s._v("#")]),s._v(" mock")]),s._v(" "),t("p",[s._v("配置模拟数据实例化参数， 可以是 "),t("code",[s._v("Object")]),s._v(" 或 "),t("code",[s._v("Boolean")]),s._v("。 改配置只对开发模式下有效，生产模式不加载模拟数据。")]),s._v(" "),t("p",[s._v("对象形式配置超时：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200-500'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"microapp-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microapp-2"}},[s._v("#")]),s._v(" microApp")]),s._v(" "),t("p",[s._v("应用微服务启动配置参数，默认值：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启预加载，默认为 true。")]),s._v("\n    prefetch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  可选，是否为单实例场景，默认为 true")]),s._v("\n    singular"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可选，是否开启沙箱，默认为 true, 在开发环境开启sandbox时加载子应用切换主题，热更新会报错")]),s._v("\n    sandbox"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[s._v("#")]),s._v(" analysis")]),s._v(" "),t("p",[s._v("启用统计埋点，默认：false")]),s._v(" "),t("h3",{attrs:{id:"access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access"}},[s._v("#")]),s._v(" access")]),s._v(" "),t("p",[s._v("权限实例化参数， 参考 "),t("RouterLink",{attrs:{to:"/guide/access.html#配置"}},[s._v("权限控制")])],1),s._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" install")]),s._v(" "),t("p",[s._v("在非互联网环境安装依赖需要把 node_modules 部署到内网"),t("code",[s._v("git")]),s._v(" 或 "),t("code",[s._v("svn")]),s._v("， 然后配置 "),t("code",[s._v("package.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"install"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"branch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://gitee.com/newgateway/node_modules.git"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),t("p",[s._v("仓库类型 "),t("code",[s._v("git")]),s._v(" 或 "),t("code",[s._v("svn")])]),s._v(" "),t("h3",{attrs:{id:"branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[s._v("#")]),s._v(" branch")]),s._v(" "),t("p",[s._v("分支名称，仅对 "),t("code",[s._v("git")]),s._v(" 有效")]),s._v(" "),t("h3",{attrs:{id:"repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repository"}},[s._v("#")]),s._v(" repository")]),s._v(" "),t("p",[s._v("仓库地址")])])}),[],!1,null,null,null);a.default=r.exports}}]);