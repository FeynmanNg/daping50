
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 64.1L719.8 416H304.2L512 64.1m0-64c-21.4 0-42.7 10.5-55.1 31.5L249.1 383.5c-25.2 42.7 5.6 96.5 55.1 96.5h415.6c49.5 0 80.3-53.9 55.1-96.5l-207.8-352C554.7 10.6 533.4 0.1 512 0.1zM719.8 608L512 959.9 304.2 608h415.6m0-64H304.2c-49.5 0-80.3 53.9-55.1 96.5l207.8 351.9c12.4 21 33.7 31.5 55.1 31.5s42.7-10.5 55.1-31.5l207.8-351.9c25.2-42.6-5.5-96.5-55.1-96.5z"/>
    </svg>
  )
}

Vue.component('icon-sort', Icon)
export default Icon

