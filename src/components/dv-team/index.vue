<template>
  <my-dv-page v-bind="$attrs">
    <my-dv-starry :opacity="0.4"></my-dv-starry>

    <my-dv-header5>
      <span class="competitors-total">参赛总人数：128人</span>
      <my-dv-title type="primary" strong shadow x-align="center">{{title}}</my-dv-title>
      <span class="date">
        <!-- <span>{{dateStr}}&nbsp;{{dayStr}}&nbsp;</span> -->
        <!-- <span>{{dateStr}}&nbsp;</span> -->
        <span>{{formatDateStr}}&nbsp;</span>
        <!-- <span v-if="timeStr[2]">&nbsp;{{`${timeStr[0][0]}${timeStr[0][1]}:${timeStr[1][0]}${timeStr[1][1]}:${timeStr[2][0]}${timeStr[2][1]}`}}</span> -->
        <span v-if="timeStr[2]">&nbsp;{{`${timeStr[0][0]}${timeStr[0][1]}:${timeStr[1][0]}${timeStr[1][1]}`}}</span>
        <span>&nbsp;{{`农历${lunar.monthCn}${lunar.dayCn}`}}</span>
      </span>
    </my-dv-header5>

    <my-dv-box layout direction="column" :gap="10" top="90px" width="calc(100% - 20px)"
               height="calc(100% - 100px)"
               x-align="center">
      <!-- 左侧 总分榜 -->
      <my-dv-box layout :gap="10" :weight="2" height="100%">
        <my-dv-border12 width="100%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
                <span class="total-score">总分榜</span>
            </my-dv-adorn7>
          </div>
          <div class="list-container">
            <div class="header">
              <span>排行</span>
              <span>队伍</span>
              <!-- <span>窝点勘查</span> -->
              <span>{{subject1}}</span>
              <!-- <span>检查坚定</span> -->
              <span>{{subject2}}</span>
              <span>分数</span>
            </div>
            <div class="content">
              <div class="top5-bg"></div>
              <div class="content-item">
                <span>1</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>2</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>3</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>4</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>5</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>6</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
              <div class="content-item">
                <span>15</span>
                <span>北京市</span>
                <span>90</span>
                <span>80</span>
                <span>90</span>
              </div>
            </div>
          </div>
          <my-dv-loading v-if="true"></my-dv-loading>
        </my-dv-border12>

      </my-dv-box>

      <!-- 中 倒计时、地图 -->
      <my-dv-border12 height="100%" :weight="3" fill="rgba(255,255,255,0.05)">
        <my-dv-loading v-if="loading"></my-dv-loading>
        <!-- <my-dv-geo v-else
                   fit
                   ref="geo"
                   :extend="map.extend"
                   :visual="null"
                   :json="map.json"
                   :coords="map.coords"
                   :loader="mapLoader"
                   :type="map.type"
                   :typeHelper="mapTypeHelper"
                   :dataHelper="mapDataHelper"></my-dv-geo> -->
        <div class="map-wrap">
          <map-comp></map-comp>
        </div>
        <!-- 倒计时 -->
        <div
          style="position: absolute; top: 10px; width: 100%;display: flex;justify-content: center;flex-direction: column;">
          <div class="countdown-container">
            <!-- <p class="countdown">倒计时：00:00:00</p> -->
            <div class="countdown" @click="onShowInit">
              <div class="part">倒计时：</div>
              <div class="part part2">
                <my-dv-title class="my-dv-timer">
                  <my-timer
                    :target="countdown"
                    :auto="pause"
                    ref="timer"
                    countdown></my-timer>
                </my-dv-title>
              </div>
            </div>
          </div>
          <!-- 省排名上升至 -->
          <div class="rank-container">
              <div class="rank">
                <p>【窝点勘察】张三丰【四川省】已连续答对 3 题</p>
                <p class="time">13:44:10</p>
              </div>
            </div>
        </div>
      </my-dv-border12>

      <!-- 右侧 答题进度、实时动态 -->
      <my-dv-box layout :gap="10" :weight="2" height="100%">
        <my-dv-border12 width="100%" height="70%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
              <span class="total-score">答题进度</span>
            </my-dv-adorn7>
          </div>
          <div class="process-container">
            <div class="process">
              <span class="NO">NO.1</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.2</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.3</span>
              <span>福建省福建省福建省福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <div class="process">
              <span class="NO">NO.4</span>
              <span>福建省</span>
              <span class="line-wrap">
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">80%</span>
                </span>
                <span class="line">
                  <span class="rate"></span>
                  <span class="num">90%</span>
                </span>
              </span>
            </div>
            <!-- 科目说明 -->
            <div class="process-desc">
              <span class="desc">
                <span class="dot"></span>
                <span class="text">检查鉴定</span>
              </span>
              <span class="desc">
                <span class="dot"></span>
                <span class="text">窝点勘查</span>
              </span>
            </div>
          </div>
        </my-dv-border12>
        <my-dv-border12 width="100%" height="30%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
              <span class="total-score">实时动态</span>
            </my-dv-adorn7>
          </div>
          <div class="rt-container">
            <!-- <transition-group name="list-complete">
              <div v-for="item in items" v-bind:key="item" class="rt list-complete-item">
                <div class="rt-time">23:44:30</div>
                <div class="rt-content">福建省排名上升至 第1名</div>
              </div>
            </transition-group> -->
            <div class="rt list-complete-item">
                <div class="rt-time">23:44:30</div>
                <div class="rt-content">福建省排名上升至 第1名</div>
              </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">【窝点勘察】张三丰【四川省】已连续答对 3 题，排名第10！</div>
            </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">福建省排名上升至 第1名</div>
            </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">【窝点勘察】张三丰【四川省】已连续答对 3 题，排名第10！</div>
            </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">福建省排名上升至 第1名</div>
            </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">【窝点勘察】张三丰【四川省】已连续答对 3 题，排名第10！</div>
            </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">福建省排名上升至 第1名</div>
            </div>
            <div class="rt">
              <div class="rt-time">23:44:30</div>
              <div class="rt-content">【窝点勘察】张三丰【四川省】已连续答对 3 题，排名第10！</div>
            </div>
          </div>
        </my-dv-border12>
      </my-dv-box>
    </my-dv-box>
    <!-- 表单 -->
    <init-dialog
      ref="initDialog"
      :pause="pause"
      @on-pause="onPause"></init-dialog>
  </my-dv-page>
</template>
<script>
  import dateFormat from '$ui/utils/date'
  import {LinearGradient} from 'echarts/lib/util/graphic'
  import china from '$ui/charts/geo/china.json'
  import coordinates from '$ui/dv/utils/coordinates'
  import solarLunar from 'solarlunar'

  import initDialog from '../init-dialog';
  import mapComp from '../map';
  // import mapComp from '../map/my-map';
  // import mapComp from '../map/map';

  import storage from '@/helper/storage';
  import {
    answerProfile,
    totalContestantsNumber,
    provinceAnswerProgress,
    realTimeDynamic
  } from '$my/code/api/dv';

  const linesArray = [['黑龙江', '珠海'], ['黑龙江', '舒兰'], ['黑龙江', '大连'], ['辽宁', '集安'], ['吉林', '抚顺'], ['山东', '南京'], ['北京', '沈阳'], ['黑龙江', '环翠'], ['天津', '大连'], ['吉林', '兴和'], ['河北', '勃利'], ['吉林', '大连'], ['吉林', '沈阳'], ['黑龙江', '闵行'], ['天津', '朝阳'], ['吉林', '黄岛'], ['内蒙古', '上海'], ['内蒙古', '南京'], ['辽宁', '杭州'], ['黑龙江', '海城'], ['吉林', '西城'], ['四川', '上海'], ['黑龙江', '西城'], ['吉林', '丹东'], ['吉林', '宁波'], ['辽宁', '海淀'], ['辽宁', '青岛'], ['吉林', '苏州'], ['黑龙江', '抚顺'], ['吉林', '临安'], ['辽宁', '烟台'], ['黑龙江', '海淀'], ['黑龙江', '南昌'], ['内蒙古', '沈阳'], ['山西', '城阳'], ['吉林', '广州'], ['上海', '沈阳'], ['四川', '阳泉'], ['河北', '桦川'], ['内蒙古', '海淀'], ['安徽', '河北'], ['辽宁', '呼和浩特'], ['广西', '茂名'], ['吉林', '东城'], ['内蒙古', '盘锦'], ['山东', '哈尔滨'], ['黑龙江', '沈阳'], ['黑龙江', '丰台'], ['四川', '盘锦'], ['黑龙江', '皇姑'], ['河北', '虎林'], ['辽宁', '宝山'], ['黑龙江', '吉林'], ['黑龙江', '青岛'], ['吉林', '烟台'], ['山东', '临江'], ['黑龙江', '黄岛'], ['吉林', '石家庄'], ['吉林', '汤原'], ['黑龙江', '临江'], ['吉林', '济南'], ['吉林', '太原'], ['吉林', '威海'], ['湖北', '深圳'], ['内蒙古', '荣成'], ['辽宁', '郑州'], ['黑龙江', '朝阳'], ['吉林', '昆山'], ['吉林', '双城'], ['黑龙江', '克拉玛依'], ['辽宁', '上海'], ['吉林', '海阳'], ['吉林', '宣武门外东大街'], ['山东', '海淀'], ['内蒙古', '威海'], ['黑龙江', '晋中'], ['西藏', '广州'], ['辽宁', '无锡'], ['黑龙江', '城阳'], ['河北', '丰台'], ['黑龙江', '扬州'], ['辽宁', '天津'], ['吉林', '扬州'], ['吉林', '嘉兴'], ['河北', '延寿'], ['吉林', '义乌'], ['吉林', '张家港'], ['辽宁', '贵阳'], ['吉林', '辽宁'], ['河南', '营口'], ['吉林', '合肥'], ['黑龙江', '苏州'], ['黑龙江', '榆树'], ['吉林', '常熟'], ['吉林', '乳山'], ['四川', '青岛'], ['黑龙江', '深圳'], ['天津', '东城'], ['黑龙江', '上海'], ['天津', '宁波'], ['吉林', '海门'], ['山西', '沈阳'], ['吉林', '成都'], ['吉林', '南昌'], ['黑龙江', '常州'], ['内蒙古', '兰山'], ['吉林', '河南'], ['黑龙江', '福田'], ['吉林', '常州'], ['吉林', '双流'], ['吉林', '潍坊'], ['吉林', '延安'], ['辽宁', '长春'], ['黑龙江', '南京'], ['辽宁', '和平'], ['北京', '哈尔滨'], ['吉林', '武汉'], ['吉林', '海陵'], ['吉林', '日照'], ['吉林', '台州'], ['辽宁', '厦门'], ['黑龙江', '贵阳'], ['吉林', '鞍山'], ['辽宁', '荣成'], ['黑龙江', '天津'], ['黑龙江', '河西'], ['黑龙江', '秦皇岛'], ['吉林', '荆州'], ['黑龙江', '东城'], ['吉林', '即墨'], ['辽宁', '西城'], ['黑龙江', '大兴'], ['河北', '哈尔滨'], ['黑龙江', '江苏'], ['吉林', '和平'], ['江苏', '鸡东'], ['辽宁', '辉南'], ['吉林', '深圳'], ['福建', '泰顺'], ['上海', '深圳'], ['吉林', '秦皇岛'], ['吉林', '徐汇'], ['吉林', '石景山'], ['辽宁', '城阳'], ['黑龙江', '威海'], ['黑龙江', '惠州'], ['吉林', '龙口'], ['黑龙江', '四平'], ['吉林', '南充'], ['河北', '东港'], ['辽宁', '西安'], ['内蒙古', '滨海'], ['河南', '青岛'], ['黑龙江', '昆山'], ['辽宁', '长沙'], ['吉林', '哈尔滨'], ['河北', '尚志'], ['辽宁', '东城'], ['辽宁', '珠海'], ['黑龙江', '铁岭'], ['黑龙江', '蓬莱'], ['北京', '天津'], ['内蒙古', '天津'], ['黑龙江', '宁波'], ['吉林', '上海'], ['辽宁', '佛山'], ['吉林', '长宁'], ['黑龙江', '珲春'], ['山东', '黄浦'], ['辽宁', '威海'], ['天津', '长春'], ['新疆', '上海'], ['河北', '鸡西'], ['陕西', '呼和浩特'], ['吉林', '连云港'], ['黑龙江', '杭州'], ['黑龙江', '嘉兴'], ['陕西', '盘锦'], ['河北', '同江'], ['吉林', '杭州'], ['黑龙江', '舟山'], ['河南', '大连'], ['辽宁', '绵阳'], ['吉林', '溆浦'], ['吉林', '朝阳'], ['吉林', '无锡'], ['浙江', '沈阳'], ['吉林', '湖里'], ['黑龙江', '无锡'], ['黑龙江', '长宁'], ['辽宁', '胶州'], ['吉林', '青岛'], ['河北', '海淀'], ['黑龙江', '厦门'], ['黑龙江', '中山'], ['河北', '太原'], ['新疆', '吉林'], ['吉林', '武侯'], ['北京', '廊坊'], ['浙江', '临汾'], ['湖北', '天津'], ['黑龙江', '泉州'], ['黑龙江', '温州'], ['黑龙江', '唐山'], ['北京', '铁岭'], ['辽宁', '即墨'], ['北京', '上海'], ['黑龙江', '广州'], ['吉林', '廊坊'], ['黑龙江', '荣成'], ['吉林', '海城'], ['湖南', '沈阳'], ['北京', '青岛'], ['河北', '大连'], ['内蒙古', '珠海'], ['黑龙江', '房山'], ['黑龙江', '金坛'], ['河北', '齐齐哈尔'], ['吉林', '大兴'], ['吉林', '密云'], ['黑龙江', '和平'], ['内蒙古', '龙井'], ['吉林', '道里'], ['山东', '武汉'], ['甘肃', '常熟'], ['黑龙江', '烟台'], ['吉林', '海淀'], ['黑龙江', '长沙'], ['天津', '石家庄'], ['吉林', '佛山'], ['辽宁', '黄骅'], ['内蒙古', '中山'], ['黑龙江', '北京'], ['黑龙江', '三河'], ['河北', '庆安'], ['吉林', '长沙'], ['黑龙江', '西安'], ['内蒙古', '朝阳'], ['辽宁', '丰台'], ['黑龙江', '延吉'], ['黑龙江', '长春'], ['吉林', '天津'], ['吉林', '昌平'], ['吉林', '赣州'], ['吉林', '厦门'], ['内蒙古', '秦皇岛'], ['内蒙古', '菏泽'], ['吉林', '闵行'], ['辽宁', '石景山'], ['吉林', '珠海'], ['内蒙古', '青岛'], ['北京', '海门'], ['内蒙古', '长春'], ['吉林', '城阳'], ['吉林', '大同'], ['湖北', '邢台'], ['吉林', '胶州'], ['吉林', '重庆'], ['河北', '佳木斯'], ['甘肃', '大连'], ['吉林', '南京'], ['内蒙古', '日照'], ['吉林', '鸡东'], ['黑龙江', '即墨'], ['江苏', '朝阳'], ['吉林', '南通'], ['黑龙江', '张家港'], ['吉林', '三河'], ['吉林', '咸阳'], ['吉林', '中山'], ['黑龙江', '胶州']]

  export default {
    components: { mapComp, initDialog },
    data() {
      const form = storage.getForm();
      const timeRange = form.timeRange || [];
      return {
        form,
        title: form.title || '',
        subject1: form.subject1 || '',
        subject2: form.subject2 || '',
        timeStr: [],
        map: {
          json: china,
          coords: coordinates,
          extend: {
            tooltip: {
              show: true
            }
          },
          type: {size: 'effectScatter', line: 'lines'}
        },
        countdown: timeRange.length ? (new Date(timeRange[1]) - new Date(timeRange[0])) / 1000 : 3600 * 2, // 秒
        startCountdown: true,
        pause: false,
        loading: true,
        interval: null
      }
    },
    computed: {
      dateStr() {
        return dateFormat(new Date(), 'yyyy-MM-dd')
      },
      formatDateStr() {
        return dateFormat(new Date(), 'yyyy年MM月dd日')
      },
      dayStr() {
        return (`星期${['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]}`)
      },
      lunar() {
        const arr = this.dateStr.split('-');

        return solarLunar.solar2lunar(arr[0], arr[1], arr[2]);
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 500)
      this.initTime();

    },
    destroyed() {
      clearInterval(this.interval);
    },
    methods: {
      onShowInit() {
        this.$refs.initDialog.dialogVisible = true;
      },
      onPause() {
        if (this.pause) {
          this.$refs.timer.start();
        } else {
          this.$refs.timer.stop();
        }
        this.pause = !this.pause;
      },
      mapLoader() {
        const cities = coordinates.map(n => {
          return [n.label, n.value]
        })
        const lines = linesArray.map((n, i) => {
          return [i, n]
        })
        return Promise.resolve([
          {
            columns: ['城市', 'size'],
            rows: cities
          },
          {
            columns: ['序号', 'line'],
            rows: lines
          }
        ])
      },
      mapTypeHelper({type}) {
        if (type === 'effectScatter') {
          return {
            symbolSize: 2,
            showEffectOn: 'render',
            label: {
              show: false,
              position: 'right',
              formatter: '{b}'
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        }
        if (type === 'lines') {
          return {
            large: true,
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: 'pin',
              symbolSize: 3,
              trailLength: 0
            },
            lineStyle: {
              color: new LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#58B3CC'
              }, {
                offset: 1, color: '#F58158'
              }], false),
              width: 1,
              opacity: 0.2,
              curveness: 0.1
            }
          }
        }
      },
      mapDataHelper(row, i, {type}) {
        if (type === 'effectScatter') {
          return {
            itemStyle: {
              color: Math.random() > 0.9 ? '#58B3CC' : '#F58158'
            },
            symbolSize: Math.random() > 0.9 ? Math.random() * 15 : 2
          }
        }
      },
      initTime() {
        this.interval = setInterval(() => {
          const current = new Date();
          const time = dateFormat(current, 'hh:mm:ss');
          const timeStr = []
          time.split(':').forEach(t => {
            timeStr.push(t.split(''));
          });
          this.timeStr = timeStr;

          // 首次加载，达到比赛时间，自动倒计时
          if (this.$refs.timer && this.form.timeRange && this.form.timeRange[0]) {
            if (current - new Date(this.form.timeRange[0]) >= 0) {
              if (!this.pause && this.startCountdown) {
                this.$nextTick(() => {
                  this.$refs.timer.start();
                })
                this.startCountdown = false;
                this.pause = false;
              }
            }
          }
        }, 1000);
      },
      init() {
        // 初始化
        this.answerProfile(); // 答题概况数据
        this.totalContestantsNumber(); // 参赛人数数据
        this.provinceAnswerProgress(); // 省份答题进度数据
        this.realTimeDynamic(); // 获取实时动态
      },
      // 答题概况数据
      answerProfile() {
        const query = {
          competitionIds: [],
          competitionName: '',
          stageName: ''
        }
        answerProfile(query).then(res => {
          console.log('答题概况数据', res);
        }).catch(e => {
          console.log(e);
        });
      },
      // 参赛人数数据
      totalContestantsNumber() {
        const sub1 = this.form.subject1ids.slit(',');
        const sub2 = this.form.subject2ids.slit(',');
        const query = {
          competitionIds: sub1.concat(sub2)
        }
        totalContestantsNumber(query).then(res => {
          console.log('参赛人数数据', res);
        }).catch(e => {
          console.log(e);
        });
      },
      // 省份答题进度数据
      provinceAnswerProgress() {
        // '阶段一': []
        const query = {
          competitionMap: {

          }
        }
        provinceAnswerProgress(query).then(res => {
          console.log('省份答题进度数据', res);
        }).catch(e => {
          console.log(e);
        });
      },
      // 实时动态数据
      realTimeDynamic() {
        realTimeDynamic().then(res => {
          console.log('实时动态数据', res);
        }).catch(e => {
          console.log(e);
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blueFont: #00ccff;
  $titleHeight: 52px;
  // 总分榜，列表item高度
  $totalContentItemHeight: 50px;

  .competitors-total {
    position: absolute;
    top: 5px;
    left: 15px;
    font-size: 28px;
  }
  .date {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 28px;
  }
  .my-dv-page {
    background-image: url("~$ui/assets/bg/03.jpg");
    background-size: cover;
  }

  .title-bg {
    background-image: url("../../assets/images/title-bg.png");
    background-size: cover;
    height: $titleHeight;
    display: flex;
    align-items: center;
    justify-content: center;

    .total-score {
      font-size: 23px;
      color: #ffff00;
    }
  }
  // 倒计时
  .countdown-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .countdown {
      $heightCountdown: 100px;
      width: 330px;
      height: $heightCountdown;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $blueFont;
      color: #035695;
      border-radius: 10px;
      font-size: 35px;
      cursor: pointer;
      .part {
        width: 50%;
        height: $heightCountdown;
        line-height: $heightCountdown;
        text-align: right;
      }
      .part2 {
        text-align: left;
        margin-top: -5px;
        /deep/ .my-dv-title {
          color: unset;
        }
      }
    }
  }

  // 省排名上升
  .rank-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    .rank {
      min-width: 300px;
      height: 100%;
      margin-top: 10px;
      padding: 0 10px;
      background: #f59a23;
      color: #ffff00;
      border: 1px solid #cecc0f;
      border-radius: 10px;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      p {
        margin: 0;
      }
      .time {
        color: #fff;
      }
    }
  }
  // 总分榜
  .list-container {
    height: calc(100% - 52px);
    overflow-y: auto;

    .header {

      span {
        display: inline-block;
        width: 20%;
        color: $blueFont;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
      }
    }
    .content {
      position: relative;
      padding-top: 10px;

      .top5-bg {
        position: absolute;
        width: 100%;
        height: $totalContentItemHeight * 5 + 45px;
        border: 3px solid #ffff00;
        border-radius: 5px;
      }

      .content-item {
        height: $totalContentItemHeight;
        margin: 8px;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        
        &:nth-child(2) {
          background: #5b0b2e;

          span:first-child {
            background-image: url("../../assets/images/team-1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }
        &:nth-child(3) {
          background: #094627;

          span:first-child {
            background-image: url("../../assets/images/team-2.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }
        &:nth-child(4) {
          background: #6a4226;

          span:first-child {
            background-image: url("../../assets/images/team-3.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }

        &:nth-child(5), &:nth-child(6) {
          span:first-child {
            background-image: url("../../assets/images/team-4-5.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }

        span {
          display: inline-block;
          width: 20%;
          height: $totalContentItemHeight;
          line-height: $totalContentItemHeight;
          color: #fff;
          font-size: 20px;
          text-align: center;
          &:last-child {
            color: #ffff00;
            font-weight: bold;
          }
        }
      }
    }
  }

  // 答题进度
  .process-container {
    max-height: calc(100% - 52px);
    padding: 3px 5px;

    $processW1: 15%; // NO.* 的宽度
    $processW2: 17%; // 省份的宽度 + margin 左右 1%
    $processW3: 65%; // 进度条和百分数的宽度
    $h: 37px;
    // 间距
    .process { margin: 3px 0; &:first-child { margin-top: 0; } &:last-child { margin-bottom: 0; } }
    .process {
      height: $h;
      display: flex;
      &>span {
        height: 100%;
        line-height: $h;
      }
      span {
        display: inline-block;
        text-align: center;
      }
      .NO { // NO.*
        width: $processW1;
        background: #66ccff;
        color: #000;
        border-radius: 5px;
      }
      .line-wrap {
        display: flex;
        flex-direction: column;
        .line {
          display: flex;
          height: 50%;
          &:first-child .rate {
            background: linear-gradient(90deg, #0033cc, #fc3367);
          }
          &:last-child .rate {
            background: linear-gradient(90deg, #0033cc, #fec9ff);
          }
          .rate {
            max-width: 80%;
            // todo 配置为数据驱动
            width: 100%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
          }
          .num {
            min-width: 20%;
            font-size: 14px;
            line-height: 18px;
          }
        }
      }


      &>span:nth-child(2) { // 省份
        width: $processW2;
        margin: 0 1%;
        // text-align: left;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
      }
      &>span:nth-child(3) { // 进度条
        width: $processW3;
      }
      &:nth-child(1) { // 第1名
        .NO { // NO.*
          background: #ffff00;
        }
      }
      &:nth-child(2) { // 第2名
        .NO { // NO.*
          background: #e8e8f3;
        }
      }
      &:nth-child(3) { // 第3名
        .NO { // NO.*
          background: #d18f0c;
        }
      }
    }

    .process-desc {
      display: flex;
      .desc {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        &:first-child .dot { background: #0033cc; }
        &:last-child .dot { background: #fc3367; }
        .dot {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          border-radius: 5px;
          border: 1px solid #eee;
        }
        .text {
          color: #fff;
        }
      }
    }
  }

  // 实时动态
  // <div class="rt-container">
  // <div class="rt">
  //   <div class="rt-time">23:44:30</div>
  //   <div class="rt-content">福建省排名上升至 第1名</div>
  // </div>
  .rt-container {
    max-height: 430px;
    overflow-y: auto;
    .rt {
      padding: 10px;
      &:nth-child(even) {
        color: #fff;
        background: #333;
      }
      &:nth-child(odd) {
        background: unset;
      }
      .rt-time {
        font-size: 20px;
        font-weight: bold;
      }
      .rt-content {
        font-size: 18px;
      }
    }
  }

  // 动态效果
  .list-complete-item {
    transition: all 1s;
    /* display: inline-block; */
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  /* .list-complete-leave-active for below version 2.1.8 */
  .list-complete-leave-active {
    position: absolute;
  }

  // 地图
  .map-wrap {
    width: 100%;
    height: 100%;
  }
</style>
