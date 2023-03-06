
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M928,456V314.5c0-17-6.7-33.3-18.7-45.3L658.7,18.7C646.7,6.7,630.5,0,613.5,0H144c-26.5,0-48,21.5-48,48v408  c0,4.4-3.6,8-8,8H16c-8.8,0-16,7.2-16,16v400c0,8.8,7.2,16,16,16h80v0c0,70.7,57.3,128,128,128h656c26.5,0,48-21.5,48-48v-64  c0-8.8,7.2-16,16-16h64c8.8,0,16-7.2,16-16V480c0-8.8-7.2-16-16-16h-72C931.6,464,928,460.4,928,456z M704,154.5l69.5,69.5H708  c-2.2,0-4-1.8-4-4V154.5z M168,64h408c35.3,0,64,28.7,64,64v144c0,8.8,7.2,16,16,16h144c35.3,0,64,28.7,64,64v104c0,4.4-3.6,8-8,8  H168c-4.4,0-8-3.6-8-8V72C160,67.6,163.6,64,168,64z M856,960H224c-35.3,0-64-28.7-64-64v0h696c4.4,0,8,3.6,8,8v48  C864,956.4,860.4,960,856,960z M952,832H72c-4.4,0-8-3.6-8-8V536c0-4.4,3.6-8,8-8h880c4.4,0,8,3.6,8,8v288  C960,828.4,956.4,832,952,832z"/>    <path d="M249.7,699.5c0,27.6-6.4,48.7-19.1,63.5C217.9,777.6,199.7,785,176,785c-10.5,0-20.3-1.8-29.2-5.4v-41.9  c7.7,5.8,16.5,8.8,26.4,8.8c21.4,0,32.1-16.2,32.1-48.6V572.7h44.5V699.5z"/>  <path d="M286.4,728.8c16.8,13.9,35.9,20.9,57.3,20.9c12.1,0,21.2-2.1,27.3-6.3c6.1-4.2,9.2-9.5,9.2-16.1c0-5.7-2.4-11-7.3-16  c-4.9-5-17.6-11.9-38.4-20.5c-32.6-13.8-48.9-33.9-48.9-60.4c0-19.4,7.4-34.5,22.2-45.2c14.8-10.7,34.3-16.1,58.7-16.1  c20.4,0,37.5,2.7,51.3,7.9v41.8c-14-9.5-30.4-14.3-49.2-14.3c-11,0-19.7,2-26.3,6c-6.6,4-9.8,9.4-9.8,16.1c0,5.4,2.2,10.4,6.7,14.9  c4.5,4.5,15.6,10.7,33.3,18.4c20.7,8.9,35,18.3,42.8,28.2c7.8,9.9,11.7,21.6,11.7,35.3c0,20-7.1,35.3-21.3,45.8  c-14.2,10.5-34.4,15.8-60.5,15.8c-23.9,0-43.5-3.9-58.7-11.6V728.8z"/>  <path d="M448.8,679.8c0-32.7,9.5-59.3,28.6-79.8c19.1-20.5,44.3-30.8,75.6-30.8c29.8,0,53.8,9.9,72,29.8  c18.2,19.8,27.3,45.4,27.3,76.5c0,32.5-9.5,58.9-28.4,79.1c-18.9,20.3-43.7,30.4-74.3,30.4c-29.9,0-54.2-9.8-72.9-29.4  C458.2,736,448.8,710.7,448.8,679.8z M495.6,677.4c0,20.3,4.9,36.9,14.7,49.8c9.8,12.9,23.2,19.3,40.3,19.3  c17.4,0,31-6.2,40.7-18.5c9.7-12.3,14.5-28.9,14.5-49.8c0-21.7-4.7-38.9-14.1-51.5c-9.4-12.6-22.7-18.9-39.9-18.9  c-17.4,0-31.1,6.5-41.2,19.4C500.6,640.1,495.6,656.8,495.6,677.4z"/>  <path d="M873.2,781.4h-45.5l-88.4-135c-4.6-7-7.9-12.7-10-17h-0.7c0.8,7.2,1.2,18.3,1.2,33.3v118.7h-42.2V572.7h48.5l85.1,131.2  c5.7,8.7,9.1,14.2,10.4,16.6h0.7c-0.9-5-1.3-14.6-1.3-28.8v-119h42.2V781.4z"/>
    </svg>
  )
}

Vue.component('icon-go-json', Icon)
export default Icon

