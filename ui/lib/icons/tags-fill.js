
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1024 128c0-70.7-57.3-128-128-128H693c-34 0-66.5 13.5-90.5 37.5L2.9 637.1c-1.6 1.6-1.6 4.1 0 5.7l378.4 378.4c1.6 1.6 4.1 1.6 5.7 0l599.6-599.6c24-24 37.5-56.6 37.5-90.5L1024 128z m-302.4 89.6c11.7-11.7 27.1-17.6 42.4-17.6s30.7 5.9 42.4 17.6c23.4 23.4 23.4 61.4 0 84.9-11.7 11.6-27 17.5-42.4 17.5s-30.7-5.9-42.4-17.6c-23.5-23.4-23.5-61.4 0-84.8zM467.1 115.1L6.8 575.4c-2.5 2.6-6.8 0.8-6.8-2.8v-54.4c0-17 6.7-33.3 18.7-45.3L376.6 115c25-24.9 65.5-24.9 90.5 0.1z"/>
    </svg>
  )
}

Vue.component('icon-tags-fill', Icon)
export default Icon

