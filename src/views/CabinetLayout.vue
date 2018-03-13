<!--机柜布局-->
<template>
  <div class="cabinet-warpper" v-for="item in guideMap">
    <div v-if="c.name" class="cabinet" v-for="c in item" @click="loadScene(c)">{{c.name}}</div>
    <div v-else class="cabinet-empty"></div>
  </div>
</template>

<script>
  export default {

  }
</script>
