
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M896 384H776c-4.4 0-8-3.6-8-8V218.1c0-36.9-15.9-72-43.7-96.3l-48.1-42.1C652.9 59.3 622.9 48 591.9 48H256v328c0 4.4-3.6 8-8 8H128C57.3 384 0 441.3 0 512v160c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V512c0-70.7-57.3-128-128-128zM176 512c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z m464-379l64 56v3h-60c-2.2 0-4-1.8-4-4v-55z m-320-21h256v112c0 17.7 14.3 32 32 32h96v256H320V112zM544 192H352v64h192v-64zM672 288H352v64h320v-64zM672 400H352v64h320v-64zM336 768h64v192h-64zM432 768h64v192h-64zM528 768h64v192h-64zM624 768h64v192h-64z"/>
    </svg>
  )
}

Vue.component('icon-destroy-fill', Icon)
export default Icon

