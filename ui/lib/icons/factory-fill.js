
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1023.1 443.2H778.8l-36.8-135-286.4 135h-65.3l-36.8-135-298.6 135H1v169.9h1022.1V443.2zM339.1 0H171.4v353.3l167.7-75.8V0z m376.1 0H547.7v363.5l167.5-86.1V0zM0 649.9V1024h1024V649.9H0z m198.1 233.5H114c-4.4 0-8-3.6-8-8v-154c0-4.4 3.6-8 8-8h84.2c4.4 0 8 3.6 8 8v153.9c-0.1 4.5-3.7 8.1-8.1 8.1z m200.5 0h-84.2c-4.4 0-8-3.6-8-8v-154c0-4.4 3.6-8 8-8h84.2c4.4 0 8 3.6 8 8v153.9c0 4.5-3.6 8.1-8 8.1z m201.3 0h-84.2c-4.4 0-8-3.6-8-8v-154c0-4.4 3.6-8 8-8H600c4.4 0 8 3.6 8 8l-0.1 153.9c0 4.5-3.6 8.1-8 8.1z"/>
    </svg>
  )
}

Vue.component('icon-factory-fill', Icon)
export default Icon

