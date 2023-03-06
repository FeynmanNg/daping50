
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M918.5 768l-21.4-577.2c-0.6-17.2-14.8-30.8-32-30.8H738.3c-6.8 0-12.8-4.3-15.1-10.8-11.2-31.7-29.4-60.2-52.8-83.6C629.9 25.1 573.9 0 512 0c-97.5 0-180.5 62.3-211.2 149.2-2.3 6.4-8.3 10.8-15.1 10.8H158.8c-17.2 0-31.3 13.6-32 30.8L105.5 768l-7 189.6c-1.3 36.3 27.7 66.4 64 66.4h699.2c36.3 0 65.3-30.1 64-66.4L918.5 768zM398.9 110.9c29-29 69-46.9 113.1-46.9 63.4 0 118.1 36.8 144.1 90.3 1.3 2.6-0.7 5.7-3.6 5.7H371.6c-2.9 0-4.9-3.1-3.6-5.7 7.8-16.2 18.3-30.9 30.9-43.4zM205.1 224H280c4.4 0 8 3.6 8 8v120c0 8.8 3.6 16.8 9.4 22.6 6 6 14.2 9.6 23.4 9.4 17.5-0.4 31.3-15.1 31.3-32.6V232c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v120c0 8.8 3.6 16.8 9.4 22.6 6 6 14.2 9.6 23.4 9.4 17.5-0.4 31.3-15.1 31.3-32.6V232c0-4.4 3.6-8 8-8h74.9c8.6 0 15.7 6.8 16 15.4l19.4 524.4c0.1 2.3-1.7 4.1-4 4.1H173.7c-2.3 0-4.1-1.9-4-4.1l19.4-524.4c0.3-8.6 7.4-15.4 16-15.4zM163 943.4l4-107.6c0.1-2.2 1.8-3.9 4-3.9h682c2.2 0 3.9 1.7 4 3.9l4 107.6c0.3 9.1-6.9 16.6-16 16.6H179c-9.1 0-16.3-7.5-16-16.6z"/>
    </svg>
  )
}

Vue.component('icon-handbag', Icon)
export default Icon

