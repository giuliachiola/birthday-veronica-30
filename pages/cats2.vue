<template>
  <div class="tpl tpl--gradient-horizontal tpl--cats2">
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
.tpl--cats2 {
  background-image: linear-gradient(
    to right,
    #4568dc,
    #b06ab3,
    #4568dc,
    #b06ab3
  );
}
</style>
