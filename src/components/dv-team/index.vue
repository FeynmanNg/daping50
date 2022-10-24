<template>
  <my-dv-page width="100%" height="100%">
    <my-dv-starry :opacity="0.4"></my-dv-starry>

    <my-dv-header5>
      <span class="competitors-total">参赛总人数：{{totalPeople || 0}}人</span>
      <my-dv-title type="primary" strong shadow x-align="center">{{title}}</my-dv-title>
      <span class="date">
        <span>{{formatDateStr}}&nbsp;</span>
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
            <!-- <div class="content"> -->
              <div class="top5-bg" v-show="rank1Data.length >= 5"></div>
              <transition-group name="list-complete">
                <div
                  v-for="(item, i) in rank1Data"
                  v-show="i < 15"
                  :key="item.areaCode"
                  class="content-item list-complete-item">
                  <span>{{item.rankNo}}</span>
                  <span>{{item.province}}</span>
                  <span>{{getValue(item.competitionScoreMap, form.subject1) || 0}}</span>
                  <span>{{getValue(item.competitionScoreMap, form.subject2) || 0}}</span>
                  <span>{{item.totalScore}}</span>
                </div>
                <!-- demo -->
                <!-- <div
                  :key="1"
                  class="content-item list-complete-item">
                  <span>1</span>
                  <span>福建省demo</span>
                  <span>33</span>
                  <span>44</span>
                  <span>44</span>
                </div> -->
              </transition-group>
              <!-- 最多支持 15 行 -->
            </div>
          </div>
          <my-dv-loading v-if="loading"></my-dv-loading>
        </my-dv-border12>

      </my-dv-box>

      <!-- 中 倒计时、地图 -->
      <my-dv-border12 height="100%" :weight="3" fill="rgba(255,255,255,0.05)">
        <!-- <my-dv-loading v-if="loading"></my-dv-loading> -->
        <div class="map-wrap">
          <map-comp :rank1Data="rank1Data"></map-comp>
        </div>
        <!-- 倒计时 和 浮框 -->
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
          <div class="rank-container" v-if="realTimeDynamicData && realTimeDynamicData.length">
            <transition-group name="list-complete">
              <div class="rank list-complete-item"
                v-for="(item, i) in realTimeDynamicData"
                v-show="i === 0"
                :key="item.userId">
                <p class="rank-content">
                  【{{form.subject1ids.indexOf(item.competitionId) >= 0 ? form.subject1 : form.subject2}}】
                  {{item.userName}}
                  【{{item.province}}】
                  已连续答对 {{item.continueRight}} 题
                </p>
                <p class="time">{{item.recordTime}}</p>
              </div>
            </transition-group>
          </div>
        </div>
      </my-dv-border12>

      <!-- 右侧 答题进度、实时动态 -->
      <my-dv-box layout :gap="10" :weight="2" height="100%">
        <my-dv-border12 width="100%" height="70%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
              <span class="total-score">答题进度榜</span>
            </my-dv-adorn7>
          </div>
          <!-- <div class="process-container" v-if="provinceAnswerProgressData && provinceAnswerProgressData.length"> -->
          <div class="process-container">
            <!-- 最多支持显示 10 条 -->
            <!-- <transition-group name="list-complete">
              <div
                v-for="(item, i) in provinceAnswerProgressData"
                v-show="i < 10"
                :key="item.areaCode + `_${i}`"
                class="process list-complete-item">
                <span class="NO">NO.{{item.rankNo}}</span>
                <span>{{item.province}}</span>
                <span class="line-wrap">
                  <span class="line">
                    <span class="rate" :style="{ 'width': getValue(item.progressMap, form.subject1), 'max-width': '80%' }"></span>
                    <span class="num">{{getValue(item.progressMap, form.subject1, true)}}</span>
                  </span>
                  <span class="line">
                    <span class="rate" :style="{ 'width': getValue(item.progressMap, form.subject2), 'max-width': '80%' }"></span>
                    <span class="num">{{getValue(item.progressMap, form.subject2, true)}}</span>
                  </span>
                </span>
              </div>
            </transition-group> -->
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
          </div>
        </my-dv-border12>
        <my-dv-border12 width="100%" height="30%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
              <span class="total-score">实时动态</span>
            </my-dv-adorn7>
          </div>
          <div class="rt-container" v-if="realTimeDynamicData && realTimeDynamicData.length">
            <transition-group name="list-complete">
              <div v-for="(item) in realTimeDynamicData" :key="item.userId" class="rt list-complete-item">
                <div class="rt-time">{{item.recordTime}}</div>
                <div class="rt-content">
                  【{{form.subject1ids.indexOf(item.competitionId) >= 0 ? form.subject1 : form.subject2}}】
                  {{item.userName}}
                  【{{item.province}}】
                  已连续答对 {{item.continueRight}} 题！
                </div>
              </div>
            </transition-group>
          </div>
        </my-dv-border12>
      </my-dv-box>
    </my-dv-box>
    <!-- 表单 -->
    <init-dialog
      ref="initDialog"
      :pause="pause"
      @on-pause="onPause"
      @on-reset-time="onResetTime"></init-dialog>
  </my-dv-page>
</template>
<script>
  import dateFormat from '$ui/utils/date';
  import china from '$ui/charts/geo/china.json';
  import coordinates from '$ui/dv/utils/coordinates';
  import solarLunar from 'solarlunar';
  import initDialog from '../init-dialog';
  import mapComp from '../map';
  import storage from '@/helper/storage';
  // import { onPause, onStart, onReset } from '@/helper/bus';
  import {
    totalContestantsNumber,
    provinceAnswerProgress,
    realTimeDynamic,
    competitionProvinceRank
  } from '$my/code/api/dv';

  const REFRESH_STEPS = window.__GLOBAL__.REFRESH_STEPS;

  export default {
    components: { mapComp, initDialog },
    data() {
      const form = storage.getForm();
      const timeRange = form.timeRange || [];
      const steps = REFRESH_STEPS; // 刷新频率 *分钟
      return {
        form,
        steps,
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
            time: steps // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
          },
          competitionProvinceRank: {
            timer: null,
            time: steps // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
          },
          provinceAnswerProgress: {
            timer: null,
            time: steps // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
          }
        },
        totalPeople: 0, // 参赛总人数
        realTimeDynamicData: [], // 实时动态数据
        rank1Data: [], // 总分榜数据
        provinceAnswerProgressData: [] // 答题进度
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
      const form = storage.getForm();

      if (form && JSON.stringify(form) !== '{}') this.form = form;
      else this.onShowInit();

      this.initTime();
      // this.init();
    },
    destroyed() { 
      Object.keys(this.interval).forEach(o => {
        clearInterval(this.interval[o].timer);
        this.interval[o].timer = null;
      });
    },
    methods: {
      onShowInit() {
        this.$refs.initDialog.dialogVisible = true;
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

        // 倒计时
        if (this.form.timeRange.length) {
          const endT = this.form.timeRange[this.form.timeRange.length - 1];
          const startS = this.form.timeRange[0];
          const endD = new Date(endT);
          const startD = new Date(startS);
          const now = new Date();

          // 修正倒计时
          if (endD - now) { // 未到结束时间
            if (now - startD) { // 到达开始时间
              this.countdown = (endD - now) / 1000;
              console.log('修正倒计时', this.countdown, startD, endD, now);
            }
          }
        }

        // 监听 两屏的倒计时，统一暂停开启
        // onReset((data) => this.$refs.timer.reset());
        // onStart((data) => {
        //     this.$refs.timer.start();
        //     this.pause = !this.pause;
        // });
        // onPause((data) => {
        //     this.$refs.timer.stop();
        //     this.pause = !this.pause;
        // });
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
        totalContestantsNumber(query).then(res => {
          console.log('参赛人数数据', res);
          this.totalPeople = res; // todo
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
        provinceAnswerProgress(query).then(res => {
          console.log('省份答题进度数据', res);
          this.provinceAnswerProgressData = res;
          console.log('省份答题进度数据', this.provinceAnswerProgressData);
        }).catch(e => {
          console.log(e);
        });
        this.interval.provinceAnswerProgress.timer = setInterval(() => {
          provinceAnswerProgress(query).then(res => {
            console.log('省份答题进度数据', res);
            this.provinceAnswerProgressData = res;
            console.log('省份答题进度数据', this.provinceAnswerProgressData);
          }).catch(e => {
            console.log(e);
          });
        }, this.interval.provinceAnswerProgress.time);
      },
      // 实时动态数据
      realTimeDynamic() {
        realTimeDynamic().then(res => {
          console.log('实时动态数据', res);
          this.realTimeDynamicData = res; // todo
        }).catch(e => {
          console.log(e);
        });
        this.interval.realTimeDynamic.timer = setInterval(() => {
          realTimeDynamic().then(res => {
            console.log('实时动态数据', res);
            this.realTimeDynamicData = res; // todo
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
        }
        competitionProvinceRank({ competitionMap }).then(res => {
          console.log('总分榜', res);
          this.rank1Data = res; // todo
          console.log('总分榜', this.rank1Data);
        }).catch(e => {
          console.log(e);
        });
        this.interval.competitionProvinceRank.timer = setInterval(() => {
          competitionProvinceRank({ competitionMap }).then(res => {
            console.log('总分榜', res);
            this.rank1Data = res; // todo
            console.log('总分榜', this.rank1Data);
          }).catch(e => {
            console.log(e);
          });
        }, this.interval.competitionProvinceRank.time);
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
      width: 400px;
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
        width: 45%;
        height: $heightCountdown;
        line-height: $heightCountdown;
        text-align: right;
      }
      .part2 {
        width: 55%;
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
        
        &:nth-child(1) {
          background: #5b0b2e;

          span:first-child {
            background-image: url("../../assets/images/team-1.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }
        &:nth-child(2) {
          background: #094627;

          span:first-child {
            background-image: url("../../assets/images/team-2.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }
        &:nth-child(3) {
          background: #6a4226;

          span:first-child {
            background-image: url("../../assets/images/team-3.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            line-height: $totalContentItemHeight - 10px;
          }
        }

        &:nth-child(4), &:nth-child(5) {
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
            background-image: url("../../assets/img-team/team-jd-progress.png");
            background-size: contain;
            background-repeat: no-repeat;
          }
          &:last-child .rate {
            background: linear-gradient(90deg, #0033cc, #fec9ff);
          }
          .rate {
            max-width: 80%;
            // todo 配置为数据驱动
            width: 100%;
            // border-top-right-radius: 15px;
            // border-bottom-right-radius: 15px;
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
      position: absolute;
      bottom: 8px;
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
