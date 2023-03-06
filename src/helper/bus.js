import bus from '$ui/utils/bus';

const COUNTDOWN = window.__GLOBAL__.BUS_EVENT_COUNTDOWN;
const PAUSE = 'on-pause';
const START = 'on-start';
const RESET = 'on-reset';

// 暂停倒计时
export function emitPause(data) {
  emit({ eventName: PAUSE, data });
}
export function onPause(fn) {
  on({ eventName: PAUSE, fn });
}

// 开始倒计时
export function emitStart(data) {
  emit({ eventName: START, data });
}
export function onStart(fn) {
  on({ eventName: START, fn });
}

// 重置倒计时
export function emitReset(data) {
  emit({ eventName: RESET, data });
}
export function onReset(fn) {
  on({ eventName: RESET, fn });
}

/**
 * 基础方法
 * @param {*} { eventName, fn: (data) => {} }
 * @returns 
 */
export function on({ eventName, fn }) {
  console.log('监听', eventName);
  return bus.$on(eventName, fn);
}

/**
 * 基础方法
 * @param {*} { eventName, data }
 * @returns 
 */
export function emit({ eventName, data }) {
  const name = eventName || COUNTDOWN;
  console.log('发起', eventName);
  return bus.$emit(name, data);
}