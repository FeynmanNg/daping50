<template>
  <DvChart class="my-dv-ring" :options="optionsFunc" v-bind="{...$props,...$attrs}"></DvChart>
</template>
<script>
  /**
   * 圆环图
   * @module $ui/dv/my-dv-ring
   */
  import 'echarts/lib/chart/pie'
  import DvChart from '../my-dv-chart'
  import Chart from '../../mixins/Chart'

  export default {
    name: 'MyDvRing',
    mixins: [Chart],
    components: {
      DvChart
    },
    /**
     * 属性参数
     * @member props
     * @property {Array} [columns] 数据列
     * @property {Array} [rows] 数据行
     * @property {Function} [loader] 数据加载函数，必须返回Promise
     * @property {Object} [settings] 图表的私有设置
     * @property {Object|Function} [extend] 扩展图表参数选项
     * @property {boolean} [debug] 开启打印调试信息
     * @property {boolean} [legend] 显示图例, 可选值：'v', 'h', false
     * @property {boolean} [label] 显示标签
     * @property {number} [radius=45] 半径，取值 0 ~ 100
     * @property {string} [title] 标题文本，在圆中心
     */
    props: {
      label: Boolean,
      legend: {
        type: [String, Boolean],
        default: false,
        validator(val) {
          return ['v', 'h', false].includes(val)
        }
      },
      radius: {
        type: Number,
        default: 45
      },
      title: String
    },
    computed: {
      seriesData() {
        const {rows = []} = this.chartData
        return rows.map(([name, value]) => ({
          name,
          value
        }))
      }
    },
    methods: {
      optionsFunc() {
        const isV = this.legend === 'v'
        const fontSize = 20
        const center = ['50%', '50%']
        const radius = this.radius
        return {
          title: {
            text: this.title,
            x: 'center',
            y: 'center',
            textStyle: {
              fontSize,
              lineHeight: fontSize * 1.2
            }
          },
          legend: {
            show: !!this.legend,
            top: isV ? 'center' : 20,
            left: isV ? undefined : 'center',
            right: isV ? 20 : undefined,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'rect',
            align: 'auto',
            orient: isV ? 'vertical' : 'horizontal'
          },
          tooltip: {
            trigger: 'item',
            borderColor: 'rgba(255,255,255,.2)',
            backgroundColor: 'rgba(13,5,30,.85)',
            borderWidth: 1,
            padding: 5,
            formatter: function (params) {
              const str = params.marker + '' + params.data.name + '</br>' +
                '数量：' + params.data.value + '</br>' +
                '占比：' + params.percent + '%';
              return str;
            }
          },
          series: [
            {
              type: 'pie',
              data: this.seriesData,
              z: 3,
              center: center,
              radius: [`${radius - 15}%`, `${radius}%`],
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              label: {
                show: this.label,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                  hr: {
                    backgroundColor: 't',
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                  },
                  a: {
                    padding: [-30, 15, -20, 15]
                  }
                }
              },
              labelLine: {
                normal: {
                  length: 20,
                  length2: 15,
                  lineStyle: {
                    width: 1
                  }
                }
              }
            },
            {
              name: '第一层环',
              type: 'pie',
              z: 2,
              tooltip: {
                show: false
              },
              center: center,
              radius: [`${radius}%`, `${radius + 15}%`],
              hoverAnimation: false,
              clockWise: false,
              itemStyle: {
                normal: {
                  shadowBlur: 1,
                  shadowColor: 'rgba(255,255,255,.2)',
                  color: 'rgba(1,15,80,.3)'
                },
                emphasis: {
                  color: 'rgba(1,15,80,.3)'
                }
              },
              label: {
                show: false
              },
              data: [100]
            },
            {
              name: '第二层环',
              type: 'pie',
              z: 1,
              tooltip: {
                show: false
              },
              center: center,
              radius: [`${radius + 15}%`, `${radius + 30}%`],
              hoverAnimation: false,
              clockWise: false,
              itemStyle: {
                normal: {
                  shadowBlur: 1,
                  shadowColor: 'rgba(255,255,255,.1)',
                  color: 'rgba(0,15,69,.2)'
                },
                emphasis: {
                  color: 'rgba(0,15,69,.2)'
                }
              },
              label: {
                show: false
              },
              data: [100]
            }
          ]
        }
      }
    }
  }
</script>