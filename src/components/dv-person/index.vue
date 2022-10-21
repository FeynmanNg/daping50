<template>
  <my-dv-page v-bind="$attrs">
    <my-dv-starry :opacity="0.4"></my-dv-starry>

    <my-dv-header5>
      <span class="competitors-total">参赛总人数：{{totalPeople || 0}}人</span>
      <my-dv-title type="primary" strong shadow x-align="center">{{form.title}}</my-dv-title>
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
      <!-- 左侧 窝点勘察 -->
      <my-dv-box layout :gap="10" height="100%">
        <my-dv-border12 width="100%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
              <div class="title-container">
                <span class="title-logo title-logo-1"></span>
                <span class="total-score">{{form.subject1}}</span>
              </div>
            </my-dv-adorn7>
          </div>
          <div class="subject-container">
            <div class="subjects">
              <div
                v-for="(sub, i) in arrSub1"
                :key="i"
                :class="{
                  'active': (interval.answerProfile.value1 + 1) % arrSub1.length === i,
                  'inactive': answerProfileData1.onlineNumber === 0
                }">
                {{sub.name}}
              </div>
              <!-- test 下为展示用 -->
              <!-- <div>科目一</div>
              <div class="active">科目二</div>
              <div class="inactive">科目三</div> -->
            </div>
            <div class="title">
              <div>答题概况</div>
              <div>{{answerProfileData1.stageName || '加载中'}}</div>
            </div>
            <div class="number">
              <div>在考人：{{answerProfileData1.onlineNumber || 0}} 人</div>
              <div>已完成：{{answerProfileData1.finishedNumber || 0}} 人</div>
              <div>准确率：{{answerProfileData1.accuracyRate || 0}}</div>
            </div>
          </div>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <!-- 列表 -->
          <div class="list-container">
            <!-- 表头 -->
            <div class="header">
              <span style="width: 10%">名次</span>
              <span style="width: 10%">名字</span>
              <span style="width: 15%">省份</span>
              <!-- todo 注意科目数量 平分总宽度的 55% -->
              <span
                v-for="(stage, i) in arrSub1"
                :key="i"
                :style="{ width: `${55 / arrSub1.length}%` }">{{stage.name}}</span>
              <!-- <span style="width: 10%">科目一</span>
              <span style="width: 10%">科目二</span>
              <span style="width: 10%">科目三</span>
              <span style="width: 10%">科目四</span> -->
              <span style="width: 10%">总分</span>
            </div>
            <!-- 表内容 -->
            <!-- 前10名 -->
            <!-- todo 循环时注意：用类名实现1、3名的排名黄底渐变 -->
            <transition-group name="list-complete">
              <div
                class="content list-complete-item"
                v-for="(person, i) in listLeft"
                v-show="i < 10"
                :key="person.userId">
                <span style="width: 10%">{{person.rankNo}}</span>
                <span class="name" style="width: 10%">{{person.name}}</span>
                <span class="province" style="width: 15%">{{person.province}}</span>
                <!-- todo 注意科目数量 start -->
                <span
                  :class="{ 'score': true, 'active': i === arrSub1.length - 1 }"
                  v-for="(stage, i) in arrSub1"
                  :key="stage.name + i"
                  :style="{ width: `${55 / arrSub1.length}%` }">{{person.stageScoreMap[stage.name]}}</span>
                <!-- todo 注意科目数量 end -->
                <span style="width: 10%">{{person.totalScore}}</span>
              </div>
            </transition-group>
            <div class="dash"></div>
            <!-- 10名 以后 -->
            <transition-group name="list-complete" v-if="listLeft && listLeft.length">
              <div
                class="content-last list-complete-item"
                v-for="(person, i) in listLeft"
                v-show="i >= 10"
                :key="person.userId">
                <span style="width: 10%">{{person.rankNo}}</span>
                <span class="name" style="width: 10%">{{person.name}}</span>
                <span class="province" style="width: 15%">{{person.province}}</span>
                <!-- todo 注意科目数量 start -->
                <span
                  :class="{ 'score': true, 'active': i === arrSub1.length - 1 }"
                  v-for="(stage, i) in arrSub1"
                  :key="stage.name + i"
                  :style="{ width: `${55 / arrSub1.length}%` }">{{person.stageScoreMap[stage.name]}}</span>
                <!-- todo 注意科目数量 end -->
                <span style="width: 10%">{{person.totalScore}}</span>
              </div>
            </transition-group>
          </div><!-- list-container end -->
        </my-dv-border12>

      </my-dv-box>

      <!-- 中 选手介绍 -->
      <my-dv-border12 height="100%" :weight="1" fill="rgba(255,255,255,0.05)">
        <my-dv-box layout direction="column" top="20px" width="100%">
          <my-dv-box height="100px">
            <!-- 倒计时 -->
            <div style="width: 100%;display: flex;justify-content: center;flex-direction: column;">
              <div class="countdown-container">
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
            </div>
            <!-- 介绍 -->
            <div class="introduction-container"  v-if="playerIntroductionData && playerIntroductionData.length">
              <div class="title">选手介绍</div>
              <div class="introduction-content">
                <div class="left">
                  <div class="image-wrap">
                    图片
                    <!-- <img class="img" src="" alt="人员图片"> -->
                  </div>
                </div>
                <div class="right">
                  <div class="province">
                    <!-- <span>张三【广东省】</span> -->
                    <span>{{playerIntroductionData[0].name}}【{{playerIntroductionData[0].province}}】</span>
                    <span>当前排名：{{playerIntroductionData[0].rankNo}}</span>
                  </div>
                  <div class="common">
                    <p>人员简介：</p>
                    <p>{{playerIntroductionData[0].personnel}}</p>
                    <!-- <p>人员简介人员简介人员简介人员简介</p> -->
                  </div>
                  <div class="common">
                    <p>比赛宣言：</p>
                    <p>{{playerIntroductionData[0].competitionDeclaration}}</p>
                    <!-- <p>比赛宣言比赛宣言比赛宣言比赛宣言比赛宣言</p> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- 浮框 -->
            <div class="float-container">
              <!-- 窝点勘察 -->
              <transition-group name="list-complete"  v-if="realTimeDynamicData && realTimeDynamicData.length">
                <div
                  v-for="(item) in realTimeDynamicData" :key="item.userId"
                  :class="{
                    'list-complete-item': true,
                    'float-item': true,
                    'wdkc': form.subject1ids.indexOf(item.competitionId) >= 0,
                    'jcjd': form.subject1ids.indexOf(item.competitionId) < 0
                  }">
                  <div class="tag">
                    <span></span>
                    <span>{{form.subject1ids.indexOf(item.competitionId) >= 0 ? form.subject1 : form.subject2}}</span>
                    <!-- <span>窝点勘察</span> -->
                  </div>
                  <div class="content">
                    <div class="img"></div>
                    <div class="text">
                      <span>{{item.userName}}：答对1题！</span>
                      <span>已连续答对{{item.continueRight}}题！</span>
                      <span>{{item.recordTime}}</span>
                    </div>
                  </div>
                </div>
              </transition-group>              
            </div>
          </my-dv-box>
        </my-dv-box>
        <my-dv-loading v-if="loading"></my-dv-loading>
      </my-dv-border12>

      <!-- 右侧 检查鉴定 -->
      <my-dv-box layout :gap="10" height="100%">
        <my-dv-border12 width="100%" fill="rgba(255,255,255,0.05)">
          <div class="title-bg">
            <my-dv-adorn7 x-align="center">
              <div class="title-container">
                <span class="title-logo title-logo-2"></span>
                <span class="total-score">{{form.subject2}}</span>
              </div>
            </my-dv-adorn7>
          </div>
          <div class="subject-container">
            <div class="subjects" v-if="arrSub2 && arrSub2.length">
              <div
                v-for="(sub, i) in arrSub2"
                :key="i"
                :class="{
                  'active': interval.answerProfile.value2 % arrSub2.length === i,
                  'inactive': answerProfileData2.onlineNumber === 0
                }">
                {{sub.name}}
              </div>
              <!-- <div>科目一</div>
              <div class="active">科目二</div>
              <div class="inactive">科目三</div> -->
            </div>
            <div class="title" v-if="answerProfileData2">
              <div>答题概况</div>
              <div>{{answerProfileData2.stageName || '加载中'}}</div>
            </div>
            <div class="number">
              <div>在考人：{{answerProfileData2.onlineNumber || 0}} 人</div>
              <div>已完成：{{answerProfileData2.finishedNumber || 0}} 人</div>
              <div>准确率：{{answerProfileData2.accuracyRate || 0}}</div>
            </div>
          </div>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <!-- 列表 -->
          <div class="list-container" v-if="listRight && listRight.length">
            <!-- 表头 -->
            <div class="header" v-if="arrSub2 && arrSub2.length">
              <span style="width: 10%">名次</span>
              <span style="width: 10%">名字</span>
              <span style="width: 15%">省份</span>
              <!-- todo 注意科目数量 平分总宽度的 55% -->
              <span
                v-for="(stage, i) in arrSub2"
                :key="i"
                :style="{ width: `${55 / arrSub2.length}%` }">{{stage.name}}</span>
              <!-- <span style="width: 10%">科目一</span>
              <span style="width: 10%">科目二</span>
              <span style="width: 10%">科目三</span>
              <span style="width: 10%">科目四</span> -->
              <span style="width: 10%">总分</span>
            </div>
            <!-- 表内容 -->
            <!-- 前10名 -->
            <transition-group name="list-complete" v-if="listRight && listRight.length">
              <div
                class="content list-complete-item"
                v-for="(person, i) in listRight"
                v-show="i < 10"
                :key="person.userId">
                <span style="width: 10%">{{person.rankNo}}</span>
                <span class="name" style="width: 10%">{{person.name}}</span>
                <span class="province" style="width: 15%">{{person.province}}</span>
                <!-- todo 注意科目数量 start -->
                <!-- todo active 类如何给，需求：提交了的后一阶段给 active -->
                <span
                  :class="{
                    'score': true,
                    'active': false
                  }"
                  v-for="(stage, i) in arrSub2"
                  :key="stage.name + i"
                  :style="{ width: `${55 / arrSub2.length}%` }">{{person.stageScoreMap[stage.name]}}</span>
                <!-- todo 注意科目数量 end -->
                <span style="width: 10%">{{person.totalScore}}</span>
              </div>
            </transition-group>
            <div class="dash"></div>
            <!-- 10名 以后 -->
            <transition-group name="list-complete" v-if="listRight && listRight.length">
              <div
                class="content-last list-complete-item"
                v-for="(person, i) in listRight"
                v-show="i >= 10"
                :key="person.userId">
                <span style="width: 10%">{{person.rankNo}}</span>
                <span class="name" style="width: 10%">{{person.name}}</span>
                <span class="province" style="width: 15%">{{person.province}}</span>
                <!-- todo 注意科目数量 start -->
                <span
                  :class="{ 'score': true, 'active': i === arrSub2.length - 1 }"
                  v-for="(stage, i) in arrSub2"
                  :key="stage.name + i"
                  :style="{ width: `${55 / arrSub2.length}%` }">{{person.stageScoreMap[stage.name]}}</span>
                <!-- todo 注意科目数量 end -->
                <span style="width: 10%">{{person.totalScore}}</span>
              </div>
            </transition-group>
          </div><!-- list-container end -->
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
  import initDialog from '../init-dialog';
  import dateFormat from '$ui/utils/date';
  import solarLunar from 'solarlunar';
  import storage from '@/helper/storage';
  import { onPause, onStart, onReset } from '@/helper/bus';
  import {
    answerProfile,
    totalContestantsNumber,
    realTimeDynamic,
    rank,
    playerIntroduction
  } from '$my/code/api/dv';

  const REFRESH_STEPS = window.__GLOBAL__.REFRESH_STEPS;

  export default {
    components: { initDialog },
    data() {
      const form = storage.getForm();
      const timeRange = form.timeRange || [];
      const steps = REFRESH_STEPS; // 刷新频率 *分钟
      return {
        form,
        steps, // 刷新频率 *分钟
        timeStr: [],
        loading: true, // todo
        interval: {
          date: { timer: null },
          answerProfile: {
            timer: null,
            time: steps, // *分钟 间隔
            // time: 1000 * 2, // test 2秒 间隔
            value1: 0, // 用来叠加，轮询阶段
            value2: 0 // 用来叠加，轮询阶段
          },
          rank: {
            timer: null,
            time: steps // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
            // value: 0 // 用来叠加，轮询阶段
          },
          playerIntroduction: {
            timer: null,
            time: steps, // *分钟 间隔
            // time: 1000 * 2, // test 2秒 间隔
            value: 0, // 用来叠加，轮询阶段
            left: true // 轮询左边还是右边的列表
          },
          realTimeDynamic: {
            timer: null,
            time: steps // *分钟 间隔
            // time: 1000 * 2 // test 2秒 间隔
          }
        },
        countdown: timeRange.length ? (new Date(timeRange[1]) - new Date(timeRange[0])) / 1000 : 3600 * 2, // 秒
        pause: false,
        totalPeople: 0, // 参赛总人数
        answerProfileData1: {}, // 答题概况 左边
        answerProfileData2: {}, // 答题概况 右边
        listLeft: [], // 左列表
        listRight: [], // 右列表
        playerIntroductionData: [], // 选手介绍
        realTimeDynamicData: [] // 动态
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
      // this.init();
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

          // 修正倒计时
          if (endD - now) { // 未到结束时间
            if (now - startD) { // 到达开始时间
              this.countdown = (endD - now) / 1000;
              // console.log('修正倒计时', this.countdown, startD, endD, now);
            }
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
        answerProfile(query).then(res => {
          console.log('答题概况数据', res);
          this[`answerProfileData${leftOrRight}`] = res; // todo
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
        totalContestantsNumber(query).then(res => {
          console.log('参赛人数数据', res);
          this.totalPeople = res; // todo
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
        rank({
          competitionIds: this.form.subject1ids,
          pageNo: 1,
          pageSize: 15
        }).then(res => {
          console.log('左列表', res);
          if (res.list) { // todo
            this.listLeft = res.list || [];
            if (this.interval.playerIntroduction.timer === null) {
              this.playerIntroduction(); // 通过列表获取选手介绍
            }
          }
        }).catch(e => {
          console.log(e);
        })
      },
      rankRight() {
        rank({
          competitionIds: this.form.subject2ids,
          pageNo: 1,
          pageSize: 15
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
        const userId = this.listLeft[0].userId; // 唯一调用在左边列表回调中，所以使用左边列表为首项
        playerIntroduction({ userId }).then(res => {
          this.playerIntroductionData = res; // todo
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
          playerIntroduction({ userId }).then(res => {
            console.log('选手介绍', res)
            this.playerIntroductionData = res; // todo
            this.playerIntroductionData.name = temp.name;
          }).catch(e => {
            console.log(e);
          })
        }, this.interval.playerIntroduction.time);
      },
      
      // 实时动态数据 用于展示中间部分，下面的浮框
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
      }
    }
  }
</script>
<style lang="scss" scoped>
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

  // 科目标题
  .title-bg {
    background-image: url("../../assets/images/subject-title-bg.png");
    background-size: cover;
    height: $titleHeight;
    display: flex;
    align-items: center;
    justify-content: center;

    .title-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .title-logo {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: cover;
      }
      .title-logo-1 {
        background-image: url("../../assets/images/title-logo-1.png");
        // background-size: cover;
      }

      .title-logo-2 {
        background-image: url("../../assets/images/title-logo-2.png");
        // background-size: cover;
      }
      .total-score {
        font-size: 23px;
        color: $lightBlueFont;
      }
    }
  }

  // 列表
  .list-container {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    // 分割线
    .dash {
      height: 1px;
      border-bottom: 1px dashed #ccc;
      margin-bottom: 10px;
    }
    .header {
      background: $blueBg;
      display: flex;
      height: 30px;
      line-height: 30px;
    }
    .content {
      display: flex;
      height: 35px;
      line-height: 35px;
      margin: 10px 0;
      background: $listBg;

      // 在答题
      span.active {
        background: $lightBlueBg;
        // color: #fff;
      }

      // 前三名样式
      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        color: $yellowFont;
        span:first-child {
          font-size: 30px;
        }
      }
      
      // 第一、三名的名次 todo 用类名实现
      &:nth-child(1), &:nth-child(3) {
        span:first-child {
          background: linear-gradient(90deg, #ffff00, transparent);
        }
      }
      // todo
      .no-1-and-3 {
        background: linear-gradient(90deg, #ffff00, transparent);
      }

      // 省份
      .province {
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
      }

      // 分数
      .score {
        color: #fff;
      }
      // 名字
      .name {
        color: $yellowFont;
      }
      // 总分
      &>span:last-child {
        color: $yellowFont;
      }
    }

    // 10名以后 的列表
    .content-last {
      display: flex;
      height: 35px;
      line-height: 35px;
      margin: 10px 0;
      background: $listBg;

      // 在答题
      span.active {
        background: $lightBlueBg;
        // color: #fff;
      }

      // 省份
      .province {
        overflow: hidden;
        white-space: nowrap; 
        text-overflow:ellipsis;
      }

      // 分数
      .score {
        color: #fff;
      }
      // 名字
      .name {
        color: $yellowFont;
      }
      // 总分
      &>span:last-child {
        color: $yellowFont;
      }
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
    margin: 20px 10px 10px;
    background: #0161c6;
    border: 2px solid $lightBlueFont;
    border-radius: 5px;
    .title {
      width: 56%;
      height: 50px;
      line-height: 40px;
      margin: 0 auto 10px;
      background-image: url("../../assets/images/intro-bg.png");
      background-size: cover;
      background-repeat: no-repeat;
      text-align: center;
    }
    .introduction-content {
      display: flex;
      padding-bottom: 10px;
      .left {
        width: 30%;
        display: flex;
        justify-content: center;

        .image-wrap {
          width: 120px;
          height: 150px;
          border: 2px solid #ddd;
          border-radius: 5px;
        }
      }

      .right {
        width: 70%;
        padding: 0 10px;
        .province {
          color: #fff;
          & span:first-child {
            font-size: 20px;
            font-weight: bold;
          }
          & span:last-child {
            font-size: 16px;
            font-weight: normal;
          }
        }
        .common {
          margin: 10px 0;
          p { margin: 0; }
          & p:first-child {
            color: $lightBlueFont;
            font-size: 20px;
            font-weight: bold;
          }
          & p:last-child {
            font-size: 18px;
          }
        }
      }
    }
  }

  // 浮框
  .float-container {
    .wdkc {
      background: $blueBg;
      .tag {
        background: $blueBg;
        & span:first-child {
          background-image: url("../../assets/images/title-logo-1.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
    .jcjd {
      background: $blueBgOther;
      .tag {
        background: $blueBgOther;
        & span:first-child {
          background-image: url("../../assets/images/title-logo-2.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }
    .float-item {
      width: 60%;
      opacity: .8;
      border-radius: 5px;
      margin: 5px 10px;
      padding: 5px;
      position: relative;

      &::after {
        $h: 100px;
        content: "";
        position: absolute;
        bottom: -$h;
        left: 50%;
        height: $h;
        border-right: 3px dashed $yellowFont;
      }

      &:nth-child(even) {
        float: left;
      }
      &:nth-child(odd) {
        float: right;
      }

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
      .content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .img {
          width: 60px;
          height: 70px;
          background-image: url("../../assets/images/avatar.png");
          background-size: contain;
          background-repeat: no-repeat;
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
    transition: all 1s;
    /* display: inline-block; */
    margin-right: 10px;
  }
  /* .list-complete-leave-active for below version 2.1.8 */ 
  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>
