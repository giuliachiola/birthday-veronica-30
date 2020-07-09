<template>
  <div class="tpl tpl--gradient-horizontal tpl--cats">
    <div class="l-wrapper">
      <!-- gif -->
      <gif-responsive :src="'https://giphy.com/embed/CF93EZqOxjdHG'" />
      <!-- <nuxt-link to="/sea" class="c-button c-button--animation"
        >e per sorprenderti! →</nuxt-link
      > -->
      <a href="/sea" class="c-button c-button--animation"
        >e per sorprenderti! →</a
      >
    </div>
  </div>
</template>

<script>
import GifResponsive from '../components/GifResponsive.vue'

export default {
  name: 'Cats2',

  components: {
    GifResponsive,
  },
}
</script>

<style lang="scss" scoped>
.tpl--cats {
  background: linear-gradient(to right, #4568dc, #b06ab3);
}

.tpl-cats__grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
</style>
