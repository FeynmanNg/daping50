
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1023.48504 514.749299c-1.699168 287.659179-238.383302 516.347227-525.842579 508.551044C226.075405 1016.003914 7.282513 797.01112 0.185987 525.444064-7.410295 237.38508 222.377215 0.700947 510.536149 0.001289c45.177884-0.099951 88.956452 5.59726 130.736 16.491927 34.483119 8.995596 67.566923 21.48948 98.851608 37.081847 5.397358 2.698679 3.398336 10.894667-2.598728 10.794715H736.125714c-32.084293 0-63.169076 6.696722-91.655131 19.490459-24.488012 10.994618-47.076954 26.487034-66.667364 46.077443-41.979449 41.979449-65.168098 97.652195-65.567901 156.92318-0.399804 58.171523 21.989235 114.443975 62.269516 156.323473 42.97896 44.778079 101.050532 69.266091 162.920244 68.966238 59.670789-0.299853 116.942752-24.687914 158.722299-67.26707 18.490948-18.890752 33.283706-40.580134 43.978471-64.068635 12.993639-28.685957 19.890263-60.070593 19.890263-92.554691v-0.299853c0-6.097015 8.195988-7.996086 10.894666-2.598728 15.492416 31.284685 27.786397 64.46844 36.682043 98.951559 10.594813 41.779547 16.192073 85.458165 15.89222 130.436146z"/>
    </svg>
  )
}

Vue.component('icon-dark-fill', Icon)
export default Icon

