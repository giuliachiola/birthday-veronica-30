<template>
  <div class="tpl tpl--sea">
    <nuxt-link to="/happy" class="c-button c-button--animation"
      >Quindi fluttuando come l'algapalla... →</nuxt-link
    >
  </div>
</template>

<script>
export default {
  mounted() {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://codepen.io/giuliachiola/pen/oNbqNOr.js' // forked!
    )
    document.head.appendChild(recaptchaScript)
  },
}
</script>

<style lang="scss">
.tpl--sea {
  background: linear-gradient(-45deg, #131bab, #3c92e7, #24adde, #4a40d4);
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}

$parrot-size: 60px;

[class*='parrot'] {
  position: absolute;
  height: $parrot-size;
  width: $parrot-size;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.parrot-1,
.parrot-2,
.parrot-3,
.parrot-4,
.parrot-5,
.parrot-6,
.parrot-7,
.parrot-8,
.parrot-9,
.parrot-10,
.parrot-11,
.parrot-12,
.parrot-13,
.parrot-14,
.parrot-15,
.parrot-16,
.parrot-17,
.parrot-18,
.parrot-19,
.parrot-20,
.parrot-21,
.parrot-22,
.parrot-23,
.parrot-24,
.parrot-25 {
  background-image: url('../assets/img/marimo-ball.png');
}
</style>
