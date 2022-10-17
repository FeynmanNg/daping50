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
      <!-- <div id="map"></div> -->
    </my-dv-page>
  </div>
</template>

<script>
import geoJson from '$ui/charts/geo/china.json';
import { GaodeMap } from '@antv/l7-maps';
import {
  Scene,
  PointLayer,
  Popup
} from '@antv/l7';

export default {
  data() {
    return {
      geoJson: geoJson,
      data: {
        type: 'bar3D',
        columns: ['省份', '答题人数'],
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
          distance: 2,
          textStyle: {
            fontSize: 16,
            borderWidth: 1
          },
          fontSize: 16,
          borderWidth: 1
        },
        silence: true,
        bevelSize: 1,
        itemStyle: {
          color: 'rgba(255, 255, 0, 0.5)'
          // type: 'linear-gradient',
          // colorStops: [
          //   {
          //     offset: 0,
          //     color: '#000'
          //   },
          //   {
          //     offset: 1,
          //     color: '#fff'
          //   }
          // ]
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255, 255, 0, 1)',
            fontSize: 20
          }
        },
        viewControl: { // 鼠标事件
          protection: 'perspective', // todo
          minDistance: 300, // todo
          distance: 300 // todo
        }
      }
    };
  },
  mounted() {
    console.log('地图geoJson');
    console.log(this.geoJson);
  },
  methods: {
    loadAntV() {
      const scene = new Scene({
        id: 'map',
        map: new GaodeMap({
          pitch: 70,
          style: 'dark',
          center: [105, 31.847],
          rotation: 0,
          zoom: 4.2
        })
      });
      scene.on('loaded', () => {
        const pointLayer = new PointLayer({ depth: false })
          .source(this.geoJson, {
            parser: {
              type: 'json',
              x: 'j',
              y: 'w'
            }
          })
          .shape('cylinder')
          .size('t', function(level) {
            return [1, 1, level * 2 + 20];
          })
          .animate(true)
          .active(true)
          .color('#006CFF')
          .style({
            opacity: 0.8,
            sourceColor: 'red',
            targetColor: 'yellow',
            lightEnable: false
          });
        pointLayer.on('mousemove', e => {
          const popup = new Popup({
            offsets: [0, 0],
            closeButton: false
          })
            .setLnglat(e.lngLat)
            .setHTML(`<span>${e.feature.s}: ${e.feature.t}℃</span>`);
          scene.addPopup(popup);
        });
        scene.addLayer(pointLayer);
      });
    }
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