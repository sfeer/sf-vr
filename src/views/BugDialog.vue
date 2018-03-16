<!--缺陷展示-->
<template>
  <div class="bug-wrapper">
    <div class="mask" @click="$emit('close')"></div>
    <div class="box">
      <div class="header">
        <div class="close" @click="handleClose">×</div>
        <div class="title">{{title}}</div>
      </div>
      <div class="body">
        <ul v-if="bugList.length>1" class="show-list" v-show="!showDesc">
          <li :class="item.status === '5'?'item item-success':'item'"
              @click="clickBug(item)"
              v-for="item in bugList">
            <div class="item-header">{{ item.name }}</div>
            <div class="item-body">
              <div>
                <div class="item-desc">{{ item.memo }}</div>
                <div class="item-remark">
                  {{ item.time }} | {{ item.user }} | 图片({{ item.pictures.length}}) | 语音({{ item.voices.length }})
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="show-desc" v-show="showDesc">
          <div class="bug-desc">{{ bugMemo }}</div>
          <div id="bug-pictures" class="swiper-container">
            <div class="swiper-wrapper" v-for="src in bugPictures">
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img :src="src">
                </div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <audio controls="controls" v-for="item in bugVoices">
            <source :src="item" type="audio/mp3"/>
            <embed :src="item"/>
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    props: {
      // 缺陷信息
      data: {
        required: true
      }
    },

    data() {
      return {
        // 机柜信息
        cabinetMap: {},

        showDesc: false,

        title: '',
        bugMemo: '',
        bugPictures: [],
        bugVoices: [],

        // 缺陷列表
        bugList: [],

        viewerOpt: {
          inline: true,
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
      data(data) {
        if (data) {
          this.bugList = data['bugs'];
          if (this.bugList.length > 1) {
            this.title = data.name + data.typename;
            this.showDesc = false;
          } else {
            const bugInfo = this.bugList[0];
            this.bugMemo = bugInfo.memo;
            this.bugPictures = bugInfo.pictures;
            this.mySwiper.update();
            this.bugVoices = bugInfo.voices;
            this.title = bugInfo.name;
            this.showDesc = true;
          }
        }
      }
    },

    mounted() {
      // 图片浏览器
      this.mySwiper = new Swiper('#bug-pictures', {
        zoom: true,
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },

    methods: {
      clickBug(bug) {
        this.bugMemo = bug.memo;
        this.bugPictures = bug.pictures;
        this.mySwiper.update();
        this.bugVoices = bug.voices;
        this.title = bug.name;
        this.showDesc = true;
      },

      // 处理返回
      handleClose() {
        if (this.bugList.length > 1 && this.showDesc) {
          this.showDesc = false;
        } else {
          this.showDesc = false;
          this.$emit('close');
        }
      }
    }
  }
</script>

<style lang="scss">
  .bug-wrapper {
    .mask {
      z-index: 1000;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
    }

    .box {
      z-index: 1010;
      position: fixed;
      top: 0;
      width: 60vw;
      margin: 15vh 20vw 0;
      background: #fff;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-sizing: border-box;

      @media (max-width: 767px) {
        width: 90vw;
        margin: 15vh 5vw 0;
      }

      .header {
        background: #5a7490;
        padding: 16px;

        .title {
          line-height: 24px;
          font-size: 18px;
          color: #fff;
          margin-left: 30px;
        }

        .close {
          position: absolute;
          top: 14px;
          left: 14px;
          cursor: pointer;
          color: #fff;
          line-height: 24px;
          font-size: 36px;
        }
      }

      .body {
        padding: 16px;

        .show-list {
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: auto;

          .item {
            position: relative;
            margin-bottom: 16px;
            border: 1px solid #b0b0b0;
            border-radius: 5px;
            overflow: hidden;
            cursor: pointer;

            .item-header {
              padding: 12px 15px;
              border-bottom: 1px solid #e0e0e0;
            }

            .item-body {
              padding: 12px 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .item-desc, .item-remark {
              font-size: 0.8rem;
              color: #999;
            }

            &:last-child {
              margin-bottom: 0;
            }

            &.item-success {
              border-color: #83c44e;
              .item-header {
                background-color: lighten(#83c44e, 40%);
                border-color: lighten(#83c44e, 20%);
              }
            }
          }
        }

        .show-desc {
          .bug-desc {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
          }

          #bug-pictures {
            width: 100%;
            height: 350px;
          }
        }
      }
    }
  }
</style>
