<template>
  <div class="container">
    <Dv-team target="parent" lock></Dv-team>
  </div>
</template>

<script>
import DvTeam from '@/components/dv-team'
export default {
  components: {
    DvTeam
  }
}
</script>

<style lang="scss" >
  html, body {
    background: #fff !important;
    min-height: 100vh;
    height: 100%;
  }
</style>
<style lang="scss" scoped>
  .container {
    height: 100%;
    background: #fff;
    color: unset;
    margin: 0;
    padding: 0;
    overflow: auto;
  }
</style>