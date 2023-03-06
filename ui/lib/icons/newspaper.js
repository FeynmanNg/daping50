
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M928 352c-17.7 0-32-14.3-32-32V144c0-70.7-57.3-128-128-128H128C57.3 16 0 73.3 0 144v736c0 70.7 57.3 128 128 128h704c106 0 192-86 192-192V448c0-53-43-96-96-96z m32 464c0 70.7-57.3 128-128 128H128c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h640c35.3 0 64 28.7 64 64v687.4c0 17.5 13.8 32.2 31.3 32.6 9.1 0.2 17.4-3.4 23.4-9.4 5.8-5.8 9.4-13.8 9.4-22.6V448c0-17.7 14.3-32 32-32s32 14.3 32 32v368zM440 576H168c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8zM440 448H168c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8zM728 320H168c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h560c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8zM668 768h-88c-2.2 0-4-1.8-4-4V452c0-2.2 1.8-4 4-4h88c2.2 0 4 1.8 4 4v312c0 2.2-1.8 4-4 4zM512 392v432c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8V392c0-4.4-3.6-8-8-8H520c-4.4 0-8 3.6-8 8zM440 704H168c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8zM440 832H168c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8z"/>
    </svg>
  )
}

Vue.component('icon-newspaper', Icon)
export default Icon

