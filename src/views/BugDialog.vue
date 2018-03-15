<!--缺陷展示-->
<template>
  <div v-show="show" class="bug-wrapper">
    <div class="mask"></div>
    <div v-if="cabinetInfo" class="box">
      <div class="header">
        <span class="close" @click="handleClose">×</span>
        <span class="title">{{cabinetInfo.name}}{{cabinetInfo.typename}}</span>
      </div>
      <div class="body">
        <ul v-if="bugList.length>1" class="show-list" v-show="!showDesc">
          <li :class="item.status === '5'?'item item-success':'item'"
              @click="showDesc=true;bugInfo=item"
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
          <div class="bug-title">{{ bugInfo.name }}</div>
          <div class="bug-desc">{{ bugInfo.memo }}</div>
          <audio controls="controls" v-for="item in bugInfo.voices">
            <source :src="item" type="audio/mp3"/>
            <embed :src="item"/>
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // 缺陷信息
      data: {
        required: true
      },

      show: {
        type: Boolean
      }
    },

    data() {
      return {
        showDesc: false,

        // 机柜信息
        cabinetMap: {},

        // 缺陷
        bugInfo: {}
      }
    },

    computed: {
      cabinetInfo() {
        return this.cabinetMap[this.cabinetid];
      },

      bugList() {
        return this.cabinetInfo ? this.cabinetInfo['bugs'] : [];
      }
    },

    methods: {
      // 处理返回
      handleClose() {
        if (this.showDesc) {
          this.showDesc = false;
        } else {
          this.show = false;
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
        padding: 20px;

        .title {
          line-height: 24px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }

        .close {
          cursor: pointer;
          color: #909399;
          line-height: 24px;
          font-size: 24px;
          margin-right: 10px;
        }
      }

      .body {
        padding: 20px;

        .show-list {
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: auto;

          .item {
            position: relative;
            margin-bottom: 20px;
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
          .bug-title {
            font-size: 1.5rem;
            margin: 20px 0;
          }
          .bug-desc {
            color: #666;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>
