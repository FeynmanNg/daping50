// test 环境，打包需要增加 test 层，以配合线上环境 nginx 的配置，指向 test 中的 dist
const path = process.env.VUE_APP_PUBLIC_PATH;

module.exports = {
  /**
   * 开发环境服务端口号
   */
  devServerPort: 8801,
  /**
   * 部署目录
   */
  publicPath: path,
  /**
   * 开启静态配置
   */
  staticConfig: true,
  /**
   * 开启模拟数据
   */
  mock: true,
  /**
   * 开启微应用服务
   */
  microApp: false,

  devServerProxy: {
    '/api': {
      changeOrigin: true,
      target: 'http://39.102.197.43:8550',
      pathRewrite: {
        '^/api': '/api'
      }
    }
  }
}
