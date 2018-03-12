<template>
  <div id="main-wrapper">
    <div id="pano"></div>
    <div id="guide-btn"
         data-tip="快速导航"
         :class="showGuide?'active':''"
         @click="showGuide=!showGuide"
         v-if="station['room']"></div>
    <div id="map-btn"
         data-tip="机柜总览"
         :class="showMap?'active':''"
         @click="showMap=!showMap"
         v-if="cabinetMap"></div>
    <div v-show="showMap" id="map-wrapper">
      <div class="cabinet-warpper" v-for="item in cabinetMap">
        <div v-if="c.name" class="cabinet" v-for="c in item" @click="loadScene(c)">{{c.name}}</div>
        <div v-else class="cabinet-empty"></div>
      </div>
    </div>
    <guide v-show="showGuide"/>
    <div id="images">
      <img v-for="src in images" :src="src">
    </div>
  </div>
</template>

<script>
  import VR from '../assets/vr';
  import Viewer from 'viewerjs';
  import Guide from './Guide';

  export default {
    data() {
      return {
        pano: '', // 全景码

        // 房间导航
        showGuide: false,

        // 机柜导览
        showMap: false,

        // 机柜导览信息
        cabinetMap: [],

        // viewerjs配置
        images: [''],
        viewerOpt: {
          title: false,
          toolbar: false,
          tooltip: false,
          rotatable: false,
          scalable: false,
          keyboard: false
        }
      }
    },

    computed: {
      station() {
        return VR.PANOS[this.pano];
      }
    },

    watch: {
      pano(pano) {
        // 重置全景
        removepano(this.sid);
        this.initVR();

        // 重置标题
        document.title = this.station.name;

        // 重置弹出框
        this.showGuide = false;
        this.showMap = false;
        this.cabinetMap = VR.MAPS[pano];
      }
    },

    created() {
      this.pano = this.$route.name;

      this.$bus.$on('href', url => {
        const a = url.split('|');
        if (this.rid === '' && a[0] === '') {
          this.showGuide = false;
          this.showMap = false;
          this.krpano.call(`loadscene('${a[1]}', null, MERGE)`);
        } else {
          this.rid = a[0];
          this.initScene = a.length > 1 ? a[1] : undefined;
          this.initLookat = a.length > 2 ? a[2] : undefined;
        }
      });
    },

    mounted() {
      // 图片浏览器
      this.viewer = new Viewer(document.getElementById('images'), this.viewerOpt);
    },

    methods: {
      // 初始化全景
      initVR() {
        // 初始化krpano
        embedpano({
          id: this.sid,
          xml: '/static/xml/' + this.kid + '.xml',
          swf: '/static/krpano.swf',
          target: 'pano',
          html5: 'auto', // 默认 auto，never 使用flash viewer
          mobilescale: 1.0,
          passQueryParameters: true,
          onready: krpano => {
            const sc = this.initScene ? this.initScene : this.room ? this.room.index : this.station.index;
            krpano.call("loadscene('" + sc + "', null, MERGE)");
            if (this.initLookat) {
              const arr = this.initLookat.split(',');
              krpano.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
            }
            this.initScene = undefined;
            this.initLookat = undefined;
            krpano.hooks = {
              // 跨站点场景切换
              href: url => {
                const a = url.split('|');
                this.rid = a[0];
                this.initScene = a.length > 1 ? a[1] : undefined;
                this.initLookat = a.length > 2 ? a[2] : undefined;
              },
              // 显示站点
              showImg: d => {
                const a = d.split('|');
                this.images = VR.IMAGES[a[0]][a[1]];
                this.$nextTick(function () {
                  this.viewer.update();
                  this.viewer.show();
                });
              }
            };
            this.krpano = krpano;
          }
        });
      },
    },

    components: {Guide}
  }
</script>

<style lang="scss">
  @import '~viewerjs/dist/viewer.css';

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

    #images {
      display: none;
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

    #map-wrapper {
      z-index: 100;
      position: fixed;
      border-radius: 0 0 5px 5px;
      background-color: rgba(255, 255, 255, .6);
      top: 0;
      left: 50%;
      margin-left: -40vw;
      width: 80vw;
      padding-top: 20px;
      overflow-y: hidden;
      overflow-x: auto;
    }
  }
</style>

