<template>
  <div class="map-container">
    <div id="map" ref="myCharts"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import geoJson from '$ui/charts/geo/china.json';

export default {
  data() {
    return {
      rows: [
        ['广东', 200],
        ['北京', 160],
        ['广西', 178],
        ['湖南', 190],
        ['湖北', 110],
        ['福建', 187],
        ['新疆', 90],
        ['贵州', 125],
        ['江苏', 263],
        ['山西', 180],
        ['山东', 190],
        ['黑龙江', 145]
      ]
    }
  },
  mounted() {

  },
  methods: {
    initMap() {
      echarts.registerMap('china', geoJson);
      // 地图配置
      const option = {
        tooltip: {
          show: true,
          formatter: function({ seriesName, name, value }) {
            return `${seriesName}<br>${name}: ${value[2]}`;
          }
        },
        geo: [
          {
            map: 'china',
            aspectScale: 1,
            zoom: 1.3,
            layoutSize: '100%',
            layoutCenter: ['50%', '50%'],
            regions: [], // 选中
            itemStyle: {
              normal: {
                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 400,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(251, 232, 14, 1)' // 金色
                    },
                    {
                      offset: 1,
                      color: 'rgba(251, 232, 14, .5)' // 金色
                    }
                  ],
                  global: true
                },
                borderColor: '#4ecee6',
                borderWidth: 1
              },
              emphasis: { // 悬浮高亮
                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 300,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(251, 232, 14, 1)' // 金色
                    },
                    {
                      offset: 1,
                      color: 'rgba(251, 232, 14, .5)' // 金色
                    }
                  ],
                  global: true
                }
              }
            },
            emphasis: {
              itemStyle: {
                areaColor: '#fff'
              },
              label: {
                show: true,
                color: '#fff'
              }
            },
            zlevel: 3,
            data: this.row
          }
        ]
      };
      const myChart = echarts.init(this.$refs.myCharts);
      myChart.setOption(option);
    }
  }
}

</script>
<style scoped lang="scss">
.map-container {
  position: relative;
  width: 100%;
  height: 100%;

  max-width: 800px;
  max-height: 969px;

  .xx-map {
    width: 100%;
    height: 100%;
  }
}
</style>