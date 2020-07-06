<template>
  <div class="tpl tpl-cats">
    <div class="l-wrapper">
      <h1>...ti auguriamo tantissimi auguri per questi 30 anni!! 🎉 🍰</h1>
      <!-- gif -->
      <gif-responsive :src="'https://giphy.com/embed/qX7Q4wxpRVo88'" />
    </div>
  </div>
</template>

<script>
import GifResponsive from '../components/GifResponsive.vue'

export default {
  name: 'Happy',

  components: {
    GifResponsive,
  },
}
</script>

<style lang="scss" scoped>
.tpl--cats {
  background: linear-gradient(-45deg, blue, red, yellow, orange, hotpink);
}
</style>
