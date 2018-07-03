<!--开发绘制页面-->
<template>
  <div id="app" style="height:100%">
    <sf-krpano id="pano-wrapper"
               :xml="xml"
               html5="never"
               swf="/static/krpano.swf"
               :scene="scene"
               @panoCreated="init"/>
    <div id="draw-wrapper" v-show="draw" @click="handleDraw"></div>
    <div id="debug-info">
      <div style="font-weight: bold">hlookat, vlookat, fov</div>
      <div>{{hlookat}},{{vlookat}},{{fov}}</div>
      <div>{{`hlookat="${hlookat}" vlookat="${vlookat}"`}}</div>
      <hr>
      <div style="font-weight: bold">ath, atv</div>
      <div>{{`${ath},${atv}`}}</div>
      <div style="font-weight: bold">box</div>
      <div @click="draw=true">开启绘制</div>
      <div @click="endDraw">绘制结束</div>
      <div v-for="item in box_html">{{item}}</div>
    </div>
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
        ath: 0,
        atv: 0,
        hlookat: 0,
        vlookat: 0,
        fov: 0,
        box_html: [],
        draw: false
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
      this.panoCode = this.$route.params['panoCode'];
      this.scene = this.panoInfo.index;
    },

    mounted() {
      document.title = this.panoInfo.name;

      // 开启全景坐标
      setInterval(this.track_mouse_interval_callback, 100);
    },

    methods: {
      // 初始化全景
      init(krpanoObj) {
        this.krpanoObj = krpanoObj;
      },

      endDraw() {
        this.draw = false;
        this.box_html = [];
      },

      // 鼠标全景坐标回调
      track_mouse_interval_callback() {
        if (this.krpanoObj) {
          const mx = this.krpanoObj.get("mouse.x"),
            my = this.krpanoObj.get("mouse.y");
          const pnt = this.krpanoObj.screentosphere(mx, my);
          this.ath = (pnt.x).toFixed(3);
          this.atv = (pnt.y).toFixed(3);
          this.hlookat = this.krpanoObj.get("view.hlookat").toFixed(3);
          this.vlookat = this.krpanoObj.get("view.vlookat").toFixed(3);
          this.fov = this.krpanoObj.get("view.fov").toFixed(3);
        }
      },

      handleDraw(e) {
        if (this.draw) {
          const mx = e.clientX,
            my = e.clientY;
          const pnt = this.krpanoObj.screentosphere(mx, my),
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

  #pano-wrapper {
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
