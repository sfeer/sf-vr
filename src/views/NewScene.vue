<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
    <div id="guide-btn" data-tip="快速导航" :class="showGuide?'active':''" @click="showGuide=!showGuide"></div>
    <div v-show="showGuide" id="guide-map">
      <div class="row">
        <div class="title">室外</div>
        <div class="btn" @click="sid='s4'">1#主变</div>
        <div class="btn" @click="sid='s4'">2#主变</div>
      </div>
      <div class="row">
        <div class="title">一楼</div>
        <div class="btn" @click="sid='s5'">#1、2电容室</div>
        <div class="btn" @click="sid='s6'">#3、4电容室</div>
        <div class="btn" @click="sid='s7'">开关室</div>
      </div>
      <div class="row">
        <div class="title">二楼</div>
        <div class="btn" @click="sid='s9'">主控室</div>
        <div class="btn" @click="sid='s8'">GIS室</div>
      </div>
    </div>
    <div id="images">
      <img v-for="src in images" :src="src">
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import VR from '../assets/vr';
  import Viewer from 'viewerjs';

  export default {
    name: 'app',
    data() {
      return {
        sid: '',
        // 当前站点信息
        station: {},
        images: [''],
        showGuide: false,
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
        console.log(sid);
        if (_.has(VR.STATIONS, sid)) {
          // 注销krpano
          removepano(this.station.id);
          this.station = VR.STATIONS[sid];
          document.title = this.station.name; // 设置标题
          this.showGuide = false;
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

  #guide-map {
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
