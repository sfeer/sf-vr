<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
    <div id="debug-info">
      <div style="font-weight: bold">hlookat, vlookat, fov</div>
      <div>{{`${hlookat}, ${vlookat}, ${fov}`}}</div>
      <hr>
      <div style="font-weight: bold">ath, atv</div>
      <div>{{`${ath}, ${atv}`}}</div>
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
        fov: 0
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
    width: 200px;
    height: 100px;
    background-color: beige;
  }
</style>
