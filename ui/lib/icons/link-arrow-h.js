
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M858.7 600.8V548c0-2.2-1.8-4-4-4H169.3c-2.2 0-4 1.8-4 4v52.8c0 3.1-3.3 5-6 3.5L11.5 518.9c-5.3-3.1-5.3-10.8 0-13.9l147.8-85.3c2.7-1.5 6 0.4 6 3.5V476c0 2.2 1.8 4 4 4h685.4c2.2 0 4-1.8 4-4v-52.8c0-3.1 3.3-5 6-3.5l147.8 85.3c5.3 3.1 5.3 10.8 0 13.9l-147.8 85.3c-2.7 1.6-6-0.3-6-3.4z"/>
    </svg>
  )
}

Vue.component('icon-link-arrow-h', Icon)
export default Icon

