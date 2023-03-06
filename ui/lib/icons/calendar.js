
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M833 128c0-53-43-96-96-96h-16c-53 0-96 43-96 96H400c0-53-43-96-96-96h-16c-53 0-96 43-96 96H64c-35.3 0-64 28.7-64 64v736c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H833zM729 96c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40s-40-17.9-40-40v-80c0-22.1 17.9-40 40-40z m-433 0c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40s-40-17.9-40-40v-80c0-22.1 17.9-40 40-40z m632 832H96c-17.7 0-32-14.3-32-32V448h896v448c0 17.7-14.3 32-32 32z m32-544H64V224c0-17.7 14.3-32 32-32h96v32c0 53 43 96 96 96h16c53 0 96-43 96-96v-32h225v24c0 57.4 46.6 104 104 104s104-46.6 104-104v-24h95c17.7 0 32 14.3 32 32v160z"/>
    </svg>
  )
}

Vue.component('icon-calendar', Icon)
export default Icon

