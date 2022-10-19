<!-- my 大屏 -->
<template>
  <div class="map-container">
    <my-dv-loading v-if="data.data.length === 0"></my-dv-loading>
    <my-dv-page target="parent" fit v-if="data.data.length">
    <!-- <my-dv-page target="parent" fit> -->
      <my-dv-geo-gl
        fit
        :json="geoJson"
        :columns="data.columns"
        :rows="data.rows"
        :data="data.data"
        :type="data.type"
        :extend="extend"
        :typeHelper="typeHelper"
      >
      </my-dv-geo-gl>
      <!-- <my-dv-geo fit :json="geoJson"
                 :columns="data.columns"
                 :rows="data.rows"
                 :type="data.type"
                 :extend="extend"
                 :typeHelper="typeHelper"></my-dv-geo> -->
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
      if (val && val.length) {
        console.log('地图接受数据 start', val);
        val.forEach(v => {
          this.data.rows.forEach(r => {
            if (r[0].indexOf(v.province) >= 0 || v.province.indexOf(r[0]) >= 0) {
              r[1] = v.totalScore;
            }
            this.data.data.push(r);
          });
        });
        this.loader();
        console.log('地图接受数据 end rows =', this.data.rows);
      }
      
    }
  },
  data() {
    return {
      geoJson: geoJson,
      data: {
        data: [],
        type: 'bar3D',
        // type: { 答题人数: 'scatter' },
        // type: { 答题人数: 'effectScatter' },
        columns: ['省份', '答题人数'],
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
        },
        label: {
          show: true,
          // distance: 1,
          textStyle: {
            fontSize: 16
            // borderWidth: 1
          },
          fontSize: 16
          // borderWidth: 1
        },
        // silence: true,
        // // bevelSize: 1,
        itemStyle: {
          color: 'rgba(255, 255, 0, 0.5)',
          type: 'linear-gradient',
          colorStops: [
            {
              offset: 0,
              color: '#000'
            },
            {
              offset: 1,
              color: '#fff'
            }
          ]
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255, 255, 0, 1)',
            fontSize: 20
          }
        }
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
  },
  methods: {
    loader() {
      return Promise.resolve({
        data: this.data.data,
        columns: this.data.columns,
        rows: this.data.rows
      })
    },
    typeHelper({type}) {
      return {
        label: {
          show: true,
          // formatter: '{b}：{c}人',
          formatter: ({ data }) => {
            console.log(111111, data);
            return `${data.name}\n${data.value[2] || 0}`;
          },
          position: 'top'
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.map-container {

}
</style>