
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1020 0H34.7c-9.6 0-18.2 3.9-24.5 10.1C3.9 16.4 0 25.1 0 34.7c0 15.6 11.2 29 26.5 31.5C102.3 78.8 160 144.7 160 224v672c0 70.7 57.3 128 128 128h576c70.7 0 128-57.3 128-128V68c0-2.2 1.8-4 4-4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM832 892c0 2.2-1.8 4-4 4H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h248c2.2 0 4 1.8 4 4v56z m0-128c0 2.2-1.8 4-4 4H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h248c2.2 0 4 1.8 4 4v56z m0-128c0 2.2-1.8 4-4 4H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h248c2.2 0 4 1.8 4 4v56z m0-128c0 2.2-1.8 4-4 4H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h248c2.2 0 4 1.8 4 4v56z m0-128c0 2.2-1.8 4-4 4H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h248c2.2 0 4 1.8 4 4v56z m0-128c0 2.2-1.8 4-4 4H580c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h248c2.2 0 4 1.8 4 4v56z"/>
    </svg>
  )
}

Vue.component('icon-cup-fill', Icon)
export default Icon

