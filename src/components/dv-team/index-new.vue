<template>
  <my-dv-page fit v-bind="$attrs">
  <!-- <my-dv-page v-bind="$attrs"> -->
  <!-- <div style="height: 100%;position: relative;"> -->

  
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
          <div class="org">{{ORG}}</div>
          <div class="map-info-container">
            <!-- <map-comp
              v-if="form"
              :form="form"
              :rank1Data="rank1Data"
              :realTimeDynamicData="realTimeDynamicData"></map-comp> -->
          </div>
        </my-dv-box>
        <my-dv-box layout :gap="10" :weight="2" height="100%"></my-dv-box>
      </my-dv-box>
    </div>

    <!-- <my-dv-header5>
      <span class="competitors-total">
        <span class="zh">参赛总人数：</span>
        <span class="num">{{totalPeople || 0}}</span>
        <span class="zh">&nbsp;人</span>
      </span>
      <my-dv-title type="primary" strong shadow x-align="center">{{form.title}}</my-dv-title>
      <span class="date">
        <span>
          <span class="num">{{formatDateStr.y}}</span><span class="zh">&nbsp;年&nbsp;</span>
          <span class="num">{{formatDateStr.M}}</span><span class="zh">&nbsp;月&nbsp;</span>
          <span class="num">{{formatDateStr.d}}</span><span class="zh">&nbsp;日&nbsp;</span>
        </span>
        <span class="num" v-if="timeStr[2]">&nbsp;{{`${timeStr[0][0]}${timeStr[0][1]}:${timeStr[1][0]}${timeStr[1][1]}`}}</span>
        <span class="zh">&nbsp;{{`农历${lunar.monthCn}${lunar.dayCn}`}}</span>
      </span>
    </my-dv-header5> -->
    <div class="main-title">
      <span class="competitors-total">
        <span class="zh">参赛总人数：</span>
        <span class="num">{{totalPeople || 0}}</span>
        <span class="zh">&nbsp;人</span>
      </span>
      <span class="title">
        {{form.title}}
      </span>
      <span class="date">
        <span>
          <span class="num">{{formatDateStr.y}}</span><span class="zh">&nbsp;年&nbsp;</span>
          <span class="num">{{formatDateStr.M}}</span><span class="zh">&nbsp;月&nbsp;</span>
          <span class="num">{{formatDateStr.d}}</span><span class="zh">&nbsp;日&nbsp;</span>
        </span>
        <span class="num" v-if="timeStr[2]">&nbsp;{{`${timeStr[0][0]}${timeStr[0][1]}:${timeStr[1][0]}${timeStr[1][1]}`}}</span>
        <span class="zh">&nbsp;{{`农历${lunar.monthCn}${lunar.dayCn}`}}</span>
      </span>
    </div>

    <my-dv-box layout direction="column" :gap="10" top="90px" width="calc(100% - 20px)"
               height="calc(100% - 100px)"
               x-align="center">
      <!-- 左侧 总分榜 -->
      <my-dv-box layout :gap="10" :weight="2" height="100%" padding="0 0 0 20px">
        <my-dv-box class="zfb-bg" width="100%" fill="rgba(255,255,255,0.05)">
          <div class="list-container">
            <!-- 表头 -->
            <div class="header">
              <span>名次</span>
              <span>队伍</span>
              <span>{{form.subject1}}</span>
              <span>{{form.subject2}}</span>
              <span>总分</span>
            </div>
            <!-- 列表内容 -->
            <div class="content" v-if="rank1Data && rank1Data.length">
              <transition-group name="list-complete">
                <div
                  v-for="(item, i) in rank1Data"
                  v-show="i < 10"
                  :key="item.areaCode"
                  class="content-item list-complete-item">
                  <span>{{i > 2 ? item.rankNo : ''}}</span>
                  <span :class="{ 'text-scroll-wrap': item.province.length > 4 }">
                    <span :class="{ 'text-scroll-item': item.province.length > 4 }">{{filterProvince(item.province)}}</span>
                  </span>
                  <!-- <span>{{item.province}}</span> -->
                  <span>{{getValue(item.competitionScoreMap, form.subject1) || 0}}</span>
                  <span>{{getValue(item.competitionScoreMap, form.subject2) || 0}}</span>
                  <span>{{item.totalScore}}</span>
                </div>
              </transition-group>
            </div>

            <div class="content content-last" v-if="rank1Data && rank1Data.length">
              <transition-group name="list-complete">
                <div
                  v-for="(item, i) in rank1Data"
                  v-show="i >= 10"
                  :key="item.areaCode"
                  class="content-item list-complete-item">
                  <span>{{i > 2 ? item.rankNo : ''}}</span>
                  <span :class="{ 'text-scroll-wrap': item.province.length > 4 }">
                    <span :class="{ 'text-scroll-item': item.province.length > 4 }">{{filterProvince(item.province)}}</span>
                  </span>
                  <!-- <span>{{item.province}}</span> -->
                  <span>{{getValue(item.competitionScoreMap, form.subject1) || 0}}</span>
                  <span>{{getValue(item.competitionScoreMap, form.subject2) || 0}}</span>
                  <span>{{item.totalScore}}</span>
                </div>
              </transition-group>
            </div>
          </div>
          <my-dv-loading v-if="loading"></my-dv-loading>
        </my-dv-box>

      </my-dv-box>

      <!-- 中 倒计时 -->
      <my-dv-box height="100%" :weight="3" fill="rgba(255,255,255,0.05)">
        <my-dv-loading v-if="loading"></my-dv-loading>
        <!-- 倒计时 和 浮框 -->
        <div
          style="position: absolute; top: 10px; width: 100%;display: flex;justify-content: center;flex-direction: column;">
          <div class="countdown-container">
            <!-- <p class="countdown">倒计时：00:00:00</p> -->
            <div class="countdown" @click="onShowInit">
              <div class="part">
                <span class="clock">
                  <span class="img"></span>
                  &nbsp;倒计时：
                </span>
              </div>
              <div class="part part2">
                <my-dv-title class="my-dv-timer">
                  <!-- <my-timer
                    :target="countdown"
                    :auto="pause"
                    ref="timer"
                    countdown></my-timer> -->
                    <timer
                    :target="countdown"
                    :auto="pause"
                    ref="timer"
                    countdown></timer>
                </my-dv-title>
              </div>
            </div>
          </div>
        </div>
      </my-dv-box>

      <!-- 右侧 答题进度、实时动态 -->
      <my-dv-box layout :gap="10" :weight="2" height="100%" padding="0 20px 0 0">
        <my-dv-box :weight="7" class="dt-bg" width="calc(100% - 20px)" fill="rgba(255,255,255,0.05)">
          <div class="process-container" v-if="provinceAnswerProgressData && provinceAnswerProgressData.length">
          <!-- <div class="process-container"> -->
            <!-- 科目说明 -->
            <div class="process-desc">
              <span class="desc">
                <span class="dot"></span>
                <span class="text">{{form.subject1}}</span>
              </span>
              <span class="desc">
                <span class="dot"></span>
                <span class="text">{{form.subject2}}</span>
              </span>
            </div>
            <!-- 最多支持显示 10 条 -->
            <transition-group name="list-complete">
              <div
                v-for="(item, i) in provinceAnswerProgressData"
                v-show="i < 10"
                :key="item.areaCode"
                class="process list-complete-item">
                <span class="NO">NO.{{item.rankNo}}</span>
                <span>
                  <!-- <span :class="{ 'text-scroll-wrap': item.province.length > 4 }"> -->
                    <!-- <span :class="{ 'text-scroll-item': item.province.length > 4 }"> -->
                      {{filterProvince(item.province)}}
                    <!-- </span> -->
                  <!-- </span> -->
                </span>
                <span class="line-wrap">
                  <span class="line" v-if="form.subject1">
                    <span class="rate" :style="{ 'width': getValue(item.progressMap, form.subject1), 'max-width': '80%' }"></span>
                    <span class="num">{{getValue(item.progressMap, form.subject1, true)}}</span>
                  </span>
                  <span class="line" v-if="form.subject2">
                    <span class="rate" :style="{ 'width': getValue(item.progressMap, form.subject2), 'max-width': '80%' }"></span>
                    <span class="num">{{getValue(item.progressMap, form.subject2, true)}}</span>
                  </span>
                </span>
              </div>
            </transition-group>
          </div>
        </my-dv-box>
        <my-dv-box :weight="5" class="ss-bg" width="calc(100% - 20px)" fill="rgba(255,255,255,0.05)">
          <div class="rt-container" v-if="realTimeDynamicData && realTimeDynamicData.length">
            <!-- <vue-seamless-scroll
                  class="warp"
                  :data="realTimeDynamicData"
                  :class-option="classOption"
                  ref="seamlessScroll"> -->
              <transition-group name="list-complete">
                <div v-for="(item) in realTimeDynamicData" :key="item.userId" class="rt list-complete-item">
                  <div class="rt-time">{{item.recordTime}}</div>
                  <div class="rt-content">
                    <span class="type" :class="{
                      left: form.subject1ids.indexOf(item.competitionId) >= 0,
                      right: form.subject1ids.indexOf(item.competitionId) < 0
                    }">
                      [{{form.subject1ids.indexOf(item.competitionId) >= 0 ? form.subject1 : form.subject2}}]
                    </span>
                    <span class="name-province">
                      <span :class="{ 'text-scroll-wrap': item.userName.length > 4 }">
                        <span :class="{ 'text-scroll-item': item.userName.length > 4 }">
                          {{item.userName}}-{{filterProvince(item.province)}}
                        </span>
                      </span>
                    </span>
                    <span class="hit">
                      已连续答对&nbsp;<span class="num">{{item.continueRight}}</span>&nbsp;题！
                    </span>
                  </div>
                </div>
              </transition-group>
            <!-- </vue-seamless-scroll> -->
          </div>
        </my-dv-box>
      </my-dv-box>
    </my-dv-box>

    <map-comp
              v-if="form"
              :form="form"
              :rank1Data="rank1Data"
              :realTimeDynamicData="realTimeDynamicData"></map-comp>
    <!-- 表单 -->
    <init-dialog
      ref="initDialog"
      :pause="pause"
      @on-pause="onPause"
      @on-reset-time="onResetTime"></init-dialog>
  </my-dv-page>
  <!-- </div> -->
</template>
<script>
  import dateFormat from '$ui/utils/date';
  import china from '$ui/charts/geo/china.json';
  import coordinates from '$ui/dv/utils/coordinates';
  import solarLunar from 'solarlunar';
  import initDialog from '../init-dialog';
  import timer from '../timer';
  // import mapComp from '../map/index-new';
  import mapComp from '../map/index-new-1';
  import storage from '@/helper/storage';
  import { onPause, onStart, onReset } from '@/helper/bus';
  import { filterProvince } from '@/helper/utils';
  import api from '@/helper/api';

  const REFRESH_STEPS = window.__GLOBAL__.REFRESH_STEPS;
  const REFRESH_STEPS_DT = window.__GLOBAL__.REFRESH_STEPS_DT;
  const REFRESH_STEPS_COMPETITION_PROVINCE_RANK = window.__GLOBAL__.REFRESH_STEPS_COMPETITION_PROVINCE_RANK;
  const REFRESH_STEPS_REALTIME_DYNAMIC = window.__GLOBAL__.REFRESH_STEPS_REALTIME_DYNAMIC;
  const ORG = window.__GLOBAL__.ORG;
  // 个人 实时动态浮框 显示
  const SHOW_PERSON_REAL_TIME_DYNAMIC = window.__GLOBAL__.SHOW_PERSON_REAL_TIME_DYNAMIC;

  export default {
    components: { mapComp, initDialog, timer },
    data() {
      const form = storage.getForm();
      const timeRange = form.timeRange || [];
      const steps = REFRESH_STEPS; // 刷新频率 
      return {
        ORG,
        form,
        steps,
        SHOW_PERSON_REAL_TIME_DYNAMIC,
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
        // interval: null,
        interval: {
          date: { timer: null },
          realTimeDynamic: {
            timer: null,
            time: REFRESH_STEPS_REALTIME_DYNAMIC // 间隔
            // time: 1000 * 2 // test 2秒 间隔
          },
          competitionProvinceRank: {
            timer: null,
            time: REFRESH_STEPS_COMPETITION_PROVINCE_RANK // 间隔
            // time: 1000 * 2 // test 2秒 间隔
          },
          provinceAnswerProgress: {
            timer: null,
            time: REFRESH_STEPS_DT // 间隔
            // time: 1000 * 2 // test 2秒 间隔
          }
        },
        totalPeople: 0, // 参赛总人数
        realTimeDynamicData: [], // 实时动态数据
        rank1Data: [], // 总分榜数据
        provinceAnswerProgressData: [], // 答题进度
        // 动态列表 滚动设置
        classOption: {
          // waitTime: REFRESH_STEPS_REALTIME_DYNAMIC, // ms
          // singleHeight: 145
          limitMoveNum: 6,
          autoPlay: true,
          hoverStop: false
        }
      }
    },
    computed: {
      dateStr() {
        return dateFormat(new Date(), 'yyyy-MM-dd');
      },
      formatDateStr() {
        // return dateFormat(new Date(), 'yyyy年MM月dd日');
        const y = dateFormat(new Date(), 'yyyy');
        const M = dateFormat(new Date(), 'MM');
        const d = dateFormat(new Date(), 'dd');
        return { y, M, d };
      },
      dayStr() {
        return (`星期${['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]}`);
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
      const form = storage.getForm();

      if (form && JSON.stringify(form) !== '{}') this.form = form;
      else this.onShowInit();

      this.initTime();
      this.init();
    },
    destroyed() { 
      Object.keys(this.interval).forEach(o => {
        clearInterval(this.interval[o].timer);
        this.interval[o].timer = null;
      });
    },
    methods: {
      filterProvince,
      onShowInit() {
        const isProd = process.env.NODE_ENV === 'production';
        this.$refs.initDialog.dialogVisible = isProd;
      },
      onResetTime() {
        this.$refs.timer.reset();
      },
      onPause() {
        if (this.pause) {
          this.$refs.timer.start();
        } else {
          this.$refs.timer.stop();
        }
        this.pause = !this.pause;
      },
      getValue(obj, key, needPercent) {
        if (!obj) return needPercent ? '0%' : '0';
        if (!key) return needPercent ? '0%' : '0';
        return obj[key] || '0';
      },
      initTime() {
        // 右上角时间
        this.interval.date.timer = setInterval(() => {
          const current = new Date();
          const time = dateFormat(current, 'hh:mm:ss');
          const timeStr = []
          time.split(':').forEach(t => {
            timeStr.push(t.split(''));
          });
          this.timeStr = timeStr;

          // 首次加载，达到比赛时间，自动倒计时
          // if (this.$refs.timer && this.form.timeRange && this.form.timeRange[0]) {
          //   if (current - new Date(this.form.timeRange[0]) >= 0) {
          //     if (!this.pause && this.startCountdown) {
          //       this.$nextTick(() => {
          //         this.$refs.timer.start();
          //       })
          //       this.startCountdown = false;
          //       this.pause = false;
          //     }
          //   }
          // }
        }, 1000);

        // 倒计时
        if (this.form.timeRange.length) {
          const endT = this.form.timeRange[this.form.timeRange.length - 1];
          const startS = this.form.timeRange[0];
          const endD = new Date(endT);
          const startD = new Date(startS);
          const now = new Date();
          const nowY = now.getFullYear();
          const nowM = now.getMonth();
          const nowD = now.getDate();
          endD.setFullYear(nowY);
          endD.setMonth(nowM);
          endD.setDate(nowD);
          startD.setFullYear(nowY);
          startD.setMonth(nowM);
          startD.setDate(nowD);
          console.log('比对时间', endD - now);
          // 修正倒计时
          if (endD - now > 0) { // 未到结束时间
            if (now - startD) { // 到达开始时间
              this.countdown = (endD - now) / 1000;
              console.log('修正倒计时', this.countdown, startD, endD, now);
              this.pause = true;
              this.$refs.timer.start();
            }
          } else {
            this.countdown = '00:00:00';
            this.pause = false;
            this.$refs.timer.stop();
            // this.$refs.timer.reset()
          }
        }

        // 监听 两屏的倒计时，统一暂停开启
        onReset((data) => this.$refs.timer.reset());
        onStart((data) => {
            this.$refs.timer.start();
            this.pause = !this.pause;
        });
        onPause((data) => {
            this.$refs.timer.stop();
            this.pause = !this.pause;
        });
      },
      init() {
        // 初始化
        this.totalContestantsNumber(); // 参赛人数数据
        this.provinceAnswerProgress(); // 省份答题进度数据
        this.realTimeDynamic(); // 获取实时动态
        this.competitionProvinceRank(); // 获取总分榜
      },
      // 参赛人数数据
      totalContestantsNumber() {
        const sub1 = this.form.subject1ids;
        const sub2 = this.form.subject2ids;
        const query = {
          competitionIds: sub1.concat(sub2)
        }
        api.totalContestantsNumber(query).then(res => {
          console.log('参赛人数数据', res);
          this.totalPeople = res || 0; // todo
        }).catch(e => {
          console.log(e);
        });
      },
      // 省份答题进度数据
      provinceAnswerProgress() {
        // '阶段一': []
        const query = {
          competitionMap: {
            [this.form.subject1]: this.form.subject1ids,
            [this.form.subject2]: this.form.subject2ids
          },
          sortCompetitionName: this.form.subject1 // 排序比赛名
        }
        api.provinceAnswerProgress(query).then(res => {
          console.log('省份答题进度数据', res);
          this.provinceAnswerProgressData = res || [];
        }).catch(e => {
          console.log(e);
        });
        this.interval.provinceAnswerProgress.timer = setInterval(() => {
          api.provinceAnswerProgress(query).then(res => {
            console.log('省份答题进度数据', res);
            this.provinceAnswerProgressData = res || [];
          }).catch(e => {
            console.log(e);
          });
        }, this.interval.provinceAnswerProgress.time);
      },
      // 实时动态数据
      realTimeDynamic() {
        api.realTimeDynamic().then(res => {
          console.log('实时动态数据', res);
          if (res) {
            // 条件过滤
            res && (res = res.filter(r => r.continueRight >= this.SHOW_PERSON_REAL_TIME_DYNAMIC));
            this.realTimeDynamicData = this.realTimeDynamicData.concat(res);
          }
        }).catch(e => {
          console.log(e);
        });
        this.interval.realTimeDynamic.timer = setInterval(() => {
          api.realTimeDynamic().then(res => {
            console.log('实时动态数据', res);
            if (!res) return;
            // 条件过滤
            res && (res = res.filter(r => r.continueRight >= this.SHOW_PERSON_REAL_TIME_DYNAMIC));
            this.realTimeDynamicData.unshift(...res);
          }).catch(e => {
            console.log(e);
          });
        }, this.interval.realTimeDynamic.time);
      },
      // 总分榜
      competitionProvinceRank() {
        const competitionMap = {
          [this.form.subject1]: this.form.subject1ids,
          [this.form.subject2]: this.form.subject2ids
        };
        api.competitionProvinceRank({ competitionMap }).then(res => {
          console.log('总分榜', res);
          this.rank1Data = res || []; // todo
        }).catch(e => {
          console.log(e);
        });
        this.interval.competitionProvinceRank.timer = setInterval(() => {
          api.competitionProvinceRank({ competitionMap }).then(res => {
            console.log('总分榜', res);
            this.rank1Data = res || []; // todo
          }).catch(e => {
            console.log(e);
          });
        }, this.interval.competitionProvinceRank.time);
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '@/assets/style/common';
  $blue: #00ffba;
  $purple: #c3a9ff;
  $blueFont: #00ccff;
  $titleHeight: 52px;
  // 总分榜，列表item高度
  $totalContentItemHeight: 30px;
  $totalContentItemHeightTop3: 50px;

  // bg
  .bg-container {
    width: 100%;
    height: 100%;
    // background-image: url("../../assets/img-team/BG.png");
    // background-image: url("../../assets/img-team/map-bg.png");
    background-image: url("../../assets/img-team/BG-11-9.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    position: absolute;
    bottom: 0;
    .org {
      width: 100%;
      position: absolute;
      bottom: 10px;
      color: #799ec7;
      text-align: center;
      font-size: 18px;
    }
  }

  // 省排名上升
  .rank-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    & span {
      display: inline-block;
      height: 100%;
    }
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
  .zfb-bg {
    background-image: url("../../assets/img-team/team-zf-bg-1.png");
    background-size: 103% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  // 总分榜
  .list-container {
    height: calc(100% - 80px);
    // overflow-y: auto;
    margin-top: 80px;

    .header {

      span {
        display: inline-block;
        width: 20%;
        // color: $blueFont;
        color: #d6f0ff;
        // font-size: 20px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
      }
    }
    // 10名以后的滚动
    .content-last {
      max-height: 375px;
      margin-top: -8px;
      padding-bottom: 60px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width:0px;
        height:0px;
      }
    }
    .content {
      position: relative;
      // padding-top: 5px;

      .top5-bg {
        position: absolute;
        width: 100%;
        height: $totalContentItemHeight * 5 + 45px;
        border: 3px solid #ffff00;
        border-radius: 5px;
      }

      .content-item {
        height: $totalContentItemHeight;
        margin: 7px;
        display: flex;
        align-items: center;
        // border: 1px solid #ccc;
        border-radius: 5px;
        background-image: url("../../assets/img-common/top10.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;

        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
          &>span:first-child {
            display: inline-block;
            height: 100%;
            background-size: 85% 130%;
            background-repeat: no-repeat;
            background-position: center;
            line-height: $totalContentItemHeight - 10px;
          }
        } 
        &:nth-child(1) {
          background-image: url("../../assets/img-common/top1.png");
          background-size: 103% 125%;
          background-repeat: no-repeat;
          background-position: center;

          &>span:first-child {
            background-image: url("../../assets/img-common/top1-icon.png");
            // background-size: 85% 200%;
            // background-repeat: no-repeat;
            // background-position: center;
            // line-height: $totalContentItemHeight - 10px;
          }
          &>span:last-child {
            font-size: 24px;
          }
        }
        &:nth-child(2) {
          background-image: url("../../assets/img-common/top2.png");
          background-size: 103% 125%;
          background-repeat: no-repeat;
          background-position: center;

          &>span:first-child {
            background-image: url("../../assets/img-common/top2-icon.png");
            // background-size: 85% 200%;
            // background-repeat: no-repeat;
            // background-position: center;
            // line-height: $totalContentItemHeight - 10px;
          }
          &>span:last-child {
            font-size: 24px;
          }
        }
        &:nth-child(3) {
          background-image: url("../../assets/img-common/top3.png");
          background-size: 103% 125%;
          background-repeat: no-repeat;
          background-position: center;

          &>span:first-child {
            background-image: url("../../assets/img-common/top3-icon.png");
            // background-size: 85% 200%;
            // background-repeat: no-repeat;
            // background-position: center;
            // line-height: $totalContentItemHeight - 10px;
          }
          &>span:last-child {
            font-size: 24px;
          }
        }

        &:nth-child(-n+3) {
          height: $totalContentItemHeightTop3;
        }
        &:nth-child(n+4):nth-child(-n+10) {
          background-image: url("../../assets/img-common/top10.png");
        }
        &:nth-child(n+11) {
          background-image: url("../../assets/img-common/top-last.png") !important;
        }
        

        &>span {
          display: inline-block;
          width: 20%;
          height: $totalContentItemHeight;
          line-height: $totalContentItemHeight;
          color: #fff;
          font-size: 18px;
          text-align: center;
          @include wordBreak();
          &:last-child {
            // color: #ffff00;
            font-weight: bold;
          }
        }
      }
    }
  }

  // 答题进度 bg
  .dt-bg {
    background-image: url("../../assets/img-team/team-dt.png");
    background-size: 115% 113%;
    background-repeat: no-repeat;
    background-position: center;
  }
  // 答题进度
  .process-container {
    $processContainerH: 60px;
    max-height: calc(100% - 60px);
    padding: 0 5px;
    margin-top: $processContainerH;

    $processW1: 15%; // NO.* 的宽度
    $processW2: 17%; // 省份的宽度 + margin 左右 1%
    $processW3: 65%; // 进度条和百分数的宽度
    $h: 38px;
    // $h: calc(((100% - 20px) / 10)px);
    // 间距
    .process { margin: 2px 0; &:first-child { margin-top: 0; } &:last-child { margin-bottom: 0; } }
    .process {
      height: $h;
      padding: 5px 0;
      display: flex;
      position: relative;
      
      &:nth-child(1)::after {
        background-image: url("../../assets/img-team/jd-bg-top1.png");
      }
      &:nth-child(2)::after {
        background-image: url("../../assets/img-team/jd-bg-top2.png");
      }
      &:nth-child(3)::after {
        background-image: url("../../assets/img-team/jd-bg-top3.png");
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: $h + 11px;
        top: -6px;
        left: -10px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      &>span {
        height: 100%;
        line-height: $h - 10px;
      }
      span {
        display: inline-block;
        text-align: center;
      }
      .NO { // NO.*
        width: $processW1;
        background-image: url("../../assets/img-team/NO4-10.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
      }
      .line-wrap {
        display: flex;
        flex-direction: column;
        .line {
          display: flex;
          height: 50%;
          &:first-child .rate {
            background-image: url("../../assets/img-team/team-jd-progress-green.png");
          }
          &:last-child .rate {
            background-image: url("../../assets/img-team/team-jd-progress-purple.png");
          }
          .rate {
            max-width: 80%;
            min-width: 10%;
            // todo 配置为数据驱动
            // width: 100%;
            // border-top-right-radius: 15px;
            // border-bottom-right-radius: 15px;
            background-size: 100% 95%;
            background-repeat: no-repeat;
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
        color: #fff;
        margin: 0 1%;
        // text-align: left;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
        font-size: 18px;
        font-weight: bold;
      }
      &>span:nth-child(3) { // 进度条
        width: $processW3;
      }
      &:nth-child(1) { // 第1名
        .NO { // NO.*
          background-image: url("../../assets/img-team/NO1.png");
        }
      }
      &:nth-child(2) { // 第2名
        .NO { // NO.*
          background-image: url("../../assets/img-team/NO2.png");
        }
      }
      &:nth-child(3) { // 第3名
        .NO { // NO.*
          background-image: url("../../assets/img-team/NO3.png");
        }
      }
    }

    .process-desc {
      display: flex;
      justify-content: center;
      padding: 10px 0;
      .desc {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        &:first-child .dot {
          // background: #0033cc;
          background-image: url("../../assets/img-team/team-tag-left.png");
          background-size: contain;
        }
        &:last-child .dot {
          // background: #fc3367;
          background-image: url("../../assets/img-team/team-tag-right.png");
          background-size: contain;
        }
        .dot {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          border-radius: 5px;
          // border: 1px solid #eee;
        }
        .text {
          color: #fff;
        }
      }
    }
  }

  // 实时动态 bg
  .ss-bg {
    background-image: url("../../assets/img-team/team-ss-bg.png");
    background-size: 115% 113%;
    background-repeat: no-repeat;
    background-position: center;
  }
  // 实时动态
  .rt-container {
    max-height: 430px;
    margin-top: 60px;
    overflow-y: auto;
    .rt {
      padding: 10px 10px 0;
      line-height: 25px;
      .rt-time {
        font-size: 18px;
        font-weight: bold;
      }
      .rt-content {
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 1px solid #023976;
        display: flex;
        justify-content: space-between;

        .type {
          &.left {
            color: $blue;
          }
          &.right {
            color: $purple;
          }
        }
        .name-province {
          width: 120px;
          color: #fff;
          font-weight: bold;
        }
        .hit {
          color: #afcfff;
          .num {
            color: #fff;
          }
        }
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

  // 地图 上的标识
  .map-info-container {
    height: 100%;
    position: relative;
  }
</style>
