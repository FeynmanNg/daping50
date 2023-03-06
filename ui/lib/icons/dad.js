
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 88m-88 0a88 88 0 1 0 176 0 88 88 0 1 0-176 0ZM744.9 619.6c-21.3 5.7-43.3-6.9-49-28.3l-64.1-239c-1.2-4.5-7.9-3.6-7.9 1V1008c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V640c0-8.8-7.2-16-16-16s-16 7.2-16 16v368c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V353.3c0-4.7-6.7-5.6-7.9-1l-64.1 239c-5.7 21.3-27.7 34-49 28.3-21.3-5.7-34-27.6-28.3-49l69.5-260C339 240.7 402.4 192 474.8 192h74.3c72.5 0 135.9 48.7 154.6 118.7l69.5 260c5.7 21.3-6.9 43.2-28.3 48.9z"/>
    </svg>
  )
}

Vue.component('icon-dad', Icon)
export default Icon

