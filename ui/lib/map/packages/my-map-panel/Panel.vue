<template>
  <MyDrag v-if="visible"
          class="my-map-placement my-map-panel"
          v-bind="dragOptions"
          :class="classes"
          :style="wrapperStyle">
    <MyResize v-bind="resizeOptions" :style="panelSize">
      <div v-if="title || $slots.title || $slots.toolbar" ref="header" class="my-map-panel__header">
        <div class="my-map-panel__title">
          <MyIcon v-if="icon" v-bind="iconOptions"></MyIcon>
          <slot name="title">{{title}}</slot>
        </div>
        <div v-if="$slots.toolbar" :class="toolbarClass">
          <slot name="toolbar"></slot>
        </div>
        <i v-if="closable" @click="handleClose" class="my-map-panel__close el-icon-close"></i>
      </div>
      <div class="my-map-panel__body">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" ref="footer" :class="footerClass">
        <slot name="footer"></slot>
      </div>
      <slot name="append"></slot>
    </MyResize>
  </MyDrag>

</template>

<script>
  /**
   * 面板组件
   * @module $ui/map/my-map-panel
   */
  import MyMapPlacement from '../my-map-placement'
  import {MyDrag, MyResize, MyIcon} from '$ui'

  /**
   * 插槽
   * @member slots
   * @property {string} default 定义主体内容
   * @property {string} title 定义标题
   * @property {string} footer 定义底部内容
   *
   */

  export default {
    name: 'MyMapPanel',
    mixins: [MyMapPlacement],
    inject: ['myMap'],
    components: {
      MyDrag,
      MyResize,
      MyIcon
    },
    /**
     * 属性参数，继承 [$ui/map/my-map-placement]{@link module:$ui/map/my-map-placement}
     * @member props
     * @property {string} [width] 宽度
     * @property {string} [height] 高度
     * @property {boolean|object} [draggable] 拖拽配置，参考 my-drag组件
     * @property {boolean|resizable} [resizable] Resize配置，参考 my-resize
     * @property {string} [title] 标题文本，可以用插槽定义
     * @property {string|object} [icon] 图标配置，参考 my-icon
     * @property {boolean} [closable] 显示关闭按钮，visible需要加 sync 才有效
     * @property {boolean} [visible] 是否可见
     * @property {string} [footerAlign] 底部对齐方式,支持 'left', 'right', 'center'
     */
    props: {
      width: String,
      height: String,
      draggable: [Boolean, Object],
      resizable: [Boolean, Object],
      title: String,
      icon: [String, Object],
      closable: Boolean,
      visible: {
        type: Boolean,
        default: true
      },
      footerAlign: {
        type: String,
        validator(val) {
          return ['left', 'right', 'center'].includes(val)
        }
      }
    },
    data() {
      return {
        footerHeight: 0,
        mapWarp: null
      }
    },
    computed: {
      dragOptions() {
        return {
          disabled: !this.draggable,
          handle: () => {
            return this.$refs.header || this.$el
          },
          target: this.mapWarp,
          ...this.draggable
        }
      },
      resizeOptions() {
        return {
          disabled: !this.resizable,
          minWidth: parseInt(this.width || 0),
          minHeight: parseInt(this.height || 0),
          ...this.resizable
        }
      },
      iconOptions() {
        return typeof this.icon === 'string'
          ? {name: this.icon}
          : this.icon
      },
      panelSize() {
        return this.resizable
          ? {
            minWidth: this.width,
            minHeight: this.height,
            paddingBottom: `${this.footerHeight}px`
          }
          : {
            width: this.width,
            height: this.height,
            paddingBottom: `${this.footerHeight}px`
          }
      },
      toolbarClass() {
        return {
          'my-map-panel__toolbar': true,
          'is-closable': this.closable
        }
      },
      wrapperStyle() {
        return {
          ...this.styles,
          width: this.width === '100%' ? this.width : null,
          height: this.height === '100%' ? this.height : null
        }
      },
      footerClass() {
        return {
          'my-map-panel__footer': true,
          [`is-${this.footerAlign}`]: !!this.footerAlign
        }
      }
    },
    methods: {
      setFooterHeight() {
        if (this.$refs.footer) {
          this.footerHeight = this.$refs.footer.getBoundingClientRect().height
        }
      },
      handleClose() {
        this.$emit('update:visible', false)
        /**
         * 点击关闭按钮触发
         * @event close
         */
        this.$emit('close')
      }
    },
    mounted() {
      this.setFooterHeight()
      this.mapWarp = this.myMap?.$el || this.$parent.$el
    }
  }
</script>
