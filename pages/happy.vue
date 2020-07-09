<template>
  <div class="tpl tpl--happy">
    <div class="l-wrapper">
      <h1>
        ...ti facciamo tantissimi <strong>auguri</strong> <br />per questi
        <strong>30</strong>
        anni!! 🎉 🍰
      </h1>
      <div class="s-gif-wrapper">
        <!-- gif -->
        <gif-responsive :src="'https://giphy.com/embed/qX7Q4wxpRVo88'" />
      </div>
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
.tpl--happy {
  background: linear-gradient(
    45deg,
    red 10%,
    orange,
    yellow,
    lime,
    blue,
    hotpink,
    blue,
    lime,
    yellow,
    orange,
    red
  );
  background-position: center;
  background-size: 200% 200%;
  animation: gradientVertical 3s ease-in-out infinite;

  h1 {
    color: white;
    margin: 20px 0;
    font-size: 2em;
    text-align: center;
    text-shadow: 4px -4px 20px #3b3b3b; // preserve legibility
    font-weight: 300;

    @media only screen and (min-width: $media-tablet) {
      font-size: 3em;
    }
  }
}

.s-gif-wrapper {
  max-width: 500px;
  margin: 0 auto;

  @media only screen and (min-width: $media-wide) {
    max-width: 800px;
  }
}
</style>
