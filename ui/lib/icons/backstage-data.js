
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M533 384H175.7c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16H533c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM960 470.9c-55.6-33.5-142.5-55-240-55-5.4 0-10.7 0.1-16 0.2V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v944c0 8.8 7.2 16 16 16h688v-0.3c5.3 0.1 10.6 0.2 16 0.2 167.9 0 304-63.8 304-142.5v-323c0-33-23.9-63.4-64-87.5zM64 944V80c0-8.8 7.2-16 16-16h544c8.8 0 16 7.2 16 16v340.8c-41.7 5.3-79.8 14.7-112.3 27.2H176.1c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16H416v64H176.1c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h241.5c5.1 23.5 22.4 45.3 48.9 64H80c-8.8 0-16-7.2-16-16z m368.5-432c-10.6 14.5-16.4 30-16.5 46.1V576H228.1c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h204.4zM416 768v64H228.1c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4H416z m544 113.4c0 5.7-13.2 24.5-52.2 42.8-48.4 22.6-116.8 35.7-187.8 35.7-5.3 0-10.7-0.1-16-0.2-21.9-0.6-43.4-2.4-64-5.4-40.8-5.8-78.1-16.1-107.8-30.1-21.3-10-34.9-20.1-42.9-28.2-6.6-6.7-9.3-12-9.3-14.6v-21.1c19.6 11.8 43 22.1 69.5 30.5 27.3 8.7 57.8 15.4 90.5 19.5 20.5 2.6 42 4.3 64 4.8 5.3 0.1 10.6 0.2 16 0.2 97.5 0 184.4-21.5 240-55v21.1z m0-108.6c0 5.7-13.2 24.5-52.2 42.8-48.4 22.7-116.8 35.7-187.8 35.7-5.3 0-10.7-0.1-16-0.2-21.9-0.6-43.4-2.4-64-5.4-33.2-4.8-64.2-12.5-90.5-22.7-6-2.3-11.8-4.8-17.3-7.4-25.3-11.8-39.7-23.9-46.7-32.5-3.8-4.7-5.5-8.3-5.5-10.4v-21.1c19.6 11.8 43 22.1 69.5 30.5 27.3 8.7 57.8 15.4 90.5 19.5 20.5 2.6 42 4.3 64 4.8 5.3 0.1 10.6 0.2 16 0.2 97.5 0 184.4-21.5 240-55v21.2z m0-108.6c0 5.8-13.2 24.5-52.2 42.8-48.4 22.7-116.8 35.7-187.8 35.7-5.3 0-10.7-0.1-16-0.2-21.9-0.6-43.4-2.4-64-5.4-33.2-4.8-64.2-12.5-90.5-22.7-6-2.3-11.8-4.8-17.3-7.4-2.2-1-4.2-2-6.2-3-34.3-17.3-46-34.4-46-39.8v-18.4c39.8 24 95.7 41.8 160 50 20.5 2.6 42 4.3 64 4.8 5.3 0.1 10.6 0.2 16 0.2 97.5 0 184.4-21.5 240-55v18.4z m-52.2-63C859.4 623.8 791 636.9 720 636.9c-5.3 0-10.7-0.1-16-0.2-21.9-0.6-43.4-2.4-64-5.4-33.2-4.8-64.2-12.5-90.5-22.7-6-2.3-11.8-4.8-17.3-7.4-25.3-11.8-39.7-23.9-46.7-32.5-3.8-4.7-5.5-8.3-5.5-10.3s1.6-5.7 5.5-10.3c7-8.6 21.5-20.6 46.7-32.5 5.5-2.6 11.3-5 17.3-7.3 26.4-10.2 57.3-17.9 90.5-22.7 20.6-3 42.1-4.8 64-5.4 5.3-0.2 10.7-0.2 16-0.2 71 0 139.4 13 187.8 35.7 39.1 18.3 52.2 37.1 52.2 42.8 0 5.6-13.1 24.4-52.2 42.7z"/>
    </svg>
  )
}

Vue.component('icon-backstage-data', Icon)
export default Icon

