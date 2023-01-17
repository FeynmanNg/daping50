<template>
  <my-dv-page fit v-bind="$attrs">
  <!-- <my-dv-page v-bind="$attrs"> -->
    <div class="bg-container">
      <my-dv-starry :opacity="0.4"></my-dv-starry>
      <!-- <my-dv-starry :opacity="0.4" width="100vw" height="100vh"></my-dv-starry> -->
      <div class="org">{{ORG}}</div>
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
      <!-- <my-dv-title type="primary" strong shadow x-align="center">{{form.title}}</my-dv-title> -->
      <video src="../../assets/webm/page-title-bg.webm" muted width="1980" height="150" autoplay loop>您当前的浏览器版本不支持动画</video>
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
      <!-- 左侧 窝点勘察 -->
      <my-dv-box layout :gap="10" height="100%" padding="0 0 0 20px">
          <div class="gaikuang">
            <div class="top">

              <div class="kemu title">
                <span>{{form.subject1 || '待定'}}</span>
              </div>
              <div
                v-for="(sub, i) in arrSub1"
                :key="`${sub.name}_${i}`"
                :class="{
                  'kemu': 1, 'name': 1,
                  'active': (interval.answerProfile.value1 + 1) % arrSub1.length === i,
                  'inactive': answerProfileData1.onlineNumber === 0
                    || answerProfileData1.onlineNumber === null
                    || answerProfileData1.onlineNumber === 0
                }">
                {{sub.name}}
              </div>
            </div>
            <div class="bottom">
              <div class="left">
                <div class="circle-bg">
                  <video src="../../assets/webm/cyan-circle.webm" muted width="313" height="200" autoplay loop>您当前的浏览器版本不支持动画</video>
                </div>
                <div class="text">正确率</div>
                <div class="number" v-if="answerProfileData1">
                  {{answerProfileData1.accuracyRate ? answerProfileData1.accuracyRate.replace('%', '') : 0}}
                  <span>%</span>
                </div>
              </div>
              <div class="right">
                <div class="online">
                  <div class="online-img">
                    <span class="img"></span>
                  </div>
                  <div class="online-text">
                    <div>在考人数</div>
                    <div>{{answerProfileData1.onlineNumber || 0}}</div>
                  </div>
                </div>
                <div class="online">
                  <div class="online-img finish-img">
                    <span class="img"></span>
                  </div>
                  <div class="online-text finish-text">
                    <div>已完成数</div>
                    <div>{{answerProfileData1.finishedNumber || 0}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <my-dv-loading v-if="loading"></my-dv-loading>

          <!-- 列表 -->
          <div class="list-container">
            <!-- 表头 -->
            <div class="header">
              <span :style="{ 'width': `${lengthLeft.no}%` }">名次</span>
              <span class="ellipsis" :style="{ 'width': `${lengthLeft.name}%` }">参赛者</span>
              <span class="ellipsis" :style="{ 'width': `${lengthLeft.area}%` }">地区</span>
              <span
                v-for="(stage, i) in arrSub1"
                :key="i"
                :style="{ 'width': `${lengthLeft.arr}%` }"
                class="ellipsis">{{stage.name}}</span>
              <span :style="{ 'width': `${lengthLeft.total}%` }">总分</span>
            </div>
            <!-- 表内容 -->
            <transition-group name="list-complete">
              <div
                :class="{ 'content': 1, 'list-complete-item': 1, 'content-last': i >= 10 }"
                v-for="(person, i) in listLeft"
                :key="person.userId">
                <span :style="{ 'width': `${lengthLeft.no}%` }">{{i > 2 ? person.rankNo : ''}}</span>
                <span class="name" :style="{ 'width': `${lengthLeft.name}%` }">
                  <span :class="{ 'text-scroll-wrap': person.name.length > 4 }">
                    <span :class="{ 'text-scroll-item': person.name.length > 4 }">{{person.name}}</span>
                  </span>
                </span>
                <span class="province" :style="{ 'width': `${lengthLeft.area}%` }">
                  <!-- <span :class="{ 'text-scroll-wrap': person.province.length > 4 }"> -->
                    <!-- <span :class="{ 'text-scroll-item': person.province.length > 4 }"> -->
                      {{filterProvince(person.province)}}
                    <!-- </span> -->
                  <!-- </span> -->
                </span>
                <span
                  class="score"
                  v-for="(stage, i) in arrSub1"
                  :key="stage.name + i"
                  :style="{ 'width': `${lengthLeft.arr}%` }">{{person.stageScoreMap[stage.name]}}</span>
                <span :style="{ 'width': `${lengthLeft.total}%` }">{{person.totalScore}}</span>
              </div>
            </transition-group>
          </div><!-- list-container end -->

      </my-dv-box>

      <!-- 中 选手介绍 -->
      <!-- <my-dv-border12 height="100%" :weight="1" fill="rgba(255,255,255,0.05)"> -->
        <my-dv-box layout direction="column" top="20px" width="100%">
          <my-dv-box height="100px">
            <!-- 倒计时 -->
            <div style="width: 100%;display: flex;justify-content: center;flex-direction: column;">
              <div class="countdown-container">
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
            <!-- 介绍 -->
            <div class="introduction-container"  v-if="playerIntroductionData">
            <!-- <div class="introduction-container"> -->
              <div class="title"></div>
              <div class="introduction-content">
                <div class="left">
                  <div class="image-wrap">
                    <!-- 图片 -->
                    <img
                      class="img"
                      :src="playerIntroductionData.img" @error="onErrorImg($event, playerIntroductionData)" />
                  </div>
                </div>
                <div class="right">
                  <div class="province">
                    <span>
                      <span>{{playerIntroductionData.name}}</span>
                      <span>{{filterProvince(playerIntroductionData.province)}}</span>
                    </span>
                  </div>
                  <div class="common">
                    <p>人员简介：</p>
                    <p>{{playerIntroductionData.personnel}}</p>
                    <!-- <p>人员简介人员简介人员简介人员简介</p> -->
                  </div>
                  <div class="common" v-if="SHOW_PERSON_COMPETITION_DECLARATION">
                    <p>比赛宣言：</p>
                    <p>{{playerIntroductionData.competitionDeclaration}}</p>
                    <!-- <p>比赛宣言比赛宣言比赛宣言比赛宣言比赛宣言</p> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- 浮框 -->
            <div class="float-container" v-if="realTimeDynamicData && realTimeDynamicData.length">
              <!-- 窝点勘察 -->
            <!-- <vue-seamless-scroll
                  :data="realTimeDynamicData"
                  :class-option="classOption"
                  ref="seamlessScroll"> -->
              <!-- <transition-group name="list-complete"> -->
                <div v-for="(item, i) in realTimeDynamicData" :key="item.userId + `${i}`">
                  <transition name="slide-fade">
                    <div v-if="item.show" :class="{
                      'list-complete-item': true,
                      'float-item': true,
                      'wdkc': form.subject1ids.indexOf(item.competitionId) >= 0,
                      'jcjd': form.subject1ids.indexOf(item.competitionId) < 0
                    }">
                      <div class="content">
                        <div class="img">
                          <img :src="item.img" @error="onErrorImg($event, item)" style="width: 100%; height: 100%" />
                        </div>
                        <div class="name-rank">
                          <div class="name">{{item.userName}}</div>
                          <!-- <div class="rank">排名第{{item.rankNo}}</div> -->
                        </div>
                        <div class="time-correct">
                          <div class="time">{{item.recordTime}}</div>
                          <div class="correct">答对+1！连续答对{{item.continueRight}}题！</div>
                        </div>
                      </div>
                      <div class="type">{{form.subject1ids.indexOf(item.competitionId) >= 0 ? form.subject1 : form.subject2}}</div>
                    </div>
                  </transition>
                </div>
              <!-- </transition-group>               -->
            <!-- </vue-seamless-scroll> -->
            </div>
          </my-dv-box>
        </my-dv-box>
      <!-- </my-dv-border12> -->

      <!-- 右侧 检查鉴定 -->
      <my-dv-box layout :gap="10" height="100%" padding="0 20px 0 0">
        <my-dv-loading v-if="loading"></my-dv-loading>
        <!-- <my-dv-border12 width="100%" fill="rgba(255,255,255,0.05)"> -->
          <div class="gaikuang gaikuang-right">
            <div class="top">

              <div class="kemu title">
                  <span>{{form.subject2 || '待定'}}</span>
                </div>
              <div
                v-for="(sub, i) in arrSub2"
                :key="`${sub.name}_${i}`"
                :class="{
                  'kemu': 1, 'name': 1,
                  'active': (interval.answerProfile.value2 + 1) % arrSub2.length === i,
                  'inactive': answerProfileData2.onlineNumber === undefined
                    || answerProfileData2.onlineNumber === null
                    || answerProfileData2.onlineNumber === 0
                }">
                {{sub.name}}
              </div>
            </div>
            <div class="bottom">
              <div class="left">
                <div class="circle-bg">
                  <video src="../../assets/webm/blue-circle.webm" muted width="313" height="200" autoplay loop>您当前的浏览器版本不支持动画</video>
                </div>
                <div class="text">正确率</div>
                <div class="number" v-if="answerProfileData2">
                  {{answerProfileData2.accuracyRate ? answerProfileData2.accuracyRate.replace('%', '') : 0}}
                  <span>%</span>
                </div>
              </div>
              <div class="right">
                <div class="online">
                  <div class="online-img">
                    <span class="img"></span>
                  </div>
                  <div class="online-text">
                    <div>在考人数</div>
                    <div>{{answerProfileData2.onlineNumber || 0}}</div>
                  </div>
                </div>
                <div class="online">
                  <div class="online-img finish-img">
                    <span class="img"></span>
                  </div>
                  <div class="online-text finish-text">
                    <div>已完成数</div>
                    <div>{{answerProfileData2.finishedNumber || 0}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <my-dv-loading v-if="loading"></my-dv-loading>

          <!-- 列表 -->
          <div class="list-container">
          <!-- <div class="list-container"> -->
            <!-- 表头 -->
            <div class="header">
              <span :style="{ 'width': `${lengthRight.no}%` }">名次</span>
              <span class="ellipsis" :style="{ 'width': `${lengthRight.name}%` }">参赛者</span>
              <span class="ellipsis" :style="{ 'width': `${lengthRight.area}%` }">地区</span>
              <span
                v-for="(stage, i) in arrSub2"
                :key="i"
                :style="{ 'width': `${lengthRight.arr}%` }"
                class="ellipsis">{{stage.name}}</span>
              <span :style="{ 'width': `${lengthRight.total}%` }">总分</span>
            </div>
            <!-- 表内容 -->
            <!-- 前10名 -->
            <transition-group name="list-complete" v-if="listRight && listRight.length">
              <div
                :class="{ 'content': 1, 'list-complete-item': 1, 'content-last': i >= 10 }"
                v-for="(person, i) in listRight"
                :key="person.userId">
                <span :style="{ 'width': `${lengthRight.no}%` }">{{i > 2 ? person.rankNo : ''}}</span>
                <span class="name" :style="{ 'width': `${lengthRight.name}%` }">
                  <span :class="{ 'scroll-wrap': person.name.length > 4 }">
                    <span :class="{ 'scroll-item': person.name.length > 4 }">{{person.name}}</span>
                  </span>
                </span>
                <span class="province" :style="{ 'width': `${lengthRight.area}%` }">
                  <!-- <span :class="{ 'text-scroll-wrap': person.province.length > 4 }"> -->
                    <!-- <span :class="{ 'text-scroll-item': person.province.length > 4 }"> -->
                      {{filterProvince(person.province)}}
                    <!-- </span> -->
                  <!-- </span> -->
                </span>
                <span
                  class="score"
                  v-for="(stage, i) in arrSub2"
                  :key="stage.name + i"
                  :style="{ 'width': `${lengthRight.arr}%` }">{{person.stageScoreMap[stage.name]}}</span>
                <span :style="{ 'width': `${lengthRight.total}%` }">{{person.totalScore}}</span>
              </div>
            </transition-group>
          </div><!-- list-container end -->

        <!-- </my-dv-border12> -->
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
  import initDialog from '../init-dialog';
  import timer from '../timer';
  import dateFormat from '$ui/utils/date';
  import solarLunar from 'solarlunar';
  import storage from '@/helper/storage';
  import { onPause, onStart, onReset } from '@/helper/bus';
  // import {
  //   answerProfile,
  //   totalContestantsNumber,
  //   realTimeDynamic,
  //   rank,
  //   playerIntroduction
  // } from '$my/code/api/dv';
  // } from '@/mock'; // todo
  import api from '@/helper/api';
  import { getImageUrl, filterProvince } from '@/helper/utils';

  const REFRESH_STEPS = window.__GLOBAL__.REFRESH_STEPS;
  // 宽度
  const PERSON_RANK_LIST_WIDTH_DIFF = window.__GLOBAL__.PERSON_RANK_LIST_WIDTH_DIFF;
  // 介绍
  const REFRESH_STEPS_INTRODUCTION = window.__GLOBAL__.REFRESH_STEPS_INTRODUCTION;
  // 答题概况 刷新频率
  const REFRESH_STEPS_ANSWER_PROFILE = window.__GLOBAL__.REFRESH_STEPS_ANSWER_PROFILE;
  // 单人排名列表
  const REFRESH_STEPS_RANK = window.__GLOBAL__.REFRESH_STEPS_RANK;
  // 实时动态
  const REFRESH_STEPS_REALTIME_DYNAMIC = window.__GLOBAL__.REFRESH_STEPS_REALTIME_DYNAMIC;
  const ORG = window.__GLOBAL__.ORG;
  // 个人 比赛宣言 显示
  const SHOW_PERSON_COMPETITION_DECLARATION = window.__GLOBAL__.SHOW_PERSON_COMPETITION_DECLARATION;
  // 个人 实时动态浮框 显示
  const SHOW_PERSON_REAL_TIME_DYNAMIC = window.__GLOBAL__.SHOW_PERSON_REAL_TIME_DYNAMIC;

  export default {
    components: { initDialog, timer },
    data() {
      const form = storage.getForm();
      const timeRange = form.timeRange || [];
      const steps = REFRESH_STEPS; // 刷新频率 *分钟
      return {
        SHOW_PERSON_COMPETITION_DECLARATION,
        SHOW_PERSON_REAL_TIME_DYNAMIC,
        ORG,
        form,
        steps, // 刷新频率 *分钟
        timeStr: [],
        loading: true, // todo
        interval: {
          date: { timer: null },
          // 答题概况
          answerProfile: {
            timer: null,
            time: REFRESH_STEPS_ANSWER_PROFILE, // *分钟 间隔
            // time: 1000 * 2, // test 2秒 间隔
            value1: 0, // 用来叠加，轮询阶段
            value2: 0 // 用来叠加，轮询阶段
          },
          // 单人排名列表
          rank: {
            timer: null,
            time: REFRESH_STEPS_RANK // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
            // value: 0 // 用来叠加，轮询阶段
          },
          // 选手介绍
          playerIntroduction: {
            timer: null,
            time: REFRESH_STEPS_INTRODUCTION, // *分钟 间隔
            // time: 1000 * 2, // test 2秒 间隔
            value: 0, // 用来叠加，轮询阶段
            left: true // 轮询左边还是右边的列表
          },
          // 实时动态
          realTimeDynamic: {
            timer: null,
            time: REFRESH_STEPS_REALTIME_DYNAMIC // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
          }
        },
        countdown: timeRange.length ? (new Date(timeRange[1]) - new Date(timeRange[0])) / 1000 : 3600 * 2, // 秒
        pause: false,
        players: [], // 当前参赛者
        totalPeople: 0, // 参赛总人数
        answerProfileData1: {}, // 答题概况 左边
        answerProfileData2: {}, // 答题概况 右边
        listLeft: [], // 左列表
        listRight: [], // 右列表
        playerIntroductionData: [], // 选手介绍
        realTimeDynamicData: [], // 动态,
        // 动态列表 滚动设置
        classOption: {
          // waitTime: REFRESH_STEPS_REALTIME_DYNAMIC, // ms
          // singleHeight: 145
          limitMoveNum: 5,
          autoPlay: true,
          hoverStop: false
        }
      }
    },
    computed: {
      dateStr() {
        return dateFormat(new Date(), 'yyyy-MM-dd')
      },
      formatDateStr() {
        // return dateFormat(new Date(), 'yyyy年MM月dd日');
        const y = dateFormat(new Date(), 'yyyy');
        const M = dateFormat(new Date(), 'MM');
        const d = dateFormat(new Date(), 'dd');
        return { y, M, d };
      },
      dayStr() {
        return (`星期${['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]}`)
      },
      lunar() {
        const arr = this.dateStr.split('-');

        return solarLunar.solar2lunar(arr[0], arr[1], arr[2]);
      },
      // 左边 阶段 数组
      arrSub1() {
        if (this.form.arrSub && this.form.arrSub.length) {
          return this.form.arrSub.filter(s => s.subject === this.form.subject1);
        } else return [];
      },
      // 右边 阶段 数组
      arrSub2() {
        if (this.form.arrSub && this.form.arrSub.length) {
          return this.form.arrSub.filter(s => s.subject === this.form.subject2);
        } else return [];
      },
      // 长度分配，为列表布局所用
      lengthLeft() {
        const l = this.arrSub1.length;
        const diff = l > 2 ? PERSON_RANK_LIST_WIDTH_DIFF : 0;
        const no = 15 - diff, // 名次
        name = 15 - diff, // 参赛者
        area = 15 - diff, // 地区
        total = 15 - diff; // 总分
        const arr = (100 - no - name - area - total) / l; // 科目*
        return { no, name, area, arr, total };
      },
      lengthRight() {
        const l = this.arrSub2.length;
        const diff = l > 2 ? PERSON_RANK_LIST_WIDTH_DIFF : 0;
        const no = 15 - diff, // 名次
        name = 15 - diff, // 参赛者
        area = 15 - diff, // 地区
        total = 15 - diff; // 总分
        const arr = (100 - no - name - area - total) / l; // 科目*
        return { no, name, area, arr, total };
      }
    },
    destroyed() {
      Object.keys(this.interval).forEach(o => {
        clearInterval(this.interval[o].timer);
        this.interval[o].timer = null;
      });
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
    methods: {
      getImageUrl,
      filterProvince,
      onErrorImg(e, rt) {
        // console.log('图片加载出错', rt);
        rt.img = require('../../assets/img-common/avatar-default.png');
      },
      onShowInit() {
        // const isProd = process.env.NODE_ENV === 'production';
        // this.$refs.initDialog.dialogVisible = isProd;
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
      onScrollEnd() {
        console.log('到底了');
        this.realTimeDynamic();
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
        }, 1000)

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
        this.walkAnswerProfile(); // 答题概况数据 todo 轮询
        this.totalContestantsNumber(); // 参赛人数数据
        this.rank(); // 列表 排名数据 排名的回调中，还会获取 选手介绍 数据
        this.realTimeDynamic(); // 获取实时动态
      },
      // 轮询答题概况
      walkAnswerProfile() {
        // 左边比赛
        this.walkAnswerProfileLeft();
        // 右边比赛
        this.walkAnswerProfileRight();
        // 定时轮询
        this.interval.answerProfile.timer = setInterval(() => {
          this.walkAnswerProfileLeft();
          this.walkAnswerProfileRight();
        }, this.interval.answerProfile.time);
      },
      // 左边比赛
      walkAnswerProfileLeft() {
        const key = 'subject1';
        const keyIds = 'subject1ids';
        this.answerProfile(key, keyIds, '1');
      },
      // 右边比赛
      walkAnswerProfileRight() {
        const key = 'subject2';
        const keyIds = 'subject2ids';
        this.answerProfile(key, keyIds, '2');
      },
      // 答题概况数据
      answerProfile(key, keyIds, leftOrRight) {
        const subject = this.form[key]; // 窝点勘察/检查鉴定
        const ids = this.form[keyIds]; // 窝点勘察ids/检查鉴定ids
        // 左边/右边的阶段数组 [科目一, 科目二...]
        const stage = this.form.arrSub.filter(s => s.subject === subject);
        const random = stage.length ? (this.interval.answerProfile[`value${leftOrRight}`])++ % stage.length : -1;
        if (random === -1) {
          return;
        }
        const query = {
          competitionIds: ids,
          // competitionName: '',
          stageName: stage[random].name
        };
        api.answerProfile(query).then(res => {
          console.log('答题概况数据', res);
          this[`answerProfileData${leftOrRight}`] = res || {}; // todo
        }).catch(e => {
          console.log(e);
        });
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
      // 列表
      rank() {
        // 左列表
        this.rankLeft();
        // 右列表
        this.rankRight();
        this.interval.rank.timer = setInterval(() => {
          this.rankLeft();
          this.rankRight();
        }, this.interval.rank.time);
      },
      rankLeft() {
        api.rank({
          competitionIds: this.form.subject1ids,
          pageNo: 1,
          pageSize: 99999
        }).then(res => {
          if (res.list) { // todo
            this.listLeft = res.list || [];
            if (this.interval.playerIntroduction.timer === null) {
              this.playerIntroduction(); // 通过列表获取选手介绍 todo
            }
          }
        }).catch(e => {
          console.log(e);
        })
      },
      rankRight() {
        api.rank({
          competitionIds: this.form.subject2ids,
          pageNo: 1,
          pageSize: 99999
        }).then(res => {
          console.log('右列表', res);
          if (res.list) { // todo
            this.listRight = res.list || [];
          }
        }).catch(e => {
          console.log(e);
        })
      },
      // 选手介绍
      // 依赖 排名接口
      playerIntroduction() {
        if (!this.listLeft || this.listLeft.length === 0) {
          return;
        }
        const userId = this.listLeft[0].userId; // 唯一调用在左边列表回调中，所以使用左边列表为首项
        this.players.push(userId);
        api.playerIntroduction({ userId }).then(res => {
          this.playerIntroductionData = res; // todo
          if (this.playerIntroductionData) {
            this.playerIntroductionData.img = this.getImageUrl(this.playerIntroductionData.userId);
          }
          this.playerIntroductionData.name = this.listLeft[0].name;
          // console.log('选手介绍', this.playerIntroductionData);
        }).catch(e => {
          console.log(e);
        })
        this.interval.playerIntroduction.timer = setInterval(() => {
          const left = this.interval.playerIntroduction.left;
          const length = left ? this.listLeft.length : this.listRight.length;
          let current = this.interval.playerIntroduction.value;
          if (++current === length) {
            this.interval.playerIntroduction.left = !left;
            this.interval.playerIntroduction.value = 0;
          } else {
            this.interval.playerIntroduction.value = current;
          }

          const temp = left
            ? this.listLeft[this.interval.playerIntroduction.value]
            : this.listRight[this.interval.playerIntroduction.value];
          const userId = temp.userId;
          api.playerIntroduction({ userId }).then(res => {
            console.log('选手介绍', res);
            this.playerIntroductionData = res; // todo
            if (this.playerIntroductionData) {
              this.playerIntroductionData.name = temp.name;
              this.playerIntroductionData.img = this.getImageUrl(this.playerIntroductionData.userId);
            }
          }).catch(e => {
            console.log(e);
          })
        }, this.interval.playerIntroduction.time);
      },
      
      // 实时动态数据 用于展示中间部分，下面的浮框
      realTimeDynamic() {
        api.realTimeDynamic().then(res => {
          // console.log('实时动态数据', res);
          // 条件过滤
          res && (res = res.filter(r => r.continueRight >= this.SHOW_PERSON_REAL_TIME_DYNAMIC));
          if (!res || res.length === 0) return;
          this.realTimeDynamicData = this.realTimeDynamicData.concat([res[0]]);
          if (this.realTimeDynamicData.length) {
            this.realTimeDynamicData.forEach(rt => {
              rt.img = this.getImageUrl(rt.userId);
              rt.show = true;
            });
          }
        }).catch(e => {
          console.log(e);
        });
        this.interval.realTimeDynamic.timer = setInterval(() => {
          api.realTimeDynamic().then(res => {
            // 条件过滤
            res && (res = res.filter(r => r.continueRight >= this.SHOW_PERSON_REAL_TIME_DYNAMIC));
            if (res && res.length) {
              const last = res[res.length - 1];
              last.img = this.getImageUrl(last.userId);
              if (this.realTimeDynamicData.length > 3) {
                this.realTimeDynamicData[0].show = false;
              }
              setTimeout(() => {
                if (this.realTimeDynamicData.length > 3) {
                  this.realTimeDynamicData.shift();
                }
                // this.realTimeDynamicData.push(last);
                this.realTimeDynamicData = this.realTimeDynamicData.concat([last]);
                this.$nextTick(() => {
                  this.realTimeDynamicData.forEach(rt => {
                    rt.show = true;
                  });
                })
              }, 3000);
            }
          }).catch(e => {
            console.log(e);
          });
        }, this.interval.realTimeDynamic.time);
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '@/assets/style/common';

$blueFont: #00ccff;
$lightBlueFont: #00ffff;
$yellowFont: #ffff00;
$titleHeight: 52px;
$blueBg: #3065db; // 列表头 bg、中部浮框 bg
$blueBgOther: #4c8ff5; // 列表头 bg、中部浮框 bg
$lightBlueBg: #4c8ff5; // 列表中 当前答题 的 bg
$listBg: #1d06a8;
// 总分榜，列表item高度
$totalContentItemHeight: 50px;
// 答题概况 高度
$gaikuangH: 270px;


@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin wordBreak {
  overflow: hidden;
  white-space: nowrap; 
  text-overflow:ellipsis;
}

// 省略号
.ellipsis {
  overflow: hidden;
  white-space: nowrap; 
  text-overflow:ellipsis;
}

  // 倒计时
  .countdown-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .countdown {
      $heightCountdown: 60px;
      width: 400px;
      height: $heightCountdown;
      margin: 10px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      // background: $blueFont;
      // color: #035695;
      color: #fff;
      border-radius: 10px;
      font-size: 35px;
      cursor: pointer;
      .part {
        width: 50%;
        height: $heightCountdown;
        line-height: $heightCountdown;
        text-align: right;
        .clock {
          display: inline-block;
          // width: 30px;
          height: 100%;
          @include center;
          .img {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-image: url("../../assets/img-common/clock.png");
            background-size: cover;
            background-position: 0 5px;
          }
        }
      }
      .part2 {
        width: 45%;
        text-align: left;
        margin-top: -5px;
        /deep/ .my-dv-title {
          color: unset;
        }
      }
    }
  }

  // bg
  .bg-container {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img-person/BG.png");
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


  // 答题概况
  .gaikuang {
    height: $gaikuangH;
    background-image: url("../../assets/img-person/person-bs-bg-left.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .top {
      height: 60px;
      display: flex;
      background-image: url("../../assets/img-person/person-bs-title-bg-left.png");
      background-repeat: no-repeat;
      position: relative;
      left: -7px;
      .kemu {
        width: 25%;
        @include center;
        transition: all .5s ease;
      }
      .title { // 窝点勘查
        width: 35%;
        font-size: 38px;
        margin-right: -50px;
        font-family: 'Demo';
        color: #fff;
        @include wordBreak;
        span {
          margin-left: -60px;
        }
      }
      .name {
        width: 25%;
        font-size: 20px;
        background-image: url("../../assets/img-person/person-bs-km.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        margin-right: -25px;
      }
      .active {
        background-image: url("../../assets/img-person/person-bs-km-now.png");
        background-size: 125% 80%;
        color: #ffd801;
        font-weight: bold;
        font-size: 21px;
      }
      .inactive {
        background-image: url("../../assets/img-person/person-bs-km-lock.png");
        background-size: 125% 80%;
      }
    }
    .bottom {
      // height: 140px;
      height: 200px;
      display: flex;
      .left, .right {
        width: 50%;
      }
      .left {
        @include center;
        // background-image: url("../../assets/img-person/person-bs-circle.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        // border-right: 1px solid #013061;
        flex-direction: column;
        font-size: 16px;
        position: relative;
        .circle-bg {
          width: 313px;
          height: 200px;
          position: absolute;
          z-index: -1; // 防止遮蔽数字
          // top: 0;
          // left: 0;
        }
        .text {
          margin-top: -10px;
          font-size: 22px;
        }
        .number {
          margin-top: 15px;
          // font-size: 44px;
          font-size: 33px;
          &>span {
            font-size: 24px;
          }
        }
      }
      .right {
        .online {
          height: 50%;
        }
        .online {
          display: flex;
          .online-img {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .img {
              display: inline-block;
              width: 76px;
              height: 76px;
              background-image: url("../../assets/img-person/person-bs-online.png");
              background-size: contain;
              background-position: right;
              background-repeat: no-repeat;
            }
          }
          .finish-img .img {
            background-image: url("../../assets/img-person/person-bs-done.png");
          }
          .online-text {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            & > div:first-child {
              font-size: 22px;
            }
            & > div:last-child {
              font-size: 30px;
              color: $blueFont;
            }
          }
          .finish-text > div:last-child {
            color: #28d894;
          }
        }
      }
    }
  }
  // 答题概况 - 右边
  .gaikuang-right {
    background-image: url("../../assets/img-person/person-bs-bg-right.png");

    .top {
      background-image: url("../../assets/img-person/person-bs-title-bg-right.png");
    }
  }

  // 列表
  .list-container {
    // $gaikuangH
    height: calc(100% - 270px);
    overflow-y: auto;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    // padding-top: 10px;
    // 分割线
    .dash {
      height: 1px;
      border-bottom: 1px dashed #ccc;
      margin-bottom: 10px;
    }
    .header {
      // background: $blueBg;
      display: flex;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      font-weight: normal;
      span {
        @include wordBreak;
      }
    }
    .content {
      $heightCommon: 30px;
      display: flex;
      height: $heightCommon;
      // line-height: $heightCommon;
      color: #fff;
      margin: 7px 0 0;
      font-size: 18px;
      font-weight: normal;
      // background: $listBg;
      background-image: url("../../assets/img-common/top10.png");
      background-size: 103% 100%;
      background-repeat: no-repeat;
      background-position: center;

      // 前三名样式
      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        $heightTop3: 60px;
        height: $heightTop3;
        line-height: $heightTop3;
        font-size: 20px;
        // 名字
        .name {
          font-size: 20px;
        }
        // 总分
        &>span:last-child {
          font-size: 24px;
        }
      }

      &:nth-child(1) {
        margin: 0;
        background-image: url("../../assets/img-common/top1-1.png");
        background-size: 102% 120%;
        background-repeat: no-repeat;
        &>span:first-child {
          // todo url
          background-image: url("../../assets/img-common/top1-icon.png");
          background-position: center;
          background-size: 90% 100%;
          background-repeat: no-repeat;
        }
      }
      &:nth-child(2) {
        margin: 0;
        background-image: url("../../assets/img-common/top2-1.png");
        background-size: 102% 120%;
        background-repeat: no-repeat;
        &>span:first-child {
          // todo url
          background-image: url("../../assets/img-common/top2-icon.png");
          background-position: center;
          background-size: 90% 100%;
          background-repeat: no-repeat;
        }
      }
      &:nth-child(3) {
        margin: 0;
        // 欠缺图片
        background-image: url("../../assets/img-common/top3-1.png");
        background-size: 102% 120%;
        background-repeat: no-repeat;
        &>span:first-child {
          // todo url
          background-image: url("../../assets/img-common/top3-icon.png");
          background-position: center;
          background-size: 90% 100%;
          background-repeat: no-repeat;
        }
      }

      // 省份
      .province {
        @include wordBreak;
      }

      // 名字
      .name {
        // color: $yellowFont;
        font-weight: bold;
        @include wordBreak;
      }
      // 总分
      &>span:last-child {
        // color: $yellowFont;
        font-weight: bold;
      }
    }

    // 10名以后 的列表
    .content-last {
      background-image: url("../../assets/img-common/top-last.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  // 左右侧的科目 概况等信息
  .subject-container {
    max-height: 150px;
    height: 130px;
    display: flex;

    $subjectsW: 15%;
    $titleW: 55%;
    $numberW: 30%;
    .subjects {
      width: $subjectsW;
      height: 100%;
      color: $blueFont;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & div {
        border: 1px solid $blueFont;
        border-radius: 5px;
        text-align: center;
        margin: 5px 0;
      }
      // todo 有人开始答题了
      & .active {
        color: $yellowFont;
        background: rgb(51, 51, 255);
        border: 1px solid $yellowFont;
      }
      // todo 所有人未开始答题
      & .inactive {
        opacity: .4;
        color: $blueFont;
        border: 1px solid $blueFont;
      }
    }
    .title {
      width: $titleW;
      height: 100%;
      background-image: url("../../assets/images/subject-bg.png");
      background-size: contain;
      background-repeat: no-repeat;
      color: $lightBlueFont;
      font-weight: bold;

      &>div:first-child {
        font-style: italic;
        font-size: 24px;
        margin: 20px 0 0 50px;
      }
      &>div:last-child {
        font-size: 40px;
        text-align: right;
        padding: 20px 50px 0 0;
      }
    }
    .number {
      width: $numberW;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &>div {
        background-image: url("../../assets/images/number-bg.png");
        background-size: contain;
        background-repeat: no-repeat;
        height: 30%;
        /* line-height: 30%; */
        width: 100%;
        text-align: center;
        color: $blueFont;
      }
    }
  }

  // 介绍
  .introduction-container {
    margin: 0 10px 10px;
    padding: 0 10px;
    // background: #0161c6;
    background-image: url("../../assets/img-person/person-introduction-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    // border: 2px solid $lightBlueFont;
    border-radius: 5px;
    .title {
      width: 56%;
      height: 50px;
      line-height: 40px;
      margin: 0 auto 50px;
      // background-image: url("../../assets/images/intro-bg.png");
      background-size: cover;
      background-repeat: no-repeat;
      text-align: center;
    }
    .introduction-content {
      display: flex;
      padding-bottom: 10px;
      .left {
        width: 30%;
        @include center;

        .image-wrap {
          width: 120px;
          height: 150px;
          // border: 2px solid #ddd;
          border-radius: 5px;
          background-image: url("../../assets/images/avatar-bg.png");
          background-size: 130% 122%;
          background-position: center;
          @include center;
          .img {
            width: 96%;
            height: 96%;
            background-image: url("../../assets/img-common/avatar-default.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }

      .right {
        width: 70%;
        padding: 0 10px;
        .province {
          margin: 10px 0;
          color: #fff;
          & > span:first-child {
            font-size: 20px;
            font-weight: bold;
            // 姓名
            & > span:first-child {
              font-size: 28px;
            }
            // 省
            & > span:last-child {
              color: $blueFont;
              margin-left: 20px;
              font-size: 28px;
            }
          }
          & > span:last-child {
            font-size: 16px;
            font-weight: normal;
          }
        }
        .common {
          margin: 20px 0;
          p { margin: 10px 0; }
          & p:first-child {
            color: $lightBlueFont;
            font-size: 22px;
            font-weight: bold;
            max-height: 64px;
            overflow: hidden;
          }
          & p:last-child {
            font-size: 20px;
          }
        }
      }
    }
  }

  // 浮框
  .float-container {
    max-height: 555px;
    // overflow-y: auto;
    overflow: hidden;
    .wdkc {
      float: left;
      // background: $blueBg;
      background-image: url("../../assets/img-person/person-fk-bg-left.png");
      // background-size: 120% 170%;
      background-size: 108% 124%;
      background-repeat: no-repeat;
      background-position: center;

      .tag {
        background: $blueBg;
        & span:first-child {
          background-image: url("../../assets/images/title-logo-1.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .type {
        color: #00ffba;
        left: 12px;
      }
    }
    .jcjd {
      float: right;
      // background: $blueBgOther;
      background-image: url("../../assets/img-person/person-fk-bg-right.png");
      background-size: 108% 125%;;
      background-repeat: no-repeat;
      background-position: center;
      .tag {
        background: $blueBgOther;
        & span:first-child {
          background-image: url("../../assets/images/title-logo-2.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .type {
        color: #c3a9ff;
        right: 12px;
      }
    }
    .float-item {
      width: 65%;
      height: 130px;
      opacity: .8;
      border-radius: 5px;
      margin: 5px 10px;
      padding: 5px;
      position: relative;

      // 虚线
      // &::after {
      //   $h: 100px;
      //   content: "";
      //   position: absolute;
      //   bottom: -$h;
      //   left: 50%;
      //   height: $h;
      //   border-right: 3px dashed $yellowFont;
      // }

      // &:nth-child(even) {
      //   float: left;
      // }
      // &:nth-child(odd) {
      //   float: right;
      // }

      .tag {
        width: 120px;
        // height: 50px;
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        & span:first-child {
          display: inline-block;
          width: 25px;
          height: 25px;
        }
      }
      // 窝点勘查
      .type {
        position: absolute;
        bottom: 12px;
        font-size: 20px;
      }
      .content {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          width: 70px;
          height: 80px;
          background-image: url("../../assets/img-common/avatar-default-1.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .name-rank {
          min-width: 90px;
          margin: 0 5px 0 10px;
          .name {
            font-size: 25px;
            color: #fff;
          }
          .rank {
            color: rgb(179, 196, 245);
            font-size: 18px;
            margin-top: 10px;
          }
        }
        .time-correct {
          padding-right: 5px;
          text-align: right;
          height: 100%;
          .time {
            color: #fff;
            margin: 5px 0;
          }
          .correct {
            font-size: 20px;
            color: #ffe400;
            white-space: nowrap;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          font-size: 20px;
          color: $yellowFont;
          & span:last-child {
            color: #fff;
          }
          &>span {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  // 动画
  .list-complete-item {
    transition: all .6s;
    /* display: inline-block; */
    margin-right: 10px;
  }
  /* .list-complete-leave-active for below version 2.1.8 */ 
  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-to {
    transition: all .3s;
  }
  .list-complete-leave-active {
    position: absolute;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 1.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(50px) translateY(-30px) scale(0.1);
    opacity: 0;
  }
</style>
