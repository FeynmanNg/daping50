
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1023.4 475.5c0-0.1-0.1-0.2-0.1-0.3-14-43.7-34.6-77.5-87.2-70.5-6.4 0.8-18.1-13.4-21.6-23-18-49.4-37.3-98.7-50.1-149.7C843 146.5 784 112 708.6 96.8c-28.4-5.7-57.1-9.4-85.7-14-39.1-5.8-74.9-8.6-109.8-8.7h-0.4c-34.9 0.1-70.7 2.9-109.8 8.7-28.5 4.6-57.3 8.3-85.7 14C242 112 183 146.5 161.5 232.2c-12.8 51-32.1 100.3-50.1 149.7-3.5 9.6-15.2 23.8-21.5 23-52.6-7-73.1 26.7-87.2 70.5 0 0.1 0 0.2-0.1 0.3-3.4 14 5.1 28.2 19 32 6.7 1.9 13.2 3.7 19.2 5.3 9.7 2.7 16.3 11.6 16.2 21.6-0.9 74.1-2 147.9-2.7 221.6-0.4 42.8-2 85.6 0.8 128.2 1.4 19.7 8.3 50.3 18.5 57.9 7.5 10.5 142.7 10.2 167.9 0 9.6-3.9 15.2-48 22.4-84.1 2.3-11.7 12.6-20.1 24.5-20.1h449c11.9 0 22.2 8.4 24.5 20.1 7.2 36.1 12.7 80.2 22.4 84.1 25.2 10.2 160.4 10.5 167.9 0 10.2-7.6 17.2-38.2 18.5-57.9 2.8-42.6 1.2-85.5 0.8-128.2-0.7-73.7-1.7-147.4-2.7-221.6-0.1-10 6.5-18.9 16.2-21.6 6-1.7 12.5-3.5 19.2-5.3 14.1-4 22.7-18.2 19.2-32.2z m-715.6 174c-4 11.3-19.9 22-32.5 25.1-17.3 4.2-108.3 1.2-134.4-4.5-33.9-7.4-43.4-33.9-33.2-81.3 7-32.5 31.2-33.9 52.9-26.4 43.7 15.3 71.3 25 112.6 45.7 32 15.9 37.4 33.3 34.6 41.4z m205-190.8c-110.9-0.2-222.2-12.8-336-37.5 25-73.6 46.6-141.6 71.9-208 4.8-12.7 23.4-24 37.6-27.6 34.3-8.6 69.8-17.3 104.8-17 40.6 0.3 81.1 1.1 121.7 2.2h0.4c40.6-1.1 81.1-1.9 121.7-2.2 35-0.3 70.5 8.4 104.8 17 14.1 3.6 32.8 14.9 37.6 27.6 25.3 66.4 46.9 134.4 71.9 208-113.7 24.7-225.1 37.3-336 37.5h-0.4z m372.4 211.4c-26 5.7-117.1 8.7-134.4 4.5-12.6-3.1-28.5-13.8-32.5-25.1-2.8-8 2.6-25.5 34.6-41.5 41.4-20.7 69-30.4 112.6-45.7 21.7-7.5 45.9-6.1 52.9 26.4 10.2 47.5 0.6 74-33.2 81.4z"/>
    </svg>
  )
}

Vue.component('icon-car-fill', Icon)
export default Icon

