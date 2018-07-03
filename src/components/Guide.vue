<!--房间快速导航-->
<template>
  <div class="guide-warpper">
    <div class="row" v-for="row in data" :key="row.name">
      <div class="title">{{row.name}}</div>
      <div class="btn" v-for="pano in row.panos" :key="pano.name" @click="clickHandle(pano.code, pano.scene)">
        {{pano.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array
      }
    },

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
