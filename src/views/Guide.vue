<!--房间快速导航-->
<template>
  <div id="guide-warpper">
    <div class="row">
      <div class="title">室外</div>
      <div class="btn" @click="href='|scene_b1_front'">1#主变</div>
      <div class="btn" @click="href='|scene_b2_front'">2#主变</div>
    </div>
    <div class="row">
      <div class="title">一楼</div>
      <div class="btn" @click="href='r1'">#1、2电容室</div>
      <div class="btn" @click="href='r2'">#3、4电容室</div>
      <div class="btn" @click="href='r3'">开关室</div>
    </div>
    <div class="row">
      <div class="title">二楼</div>
      <div class="btn" @click="href='r4'">主控室</div>
      <div class="btn" @click="href='r5'">GIS室</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        href: undefined
      }
    },
    watch: {
      href(href) {
        this.$bus.$emit('href', href);
      }
    },
  }
</script>

<style lang="scss">
  #guide-warpper {
    z-index: 100;
    position: fixed;
    top: 50%;
    left: 0;
    margin-top: -80px;
    border-radius: 0 5px 5px 0;
    background-color: rgba(255, 255, 255, .6);

    .row {
      display: flex;
      border: 1px dashed #666;
      padding: 5px 10px;
      margin: 10px;

      .title {
        font-weight: 600;
        color: #444;
        padding: 5px 0;
      }

      .btn {
        cursor: pointer;
        background: #242833;
        color: #fff;
        margin: 0 2px;
        padding: 5px;
      }
    }
  }
</style>
