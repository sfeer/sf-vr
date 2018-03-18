<!--机柜布局-->
<template>
  <div class="layout-wrapper">
    <div class="cabinet-row" v-for="item in data">
      <div v-if="c.name"
           :class="c.class?'cabinet '+c.class:'cabinet'"
           v-for="c in item"
           @click="clickHandle(c)">{{c.name}}
      </div>
      <div v-else class="cabinet-empty"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array, required: true
      }
    },

    data() {
      return {
        cabinet_data: []
      }
    },

    methods: {
      clickHandle(cab) {
        this.$emit('click', cab);
      }
    }
  }
</script>

<style lang="scss">
  .layout-wrapper {
    .cabinet-row {
      display: flex;
      margin: 10px auto;
      width: fit-content;
      justify-content: center;

      .cabinet {
        position: relative;
        text-align: center;
        background: #242833;
        color: #fff;
        flex: none;
        word-break: break-all;
        width: 28px;
        margin: 0 2px;
        padding: 5px;
        cursor: pointer;

        &.success:after {
          content: '';
          border-top: 5px solid #55ab2f;
          position: absolute;
          top: -5px;
          left: 0;
          width: 100%;
        }

        &.warning:after {
          content: '';
          border-top: 5px solid #dedb0c;
          position: absolute;
          top: -5px;
          left: 0;
          width: 100%;
        }

        &.danger:after {
          content: '';
          border-top: 5px solid #b62309;
          position: absolute;
          top: -5px;
          left: 0;
          width: 100%;
        }

      }

      .cabinet-empty {
        flex: none;
        width: 38px;
        margin: 0 2px;
      }
    }
  }
</style>
