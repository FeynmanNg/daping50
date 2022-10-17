<template>
  <div class="container">
    <Dv-person target="parent" lock></Dv-person>
  </div>
</template>

<script>
import DvPerson from '@/components/dv-person'
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