
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M510.6,576c-52.2,0.7-94.6,43.8-94.6,96c0,31.3,15,59.2,38.2,76.7c16.1,12.2,25.8,31.1,25.8,51.3v63.4  c0,17.8,14.6,32.9,32.4,32.6c17.4-0.2,31.6-14.5,31.6-32v-64.5c0-20.1,9.7-38.7,25.7-50.8C593,731.2,608,703.3,608,672  C608,618.5,564.3,575.3,510.6,576z M512,704c-17.6,0-32-14.4-32-32s14.4-32,32-32s32,14.4,32,32S529.6,704,512,704z"/>  <path d="M328,384c-4.4,0-8-3.6-8-8V256c0-51.3,20-99.5,56.2-135.8C412.5,84,460.7,64,512,64s99.5,20,135.8,56.2  C684,156.5,704,204.7,704,256v2c0,16.6,13.4,30,30,30h4c16.6,0,30-13.4,30-30v0C768,116.7,652.4-0.5,511,0  C370.1,0.5,256,114.9,256,256v120c0,4.4-3.6,8-8,8h-24c-53,0-96,43-96,96v448c0,53,43,96,96,96h576c53,0,96-43,96-96V480  c0-53-43-96-96-96H328z M800,960H224c-17.7,0-32-14.3-32-32V480c0-17.7,14.3-32,32-32h576c17.7,0,32,14.3,32,32v448  C832,945.7,817.7,960,800,960z"/>
    </svg>
  )
}

Vue.component('icon-go-unlock', Icon)
export default Icon

