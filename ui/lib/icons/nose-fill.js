
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M749.3 955.4c-13 3.5-26.1 5.2-39 5.2-6.4 0-12.9-0.4-19.2-1.2-8.9-1.1-17.9 1.7-24.7 7.5-44.5 38.1-99.5 57.1-154.4 57.1s-109.8-19-154.3-57.1c-6.8-5.9-15.8-8.7-24.7-7.5-6.3 0.8-12.8 1.2-19.2 1.2-13 0-26-1.7-39-5.2C186 931.6 135.5 832.1 162 733.2c5.5-20.6 13.9-39.5 24.6-56.4 48.7-77.1 82-162.8 96.3-252.8C322.5 173.8 410.2 0 512 0s189.5 173.8 229.2 424c14.3 90 47.5 175.8 96.2 252.8 10.7 16.9 19.1 35.8 24.6 56.4 26.5 98.9-24 198.4-112.7 222.2z"/>
    </svg>
  )
}

Vue.component('icon-nose-fill', Icon)
export default Icon

