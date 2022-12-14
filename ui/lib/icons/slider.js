
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M384 187.8V160c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v27.8c0 2.2-1.8 4-4 4H0v64h124c2.2 0 4 1.8 4 4V288c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-28.3c0-2.2 1.8-4 4-4h636v-64H388c-2.2 0.1-4-1.7-4-3.9zM316 256H196c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h120c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM768 476v-28c0-17.7-14.3-32-32-32H544c-17.7 0-32 14.3-32 32v28c0 2.2-1.8 4-4 4H0v64h508c2.2 0 4 1.8 4 4v28c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-28c0-2.2 1.8-4 4-4h252v-64H772c-2.2 0-4-1.8-4-4z m-68 68H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h120c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM480 764.3V736c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v28.3c0 2.2-1.8 4-4 4H0v64h220c2.2 0 4 1.8 4 4V864c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-27.8c0-2.2 1.8-4 4-4h540v-64H484c-2.2 0.1-4-1.7-4-3.9zM412 832H292c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h120c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4z"/>
    </svg>
  )
}

Vue.component('icon-slider', Icon)
export default Icon

