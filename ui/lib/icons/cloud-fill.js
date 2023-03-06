
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1023.8 604.7c0 160.9-129 291.3-287.9 291.3H256.1C113.3 888.5 0.2 781.3 0.2 650.7c0-99.4 65.6-185 159.9-223.5 19.7-8 33.8-25.5 38.2-46.3C224.9 254.9 340.8 160 480 160c102.6 0 192.4 51.5 243.4 129 10 15.3 26.1 25.5 44.2 28.2 145.2 22 256.2 142.1 256.2 287.5z"/>
    </svg>
  )
}

Vue.component('icon-cloud-fill', Icon)
export default Icon

