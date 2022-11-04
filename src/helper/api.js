import * as prodAPI from '$my/code/api/dv';
import * as mockAPI from '@/mock';

let api = null;

console.log('接口环境：', process.env.NODE_ENV);

/**
 * 根据 环境来 build
 */
if (process.env.NODE_ENV === 'production') { // 生产环境
  // api = prodAPI;
  api = mockAPI;
} else if (process.env.NODE_ENV === 'test') { // 测试环境 mock 数据
  api = mockAPI;
} else { // 开发环境
  api = prodAPI;
  // api = mockAPI;
}

export default api;
