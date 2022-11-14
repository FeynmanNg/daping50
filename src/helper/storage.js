import dateFormat from '$ui/utils/date';
// import { mockForm } from '@/data';

const prefix = 'dv_prefix_';
const isProd = process.env.NODE_ENV === 'production';

export default {
  // 设置初始化form
  getForm() {
    // const res = isProd ? JSON.parse(getValue('form') || '{}') : mockForm;
    const res = JSON.parse(getValue('form') || '{}');
    console.log('获取缓存', res);
    return res;
  },
  setForm(value) {
    if (value.timeRange) {
      value.timeRange = value.timeRange.map(t => {
        const now = new Date();
        const temp = new Date(t);
        temp.setFullYear(now.getFullYear());
        temp.setMonth(now.getMonth());
        temp.setDate(now.getDate());
        t = dateFormat(temp, 'yyyy-MM-dd hh:mm:ss');
        return t;
      })
    }
    // ids 由 字符串 修改为 字符串数组
    if (value.subject1ids) {
      value.subject1ids = value.subject1ids.split(',').filter(s => s);
      value.subject2ids = value.subject2ids.split(',').filter(s => s);
    }
    const res = JSON.stringify(value);
    console.log(`设置缓存-【正式环境=${isProd}】`, res);
    return setValue('form', res);
  }
}

function getValue(key) {
  return window.localStorage[prefix + key] === undefined ? '' : window.localStorage[prefix + key];
}
function setValue(key, value) {
  window.localStorage[prefix + key] = value;
}