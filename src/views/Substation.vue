<!--变电站-->
<template>
  <div id="main-wrapper">
    <sf-krpano id="pano-wrapper" :xml="xml" :scene="scene" :lookat="lookat" :hooks="hooks"/>
    <div id="layout-btn" :class="showLayout?'active':''" @click="showLayout=!showLayout"></div>
    <div id="guide-btn" data-tip="快速导航" :class="showGuide?'active':''" @click="showGuide=!showGuide"></div>
    <cabinet-layout id="layout-wrapper" :data="layoutData" v-show="showLayout" @click="cabinetClick"/>
    <guide id="guide-wrapper" v-show="showGuide" @click="roomClick"/>
  </div>
</template>

<script>
  import VR from '../assets/vr';
  import SfKrpano from "../components/SfKrpano";
  import CabinetLayout from './CabinetLayout';
  import Guide from './Guide';

  export default {
    components: {SfKrpano, CabinetLayout, Guide},

    data() {
      return {
        panoCode: '',
        scene: '',
        lookat: '',
        hooks: {},
        showLayout: false,
        showGuide: false
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
      },

      // 点击房间
      roomClick(panoCode, scene) {
        if (panoCode) {
          this.panoCode = panoCode;
          if (scene) {
            this.scene = scene;
          }
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
      z-index: 110;
      position: fixed;
      top: 5px;
      left: calc(50% - 15px);;
      border-top: 15px solid rgba(255, 102, 0, .6);
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      cursor: pointer;
      transition: transform 0.5s;
      &.active {
        transform: rotateX(180deg);
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

    #guide-btn {
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

    #guide-wrapper {
      z-index: 100;
      position: fixed;
      top: 50%;
      left: 0;
      margin-top: -80px;
      border-radius: 0 5px 5px 0;
      background-color: rgba(255, 255, 255, .6);
    }
  }
</style>
