
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M707.8 32H557l17.4 190.5c0.9 9.4-6.5 17.5-15.9 17.5h-93.9c-9.4 0-16.8-8.1-15.9-17.5L467 32H287L0 992h374.6l18.8-195.1c1.6-16.4 15.4-28.9 31.9-28.9H595c16.5 0 30.4 12.6 31.9 29.1L644.6 992H1024L707.8 32z m-267 272h141l2.9 32h-147l3.1-32z m19.8 96h100.7c16.5 0 30.4 12.6 31.9 29.1l14.7 161.5c0.9 9.4-6.5 17.5-15.9 17.5H429.2c-9.4 0-16.8-8.1-15.9-17.5l15.6-161.5c1.5-16.6 15.3-29.1 31.7-29.1zM85.9 928L334.7 96h61.9l-80.1 832H85.9z m316.4-224l3.1-32h210l2.9 32h-216zM627.1 96h34.4l274 832H703L627.1 96z"/>
    </svg>
  )
}

Vue.component('icon-high-road', Icon)
export default Icon

