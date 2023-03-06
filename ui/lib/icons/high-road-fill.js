
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M707.8 32H557l17.4 190.5c0.8 9.4-6.5 17.5-15.9 17.5h-93.9c-9.4 0-16.8-8.1-15.9-17.5L467 32H287L0 992h374.6l18.8-195.1c1.6-16.4 15.4-28.9 31.9-28.9H595c16.5 0 30.4 12.6 31.9 29.1L644.6 992H1024L707.8 32zM413.2 590.5L428.8 429c1.6-16.4 15.4-28.9 31.9-28.9h100.7c16.5 0 30.4 12.6 31.9 29.1L608 590.5c0.8 9.4-6.5 17.5-15.9 17.5H429.2c-9.5 0-16.9-8.1-16-17.5z"/>
    </svg>
  )
}

Vue.component('icon-high-road-fill', Icon)
export default Icon

