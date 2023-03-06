
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M920.4 57.3l-1.7-2.8C884.7 21 837.7 0 786.3 0H295.9c-51.5 0-98.4 21-132.2 54.5-33.5 33.5-54.5 80.5-54.5 132.2v90.9H55.5c-21.8 0-39.4 17.7-39.4 39.7 0 21.8 17.7 38.5 39.4 38.5h53.6v312.1H55.5c-21.8 0-39.4 16.8-39.4 39.2 0 21.5 17.7 39.7 39.4 39.7h53.6V837c0 51.2 20.7 97.5 54 131.7l0.8 0.5c33.9 34 80.5 54.8 132 54.8h490.4c51.5 0 97.8-20.7 131.5-54.3l1.2-0.5c33.5-34 54.8-80.5 54.8-132.2V186.8c-0.3-50.1-20.4-95.9-53.4-129.5zM768 832H320c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h448c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16z m-32-616c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v320c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V216z m-112 0c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v320c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V216z m-96 0c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v320c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V216z m-112 0c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v320c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V216z m-112 0c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v320c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V216z"/>
    </svg>
  )
}

Vue.component('icon-jail-fill', Icon)
export default Icon

