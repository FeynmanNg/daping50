
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M480 224c43 0 84.7 11.6 120.6 33.5 34.6 21.1 62.5 50.9 80.6 86 10.4 20.1 30.6 33.3 53.2 34.6C796 381.6 853 407 895.2 449.7c41.7 42.1 64.6 97.2 64.6 155 0 30.8-5.9 60.6-17.7 88.7-11.3 27.1-27.5 51.4-48.2 72.3-42.3 42.8-98.4 66.3-158 66.3h-478c-53.3-3.1-102.6-24-139-58.8-35.3-33.6-54.7-77.2-54.7-122.5 0-38.5 13.7-75.3 39.7-106.4 12.9-15.5 28.5-29.1 46.3-40.3 18.3-11.6 38.4-20.4 59.9-26.3 26.1-7.1 44.9-29.9 47-56.9 4-52.9 28.6-102.1 69.4-138.7C368.1 244.6 422.6 224 480 224m0-64c-139.2 0-255.2 94.9-281.9 220.8-4.4 20.8-18.5 38.3-38.2 46.3C65.8 465.6 0.2 551.2 0.2 650.7 0.2 781.3 113.4 888.6 256.1 896H736c158.9 0 287.9-130.5 287.9-291.3 0-145.4-111.1-265.5-256.2-287.4-18.1-2.7-34.1-13-44.2-28.2C672.5 211.6 582.7 160 480 160zM603.5 532.6h-71c-2.2 0-4 1.8-4 4V748c0 2.2-1.8 4-4 4h-56c-2.2 0-4-1.8-4-4V536.6c0-2.2-1.8-4-4-4h-71c-3.6 0-5.3-4.3-2.8-6.8l98.5-98.5c6.2-6.2 16.4-6.2 22.6 0l98.5 98.5c2.5 2.5 0.7 6.8-2.8 6.8z"/>
    </svg>
  )
}

Vue.component('icon-cloud-upload', Icon)
export default Icon

