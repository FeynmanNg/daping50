<template>
  <transition :name="animation">
    <div v-if="currentVisible" v-show="!currentMinimized" class="my-dialog__wrapper" :style="wrapperStyle">
      <div class="my-dialog__modal" v-if="modal"></div>
      <MyDrag ref="dialog"
              @mousedown.native="handleMousedown"
              v-clickoutside="handleClickOutside"
              v-bind="dragOptions"
              :class="dialogClass"
              :style="dialogStyle"
              @stop="handleDragStop"
              @drag="handleDrag"
              @start="handleDragStart">
        <MyResize ref="resize"
                  v-bind="resizeOptions"
                  @start="handleResizeStart"
                  @stop="handleResizeStop"
                  @resize="handleResize">
          <Panel ref="panel"
                 v-bind="$attrs"
                 :title="title"
                 :icon="iconOptions"
                 :width="dialogWidth"
                 :height="dialogHeight"
                 :submit-text="submitText"
                 :cancel-text="cancelText"
                 :submit-loading="submitLoading"
                 :footer="footer"
                 :theme="theme"
                 :closable="closable"
                 :before-close="beforeClose"
                 :maximizable="maximizable"
                 :maximized.sync="currentMaximized"
                 :minimizable="minimizable"
                 :minimized.sync="currentMinimized"
                 @submit="handleSubmit"
                 @cancel="handleCancel"
                 @close="handleClose">
            <template v-if="$slots.icon" v-slot:icon>
              <slot name="icon"></slot>
            </template>
            <template v-if="$slots.title" v-slot:title>
              <slot name="title"></slot>
            </template>
            <template v-if="$slots.tool" v-slot:tool>
              <slot name="tool"></slot>
            </template>
            <template v-if="$slots.footer" v-slot:footer>
              <slot name="footer"></slot>
            </template>
            <MySpin fit :tip="loadingTip" :loading="loading" ref="mySpin">
              <SrcFrame v-if="src" :src="src" @load="handleSrcLoad"></SrcFrame>
              <slot v-else></slot>
            </MySpin>
          </Panel>
        </MyResize>
      </MyDrag>
    </div>
  </transition>

</template>

<script>
  /**
   * ????????????
   * @module $ui/components/my-dialog
   */
  import {MyDrag, MyResize, MySpin} from '$ui'
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import clickoutside from 'element-ui/lib/utils/clickoutside'
  import {addClass, removeClass} from 'element-ui/lib/utils/dom'
  import Panel from './Panel'
  import SrcFrame from './SrcFrame'

  let Z_INDEX = 100

  /**
   * ??????????????????????????????
   * @private
   * @param {number} max ???????????????
   * @param {string} value ?????????????????????
   * @return {number}
   */
  function getLength(max, value) {
    if (!value) return 0
    const percent = value.includes('%')
    const val = Number.parseFloat(value)
    return percent ? max * val / 100 : val
  }

  /**
   * ??????
   * @member slots
   * @property {string} default ????????????????????????????????????
   * @property {string} icon ????????????????????????
   * @property {string} title ????????????
   * @property {string} tool ????????????????????????????????????
   * @property {string} footer ??????????????? ???????????????????????????????????????????????????
   */
  export default {
    name: 'MyDialog',
    components: {
      Panel,
      MyDrag,
      MyResize,
      MySpin,
      SrcFrame
    },
    directives: {
      clickoutside
    },
    /**
     * ????????????
     * @member props
     * @property {boolean} [visible=true] ?????????????????????sync?????????
     * @property {string} [title] ????????????????????????????????????????????????
     * @property {string|object} [icon] ?????????????????????????????????????????????svg
     * @property {string} [width] ????????????
     * @property {string} [height] ??????
     * @property {array} [position] ??????????????????
     * @property {boolean} [modal] ???????????????
     * @property {string} [theme] ???????????????????????????'primary', 'dark', 'light'
     * @property {boolean|object} [draggable] ?????????????????????MyDrag??????
     * @property {boolean|object} [resizable] resize???????????????MyResize??????
     * @property {string} [animation=el-fade-in] ????????????
     * @property {boolean} [footer=true] ????????????
     * @property {string} [submitText=??????] ??????????????????
     * @property {string} [cancelText=??????] ??????????????????
     * @property {boolean} [submitLoading] ??????????????????loading?????????????????????
     * @property {boolean} [closable=true] ???????????????
     * @property {function} [beforeClose] ????????????????????????????????????????????????Promise
     * @property {boolean} [maximizable] ????????????
     * @property {boolean} [maximized] ?????????????????????
     * @property {boolean} [minimizable] ???????????????????????????????????????????????????
     * @property {boolean} [minimized] ?????????????????????
     * @property {boolean} [cancelClose] ??????????????????????????????
     * @property {boolean} [loading] ??????loading
     * @property {boolean} [loadingTip=??????????????????...] loading????????????
     * @property {string} [src] ???iframe?????????????????????
     * @property {string} [bodyClass] dialog????????????className
     * @property {string} [target] ????????????????????????html?????????
     * @property {boolean} [closeOnClickOutside] ????????????????????????
     */
    props: {
      // ??????
      visible: {
        type: Boolean,
        default: true
      },
      title: String,
      icon: [String, Object],
      width: String,
      height: String,
      position: {
        type: Array,
        validator(val) {
          return !val || (val && val.length === 2 && !isNaN(val[0]) && !isNaN(val[1]))
        }
      },
      modal: Boolean,
      theme: {
        type: String,
        default: 'light',
        validator(val) {
          return ['primary', 'dark', 'light'].includes(val)
        }
      },
      draggable: [Boolean, Object],
      resizable: [Boolean, Object],
      animation: {
        type: String,
        default: 'el-fade-in'
      },
      footer: {
        type: Boolean,
        default: true
      },
      submitText: {
        type: String,
        default: '??????'
      },
      submitLoading: Boolean,
      cancelText: {
        type: String,
        default: '??????'
      },
      closable: {
        type: Boolean,
        default: true
      },
      beforeClose: Function,
      maximizable: Boolean,
      maximized: Boolean,
      minimizable: Boolean,
      minimized: Boolean,
      cancelClose: {
        type: Boolean,
        default: true
      },
      loading: Boolean,
      loadingTip: {
        type: String,
        default: '??????????????????...'
      },
      src: String,
      bodyClass: String,
      // ????????????????????????html?????????
      target: String,
      closeOnClickOutside: Boolean
    },
    data() {
      return {
        currentVisible: this.visible,
        viewWidth: 0,
        viewHeight: 0,
        viewLeft: 0,
        viewTop: 0,
        originalWidth: 0,
        originalHeight: 0,
        dialogWidth: 0,
        dialogHeight: 0,
        zIndex: ++Z_INDEX, // Z_INDEX,
        currentMaximized: this.maximized,
        currentMinimized: false,
        positionProxy: this.position ? [...this.position] : null
      }
    },
    computed: {
      wrapperStyle() {
        return {
          zIndex: this.zIndex,
          left: `${this.viewLeft}px`,
          top: `${this.viewTop}px`
        }
      },
      dialogClass() {
        return {
          'my-dialog': true,
          'my-dialog--src': this.src,
          [this.bodyClass]: !!this.bodyClass
        }
      },
      dialogStyle() {
        let left, top
        if (!this.positionProxy) {
          left = Math.max((this.viewWidth - this.originalWidth) / 2, 0)
          top = Math.max((this.viewHeight - this.originalHeight) / 2, 0)
        } else {
          left = Math.max(Math.min(this.positionProxy[0], this.viewWidth - this.originalWidth), 0)
          top = Math.max(Math.min(this.positionProxy[1], this.viewHeight - this.originalHeight), 0)
        }
        
        return {
          left: `${left}px`,
          top: `${top}px`
        }
      },
      iconOptions() {
        if (!this.icon) return null
        return typeof this.icon === 'object'
          ? {
            ...this.icon
          }
          : {
            name: this.icon
          }
      },
      resizeOptions() {
        return {
          minWidth: 300,
          minHeight: 150,
          maxWidth: this.viewWidth,
          maxHeight: this.viewHeight,
          ...(this.resizable || {}),
          disabled: this.currentMaximized ? true : !this.resizable
        }
      },
      dragOptions() {
        return {
          handle: () => {
            if (this.$refs.panel) {
              if (this.$refs.panel.$refs.header) {
                return this.$refs.panel.$refs.header
              }
              return this.$refs.panel
            }
            return null
          },
          range: () => {
            return {
              left: -this.dialogWidth + 10,
              top: 0,
              width: this.viewWidth + this.dialogWidth - 20,
              height: this.viewHeight - 10
            }
          },
          disabled: this.currentMaximized ? true : !this.draggable,
          ...this.draggable
        }
      }
    },
    watch: {
      width() {
        this.$nextTick(() => {
          this.updateView()
        })
      },
      height() {
        this.$nextTick(() => {
          this.updateView()
        })
      },

      visible(val) {
        this.currentVisible = val
        // ?????????????????????????????????????????????????????????
        if (!val) {
          this.currentMinimized = false
        }
      },
      currentVisible(val) {
        this.dispose()
        if (val) {
          this.zIndex = ++Z_INDEX
          this.$nextTick(this.init)
        }
      },
      maximized: {
        immediate: true,
        handler(val) {
          this.maximizable && (this.currentMaximized = val)
        }
      },
      currentMaximized(val) {
        if (!this.currentVisible) return
        /**
         * ????????????????????????
         * @event maximize
         * @param {boolean} ???????????????
         */
        this.$emit('maximize', val)
        this.$nextTick(() => {
          this.maximize(val)
        })
      },
      minimized: {
        immediate: true,
        handler(val) {
          this.minimizable && (this.currentMinimized = val)
        }
      },
      currentMinimized(val) {
        // ???????????????????????????????????????
        if (!this.currentVisible) return
        this.$nextTick(() => {
          val ? this.hide() : this.show()
          this.setBodyHidden(!val)
        })
      }
    },
    methods: {
      init() {
        if (!this.$el || this.$el.nodeType !== 1) return
        if (this.target) {
          this.targetDOM = document.querySelector(this.target)
          this.targetDOM && this.targetDOM.appendChild(this.$el)
        }

        if (this.$el.parentNode) {
          addResizeListener(this.$el.parentNode, this.updateView)
        }

        if (!this.draggable && !this.resizable) {
          addResizeListener(this.$el, this.updateView)
        }
        this.updateView()
        /**
         * ?????????????????????
         * @event open
         */
        this.$emit('open') 
        this.setBodyHidden(true)
      },
      dispose() {
        if (this.$el && this.$el.parentNode) {
          removeResizeListener(this.$el.parentNode, this.updateView)
          if (this.target) {
            this.$el.parentNode.removeChild(this.$el)
          }
        }
        if (!this.draggable && !this.resizable) {
          removeResizeListener(this.$el, this.updateView)
        }

        this.setBodyHidden(false)
        this.dialogWidth = null
        this.dialogHeight = null
        this.currentMinimized = this.minimized
        this.currentMaximized = this.maximized
        this.targetDOM = null
        this.$emit('dispose')

      },
      updateView() {
        if (!this.$el || !this.$refs.dialog) return
        const rect = this.$el.getBoundingClientRect() 
        this.viewHeight = rect.height
        this.viewWidth = rect.width
        this.viewLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
        this.viewTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        if (this.currentMaximized) {
          this.maximize(true)
        }

        if (!this.dialogWidth || !this.dialogHeight) {
          const dialogRect = this.$refs.dialog.$el.getBoundingClientRect()
          this.originalWidth = this.dialogWidth = Math.min(getLength(this.viewWidth, this.width) || dialogRect.width, this.viewWidth - 20)
          this.originalHeight = this.dialogHeight = Math.min(getLength(this.viewHeight, this.height) || dialogRect.height, this.viewHeight - 20)
        }
      },
      // ????????????????????????????????????
      redoLayout(opt = {width: null, height: null}) {
        const hHeight = this.$refs.panel.headerHeight
        const fHeight = this.footer ? this.$refs.panel.footerHeight : 10
        const innerNodes = this.$slots.default 
        const innerNodeHeight = innerNodes.reduce((total, node) => {
          const nodeHeight = node.elm.offsetHeight || 0
          total += nodeHeight 
          return total
        }, 0)
        const newDialogHeight = innerNodeHeight + hHeight + fHeight + 24
        
        const resizeObj = {
          height: Math.min(getLength(this.viewHeight, opt.h) || newDialogHeight, this.viewHeight - 20),
          width: Math.min(getLength(this.viewWidth, opt.w), this.viewWidth - 20)
        }
        this.$nextTick(() => {
          this.originalHeight = Math.min(resizeObj.height || this.dialogHeight, this.viewHeight - 20)
          this.originalWidth = Math.min(resizeObj.width || this.dialogWidth, this.viewWidth - 20) 
          this.handleResize(resizeObj)
        })
      },
      handleResizeStart(e) {
        /**
         * ???????????????????????????
         * @event resize-start
         * @param {Object} e
         */
        this.$emit('resize-start', e)
      },
      handleResizeStop(e) {
        /**
         * ???????????????????????????
         * @event resize-stop
         * @param {Object} e
         */
        this.$emit('resize-stop', e)
      },
      handleResize(e) {
        const {width, height} = e
        this.dialogWidth = width || this.dialogWidth
        this.dialogHeight = height || this.dialogHeight
        /**
         * ?????????????????????
         * @event resize
         * @param {Object} e
         */
        this.$emit('resize', e)
      },
      handleDragStart(e) {
        /**
         * ?????????????????????
         * @event drag-start
         * @param {Object} e
         */
        this.$emit('drag-start', e)
      },
      handleDrag(e) {
        /**
         * ???????????????
         * @event drag
         * @param {Object} e
         */
        this.$emit('drag', e)
      },
      handleDragStop(e) {
        if (this.positionProxy) { // ?????????position, ??????position
          const dialogRect = e.$el.getBoundingClientRect()
          this.positionProxy = [dialogRect.left, dialogRect.top]
        }
        /**
         * ?????????????????????
         * @event drag-stop
         * @param {Object} e
         */
        this.$emit('drag-stop', e)
      },
      handleMousedown() {
        this.zIndex = ++Z_INDEX
      },
      handleClickOutside() {
        if (this.closeOnClickOutside) {
          this.handleClose()
        }
      },
      handleClose() {
        this.currentVisible = false
        this.$emit('update:visible', false)
        /**
         * ?????????????????????
         * @event close
         */
        this.$emit('close')
      },
      handleSubmit() {
        /**
         * ???????????????????????????
         * @event submit
         */
        this.$emit('submit')
      },
      handleCancel() {
        /**
         * ???????????????????????????
         * @event cancel
         */
        this.$emit('cancel')
        if (this.cancelClose) {
          this.handleClose()
        }
      },
      handleSrcLoad() {
        /**
         * iframe???????????????????????????
         * @event load
         */
        this.$emit('load')
      },
      maximize(maximized) {
        if (maximized) {
          // ?????????????????????????????????
          if (!this.sizeCaches) {
            this.sizeCaches = {
              dialogWidth: this.dialogWidth,
              dialogHeight: this.dialogHeight
            }
          }
          this.originalWidth = this.dialogWidth = this.viewWidth
          this.originalHeight = this.dialogHeight = this.viewHeight

        } else {
          if (this.sizeCaches) {
            const {dialogWidth, dialogHeight} = this.sizeCaches
            this.originalWidth = this.dialogWidth = dialogWidth
            this.originalHeight = this.dialogHeight = dialogHeight
          }
        }

        if (this.resizable) {
          this.$refs.resize.width = this.originalWidth
          this.$refs.resize.height = this.originalHeight
        }
      },
      show() {
        this.zIndex = ++Z_INDEX
        this.currentMinimized = false
        /**
         * ???????????????
         * @event show
         */
        this.$emit('show')
      },
      hide() {
        this.currentMinimized = true
        /**
         * ???????????????
         * @event hide
         */
        this.$emit('hide')
      },
      setBodyHidden(hidden) {
        const name = 'my-dialog-hidden-' + this._uid
        const targetDom = this.targetDOM || this.$el.parentNode
        hidden ? addClass(targetDom, name) : removeClass(targetDom, name)
      }

    },
    mounted() {
      this.currentVisible && this.init()

    },
    beforeDestroy() {
      this.dispose()
    }
  }
</script>
