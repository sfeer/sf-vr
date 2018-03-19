<!--房间快速导航-->
<template>
  <div class="guide-warpper">
    <div class="row">
      <div class="title">室外</div>
      <div class="btn" @click="clickHandle('s4', 'scene_b1_front')">1#主变</div>
      <div class="btn" @click="clickHandle('s4', 'scene_b2_front')">2#主变</div>
    </div>
    <div class="row">
      <div class="title">一楼</div>
      <div class="btn" @click="clickHandle('s4r1')">#1、2电容室</div>
      <div class="btn" @click="clickHandle('s4r2')">#3、4电容室</div>
      <div class="btn" @click="clickHandle('s4r3')">开关室</div>
    </div>
    <div class="row">
      <div class="title">二楼</div>
      <div class="btn" @click="clickHandle('s4r4')">主控室</div>
      <div class="btn" @click="clickHandle('s4r5')">GIS室</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickHandle(panoCode, scene) {
        this.$emit('click', panoCode, scene);
      }
    }
  }
</script>

<style lang="scss">
  .guide-warpper {
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
