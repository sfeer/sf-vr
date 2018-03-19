<!--全景插件-->
<template>
  <div></div>
</template>

<script>
  const {embedpano, removepano} = window;

  if (!(embedpano && removepano)) {
    throw new Error("krpano player is required");
  }

  export default {
    props: {
      xml: {
        type: String, required: true
      },
      scene: {
        type: String
      },
      swf: {
        type: String, default: 'krpano.swf'
      },
      lookat: {
        type: String
      },
      html5: {
        type: String, default: 'auto'
      },
      hooks: {
        type: Object
      },
      debug: {
        type: Boolean, default: false
      }
    },

    data() {
      return {
        // 并发锁
        createLock: false,
        krpanoObjId: "krpano_" + Math.floor(Math.random() * (100000 - 100 + 1) + 100)
      }
    },

    mounted() {
      this.createPano();
    },

    methods: {
      createPano() {
        if (!this.createLock && !this.krpanoObj) {
          this.createLock = true;

          embedpano({
            id: this.krpanoObjId,
            target: this.$el.id,
            swf: this.swf,
            xml: this.xml,
            html5: this.html5,
            mobilescale: 1.0,
            passQueryParameters: true,
            onready: krpanoObj => {
              this.krpanoObj = krpanoObj;
              this.krpanoObj.hooks = this.hooks;
              this.$emit("panoCreated", this.krpanoObj);
              this.createLock = false;
            }
          });
        }
      },

      removePano() {
        if (this.krpanoObj) {
          removepano(this.krpanoObj.id);
          delete this.krpanoObj;
        }
      },

      loadScene() {
        let scene = this.scene;
        if (this.krpanoObj) {
          if (scene) {
            let str = `if(scene[${scene}]===null,
                        loadscene(get(scene[0].name),null,MERGE,BLEND(0.5)),
                        loadscene(${scene},null,MERGE,BLEND(0.5)))`;
            this.krpanoObj.call(str);
            this.$emit("sceneChanged", scene);
            this.loadLookat();
          } else {
            this.krpanoObj.call("loadscene(get(scene[0].name),null,MERGE,BLEND(0.5))");
          }
        }
      },

      loadLookat() {
        if (this.krpanoObj) {
          if (this.lookat) {
            const arr = this.lookat.split(',');
            this.krpanoObj.call("lookat('" + arr[0] + "','" + arr[1] + "','" + arr[2] + "')");
          }
        }
      }
    },

    watch: {
      xml(newXml) {
        if (this.krpanoObj && newXml) {
          this.krpanoObj.call(`loadpano(${newXml},null,IGNOREKEEP)`);
          this.$emit("xmlChanged", newXml);
        }
      },

      scene() {
        this.loadScene();
      },

      lookat() {
        this.loadLookat();
      }
    },

    created() {
      this.$on(["panoCreated", "xmlChanged"], this.loadScene);
    },

    beforeDestroy() {
      this.removePano();
    }
  }
</script>
