
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M783.007371 244.466442L557.284522 18.743593c-24.991458-24.991458-65.47762-24.991458-90.469078 0L240.992629 244.466442c-1.599453 1.599453-1.599453 4.098599 0 5.698053l62.178748 62.178747c1.599453 1.599453 4.098599 1.599453 5.698052 0l148.349295-148.349295c2.499146-2.499146 6.797677-0.699761 6.797677 2.799044V1020.001367c0 2.199248 1.799385 3.998633 3.998633 3.998633h87.969932c2.199248 0 3.998633-1.799385 3.998633-3.998633V166.792991c0-3.59877 4.298531-5.298189 6.797677-2.799044l148.349295 148.349295c1.599453 1.599453 4.098599 1.599453 5.698052 0l62.178748-62.178747c1.599453-1.599453 1.599453-4.098599 0-5.698053z"/>
    </svg>
  )
}

Vue.component('icon-arrow-up-fill', Icon)
export default Icon

