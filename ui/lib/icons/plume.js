
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M935.999739 424.000369c0 154.299905-82.499949 289.399822-205.699873 363.599776-21.799987 13.099992-49.29997-3.299998-48.399971-28.599982 0.4-10.799993 6.199996-20.599987 15.399991-26.199984 25.099985-15.099991 48.29997-33.19998 69.299957-54.199966 33.09998-33.09998 58.999964-71.599956 77.199953-114.49993C862.499784 519.80031 871.999779 472.600339 871.999779 424.000369s-9.499994-95.799941-28.299983-140.099914c-18.099989-42.899974-44.099973-81.39995-77.199953-114.499929-33.09998-33.09998-71.599956-58.999964-114.499929-77.199953C607.799941 73.500585 560.59997 64.000591 512 64.000591s-95.799941 9.499994-140.099914 28.299982c-42.899974 18.099989-81.39995 44.099973-114.499929 77.199953-33.09998 33.09998-58.999964 71.599956-77.199953 114.499929-18.699988 44.199973-28.199983 91.399944-28.199983 139.999914s9.499994 95.799941 28.299983 140.099914c18.099989 42.899974 44.099973 81.39995 77.199953 114.49993 20.999987 20.999987 44.199973 39.099976 69.299957 54.199966 9.199994 5.499997 14.999991 15.399991 15.39999 26.199984 0.899999 25.499984-26.799984 41.699974-48.59997 28.499983C170.40021 713.300191 88.000261 578.300274 88.000261 424.000369 88.000261 189.600513 278.200144-0.39937 512.8 0.00063 746.899855 0.40063 935.999739 189.800513 935.999739 424.000369zM512 352.000413c44.099973 0 79.999951 35.899978 79.999951 79.999951s-35.899978 79.999951-79.999951 79.999951-79.999951-35.899978-79.999951-79.999951 35.899978-79.999951 79.999951-79.999951m0-63.99996c-79.499951 0-143.999911 64.49996-143.999911 143.999911s64.49996 143.999911 143.999911 143.999912 143.999911-64.49996 143.999911-143.999912-64.49996-143.999911-143.999911-143.999911zM790.999828 422.30037c0.5 88.399946-39.999975 167.399897-103.499936 219.099865-5.099997 4.199997-12.899992 2.099999-15.299991-4.099997-5.299997-13.399992-12.099993-25.999984-20.399987-37.599977-2.899998-4.099997-2.299999-9.699994 1.399999-12.999992 3.599998-3.199998 7.099996-6.499996 10.599994-9.899994 40.799975-40.799975 63.299961-94.999942 63.299961-152.699906s-22.499986-111.899931-63.299961-152.699906c-40.799975-40.799975-94.999942-63.299961-152.699906-63.299961s-111.899931 22.499986-152.699907 63.299961c-40.799975 40.799975-63.299961 94.999942-63.299961 152.699906s22.499986 111.899931 63.299961 152.699906c3.599998 3.599998 7.299996 7.099996 11.199994 10.399994 4.099997 3.599998 4.899997 9.699994 1.699999 14.099991-7.799995 11.199993-14.299991 23.199986-19.299989 35.999978l-0.1 0.1c-2.599998 6.799996-11.099993 8.899995-16.699989 4.399997C271.600148 590.500267 231.000173 512.000315 231.000173 424.000369c0-155.799904 127.299922-281.899827 283.499825-279.999828 152.999906 1.899999 275.59983 125.299923 276.49983 278.299829zM512 656.000226c12.099993 0 23.299986 4.799997 31.69998 13.499992 6.199996 6.499996 10.199994 14.499991 11.699993 23.199986 0.5 2.799998 0.6 5.799996 0.5 8.699994l-2.399999 64.399961L550.999976 833.000118l-4.699997 126.999921h-68.599958L473.000024 833.000118l-2.499998-66.999959-2.399999-64.399961c-0.1-2.799998 0.1-5.699996 0.5-8.399994 1.299999-8.699995 5.299997-16.79999 11.499993-23.299986 8.399995-8.999994 19.699988-13.899991 31.89998-13.899992m0-63.99996c-30.899981 0-58.799964 12.999992-78.399952 33.799979-14.699991 15.59999-24.899985 35.499978-28.299982 57.599965-0.999999 6.699996-1.399999 13.499992-1.2 20.499987l2.399999 64.39996 2.499998 67.099959 6.999996 188.599884h191.999882l6.999996-188.599884 2.499998-67.099959 2.399999-64.39996c0.3-7.299996-0.2-14.399991-1.3-21.299987-3.499998-22.099986-13.799992-41.899974-28.699982-57.399965-19.599988-20.399987-47.199971-33.19998-77.899952-33.199979z"/>
    </svg>
  )
}

Vue.component('icon-plume', Icon)
export default Icon

