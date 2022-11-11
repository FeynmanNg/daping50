<template>
  <div :class="classes">
    <!-- {{displayValue}} -->
    <span
      v-for="(s, i) in displayValue"
      :class="{ 'bg': s !== ':'}"
      :key="s + i">
      <!-- <transition name="fade" mode="out-in"> -->
        <span :class="{ 'test': changeIdx[i] }" :key="s + i">{{s}}</span>
      <!-- </transition> -->
    </span>
  </div>
</template>

<script>

  /**
   * 计时器组件
   * @module $ui/components/my-timer
   */

  import Dayjs from 'dayjs'

  export default {
    name: 'MyTimer',
    /**
     * 属性参数
     * @member props
     * @property {string|number} [target] 设定值，String为时间格式，Number是秒数，  countdown为true， 是开始值， countdown为false时结束值
     * @property {string} [format=HH:mm:ss] 显示格式
     * @property {boolean} [countdown=false] 倒数模式
     * @property {string} [type] 颜色,可选值 'primary', 'success', 'warning', 'danger', 'info'
     * @property {boolean} [auto=false] 自动运行
     * @property {boolean} [interval=1000] 执行时间隔 单位 ms
     */
    props: {
      // 设定值，String为时间格式，Number是秒数，  countdown为true， 是开始值， countdown为false时结束值
      target: [String, Number],
      // 显示格式
      format: {
        type: String,
        default: 'HH:mm:ss'
      },
      // 倒数模式
      countdown: Boolean,
      // 颜色
      type: {
        type: String,
        validator(val) {
          return ['primary', 'success', 'warning', 'danger', 'info'].includes(val)
        }
      },
      // 自动开始
      auto: Boolean,
      // 执行时间隔 单位 ms
      interval: {
        type: Number,
        default: 1000
      }
    },
    data() {
      this.timerId = null
      return {
        dayjs: null,
        targetDayjs: null,
        minDayjs: null,
        isFinish: false,
        changeIdx: {} // 当时间改动时，给类名
      }
    },
    computed: {
      classes() {
        return {
          'my-timer': true,
          [`is-${this.type}`]: !!this.type,
          'is-finish': this.isFinish
        }
      },
      displayValue() {
        const result = this.dayjs ? this.dayjs.format(this.format) : ''
        // return result;
        const split = result.split('');
        return split;
      }
    },
    methods: {
      init() {
        this.reset()
        this.auto && this.start()
      },
      getTarget() {
        if (!this.target) {
          return this.getMax()
        }

        if (typeof this.target === 'number') {
          return this.getMin().second(this.target)
        }

        if (typeof this.target === 'string') {
          return Dayjs(`${this.getMin().format('YYYY-MM-DD')} ${this.target}`)
        }
      },
      getMin() {
        return Dayjs()
          .hour(0)
          .minute(0)
          .second(0)
          .millisecond(0)
      },
      getMax() {
        return Dayjs()
          .hour(23)
          .minute(59)
          .second(59)
      },
      /**
       * 开始运行
       * @method start
       */
      start() {
        if (!this.dayjs) return
        clearInterval(this.timerId)
        this.timerId = setInterval(() => {
          this.tick()
        }, this.interval)
        /**
         * 开始运行时触发
         * @event start
         * @param {Dayjs} dayjs 时间对象
         */
        this.$emit('start', this.dayjs)
      },
      /**
       * 停止运行
       * @method stop
       */
      stop() {
        clearInterval(this.timerId)
        /**
         * 停止时触发
         * @event stop
         * @param {Dayjs} dayjs 时间对象
         */
        this.$emit('stop', this.dayjs)
      },
      /**
       * 重置
       * @method reset
       */
      reset() {
        this.isFinish = false
        clearInterval(this.timerId)
        this.minDayjs = Object.freeze(this.getMin())
        this.targetDayjs = Object.freeze(this.getTarget())
        this.dayjs = this.countdown
          ? Object.freeze(this.getTarget())
          : Object.freeze(this.getMin())
        /**
         * 重置时触发
         * @event reset
         * @param {Dayjs} dayjs 时间对象
         */
        this.$emit('reset', this.dayjs)
      },
      tick() {
        if (!this.dayjs) return
        if (this.countdown) {
          this.dayjs = Object.freeze(this.dayjs.subtract(this.interval, 'millisecond'))
          if (this.dayjs.valueOf() === this.minDayjs.valueOf()) {
            this.isFinish = true
          }
        } else {
          this.dayjs = Object.freeze(this.dayjs.add(this.interval, 'millisecond'))
          if (this.dayjs.valueOf() === this.targetDayjs.valueOf()) {
            this.isFinish = true
          }
        }
        if (this.isFinish) {
          clearInterval(this.timerId)
          /**
           * 完成时触发
           * @event finish
           * @param {Dayjs} dayjs 时间对象
           */
          this.$emit('finish', this.dayjs)
        } else {
          /**
           * 时间跳动时触发
           * @event tick
           * @param {Dayjs} dayjs 时间对象
           */
          this.$emit('tick', this.dayjs)
        }
      }
    },
    watch: {
      target() {
        this.init()
      }
      // displayValue(nV, oV) {
      //   if (nV && oV && nV.length && oV.length) {
      //     this.changeIdx = {};
      //     nV.forEach((n, i) => {
      //       if (n === ':' || n === oV[i]) {
      //         this.changeIdx[i] = false;
      //       } else {
      //         this.changeIdx[i] = true;
      //       }
      //     })
      //   }
      // }
    },
    mounted() {
      this.init()
    },
    beforeDestroy() {
      clearInterval(this.timerId)
    }
  }
</script>

<style lang="scss" scoped>
.bg {
  display: inline-block;
  width: 40px;
  height: 60px;
  background-image: url("../../assets/img-common/clock-num.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 3px;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #032d66;
  }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}

.test {
  animation: number .5s;
}
@keyframes number {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>