<template>
  <div class="tpl tpl--happy">
    <div class="l-wrapper">
      <h1>
        ...ti facciamo tantissimi <strong>auguri</strong> <br />per questi
        <strong>30</strong>
        anni!! 🎉 🍰
      </h1>
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
.tpl--happy {
  background: radial-gradient(red 5%, orange, yellow, lime, blue, hotpink);
  background-position: center;
  animation: radialBackground 3s ease-in-out infinite;

  h1 {
    color: white;
    margin: 40px 0;
    font-weight: 300;
    font-size: 3em;
    text-align: center;
    text-shadow: 3px -2px 11px #161616; // preserve legibility
  }
}

@keyframes radialBackground {
  0% {
    background-size: 100% 100%;
  }
  20% {
    background-size: 200% 200%;
  }
  50% {
    background-size: 400% 400%;
  }
  70% {
    background-size: 200% 200%;
  }
  100% {
    background-size: 100% 100%;
  }
}
</style>
