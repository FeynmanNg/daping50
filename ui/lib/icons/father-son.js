
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M253.9 456m-88 0a88 88 0 1 0 176 0 88 88 0 1 0-176 0ZM652.9 88m-88 0a88 88 0 1 0 176 0 88 88 0 1 0-176 0ZM887.8 619.6c-21.4 5.7-43.3-7-49-28.3l-64.1-239c-1.2-4.5-7.9-3.6-7.9 1V1008c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V640c0-8.8-7.2-16-16-16-4.4 0-8.4 1.8-11.3 4.7-2.9 2.9-4.7 6.9-4.7 11.3v368c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V353.3c0-4.7-6.6-5.5-7.9-1l-64 239c-5.4 20-25 32.4-45.1 29.1-0.5 1.8-1.2 3.5-2.2 5.2l-39.1 67.7c-8.4 14.6-27.1 19.6-41.8 11.2-3.5-2-6.5-4.7-9-7.9-2.4-3.2-4.2-6.8-5.3-10.7l-9.4-35c-0.6-2.3-3.9-1.8-3.9 0.5V1016c0 4.4-3.6 8-8 8h-37.5c-4.4 0-8-3.6-8-8V808.9c0-4.4-3.6-8-8-8H252c-4.4 0-8 3.6-8 8V1016c0 4.4-3.6 8-8 8h-37.5c-4.4 0-8-3.6-8-8V648.2c0-2.3-3.3-2.8-3.9-0.5l-36.2 135c-3.2 11.9-15.4 19-27.3 15.8-10-2.7-16.5-11.7-16.5-21.5 0-1.9 0.3-3.9 0.8-5.8l37.6-140c11.3-42 49.3-71.1 92.7-71.1h29.8c43 0 80.7 28.5 92.4 69.9l3.3 11.8 22.1-38.3c2.3-4 5.7-7 9.6-8.9-1.5-4.3-2.3-8.8-2.3-13.5 0-3.4 0.4-6.9 1.4-10.4l69.5-260c18.7-70 82.1-118.7 154.6-118.7h74.3c72.5 0 135.9 48.7 154.6 118.7l69.5 260c5.3 21.3-7.3 43.2-28.7 48.9z"/>
    </svg>
  )
}

Vue.component('icon-father-son', Icon)
export default Icon

