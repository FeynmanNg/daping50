
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M890.5 250.5l-213-213C653.5 13.5 620.9 0 587 0H160c-35.3 0-64 28.6-64 64v896c0 35.3 28.7 64 64 64h704c35.3 0 64-28.7 64-64V341c0-33.9-13.5-66.5-37.5-90.5zM640 90.5L837.5 288H704c-35.3 0-64-28.7-64-64V90.5zM353 502.9c0-24.5 26.5-39.9 47.8-27.8l270.1 153.1c21.6 12.3 21.6 43.4 0 55.7l-270.1 153c-21.3 12.1-47.8-3.3-47.8-27.8V502.9zM565.6 669.9l-124.8 70.7c-10.7 6-23.9-1.7-23.9-13.9V585.3c0-12.3 13.2-20 23.9-13.9l124.8 70.7c10.9 6.1 10.9 21.7 0 27.8z"/>
    </svg>
  )
}

Vue.component('icon-avi-fill', Icon)
export default Icon

