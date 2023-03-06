
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M904.479163 416.014006c-41.499044-0.199995-78.198199 20.799521-99.797701 52.698786-4.499896 6.699846-13.299694 9.09979-20.499527 5.399876L398.590818 280.017139c-6.999839-3.499919-10.39976-11.69973-7.999816-19.199557 6.099859-19.199558 9.399783-39.599088 9.399783-60.7986C399.990785 88.721546 308.092902-1.676371 196.795466 0.023589 87.797977 1.72355 0 90.621502 0 200.018982c0 92.597867 62.898551 170.396075 148.196586 193.195549 6.999839 1.899956 11.799728 8.199811 11.799728 15.399646v253.994148c0 7.199834-4.799889 13.399691-11.599733 15.399646C81.198129 697.007533 31.999263 758.806109 31.999263 832.004423c0 88.597959 71.998341 160.296307 160.5963 159.996314 88.09797-0.299993 159.396328-71.798346 159.396328-159.996314v-1.399968c-0.099998-6.099859 3.399922-11.69973 8.799797-14.399668l425.990187-214.495059c6.999839-3.499919 15.499643-1.499965 20.099537 4.79989 21.799498 29.999309 57.198682 49.598857 97.197761 49.598857 66.898459 0 120.997213-54.69874 119.997235-121.797194-1.099975-65.198498-54.498745-118.097279-119.597245-118.297275zM103.797609 296.216766C78.198199 270.517358 63.998526 236.318146 63.998526 200.018982c0-36.299164 14.199673-70.498376 39.799083-96.197784C129.497017 78.12179 163.696229 64.022115 199.995393 64.022115s70.498376 14.099675 96.197784 39.799083c25.699408 25.699408 39.799083 59.798622 39.799083 96.197784 0 15.499643-2.59994 30.499297-7.499828 44.69897-6.599848 19.199558-17.599595 36.699155-32.399253 51.498814-0.899979 0.899979-1.799959 1.699961-2.59994 2.59994-19.499551 18.399576-43.498998 30.499297-69.498399 35.099192-7.79982 1.399968-15.899634 2.099952-23.999447 2.099951-13.799682 0-27.199373-1.999954-39.999079-5.999862-20.999516-6.399853-40.199074-17.899588-56.198705-33.799221z m181.595816 557.887148c-9.99977 42.299026-48.098892 73.898298-93.397848 73.898298-52.898781 0-95.997788-43.099007-95.997789-95.997789 0-41.699039 26.799383-77.298219 63.998526-90.497915 9.99977-3.599917 20.799521-5.499873 31.999263-5.499873s21.999493 1.899956 31.999263 5.499873c22.699477 7.999816 41.499044 24.399438 52.698786 45.398954 7.199834 13.499689 11.29974 28.799337 11.299739 45.098961 0 7.599825-0.899979 14.999654-2.59994 22.099491z m41.299049-108.597498c-20.799521-32.399254-52.998779-56.698694-90.897906-67.498445-6.899841-1.999954-11.799728-8.199811-11.799728-15.399646V412.314091c0-7.699823 5.499873-14.299671 12.9997-15.699638 42.299026-7.899818 79.898159-29.09933 108.297505-59.098638 4.799889-5.099883 12.499712-6.399853 18.69957-3.199927l377.291308 189.995623c11.69973 5.899864 11.69973 22.699477 0 28.599342l-393.990924 198.395429c-7.299832 3.699915-16.199627 1.199972-20.599525-5.799866zM903.979175 592.009952c-19.699546 0-37.099145-10.299763-47.098915-25.699408-5.599871-8.6998-8.899795-19.09956-8.899795-30.299302 0-9.499781 2.399945-18.499574 6.599848-26.399392C863.980096 492.012255 882.579668 480.012532 903.979175 480.012532c30.899288 0 55.99871 25.099422 55.99871 55.99871s-25.099422 55.99871-55.99871 55.99871z"/>
    </svg>
  )
}

Vue.component('icon-collaboration', Icon)
export default Icon

