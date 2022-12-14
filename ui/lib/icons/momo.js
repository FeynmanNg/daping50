
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M418.7 392.6c-17.9 0-33.2 15.3-33.2 35.8v63.9c0 20.4 15.3 35.8 33.2 35.8s33.2-15.3 33.2-35.8v-63.9c0.1-20.4-15.3-35.8-33.2-35.8z m166.2 0c-17.9 0-33.2 15.3-33.2 35.8v63.9c0 20.4 15.3 35.8 33.2 35.8 17.9 0 33.2-15.3 33.2-35.8v-63.9c0-20.4-15.3-35.8-33.2-35.8zM1004.1 390.1C960.6 154.9 756.2 9.2 538.9 1.5 500.5-1 459.6-1 421.3 6.6c-76.7 10.2-138 38.3-186.6 71.6-56.2 35.8-130.4 97.1-171.3 186.6-74.1 155.9-53.7 248-28.1 342.5 25.6 92 150.8 230.1 247.9 291.4 97.1 61.3 212.2 112.5 227.5 125.3 0 0 163.6-76.7 278.6-161s258.3-230.1 214.8-472.9zM679.5 694.3H370.2s-97.1-7.7-104.8-107.4V331.3s5.1-76.7 94.6-94.6v-2.6h255.6c12.8 0 23 0 35.8 2.6 28.1 2.6 89.5 33.2 89.5 115-2.6 81.8 0 263.3 0 263.3l35.8 97.1-97.2-17.8z"/>
    </svg>
  )
}

Vue.component('icon-momo', Icon)
export default Icon

