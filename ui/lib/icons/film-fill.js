
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M896 96H128C57.3 96 0 153.3 0 224v576c0 70.7 57.3 128 128 128h768c70.7 0 128-57.3 128-128V224c0-70.7-57.3-128-128-128zM208 784c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m0-160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m0-160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m0-160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m704 480c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m0-160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m0-160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z m0-160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64z"/>
    </svg>
  )
}

Vue.component('icon-film-fill', Icon)
export default Icon

