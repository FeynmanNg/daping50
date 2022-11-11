/**
 * 该文件不仅提供 css 作为参考来定位各省
 * 而且还使用 key 作为数据对比
 * 
 * 修改 src/assets/style/map.scss 来定位各省
 */
export default {
  // 中国共计 34 个级行政区
  // 包括 23 个、5 个自治区、4 个直辖市、2 个特别行政区。
  // keys 类名
  keys: {
    河北: 'hebei',
    山西: 'shanxi',
    辽宁: 'liaoning',
    吉林: 'jilin',
    黑龙江: 'heilongjiang',
    江苏: 'jiangsu',
    浙江: 'zhejiang',
    安徽: 'anhui',
    福建: 'fujian',
    江西: 'jiangxi',
    山东: 'shandong',
    河南: 'henan',
    湖北: 'hubei',
    湖南: 'hunan',
    广东: 'guangdong',
    海南: 'hainan',
    四川: 'sichuan',
    贵州: 'guizhou',
    云南: 'yunnan',
    陕西: 'shanxi-1',
    甘肃: 'gansu',
    青海: 'qinghai',
    台湾: 'taiwan',
    内蒙古: 'neimenggu',
    广西: 'guangxi',
    西藏: 'xizang',
    宁夏: 'ningxia',
    新疆: 'xinjiang',
    兵团: 'bingtuan', // 额外添加的 新疆域内

    北京: 'beijing',
    天津: 'tianjin',
    上海: 'shanghai',
    重庆: 'chongqing',

    香港: 'xianggang',
    澳门: 'aomen'

  },
  // 中文
  keysZh: {
    河北: '河北',
    山西: '山西',
    辽宁: '辽宁',
    吉林: '吉林',
    黑龙江: '黑龙江',
    江苏: '江苏',
    浙江: '浙江',
    安徽: '安徽',
    福建: '福建',
    江西: '江西',
    山东: '山东',
    河南: '河南',
    湖北: '湖北',
    湖南: '湖南',
    广东: '广东',
    海南: '海南',
    四川: '四川',
    贵州: '贵州',
    云南: '云南',
    陕西: '陕西',
    甘肃: '甘肃',
    青海: '青海',
    台湾: '台湾',
    内蒙古: '内蒙古',
    广西: '广西',
    西藏: '西藏',
    宁夏: '宁夏',
    新疆: '新疆',
    兵团: '兵团', // 额外添加的 新疆域内

    北京: '北京',
    天津: '天津',
    上海: '上海',
    重庆: '重庆',

    香港: '香港',
    澳门: '澳门'
  }
}