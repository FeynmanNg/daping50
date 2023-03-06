
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M896.062469 0h-767.625183C57.771791 0 0.499756 57.272035 0.499756 127.937531v767.625183c0 70.665495 57.272035 127.937531 127.93753 127.93753h767.625183c70.665495 0 127.937531-57.272035 127.937531-127.93753v-767.625183c0-70.665495-57.272035-127.937531-127.937531-127.937531zM873.57345 210.996974L533.939287 686.564763c-43.278868 60.570425-128.837091 71.565056-186.009175 23.988287L139.431918 536.837872c-13.593363-11.294485-15.392484-31.484627-4.097999-45.077989 11.294485-13.593363 31.484627-15.392484 45.077989-4.097999L388.810151 661.377062c28.586042 23.788385 71.365154 18.291069 92.954612-11.994144l339.834066-475.567789c10.294973-14.392972 30.285212-17.691362 44.578233-7.396388 14.392972 10.195022 17.691362 30.185261 7.396388 44.578233z"/>
    </svg>
  )
}

Vue.component('icon-checkbox-ok-fill', Icon)
export default Icon

