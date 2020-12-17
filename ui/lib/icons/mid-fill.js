
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M978.5 113.9L690.2 402.2c-5 5-1.5 13.7 5.7 13.7h112.8c26.3 0 48.3 20.9 48.8 47.2 0.4 26.9-21.2 48.8-48 48.8H560.7c-26.5 0-48-21.5-48-48v-248c0-26.3 20.9-48.3 47.2-48.8 26.9-0.4 48.8 21.2 48.8 48v113.6c0 7.1 8.6 10.7 13.7 5.7L910.7 46.1c18.7-18.8 49.1-18.8 67.9 0 18.7 18.7 18.7 49.1-0.1 67.8zM511.1 560.1v248c0 26.3-20.9 48.3-47.2 48.8-26.9 0.4-48.8-21.2-48.8-48V695.3c0-7.1-8.6-10.7-13.7-5.7L113.1 977.9c-9.4 9.4-21.7 14.1-33.9 14.1-12.3 0-24.6-4.7-33.9-14.1-18.8-18.7-18.8-49.1 0-67.9l288.3-288.3c5-5 1.5-13.7-5.7-13.7H215.1c-26.3 0-48.3-20.9-48.8-47.2-0.4-26.9 21.2-48.8 48-48.8h248.8c26.5 0.1 48 21.6 48 48.1zM64 352H0V0h352v64H64zM1024 1024H672v-64h288V672h64z"/>
    </svg>
  )
}

Vue.component('icon-mid-fill', Icon)
export default Icon
