import dateFormat from '$ui/utils/date'

const prefix = 'dv_prefix_';

export default {
  // 设置初始化form
  getForm() {
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
    const res = JSON.stringify(value);
    console.log('设置缓存', res);
    return setValue('form', res);
  }
}

function getValue(key) {
  return window.localStorage[prefix + key] === undefined ? '' : window.localStorage[prefix + key];
}
function setValue(key, value) {
  window.localStorage[prefix + key] = value;
}