
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M640 149.7v724.5c0 24.3-25.9 39.7-47.2 28.1L270.3 727.7c-9.4-5.1-19.8-7.7-30.5-7.7H64c-35.3 0-64-28.7-64-64V368c0-35.4 28.7-64 64-64h175.8c10.6 0 21.1-2.7 30.5-7.7l322.5-174.7c21.3-11.6 47.2 3.9 47.2 28.1zM864 512c0 92.2-48.8 173-121.9 218.1-2.7 1.6-6.1-0.3-6.1-3.4v-69.8c0-1.1 0.5-2.2 1.3-2.9 2.2-2 4.3-4.1 6.5-6.2C780 611.5 800 563.3 800 512c0-51.3-20-99.5-56.2-135.8-2.1-2.1-4.3-4.2-6.5-6.2-0.8-0.8-1.3-1.8-1.3-2.9v-69.8c0-3.1 3.4-5.1 6.1-3.4C815.2 339 864 419.8 864 512z"/>
    </svg>
  )
}

Vue.component('icon-sound-min-fill', Icon)
export default Icon

