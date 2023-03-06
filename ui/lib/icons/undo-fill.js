
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1024 640l-3.5 41.6c-6.5 78.1-27.7 154-62.2 223.9-7.5 15.2-30.4 10-30.4-7V800c0-61.9-25.1-117.9-65.6-158.4C821.9 601.1 765.9 576 704 576H392c-4.4 0-8 3.6-8 8v179.6c0 13.9-16.5 21.2-26.8 11.8L0 447.9 356.5 76.7c10-10.4 27.5-3.3 27.5 11.1V280c0 4.4 3.6 8 8 8h280c97.2 0 185.2 39.4 248.9 103.1S1024 542.8 1024 640z"/>
    </svg>
  )
}

Vue.component('icon-undo-fill', Icon)
export default Icon

