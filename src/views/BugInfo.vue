<!--缺陷展示-->
<template>
  <div class="bug-wrapper">
    <div class="mask"></div>
    <div class="box">
      <div class="header">
        <span class="title">机柜xxx缺陷标题</span>
        <div class="close">×</div>
      </div>
      <div class="body">
        <ul v-if="multipleBug" class="show-list" v-show="!showBugDesc">
          <li :class="item.status === '5'?'item item-success':'item'"
              @click="showBugDesc=true;current_bug=item"
              v-for="item in list_data">
            <div class="item-header">{{ item.categoryname }}</div>
            <div class="item-body">
              <div>
                <div class="item-desc">{{ item.memo }}</div>
                <div class="item-remark">
                  {{ item.createdstamp }} | {{ item.username }} |
                  图片({{ item.pictures.length}}) | 语音({{ item.voicelist.length }})
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="show-desc" v-show="showBugDesc">
          <div class="bug-title">{{ current_bug.categoryname }}</div>
          <div class="bug-desc">{{ current_bug.memo }}</div>
          <el-carousel
            v-if="current_bug.pictures && current_bug.pictures.length > 0"
            style="margin-bottom: 20px"
            height="450px" indicator-position="none" arrow="always">
            <el-carousel-item
              v-for="item in current_bug.pictures"
              :key="item"
              style="display: flex;justify-content: center;height: 100%;border-radius: 2px;">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
          <audio controls="controls" v-for="item in current_bug.voicelist">
            <source :src="item" type="audio/mp3"/>
            <embed :src="item"/>
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
      width: 60%;
      margin: 15vh 20vw 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;

      .header {
        padding: 20px;

        .title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          color: #909399;
          line-height: 24px;
          font-size: 24px;
        }
      }
    }
  }
</style>
