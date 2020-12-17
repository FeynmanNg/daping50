
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 0H96C60.7 0 32 28.6 32 64v896c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V64c0-35.4-28.7-64-64-64zM208 479.3c0-52.4 42.5-94.8 94.8-94.8h2.4c52.4 0 94.8 42.5 94.8 94.8v1.9c0 52.4-42.5 94.8-94.8 94.8h-2.4c-52.4 0-94.8-42.5-94.8-94.8v-1.9z m197.8 374.5c-26 26.1-62 42.2-101.8 42.2-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144c0 39.8-16.1 75.8-42.2 101.8zM304 752m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM336 479.3v1.9c0 17-13.8 30.8-30.8 30.8h-2.4c-17 0-30.8-13.8-30.8-30.8v-1.9c0-17 13.8-30.8 30.8-30.8h2.4c17 0 30.8 13.8 30.8 30.8zM960 352H656c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h304c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32zM752 646.4c0-30 24.3-54.4 54.4-54.4h3.2c30 0 54.4 24.3 54.4 54.4v3.2c0 30-24.3 54.4-54.4 54.4h-3.2c-30 0-54.4-24.4-54.4-54.4v-3.2zM808 912c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88zM808 824m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z"/>
    </svg>
  )
}

Vue.component('icon-voice-box-fill', Icon)
export default Icon
