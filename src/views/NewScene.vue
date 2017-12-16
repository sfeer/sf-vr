<template>
  <div id="app" style="height:100%">
    <div id="pano"></div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import VR from '../assets/vr';

  export default {
    name: 'app',
    data() {
      return {
        // 当前站点信息
        station: {}
      }
    },
    watch: {
      $route: function (d) {
        if (_.has(VR.STATIONS, d.name)) {
          // 注销krpano
          removepano(this.station.id);
          this.station = VR.STATIONS[d.name];
          this.initVR();
        }
      }
    },
    mounted() {
      const name = this.$route.name;
      if (_.has(VR.STATIONS, name)) {
        this.station = VR.STATIONS[name];
        document.title = this.station.name; // 设置标题
        this.initVR();
      }
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
          html5: 'auto', // never 使用flash viewer
          mobilescale: 1.0,
          passQueryParameters: true,
          onready: krpano => {
            const sc = this.initScene ? this.initScene : this.station.index;
            // console.log(this.station, this.initScene, this.initLookat);
            krpano.call("loadscene('" + sc + "', null, MERGE)");
            if (this.initLookat) {
              const arr = _.split(this.initLookat, ',');
              krpano.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
            }
            krpano.hooks = {
              // 跨站点场景切换
              href: (url) => {
                const a = url.split('|');
                this.initScene = a.length > 1 ? a[1] : undefined;
                this.initLookat = a.length > 2 ? a[2] : undefined;
                this.$router.push(a[0]);
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
</style>
