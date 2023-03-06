
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M772.8 80.1H251.2C148.8 80.1 65 163.9 65 266.4v372.5c0 102.4 83.8 186.2 186.2 186.2h167.3L512 943.9l93.5-118.7h167.3C875.2 825.2 959 741.4 959 639V266.4c0-102.5-83.8-186.3-186.2-186.3zM540.1 678.5h-71.6V609h71.6v69.5z m41.2-217c-33.3 21.7-49.2 47.7-47.7 78.1V557H475v-21.7c-1.5-41.9 17.4-75.9 56.4-102 40.5-28.9 60-57.8 58.6-86.8-4.3-40.5-27.5-62.2-69.4-65.1-50.6 0-82.5 28.9-95.5 86.8L362.2 353c17.4-88.2 73-130.2 167.1-125.9 79.5 4.3 123.7 42 132.4 112.8 2.8 46.4-23.9 86.8-80.4 121.6z"/>
    </svg>
  )
}

Vue.component('icon-help', Icon)
export default Icon

