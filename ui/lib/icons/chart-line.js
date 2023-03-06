
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1024 900v24c0 2.2-1.8 4-4 4H32c-17.7 0-32-14.3-32-32V100c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v788c0 4.4 3.6 8 8 8h980c2.2 0 4 1.8 4 4zM864 412.5V732c0 2.2-1.8 4-4 4H196c-2.2 0-4-1.8-4-4V478.4c0-2.4 2.2-4.3 4.6-4l125.2 17.9c6 0.9 12.1 1.3 18.1 1.3 21.5 0 42.8-5.5 61.7-15.8l266.7-146.7c4.4-2.4 9.6-2.6 14.1-0.6l179.2 78.4c1.5 0.5 2.4 2 2.4 3.6zM673.6 259.6c-5.3 0-10.6 1.3-15.4 4L370.7 421.7c-9.5 5.2-20.1 7.9-30.8 7.9-3 0-6-0.2-9.1-0.6l-193.7-27.7c-0.4-0.1-0.8-0.1-1.1-0.1-4.3 0-8 3.5-8 8V792c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8V378.5c0-6.4-3.8-12.1-9.6-14.7l-232-101.5c-4.1-1.8-8.4-2.7-12.8-2.7z"/>
    </svg>
  )
}

Vue.component('icon-chart-line', Icon)
export default Icon

