<template>
  <div class="tpl tpl--gradient-horizontal tpl--sea">
    <!-- <nuxt-link to="/happy" class="c-button c-button--animation"
      >Quindi fluttuando come l'algapalla... →</nuxt-link
    > -->
    <a href="/happy" class="c-button c-button--animation"
      >Quindi fluttuando come un'algapalla... →</a
    >

    <a class="s-animation-credits" href="https://codepen.io/shorelle/pen/NvpRLM"
      >Animation credits</a
    >
  </div>
</template>

<script>
export default {
  mounted() {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://codepen.io/shorelle/pen/NvpRLM.js' // forked!
    )
    document.head.appendChild(recaptchaScript)
  },
}
</script>

<style lang="scss">
// IMPORTANT: do not add 'scoped' in this <style> attribute because .parrot items are not in this scope :)

.tpl--sea {
  background-image: linear-gradient(
    to bottom,
    rgba(1, 96, 186, 1) 5.736111111111111%,
    rgba(0, 0, 0, 1) 96.29166666666666%
  );
}

.s-animation-credits {
  font-size: 11px;
  color: lightgray;
  position: absolute;
  bottom: 20px;
  right: 20px;
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
