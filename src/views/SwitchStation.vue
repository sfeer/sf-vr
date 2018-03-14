<!--开关站-->
<template>
  <div id="main-wrapper">
    <sf-krpano id="pano-wrapper" :xml="xml" :scene="scene" :lookat="lookat" :hooks="hooks"/>
    <div id="layout-btn" data-tip="机柜总览" :class="showLayout?'active':''" @click="showLayout=!showLayout"></div>
    <cabinet-layout id="layout-wrapper" :data="layoutData" v-show="showLayout" @click="cabinetClick"/>
    <bug-info/>
  </div>
</template>

<script>
  import VR from '../assets/vr';
  import SfKrpano from "../components/SfKrpano";
  import CabinetLayout from './CabinetLayout';
  import BugInfo from './BugInfo';

  export default {
    components: {SfKrpano, CabinetLayout, BugInfo},

    data() {
      return {
        panoCode: '',
        scene: '',
        lookat: '',
        hooks: {},
        showLayout: false
      }
    },

    computed: {
      xml() {
        return `/static/xml/${this.panoCode}.xml`;
      },
      panoInfo() {
        return VR.PANOS[this.panoCode];
      },
      layoutData() {
        return VR.LAYOUTS[this.panoCode];
      }
    },

    created() {
      this.panoCode = this.$route.name;
      this.scene = this.panoInfo.index;
    },

    mounted() {
      document.title = this.panoInfo.name;
    },

    methods: {
      // 点击机柜
      cabinetClick(cab) {
        if (cab.scene) {
          this.scene = cab.scene;
          if (cab.lookat) {
            this.lookat = cab.lookat;
          }
          this.showLayout = false;
        }
      }
    }
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

    #pano-wrapper {
      width: 100%;
      height: 100%;
    }

    #layout-btn {
      position: fixed;
      bottom: 20px;
      left: 10px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      cursor: pointer;
      background: rgba(255, 255, 255, .6) url(../assets/img/tools_btn.png) no-repeat -47px -47px;
      &:after {
        content: attr(data-tip);
        position: absolute;
        text-align: center;
        text-shadow: 0 0 2px #000;
        color: #fff;
        font-weight: 700;
        top: 100%;
      }
      &.active {
        background: rgba(255, 102, 0, .6) url(../assets/img/tools_btn.png) no-repeat 3px -47px;
      }
    }

    #layout-wrapper {
      position: fixed;
      top: 0;
      left: 50%;
      margin-left: -20vw;
      width: 40vw;
      border-radius: 0 0 5px 5px;
      background-color: rgba(255, 255, 255, .6);
      overflow-y: hidden;
      overflow-x: auto;

      @media (max-width: 767px) {
        width: 90vw;
        margin-left: -45vw;
      }
    }
  }
</style>
