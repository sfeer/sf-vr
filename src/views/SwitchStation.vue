<!--开关站-->
<template>
  <div id="main-wrapper">
    <sf-krpano id="pano-wrapper" :xml="xml" :scene="scene" :lookat="lookat" :hooks="hooks"/>
    <div id="layout-btn" data-tip="机柜总览" :class="showLayout?'active':''" @click="showLayout=!showLayout"></div>
    <cabinet-layout id="layout-wrapper" :data="layoutData" v-show="showLayout" @click="cabinetClick"/>
    <bug-dialog :data="cabinetInfo" v-show="showDialog" @close="showDialog=false"/>
  </div>
</template>

<script>
  import VR from '../assets/vr';
  import BugApi from '../assets/bug-api';

  import SfKrpano from "../components/SfKrpano";
  import CabinetLayout from './CabinetLayout';
  import BugDialog from './BugDialog';

  export default {
    components: {SfKrpano, CabinetLayout, BugDialog},

    data() {
      return {
        panoCode: '',
        scene: '',
        lookat: '',
        hooks: {
          // 热点状态
          showSpotStatus: id => {
            let sum = 0,
              arr = this.cabinetMap[id]['bugs'];
            arr.map(d => {
              sum += d.status === '5' ? 1 : 0;
            });
            if (sum === arr.length)
              return 'success';
            else if (sum === 0)
              return 'danger';
            else
              return 'warning';
          },

          // 显示信息
          showData: id => {
            this.cabinetid = id;
            this.showDialog = true;
          },

          // 是否显示热点
          showHotspot: id => this.cabinetMap[id]['bugs'].length > 0 ? 'true' : 'false'
        },
        showLayout: false,
        showDialog: false,
        cabinetid: '',

        // 机柜信息
        cabinetMap: {}
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
        return VR.LAYOUTS[this.panoCode].map(row => {
          return row.map(cab => {
            const arr = this.cabinetMap[cab.uuid]['bugs'];
            if (arr.length > 0) {
              let sum = 0;
              arr.map(d => {
                sum += d.status === '5' ? 1 : 0;
              });
              if (sum === arr.length)
                cab['class'] = 'success';
              else if (sum === 0)
                cab['class'] = 'danger';
              else
                cab['class'] = 'warning';
            }
            return cab;
          });
        });
      },

      cabinetInfo() {
        return this.cabinetid ? this.cabinetMap[this.cabinetid] : undefined;
      }
    },

    created() {
      this.panoCode = this.$route.name;
      this.scene = this.panoInfo.index;

      // 获取机柜数据
      BugApi.queryCabinetInfo(this.panoInfo.uuid, data => {
        data.map(d => {
          this.cabinetMap[d['fdid']] = {
            name: d['devicename'],
            typename: d['equipmenttypename'],
            bugs: []
          };
        });
      });

      // 获取缺陷数据
      BugApi.queryBugInfo(this.panoInfo.uuid, data => {
        data.map(d => {
          this.cabinetMap[d['refequipmentid']]['bugs'].push({
            id: d['bugid'],
            status: d['status'],
            name: d['categoryname'],
            time: d['createdstamp'],
            user: d['username'],
            memo: d['memo'],
            pictures: d['pictures'],
            voices: d['voicelist']
          });
        });
      });
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
  @import '~swiper/dist/css/swiper.min.css';

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
      z-index: 1000;
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
