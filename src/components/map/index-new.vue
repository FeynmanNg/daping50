<template>
  <div class="map-new-container">
    <!-- 循环 -->
    <!-- 包括柱子、弹框 -->
    <!-- 柱子数据来自 总分榜 -->
    <!-- 弹框数据来自 实时动态 -->
    <!-- 数据类型：左边绿色（如窝点勘查）、右边紫色（如检查鉴定） -->
    <!-- 根据不同省份的数据，调节如广东 .guangdong、.modal、.bar-box、.province 的定位 -->
    <!-- demo -->
    <div
      v-if="false"
      :class="{ base: 1, guangdong: 1 }">
      <!-- todo 上面 省份的类名要匹配 -->
      <!-- todo 下面 类型的类名要匹配 .modal-left .modal-right 更换背景图片绿色/紫色 -->
      <div>
        <div
          :key="'1'"
          :class="{ modal: 1, 'modal-left': 1, 'modal-right': 0 }"
          >
          <!-- :style="`top: ${2}px;`"> -->
          <!-- todo 上面的 top 需要计算，范围是 [0, a] a= .bar高度的范围差 -->
          <!-- todo 如 .bar height=[60, 150] 即 a=[0, -90]，往上移动即负值 -->
          <div class="type">窝点勘查</div>
          <div class="content">
            <div class="img"></div>
            <div class="name-rank">
              <div class="name">周星星</div>
              <div class="rank">排名第 134</div>
            </div>
            <div class="time">13:33:24</div>
            <div class="text">答对+1！连续答对5题！</div>
          </div>
        </div>
        <div class="bar-box">
          <div class="triangle triangle-left"></div>
          <div class="bar bar-left"></div>
        </div>
      </div>
      <div class="province">
        <div>325</div>
        <div>广东广东</div>
      </div>
    </div>


    <div v-if="rank && rank.length">
      <transition-group name="slide-fade">
        <div
          v-for="item in rank"
          :key="item.province"
          :class="{ base: 1, [item.provincesClassName]: 1 }"
          >
          <div v-for="rt in realTimeDynamicData" :key="rt.province">
            <div
              v-if="rt.province === item.province"
              :class="{
                'modal': 1,
                'modal-left': rt.competitionType.left,
                'modal-right': rt.competitionType.right
              }"
              :style="`top: ${calculateTop(item.value)}px;`">
              <div class="type">
                {{rt.competitionType.left ? form.subject1 : form.subject2}}
              </div>
              <div class="content">
                <div class="img">
                  <img :src="getImageUrl(rt.userId)" style="width: 100%; height: 100%" />
                </div>
                <div class="name-rank">
                  <div class="name">{{item.userName}}</div>
                  <div class="rank">排名第 {{item.rankNo}}</div>
                </div>
                <div class="time">{{item.recordTime}}</div>
                <div class="text">答对+1！连续答对{{item.continueRight}}题！</div>
              </div>
            </div>
            <div class="bar-box">
            <div
              :class="{
                'triangle': 1,
                'triangle-left': rt.competitionType.left,
                'triangle-right': rt.competitionType.right,
              }"></div>
            <div
              :class="{
                'bar': 1,
                'bar-left': rt.competitionType.left,
                'bar-right': rt.competitionType.right
              }"
              :style="`height: ${item.value}px;`">
              </div>
            </div>
          </div>
          <div class="province">
            <div>{{item.value}}</div>
            <div>{{item.province}}</div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import PROVINCE from './province';
import { getImageUrl } from '../../helper/image';

export default {
  props: {
    rank1Data: {
      type: Array,
      default: () => []
    },
    realTimeDynamicData: {
      type: Array,
      default: () => []
    },
    form: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    provinces() {
      return Object.keys(PROVINCE.keysZh);
    },
    provincesClassName() {
      return PROVINCE.keys;
    }
  },
  watch: {
    rank1Data() {
      this.validForm() && this.assembleRank();
    },
    realTimeDynamicData() {
      this.validForm() && this.assembleBar();
    }
  },
  data() {
    return {
      max: 150,
      equator: 60,
      rank: [], // 展示 div.province 和 div.bar-box
      realTimeDynamic: [] // 展示 .modal
    }
  },
  mounted() {
    console.log('地图 全国', this.rank1Data);
    console.log('地图 动态', this.realTimeDynamicData);
    this.init();
  },
  methods: {
    getImageUrl,
    init() {
      if (this.form && this.form.subject1ids && this.form.subject2ids) {
        this.assembleRank();
        this.assembleBar();
      }
    },
    // 全国数据
    assembleRank() {
      if (this.rank1Data && this.rank1Data.length) {
        this.rank = this.provinces.map(p => {
          const exist = this.rank1Data
            .find(r => this.valid(p, r.province));
          return {
            province: p,
            provinceClassName: this.provincesClassName[p],
            value: exist ? exist.totalScore : -1,
            rankNo: exist ? exist.rankNo : -1
          }
        })
      }
    },
    assembleBar() {
      if (this.realTimeDynamicData && this.realTimeDynamicData.length) {
        this.realTimeDynamic = this.provinces.map(p => {
          const exist = this.realTimeDynamicData
            .find(r => this.valid(p, r.province));
          return {
            province: p,
            value: exist ? exist.continueRight : -1, // 连续答题
            userName: exist.userName,
            recordTime: exist.recordTime,
            competitionId: exist.competitionId, // 用来展示是 哪个比赛
            competitionType: this.validCompetitionType(exist.competitionId)
          }
        })
      }
    },
    // 判断省 是否存在
    valid(a, b) {
      return a.indexOf(b) >= 0 || b.indexOf(a) >= 0;
    },
    validForm() {
      return this.form && this.form.subject1ids && this.form.subject2ids;
    },
    // 判断比赛类型：左/右
    validCompetitionType(id) {
      return {
        left: this.form.subject1ids.indexOf(id) >= 0,
        right: this.form.subject2ids.indexOf(id) >= 0
      }
    },
    /**
     * 计算 modal 的 top 值
     * .bar 的 height 因数据改变而设置，min-20 max-150
     * .modal 的 top 因前者修改而改变
     * 以 60 为分界：
     * height <= 60 , top 正数
     * height > 60 , top 负数
     */
    calculateTop(value) {
      const rank = this.rank.reduce((c, n) => c.value > n.value ? c : n);
      const diff = value / rank.value;
      
      const result = this.max * diff;

      return result > this.equator ? -(result) : result;
    },
    calculateHeight(value) {
      return value > this.max ? this.max : value;
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/style/common';
@import '@/assets/style/map';

// $blue: #00ffba;
// $purple: #c3a9ff;
$blueFont: #00ccff;
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin centerVertical {
  @include center;
  flex-direction: column;
}
@mixin wordBreak {
  width: 100%;
  overflow: hidden;
  white-space: nowrap; 
  text-overflow:ellipsis;
}

.map-new-container {
  // 最大宽度 796
  // 最大高度 967
  width: 100%;
  height: 100%;
  // 弹框的整体
  .base {
    width: 400px;
    min-height: 284px;
    max-height: 384px;
    position: absolute;

    // 省、人数
    .province {
      position: absolute;
      left: 124px;
      bottom: -10px;

      width: 100px;
      height: 68px;
      text-align: center;
      padding: 2px;
      background: radial-gradient(40% 50%, $blueFont, transparent);
      border-radius: 50%;
      color: #fff;
      @include centerVertical;
      & div {
        @include wordBreak;
        color: #fff;
        font-weight: bold;
        &:first-child { // 分数
          
        }
        &:last-child { // 省
        }
      }
    }
    // 柱子+三角形
    .bar-box {
      position: absolute;
      bottom: 48px;

      $barBoxW: 30px;
      // 柱子
      .bar {
        width: $barBoxW;
        min-height: 20px;
        max-height: 150px;
        background-image: url("../../assets/img-team/team-bar-green.png");
        background-size: 150% 120%;
        background-repeat: no-repeat;
        background-position: center;
        &.bar-top1 {
          background-image: url("../../assets/img-team/team-bar-top1.png");
        }
        &.bar-top2 {
          background-image: url("../../assets/img-team/team-bar-top2.png");
        }
        &.bar-top3 {
          background-image: url("../../assets/img-team/team-bar-top3.png");
        }
      }
      // 三角形
      .triangle {
        width: $barBoxW;
        height: $barBoxW;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        &.triangle-left {
          background-image: url("../../assets/img-team/team-triangle-green.png");
        }
        &.triangle-right {
          background-image: url("../../assets/img-team/team-triangle-purple.png");
        }
      }
    }
    // 弹框
    .modal {
      width: 400px;
      height: 150px;
      background-size: 107% 123%;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;

      // 此值计算：.bar 的最小高度以 60px为标准
      // 当 .bar min-h=60px top=0px
      // 当 .bar min-h=20px top=40px
      top: 40px;

      &.modal-left {
        background-image: url("../../assets/img-team/team-fk-left.png");
        .type {
          color: $blue;
        }
      }
      &.modal-right {
        background-image: url("../../assets/img-team/team-fk-right.png");
        .type {
          color: $purple;
        }
      }
      .type {
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-left: 20px;
        &.left {
          color: $blue;
        }
        &.right {
          color: $purple;
        }
      }
      .content {
        height: 90px;
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          width: 70px;
          height: 90px;
          background-image: url("../../assets/images/avatar.png");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .name-rank {
          min-width: 90px;
          height: 100%;
          margin: 0 5px 0 10px;
          @include centerVertical;
          
          .name {
            font-size: 25px;
            color: #fff;
          }
          .rank {
            color: #b3c4f5;
            font-size: 18px;
            margin-top: 10px;
          }
        }
        .text {
          max-width: 200px;
          font-size: 20px;
          color: #ffe400;
        }
        .time {
          position: absolute;
          right: 15px;
          top: 50px;
        }
      }
    }
  }

  // --------------- 分类 start ---------------
  // 广东
  // .guangdong {
  //   position: absolute;
  //   top: 488px;
  //   left: 400px;
  //   .bar-box {
  //     left: 160px;
  //     top: 150px;
  //   }
  // }
  // --------------- 分类 start ---------------

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
} // .map-new-container end 最外层
</style>