
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M767.6 317.3c-18.1-2.7-34.1-13-44.2-28.2-51-77.5-140.8-129-243.4-129-139.3 0-255.2 94.9-281.8 220.8-4.4 20.8-18.5 38.3-38.2 46.3C65.8 465.6 0.2 551.2 0.2 650.7 0.2 781.3 113.4 888.6 256.1 896H736c158.9 0 287.9-130.5 287.9-291.3-0.1-145.4-111.1-265.5-256.3-287.4z m-40.7 392.6c-6.3 6.6-14.7 9.9-23.1 9.9-8.2 0-16.4-3.1-22.6-9.4L621.7 651c-10-10.1-25.6-12.3-38-5.4-28.6 15.9-61.5 24.9-96.6 24.9-110.1 0-199.3-89.3-199.3-199.3 0-110.1 89.2-199.3 199.3-199.3 110.1 0 199 88.6 199.3 198.7 0.1 35.2-8.9 68.2-24.8 97-6.9 12.5-4.9 28.1 5.3 38.3l59 59c12.4 12.2 13.1 32.4 1 45zM622.4 471.1c0 36.1-14.1 70.1-39.6 95.7-25.6 25.6-59.5 39.6-95.7 39.6s-70.1-14.1-95.7-39.6c-25.6-25.6-39.6-59.5-39.6-95.7s14.1-70.1 39.6-95.7c25.6-25.6 59.5-39.6 95.7-39.6 36.1 0 70.1 14.1 95.7 39.6 25.5 25.6 39.6 59.6 39.6 95.7z"/>
    </svg>
  )
}

Vue.component('icon-cloud-search-fill', Icon)
export default Icon
