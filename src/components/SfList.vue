<!-- 列表 -->
<template>
  <div class="sf-list-wrapper">
    <ul class="show-list" v-show="!showMore">
      <li :class="classObject(item.status)"
          @click="showListItem(item)"
          v-for="item in value">
        <div class="item-header">{{ item.title }}</div>
        <div class="item-body">
          <div>
            <div class="item-desc">{{ item.desc }}</div>
            <div class="item-remark">{{ item.remark }}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="show-desc" v-show="showMore">
      <el-button @click="showMore=false">返回</el-button>
      <div class="bug-title">{{ currentItem.title }}</div>
      <div class="bug-desc">{{ currentItem.desc }}</div>
      <el-carousel v-if="hasPicture" height="450px" indicator-position="none" arrow="always">
        <el-carousel-item
          v-for="item in currentItem.picture"
          :key="item"
          style="display: flex;justify-content: center;height: 100%">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
      <div v-if="hasVideo">
        <audio controls="controls" v-for="item in currentItem.video">
          <source :src="item" type="audio/mp3"/>
          <embed :src="item"></embed>
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMore: false,
        currentItem: {},
        hasPicture: false,
        hasVideo: false
      }
    },
    props: {
      value: Array
    },
    methods: {
      classObject(status) {
        return {
          item: true,
          'item-success': status === 'success',
          'item-warning': status === 'warning',
          'item-danger': status === 'danger'
        }
      },
      showListItem(item) {
        this.showMore = true;
        this.currentItem = item;
        this.hasPicture = item.picture && item.picture.length > 0;
        this.hasVideo = item.video && item.picture.length > 0;
      }
    }
  }
</script>

<style lang="scss">
  $success-color: #83c44e;
  $warning-color: #d2c33f;
  $danger-color: #e25e42;

  .sf-list-wrapper {
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
          border-color: $success-color;
          .item-header {
            background-color: lighten($success-color, 40%);
            border-color: lighten($success-color, 20%);
          }
        }
        &.item-warning {
          border-color: $warning-color;
          .item-header {
            background-color: lighten($warning-color, 40%);
            border-color: lighten($warning-color, 20%);
          }
        }
        &.item-danger {
          border-color: $danger-color;
          .item-header {
            background-color: lighten($danger-color, 40%);
            border-color: lighten($danger-color, 20%);
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

  .gone {
    display: none !important;
  }
</style>
