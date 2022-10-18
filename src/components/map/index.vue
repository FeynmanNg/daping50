<!-- my 大屏 -->
<template>
  <div class="map-container">
    <my-dv-page target="parent" fit>
      <my-dv-geo-gl
        fit
        :json="geoJson"
        :columns="data.columns"
        :rows="data.rows"
        :type="data.type"
        :extend="extend"
        debug
      >
      </my-dv-geo-gl>
    </my-dv-page>
  </div>
</template>

<script>
import geoJson from '$ui/charts/geo/china.json';

export default {
  props: {
    rank1Data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    rank1Data(val) {
      val.forEach(v => {
        this.data.rows.forEach(r => {
          if (r[0].indexOf(v) >= 0 || v.indexOf(r[0]) >= 0) {
            r[1] = v.totalScore;
          }
        })
      })
    }
  },
  data() {
    return {
      geoJson: geoJson,
      data: {
        type: 'bar3D',
        columns: ['份', '答题人数'],
        // 中国共计34个级行政区，包括23个、5个自治区、4个直辖市、2个特别行政区。
        rows: [
          ['河北', 0],
          ['山西', 0],
          ['辽宁', 0],
          ['吉林', 0],
          ['黑龙江', 0],
          ['江苏', 0],
          ['浙江', 0],
          ['安徽', 0],
          ['福建', 0],
          ['江西', 0],
          ['山东', 0],
          ['河南', 0],
          ['湖北', 0],
          ['湖南', 0],
          ['广东', 0],
          ['海南', 0],
          ['四川', 0],
          ['贵州', 0],
          ['云南', 0],
          ['陕西', 0],
          ['甘肃', 0],
          ['青海', 0],
          ['台湾', 0],

          ['内蒙古', 0],
          ['广西', 0],
          ['西藏', 0],
          ['宁夏', 0],
          ['新疆', 0],

          ['北京', 0],
          ['天津', 0],
          ['上海', 0],
          ['重庆', 0],

          ['香港', 0],
          ['澳门', 0]
        ]
      },
      extend: {
        tooltip: {
          show: true,
          formatter: function({ seriesName, name, value }) {
            return `${seriesName}<br>${name}: ${value[2]}`;
          }
        }
        // label: {
        //   show: true,
        //   // distance: 1,
        //   textStyle: {
        //     fontSize: 16,
        //     borderWidth: 1
        //   },
        //   fontSize: 16,
        //   borderWidth: 1
        // },
        // silence: true,
        // // bevelSize: 1,
        // itemStyle: {
        //   color: 'rgba(255, 255, 0, 0.5)'
        //   // type: 'linear-gradient',
        //   // colorStops: [
        //   //   {
        //   //     offset: 0,
        //   //     color: '#000'
        //   //   },
        //   //   {
        //   //     offset: 1,
        //   //     color: '#fff'
        //   //   }
        //   // ]
        // },
        // emphasis: {
        //   itemStyle: {
        //     color: 'rgba(255, 255, 0, 1)',
        //     fontSize: 20
        //   }
        // }
        // viewControl: { // 鼠标事件
        //   protection: 'perspective', // todo
        //   minDistance: 300, // todo
        //   distance: 300 // todo
        // }
      }
    };
  },
  mounted() {
    console.log('地图geoJson');
    console.log(this.geoJson);
    console.log(this.data.rows.length);
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.map-container {

  #map {
    width: 100%;
    height: calc(1080px - 90px);
    position: relative;
    background: #006CFF;
    justify-content: center;
  }
}
</style>