
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M763 0C618.8 0 502 116.8 502 261c0 4.4 0.1 8.9 0.3 13.2L28.6 803.1c-37.5 37.5-37.5 98.3 0 135.8l56.6 56.6c18.7 18.8 43.3 28.1 67.9 28.1s49.1-9.4 67.9-28.1l528.9-473.8c4.4 0.2 8.8 0.3 13.2 0.3 144.2 0 261-116.9 261-261S907.2 0 763 0zM178.2 947.8l-1.3 1.2-1.2 1.3c-8.2 8.1-17.7 9.4-22.6 9.4s-14.5-1.2-22.6-9.4l-56.6-56.6c-12.5-12.5-12.5-32.8 0-45.3l1.3-1.2 1.2-1.3 442.2-493.6c26.4 70.8 82.6 127 153.4 153.4L178.2 947.8zM377.1 624.9c-12.5-12.5-12.5-32.8 0-45.3l90.5-90.5c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-90.5 90.5c-12.5 12.5-32.8 12.5-45.3 0z"/>
    </svg>
  )
}

Vue.component('icon-microphone-fill', Icon)
export default Icon

