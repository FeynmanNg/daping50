
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M944 640h-64v258h64V640zM1023.3 897.7H802.7L913 1008l110.3-110.3zM880 208v76c0 2.2-1.8 4-4 4H68c-2.2 0-4-1.8-4-4v-76c0-8.8 7.2-16 16-16h784c8.8 0 16 7.2 16 16zM64 128c-35.3 0-64 28.7-64 64v152c0 4.4 3.6 8 8 8h928c4.4 0 8-3.6 8-8V192c0-35.3-28.7-64-64-64H64zM880 452v88c0 2.2-1.8 4-4 4H68c-2.2 0-4-1.8-4-4v-88c0-2.2 1.8-4 4-4h808c2.2 0 4 1.8 4 4zM8 384c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8h928c4.4 0 8-3.6 8-8V392c0-4.4-3.6-8-8-8H8zM768 708v88c0 2.2-1.8 4-4 4H68c-2.2 0-4-1.8-4-4v-88c0-2.2 1.8-4 4-4h696c2.2 0 4 1.8 4 4zM8 640c-4.4 0-8 3.6-8 8v208c0 4.4 3.6 8 8 8h816c4.4 0 8-3.6 8-8V648c0-4.4-3.6-8-8-8H8zM128 224h80v32h-80zM128 480h80v32h-80zM128 736h80v32h-80z"/>
    </svg>
  )
}

Vue.component('icon-data-download', Icon)
export default Icon

