/**
 * 该文件不仅提供 css 作为参考来定位各省
 * 而且还使用 key 作为数据对比
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

    北京: '北京',
    天津: '天津',
    上海: '上海',
    重庆: '重庆',

    香港: '香港',
    澳门: '澳门'
  },

  // css standard
  // 河北
  hebei: {
    top: '228px',
    left: '415px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {}
  },
  // 山西
  shanxi: {
    top: '245px',
    left: '365px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {}
  },
  // 辽宁
  liaoning: {
    top: '185px',
    left: '550px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-140px'
    }
  },
  // 吉林
  jilin: {
    top: '145px',
    left: '595px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-180px'
    }
  },
  // 黑龙江
  heilongjiang: {
    top: '90px',
    left: '595px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-180px'
    }
  },
  // 江苏
  jiangsu: {
    top: '320px',
    left: '525px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-120px'
    }
  },
  // 浙江
  zhejiang: {
    top: '390px',
    left: '525px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-120px'
    }
  },
  // 安徽
  anhui: {
    top: '325px',
    left: '455px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-50px'
    }
  },
  // 福建
  fujian: {
    top: '445px',
    left: '485px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-78px'
    }
  },
  // 江西
  jiangxi: {
    top: '410px',
    left: '432px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-28px'
    }
  },
  // 山东
  shandong: {
    top: '265px',
    left: '472px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 河南
  henan: {
    top: '305px',
    left: '388px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 湖北
  hubei: {
    top: '355px',
    left: '360px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 湖南
  hunan: {
    top: '410px',
    left: '350px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 广东
  guangdong: {
    top: '488px',
    left: '400px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {}
  },
  // 海南
  hainan: {
    top: '580px',
    left: '320px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 四川
  sichuan: {
    top: '360px',
    left: '160px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 贵州
  guizhou: {
    top: '425px',
    left: '260px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 云南
  yunnan: {
    top: '475px',
    left: '150px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 陕西
  shanxi_1: {
    top: '305px',
    left: '290px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 甘肃
  gansu: {
    top: '272px',
    left: '210px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 青海
  qinghai: {
    top: '270px',
    left: '80px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-65px'
    }
  },
  // 台湾
  taiwan: {
    top: '490px',
    left: '540px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-132px'
    }
  },

  // 内蒙古
  neimenggu: {
    top: '180px',
    left: '290px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      
    }
  },
  // 广西
  guangxi: {
    top: '480px',
    left: '290px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      
    }
  },
  // 西藏
  xizang: {
    top: '350px',
    left: '-50px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '50px'
    }
  },
  // 宁夏
  ningxia: {
    top: '245px',
    left: '250px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      
    }
  },
  // 新疆
  xinjiang: {
    top: '170px',
    left: '-50px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '50px'
    }
  },

  // 北京
  beijing: {
    top: '190px', // 防止遮蔽，向上稍微偏移 210px 为准确地点
    left: '440px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-30px'
    }
  },
  // 天津
  tianjin: {
    top: '230px',
    left: '450px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-40px'
    }
  },
  // 上海
  shanghai: {
    top: '345px',
    left: '550px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      left: '-140px'
    }
  },
  // 重庆
  chongqing: {
    top: '375px',
    left: '280px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      
    }
  },

  // 香港
  xianggang: {
    top: '525px',
    left: '405px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      
    }
  },
  // 澳门
  aomen: {
    top: '530px',
    left: '535px',
    'bar-box': {
      left: '160px',
      top: '150px' // 固定，因为 modal 高 150
    },
    province: {
      left: '150px',
      bottom: 0 // 固定
    },
    modal: {
      
    }
  }
}