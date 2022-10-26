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
      :class="{ base: 1, heilongjiang: 1 }">
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
      <!-- <transition-group name="slide-fade"> -->
        <div
          v-for="item in rank"
          :key="item.province"
          :class="{ 'base': 1, [item.provinceClassName]: 1 }">
          <!-- 弹框 -->
          <transition name="slide-fade">
            <div
              v-if="item.rt && item.rt.show"
              :class="{
                'modal': 1,
                'modal-left': item.rt.competitionType.left,
                'modal-right': item.rt.competitionType.right
              }"
              :style="`bottom: ${calculateTop(item.value)}px;`">
              <div class="type">
                {{item.rt.competitionType.left ? form.subject1 : form.subject2}}
              </div>
              <div class="content">
                <div class="img">
                  <img :src="getImageUrl(item.rt.userId)" style="width: 100%; height: 100%" />
                </div>
                <div class="name-rank">
                  <div class="name">{{item.rt.userName}}</div>
                  <div class="rank">排名第 {{item.rankNo}}</div>
                </div>
                <div class="time">{{item.recordTime}}</div>
                <div class="text">答对+1！连续答对{{item.rt.value}}题！</div>
              </div>
            </div>
          </transition>
          <div class="bar-box">
            <!-- 皇冠 -->
            <div
              v-if="isTop(item.value)"
              :class="{
                'tag': 1,
                'tag-top1': calculateTop1(item.value),
                'tag-top2': calculateTop2(item.value),
                'tag-top3': calculateTop3(item.value)
              }">
            </div>
            <!-- 三角 -->
            <div
              v-if="item.rt"
              :class="{
                'triangle': 1,
                'triangle-left': item.rt && item.rt.competitionType.left,
                'triangle-right': item.rt && item.rt.competitionType.right,
              }">
            </div>
            <!-- 柱子 -->
            <div
              :class="{
                'bar': 1,
                'bar-top1': calculateTop1(item.value),
                'bar-top2': calculateTop2(item.value),
                'bar-top3': calculateTop3(item.value)
              }"
              :style="`height: ${calculateHeight(item.value)}px;`">
            </div>
          </div>
          <!-- </div> -->
          <!-- 省份/总分 -->
          <div class="province">
            <div>{{item.value}}</div>
            <div>{{item.province}}</div>
          </div>
        </div>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script>
import PROVINCE from './province';
import { getImageUrl } from '../../helper/image';
import { cloneDeep } from '../../../ui/lib/utils/util';

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
      // console.log('地图 全国 watch', this.rank1Data);
      this.validForm() && this.assembleRank();
    },
    realTimeDynamicData() {
      // console.log('地图 动态 watch', this.realTimeDynamicData.map(t => t.province));
      // this.validForm() && this.assembleBar();
      // this.validForm() && this.assembleRt();
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
    console.log('地图 form', this.form);
    console.log('地图 全国', this.rank1Data);
    console.log('地图 动态', this.realTimeDynamicData);
    console.log('预设地图', this.provinces, this.provincesClassName);
    this.init();
  },
  methods: {
    getImageUrl,
    init() {
      if (this.form && this.form.subject1ids && this.form.subject2ids) {
        this.assembleRank();
      }
    },
    // 全国数据
    assembleRank() {
      if (this.rank1Data && this.rank1Data.length) {
        const exist = this.rank1Data.find(r => r.rt);
        exist && (exist.show = false);

        const timer = setTimeout(() => {
          const data = [];
          this.provinces.forEach(p => {
            const exist = this.rank1Data
              .find(r => this.valid(p, r.province));
            if (exist) {
              data.push({
                province: p,
                provinceClassName: this.provincesClassName[p],
                value: exist ? exist.totalScore : -1,
                rankNo: exist ? exist.rankNo : -1
              })
            }
          });
          this.rank = data;
          console.log('组装完成 rank', this.rank.map(t => t.province));
          this.assembleBar();
          this.assembleRt();
          clearTimeout(timer);
        }, 1000);
      }
    },
    assembleBar() {
      if (this.realTimeDynamicData && this.realTimeDynamicData.length) {
        // 去重
        const dedup = this.realTimeDynamicData.reduce((total, cur) => {
          if (total.length === 0) {
            return [cur];
          } else {
            const i = total.findIndex(t => t.province === cur.province);
            if(i >= 0) {
              total.splice(i, cur);
              return total;
            } else {
              total.push(cur);
              return total;
            }
          }
        }, []);
        const data = [];
        this.provinces.forEach(p => {
          const exist = dedup.find(r => this.valid(p, r.province));
          if (exist) {
            data.push({
              province: p,
              value: exist ? exist.continueRight : -1, // 连续答题
              userName: exist.userName,
              recordTime: exist.recordTime,
              competitionId: exist.competitionId, // 用来展示是 哪个比赛
              competitionType: this.validCompetitionType(exist.competitionId),
              show: true
            });
          };
        });
        this.realTimeDynamic = data;
        // console.log('组装完成 realTimeDynamic', this.realTimeDynamic);
      }
    },
    // 组装实时数据 至 全国数据
    assembleRt() {
      let latest = false;
      const reverse = cloneDeep(this.realTimeDynamic).reverse();
      reverse.forEach((rt) => {
        if (latest) return;
        const exist = this.rank.find(r => this.valid(r.province, rt.province));
        if (exist) {
          // 赋值
          exist.rt = rt;
          latest = true;
          console.log('组装完成 rt', exist.rt);
        }
      });
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
      const isTop = this.isTop(value);
      // console.log('是否前三', isTop);
      // 68 为 .province 盒子的高度；25 .tag 为皇冠的高度
      const top = this.calculateHeight(value) + 68 + (isTop ? 25 - 10 : 0);
      // console.log('计算top值', top);
      return top;

    },
    calculateHeight(value) {
      // console.log('计算高度', value, `结果=${value > this.max ? this.max : value}`);
      return value > this.max ? this.max : value;
    },
    calculateTop1(value) {
      const rank = this.rank.reduce((c, n) => c.value > n.value ? c : n);
      return value === rank.value;
    },
    calculateTop2(value) {
      const temp = cloneDeep(this.rank).sort((a, b) => a.value - b.value);
      temp.pop();
      return value === (temp[temp.length - 1].value || 0);
    },
    calculateTop3(value) {
      const temp = cloneDeep(this.rank).sort((a, b) => a.value - b.value);
      temp.pop();
      temp.pop();
      return value === (temp[temp.length - 1].value || 0);
    },
    isTop(value) {
      return this.calculateTop1(value) || this.calculateTop2(value) || this.calculateTop3(value);
    },
    validProvince(p1, p2) {
      return p1.indexOf(p2) >= 0 || p2.indexOf(p1) >= 0;
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/style/common';
@import '@/assets/style/map'; // todo 地图的定位点 css 设定

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
    // min-height: 248px;
    // max-height: 378px;
    min-height: 273px;
    max-height: 403px;
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
      left: 164px;

      $barBoxW: 20px;
      // 柱子
      .bar {
        width: $barBoxW;
        min-height: 20px;
        max-height: 150px;
        background-image: url("../../assets/img-team/team-bar-green.png");
        background-size: 150% 120%;
        background-repeat: no-repeat;
        background-position: center;
        transition: height .6s;
        &.bar-top1 {
          background-image: url("../../assets/img-team/team-bar-top1.png");
        }
        &.bar-top2 {
          background-image: url("../../assets/img-team/team-bar-top2.png");
        }
        &.bar-top3 {
          background-image: url("../../assets/img-team/team-bar-top3.png");
        }
        &.bar-top1, &.bar-top2, &.bar-top3 {
          width: $barBoxW * 2;
          transform: translateX(-10px);
          background-size: 180% 150%;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
      // top 1/2/3 标志
      .tag {
        width: 25px;
        height: 25px;
        background-image: url("../../assets/img-common/tag-top1.png");
        background-size: 150% 150%;
        background-repeat: no-repeat;
        background-position: center;
        transform: translateX(-2.5px);
        &.tag-top1 {
          background-image: url("../../assets/img-common/tag-top1.png");
        }
        &.tag-top2 {
          background-image: url("../../assets/img-common/tag-top2.png");
        }
        &.tag-top3 {
          background-image: url("../../assets/img-common/tag-top3.png");
        }
      }
      // 三角形
      .triangle {
        width: $barBoxW;
        height: $barBoxW / 2;
        // transform: translateX(5px); // 根据 $barBoxW 来调整
        background-size: 50% 100%;
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
      z-index: 1;

      // 此值计算：.bar 的最小高度以 60px为标准
      // 当 .bar min-h=60px top=0px
      // 当 .bar min-h=20px top=40px
      // top: 40px;

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