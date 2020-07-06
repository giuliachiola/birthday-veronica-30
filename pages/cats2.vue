<template>
  <div class="tpl tpl-cats">
    <!-- gif -->
    <gif-responsive :src="'https://giphy.com/embed/CF93EZqOxjdHG'" />
    <nuxt-link to="/watermelons" class="c-button c-button--animation"
      >Preso! →</nuxt-link
    >
  </div>
</template>

<script>
// 'https://giphy.com/embed/12ELmx0C4EFKcE'
// 'https://giphy.com/embed/CF93EZqOxjdHG',
// 'https://giphy.com/embed/40Fpxgn6Yq640',
// 'https://giphy.com/embed/a51kJ5I6YfejC',
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
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}

.tpl-cats__grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
</style>
