<!--开关站-->
<template>
  <div id="main-wrapper">
    <div id="pano"></div>

  </div>
</template>

<script>
  import VR from '../assets/vr';

  export default {
    data() {
      return {}
    },

    computed: {
      station() {
        return VR.STATIONS[this.sid]
      },
      room() {
        return this.station.room[this.rid]
      },
      kid() {
        return this.station + this.room;
      }
    },

    watch: {
      rid() {
        console.log(this.room);
        if (this.room) {
          this.station = VR.STATIONS[sid];

          // 注销krpano
          removepano(this.station.id);

          document.title = this.station.name; // 设置标题
          this.showGuide = false;

          this.guideMap = VR.DUIDES[sid];

          // 初始化全景
          this.initVR();
        }
      }
    },

    created() {

    },

    mounted() {
      this.sid = this.$route.params['sid'];
      this.rid = this.$route.params['rid'];
      console.log(this.room);
    },

    methods: {}
  }
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    position: relative;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #444;
  }

  #main-wrapper {
    height: 100%;

    #pano {
      width: 100%;
      height: 100%;
      z-index: 0 !important;
    }
  }
</style>

