<template>
  <Box class="my-dv-border-1"
       default-width="400px"
       default-height="300px"
       :class="classes"
       padding="0"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="styles">
      <polygon :fill="fill" :points="`10, 27 10, ${height - 27} 13, ${height - 24} 13, ${height - 21} 24, ${height - 11}
      38, ${height - 11} 41, ${height - 8} 73, ${height - 8} 75, ${height - 10} 81, ${height - 10}
      85, ${height - 6} ${width - 85}, ${height - 6} ${width - 81}, ${height - 10} ${width - 75}, ${height - 10}
      ${width - 73}, ${height - 8} ${width - 41}, ${height - 8} ${width - 38}, ${height - 11}
      ${width - 24}, ${height - 11} ${width - 13}, ${height - 21} ${width - 13}, ${height - 24}
      ${width - 10}, ${height - 27} ${width - 10}, 27 ${width - 13}, 25 ${width - 13}, 21
      ${width - 24}, 11 ${width - 38}, 11 ${width - 41}, 8 ${width - 73}, 8 ${width - 75}, 10
      ${width - 81}, 10 ${width - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`"/>
    </svg>
    <svg
      width="150px"
      height="150px"
      :key="item"
      v-for="item in border"
      :style="styles"
      :class="`my-dv-border-1__${item} my-dv-border-1__corner`"
    >
      <polygon
        :fill="light"
        points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
      >
        <animate
          attributeName="fill"
          :values="`${light};${dark};${light}`"
          dur="0.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>
      <polygon
        :fill="dark"
        points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
      >
        <animate
          attributeName="fill"
          :values="`${dark};${light};${dark}`"
          dur="0.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>
      <polygon
        :fill="light"
        points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
      >
        <animate
          attributeName="fill"
          :values="`${light};${dark};transparent`"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>

  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder1',
    mixins: [Border],
    data() {
      return {
        border: ['left-top', 'right-top', 'left-bottom', 'right-bottom']
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-1) {

    @include e(corner) {
      position: absolute;
      display: block;
    }

    @include e(right-top) {
      right: 0;
      transform: rotateY(180deg);
    }
    @include e(left-bottom) {
      bottom: 0;
      transform: rotateX(180deg);
    }
    @include e(right-bottom) {
      right: 0;
      bottom: 0;
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
</style>
