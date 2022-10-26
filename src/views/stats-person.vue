<template>
  <div class="container">
    <Dv-person></Dv-person>
  </div>
</template>

<script>
// import DvPerson from '@/components/dv-person'
import DvPerson from '@/components/dv-person/index-new'
export default {
  components: {
    DvPerson
  }
}
</script>

<style lang="scss" >
  html, body {
    background: #fff !important;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
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