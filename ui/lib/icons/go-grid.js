
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M0,32v224c0,17.7,14.3,32,32,32h960c17.7,0,32-14.3,32-32V32c0-17.7-14.3-32-32-32H32C14.3,0,0,14.3,0,32z M64,216V72  c0-4.4,3.6-8,8-8h112c4.4,0,8,3.6,8,8v144c0,4.4-3.6,8-8,8H72C67.6,224,64,220.4,64,216z M256,216V72c0-4.4,3.6-8,8-8h496  c4.4,0,8,3.6,8,8v144c0,4.4-3.6,8-8,8H264C259.6,224,256,220.4,256,216z M952,224H840c-4.4,0-8-3.6-8-8V72c0-4.4,3.6-8,8-8h112  c4.4,0,8,3.6,8,8v144C960,220.4,956.4,224,952,224z"/> <path d="M0,768v224c0,17.7,14.3,32,32,32h960c17.7,0,32-14.3,32-32V768c0-17.7-14.3-32-32-32H32C14.3,736,0,750.3,0,768z M64,952  V808c0-4.4,3.6-8,8-8h112c4.4,0,8,3.6,8,8v144c0,4.4-3.6,8-8,8H72C67.6,960,64,956.4,64,952z M256,952V808c0-4.4,3.6-8,8-8h496  c4.4,0,8,3.6,8,8v144c0,4.4-3.6,8-8,8H264C259.6,960,256,956.4,256,952z M952,960H840c-4.4,0-8-3.6-8-8V808c0-4.4,3.6-8,8-8h112  c4.4,0,8,3.6,8,8v144C960,956.4,956.4,960,952,960z"/> <path d="M0,400v224c0,17.7,14.3,32,32,32h960c17.7,0,32-14.3,32-32V400c0-17.7-14.3-32-32-32H32C14.3,368,0,382.3,0,400z M64,584  V440c0-4.4,3.6-8,8-8h112c4.4,0,8,3.6,8,8v144c0,4.4-3.6,8-8,8H72C67.6,592,64,588.4,64,584z M256,584V440c0-4.4,3.6-8,8-8h496  c4.4,0,8,3.6,8,8v144c0,4.4-3.6,8-8,8H264C259.6,592,256,588.4,256,584z M952,592H840c-4.4,0-8-3.6-8-8V440c0-4.4,3.6-8,8-8h112  c4.4,0,8,3.6,8,8v144C960,588.4,956.4,592,952,592z"/>
    </svg>
  )
}

Vue.component('icon-go-grid', Icon)
export default Icon

