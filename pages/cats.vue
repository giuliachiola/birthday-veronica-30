<template>
  <div class="tpl tpl--gradient-horizontal tpl-cats">
    <div class="l-wrapper">
      <!-- gif -->
      <gif-responsive :src="'https://giphy.com/embed/12ELmx0C4EFKcE'" />
      <!-- <nuxt-link to="/watermelons" class="c-button c-button--animation"
        >Abbiamo pensato ad un modo simpatico per dirti →</nuxt-link
      > -->
      <a href="/watermelons" class="c-button c-button--animation"
        >Abbiamo pensato ad un modo simpatico per dirti →</a
      >
    </div>
  </div>
</template>

<script>
import GifResponsive from '../components/GifResponsive.vue'

export default {
  name: 'Cats',

  components: {
    GifResponsive,
  },

  // props: {
  //   gif: {
  //     type: String,
  //     default: '',
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.tpl--cats {
  background: linear-gradient(to left, #3a1c71, #d76d77, #ffaf7b);
}

.tpl-cats__grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}
</style>
