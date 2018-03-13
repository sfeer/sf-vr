<!--带缺陷数据的全景-->
<template>
  <div id="main-wrapper">
    <sf-krpano :xml="xml" style="width:100%;height:100%;" :scene="scene" :hooks="hooks"/>
    <div id="map-btn" data-tip="机柜总览" :class="showMap?'active':''" @click="showMap=!showMap"></div>
  </div>
</template>

<script>
  import VR from '../assets/vr';
  import SfKrpano from "../components/SfKrpano";

  export default {
    components: {SfKrpano},
    data() {
      return {
        panoCode: '',
        scene: '',
        hooks: {},
        showMap: false
      }
    },

    computed: {
      xml() {
        return `/static/xml/${this.panoCode}.xml`;
      },
      panoInfo() {
        return VR.PANOS[this.panoCode];
      }
    },

    created() {
      this.panoCode = this.$route.name;
      this.scene = this.panoInfo.index;
    },

    mounted() {
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
    font-family: "Microsoft YaHei", Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }

  #main-wrapper {
    height: 100%;
  }
</style>
