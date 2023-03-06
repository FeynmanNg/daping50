
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1020 176H292c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h728c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM1020 544H292c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h728c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM1020 912H292c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h728c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM156 224H4c-2.2 0-4-1.8-4-4V68c0-2.2 1.8-4 4-4h152c2.2 0 4 1.8 4 4v152c0 2.2-1.8 4-4 4zM156 608H4c-2.2 0-4-1.8-4-4V452c0-2.2 1.8-4 4-4h152c2.2 0 4 1.8 4 4v152c0 2.2-1.8 4-4 4zM156 960H4c-2.2 0-4-1.8-4-4V804c0-2.2 1.8-4 4-4h152c2.2 0 4 1.8 4 4v152c0 2.2-1.8 4-4 4z"/>
    </svg>
  )
}

Vue.component('icon-list2', Icon)
export default Icon

