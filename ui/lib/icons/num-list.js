
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M224 800v160c0 35.3-28.7 64-64 64H8c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h136c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H8c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h136c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H8c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152c35.3 0 64 28.7 64 64zM160 64v216c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V80c0-8.8-7.2-16-16-16H40c-4.4 0-8-3.6-8-8V8c0-4.4 3.6-8 8-8h56c35.3 0 64 28.7 64 64zM64 560v16c0 8.8 7.2 16 16 16h136c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H64c-35.3 0-64-28.7-64-64v-48c0-35.3 28.7-64 64-64h80c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H8c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H80c-8.8 0-16 7.2-16 16zM992 176H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h672c17.7 0 32 14.3 32 32s-14.3 32-32 32zM992 544H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h672c17.7 0 32 14.3 32 32s-14.3 32-32 32zM992 912H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h672c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
    </svg>
  )
}

Vue.component('icon-num-list', Icon)
export default Icon

