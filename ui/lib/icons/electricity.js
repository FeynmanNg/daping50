
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M672 624c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8V400c0-4.4 3.6-8 8-8h496c4.4 0 8 3.6 8 8v224zM112 328c-8.8 0-16 7.2-16 16v336c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V344c0-8.8-7.2-16-16-16H112zM976 420.9v-99.3c0-53.6-43.9-97.5-97.5-97.5h-781C43.9 224 0 267.9 0 321.5v380.9C0 756.1 43.9 800 97.5 800h780.9c53.6 0 97.5-43.9 97.5-97.5v-99.3c0-5.8 3.2-11 8.1-13.9 23.8-13.8 39.9-39.7 39.9-69.2v-16c0-29.5-16-55.4-39.9-69.2-4.8-3-8-8.3-8-14z m-64 281.6c0 12-6.2 19.9-9.9 23.6-3.7 3.7-11.7 9.9-23.6 9.9h-781c-11.9 0-19.9-6.2-23.6-9.9-3.7-3.7-9.9-11.7-9.9-23.6v-381c0-11.9 6.2-19.9 9.9-23.6 3.7-3.7 11.7-9.9 23.6-9.9h780.9c11.9 0 19.9 6.2 23.6 9.9 3.7 3.7 9.9 11.7 9.9 23.6v381z"/>
    </svg>
  )
}

Vue.component('icon-electricity', Icon)
export default Icon

