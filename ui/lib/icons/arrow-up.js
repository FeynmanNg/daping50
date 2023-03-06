
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M771.736588 232.69319l-213.947767-213.947767c-24.993898-24.993898-65.484013-24.993898-90.477911 0l-214.947522 214.947523c-1.599609 1.599609-1.599609 4.098999 0 5.698609l39.590334 39.590334c1.599609 1.599609 4.098999 1.599609 5.698609 0l175.657115-175.657115c2.49939-2.49939 6.79834-0.699829 6.79834 2.799317V1020.000976c0 2.199463 1.799561 3.999024 3.999024 3.999024h55.986331c2.199463 0 3.999024-1.799561 3.999024-3.999024V105.124335c0-3.599121 4.29895-5.298706 6.79834-2.799317l175.657115 175.657115c1.599609 1.599609 4.098999 1.599609 5.698609 0l39.590334-39.590334c1.499634-1.599609 1.499634-4.098999-0.099975-5.698609z"/>
    </svg>
  )
}

Vue.component('icon-arrow-up', Icon)
export default Icon

