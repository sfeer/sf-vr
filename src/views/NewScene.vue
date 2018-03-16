<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
    <div id="guide-btn" data-tip="快速导航" :class="showGuide?'active':''"
         @click="showGuide=!showGuide"></div>
    <div id="map-btn" v-if="guideMap" :class="showMap?'active':''" @click="showMap=!showMap"></div>
    <div v-show="showMap" id="map-div">
      <div class="cabinet-warpper" v-for="item in guideMap">
        <div v-if="c.name" class="cabinet" v-for="c in item" @click="loadScene(c)">{{c.name}}</div>
        <div v-else class="cabinet-empty"></div>
      </div>
    </div>
    <div v-show="showGuide" id="guide-map">
      <div class="row">
        <div class="title">室外</div>
        <div class="btn" @click="btn_1_click">1#主变</div>
        <div class="btn" @click="btn_2_click">2#主变</div>
      </div>
      <div class="row">
        <div class="title">一楼</div>
        <div class="btn" @click="rid='r1'">#1、2电容室</div>
        <div class="btn" @click="rid='r2'">#3、4电容室</div>
        <div class="btn" @click="rid='r3'">开关室</div>
      </div>
      <div class="row">
        <div class="title">二楼</div>
        <div class="btn" @click="rid='r4'">主控室</div>
        <div class="btn" @click="rid='r5'">GIS室</div>
      </div>
    </div>
    <div id="images">
      <img v-for="src in images" :src="src">
    </div>
  </div>
</template>

<script>
  import VR from '../assets/vr';
  import Viewer from 'viewerjs';

  export default {
    name: 'app',
    data() {
      return {
        sid: '',

        // 机柜导航图
        guideMap: undefined,

        // 当前站点信息
        station: {},
        images: [''],
        showGuide: false,
        showMap: false,
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
    watch: {
      sid: function (sid) {
        if (VR.PANOS[sid]) {
          // 注销krpano
          removepano(this.station.id);
          this.station = VR.PANOS[sid];
          document.title = this.station.name; // 设置标题
          this.showGuide = false;

          this.guideMap = VR.LAYOUTS[sid];

          // 初始化全景
          this.initVR();
        }
      }
    },
    mounted() {
      this.sid = this.$route.name;
      // 图片浏览器
      this.viewer = new Viewer(document.getElementById('images'), this.viewerOpt);
    },
    methods: {
      // 初始化全景
      initVR() {
        // 初始化krpano
        embedpano({
          id: this.station.id,
          xml: '/static/xml/' + this.station.id + '.xml',
          swf: '/static/krpano.swf',
          target: 'pano',
          html5: 'auto', // 默认 auto，never 使用flash viewer
          mobilescale: 1.0,
          passQueryParameters: true,
          onready: krpano => {
            const sc = this.initScene ? this.initScene : this.station.index;
            krpano.call("loadscene('" + sc + "', null, MERGE)");
            if (this.initLookat) {
              const arr = _.split(this.initLookat, ',');
              krpano.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
            }
            this.initScene = undefined;
            this.initLookat = undefined;
            krpano.hooks = {
              // 跨站点场景切换
              href: url => {
                const a = url.split('|');
                this.sid = a[0];
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

      // 主变#1
      btn_1_click() {
        if (this.station.id === 's4') {
          this.krpano.call("loadscene('scene_b1_front', null, MERGE)");
        } else {
          this.initScene = 'scene_b1_front';
          this.sid = 's4';
        }
      },

      // 主变#2
      btn_2_click() {
        if (this.station.id === 's4') {
          this.krpano.call("loadscene('scene_b2_front', null, MERGE)");
        } else {
          this.initScene = 'scene_b2_front';
          this.sid = 's4';
        }
      },

      // 加载场景
      loadScene(d) {
        if (d.scene) {
          this.krpano.call("loadscene('" + d.scene + "', null, MERGE)");
          if (d.lookat) {
            const arr = _.split(d.lookat, ',');
            this.krpano.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
          }
          this.showMap = false;
        }
      }
    }
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

  #map-btn {
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

  #map-div {
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

  .cabinet-warpper {
    width: 900px;
    display: flex;
    margin: 20px 0;
    .cabinet {
      text-align: center;
      background: #242833;
      color: #fff;
      flex: none;
      width: 30px;
      margin: 0 2px;
      padding: 5px;
      cursor: pointer;
    }
    .cabinet-empty {
      flex: none;
      width: 40px;
      margin: 0 2px;
    }
  }
</style>
