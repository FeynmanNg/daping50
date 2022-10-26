<template>
  <my-dv-page v-bind="$attrs">
    <div class="bg-container" style="background-size: 100% 100%">
      <my-dv-starry :opacity="0.4"></my-dv-starry>
      <my-dv-box layout
                  direction="column" :gap="10"
                  top="90px"
                  width="calc(100% - 20px)"
                  height="calc(100% - 100px)"
                  x-align="center">
        <my-dv-box layout :gap="10" :weight="2" height="100%"></my-dv-box>
        <my-dv-box layout :weight="3" height="100%">
          <div class="map-info-container">
            <map-comp
              v-if="form"
              :form="form"
              :rank1Data="rank1Data"
              :realTimeDynamicData="realTimeDynamicData"></map-comp>
          </div>
        </my-dv-box>
        <my-dv-box layout :gap="10" :weight="2" height="100%"></my-dv-box>
      </my-dv-box>
    </div>
  </my-dv-page>
</template>
<script> 
import {
  realTimeDynamic,
  competitionProvinceRank
} from '../mock';
import storage from '@/helper/storage';
import mapComp from '@/components/map/index-new-1';

const form = storage.getForm();

export default {
  components: { mapComp },
  data() {
    return {
      form,
      rank1Data: [],
      realTimeDynamicData: []

    }
  },
  methods: {
  },
  mounted() {
    const interval = 1000 * 5;
    realTimeDynamic().then(res => {
      // console.log('实时动态数据', res);
      this.realTimeDynamicData = res;
    })
    setInterval(() => {
      realTimeDynamic().then(res => {
        // console.log('实时动态数据', res);
        this.realTimeDynamicData.push(...res);
      }).catch(e => {
        console.log(e);
      });
    }, interval);

    competitionProvinceRank({}).then(res => {
      // console.log('rank1', res);
      this.rank1Data = res;
    });
    setInterval(() => {
      competitionProvinceRank({}).then(res => {
        // console.log('总分榜', res);
        this.rank1Data = res; // todo
      }).catch(e => {
        console.log(e);
      });
    }, interval);
  }
}
</script>
<style lang="scss" scoped>
// bg
.bg-container {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img-team/BG.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  position: absolute;
  bottom: 0;
}
.map-info-container {
    height: 100%;
    position: relative;
  }
</style>