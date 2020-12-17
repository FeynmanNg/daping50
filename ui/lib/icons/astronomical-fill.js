
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M719.8 115c-6.5 0-13 0.3-19.4 1-16.2 1.6-28.4 15.4-28.4 31.7 0 18.9 16.2 33.9 35 32 4-0.4 8.1-0.6 12.2-0.6 32.9-0.2 64.4 12.1 88.3 34.6 26.1 24.5 40.4 57.8 40.4 93.4 0 3.6-0.1 7.1-0.4 10.6-1.5 18.5 13.2 34.4 31.8 34.4h0.2c16.5 0 30.4-12.6 31.8-29 0.5-6.2 0.7-12.5 0.6-18.9-1.5-105.5-86.7-189.3-192.1-189.2zM717 0c-5 0-9.9 0.1-14.8 0.3-16.9 0.9-30.2 14.9-30.2 31.9v0.3c0 18.2 15.3 32.6 33.5 31.8 3.8-0.2 7.6-0.3 11.5-0.3 32.8 0 64.7 6.4 94.6 19.1 28.9 12.2 54.9 29.8 77.3 52.1 22.3 22.3 39.9 48.3 52.1 77.3 12.7 29.9 19.1 61.7 19.1 94.6 0 3.8-0.1 7.6-0.3 11.4-0.8 18.3 13.6 33.6 31.9 33.6h0.2c17 0 31.1-13.3 31.9-30.3 0.2-4.9 0.3-9.8 0.3-14.7C1024 137.2 886.8 0 717 0zM384 368.9L249 504 11.4 266.4c-6.2-6.3-6.2-16.4 0-22.6l112.4-112.4c6.3-6.2 16.4-6.2 22.6 0L384 368.9zM893.2 900.7l-112.4 112.4c-6.3 6.2-16.4 6.2-22.6 0L520.5 775.5l135.1-135.1L893.2 878c6.2 6.3 6.2 16.4 0 22.7zM690.2 379.5c-12.5 12.5-12.5 32.8 0 45.3l33.9 33.9c18.7 18.7 18.7 49.1 0 67.9L354.6 896.2c-31.2 31.2-72.2 46.9-113.1 46.9-41 0-81.9-15.6-113.1-46.9-62.5-62.5-62.5-163.8 0-226.3l369.5-369.5c18.7-18.7 49.1-18.7 67.9 0l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0l89.3-89.3c12.7-12.7 33.8-13 46.2-0.1 12.1 12.5 11.9 32.5-0.4 44.8l-89.9 89.8z"/>
    </svg>
  )
}

Vue.component('icon-astronomical-fill', Icon)
export default Icon
