
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M928 64v78.5c-16 34.3-37.7 66.2-64 94.8C781.9 326.6 654.6 384 512 384s-269.9-57.4-352-146.7c-26.3-28.6-47.9-60.5-64-94.8V64c0-35.3 28.7-64 64-64h704c35.3 0 64 28.7 64 64zM864 325.3C772.2 401.4 648.4 448 512 448s-260.2-46.6-352-122.7c-18-14.9-34.7-30.9-50-47.9-4.9-5.5-14-2-14 5.3V912c0 61.9 50.1 112 112 112h608c61.9 0 112-50.1 112-112V282.8c0-7.3-9-10.8-14-5.3-15.3 16.9-32 32.9-50 47.8zM512 512c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z"/>
    </svg>
  )
}

Vue.component('icon-archive-fill', Icon)
export default Icon

