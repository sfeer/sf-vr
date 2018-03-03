<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
    <div id="draw-wrapper" v-show="draw" @click="handleDraw"></div>
    <div id="debug-info">
      <div style="font-weight: bold">hlookat, vlookat, fov</div>
      <div>{{`${hlookat}, ${vlookat}, ${fov}`}}</div>
      <hr>
      <div style="font-weight: bold">ath, atv</div>
      <div>{{`${ath}, ${atv}`}}</div>
      <div style="font-weight: bold">box</div>
      <el-button @click="draw=true">开启绘制</el-button>
      <el-button @click="draw=false;box_html=[];">绘制结束</el-button>
      <div v-for="item in box_html">{{item}}</div>
    </div>
  </div>
</template>

<script>
  import VR from '../assets/vr';

  export default {
    data() {
      return {
        sid: '', // 站点id
        station: {}, // 当前站点信息
        ath: 0,
        atv: 0,
        hlookat: 0,
        vlookat: 0,
        fov: 0,
        box_html: [],
        draw: false
      }
    },
    mounted() {
      this.sid = this.$route.params.sid;
      this.station = VR.STATIONS[this.sid];
      document.title = this.station.name; // 设置标题
      this.initVR();

      // 开启全景坐标
      setInterval(this.track_mouse_interval_callback, 100);
    },
    methods: {
      // 初始化全景
      initVR() {
        // 初始化krpano
        embedpano({
          xml: '/static/xml/' + this.sid + '.xml',
          swf: '/static/krpano.swf',
          target: 'pano',
          html5: 'never', // 默认 auto，never 使用flash viewer
          mobilescale: 1.0,
          passQueryParameters: true,
          onready: krpano => {
            krpano.call("loadscene('" + this.station.index + "', null, MERGE)");
            krpano.hooks = {};
            this.krpano = krpano;
          }
        });
      },
      // 鼠标全景坐标回调
      track_mouse_interval_callback() {
        if (this.krpano) {
          const mx = this.krpano.get("mouse.x"),
            my = this.krpano.get("mouse.y");
          const pnt = this.krpano.screentosphere(mx, my);
          this.ath = (pnt.x).toFixed(3);
          this.atv = (pnt.y).toFixed(3);
          this.hlookat = this.krpano.get("view.hlookat").toFixed(3);
          this.vlookat = this.krpano.get("view.vlookat").toFixed(3);
          this.fov = this.krpano.get("view.fov").toFixed(3);
        }
      },
      handleDraw(e) {
        if (this.draw) {
          const mx = e.clientX,
            my = e.clientY;
          const pnt = this.krpano.screentosphere(mx, my),
            ath = (pnt.x).toFixed(3),
            atv = (pnt.y).toFixed(3);
          this.box_html.push(`<point ath="${ath}" atv="${atv}"/>`);
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
    font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #444;
  }

  #pano {
    width: 100%;
    height: 100%;
    z-index: 0 !important;
  }

  #debug-info {
    position: absolute;
    top: 0;
    width: 180px;
    height: 300px;
    background-color: beige;
  }

  #draw-wrapper {
    position: absolute;
    top: 20vh;
    left: 20vw;
    width: 60vw;
    height: 60vh;
    background-color: rgba(246, 253, 66, 0.2);
  }
</style>
