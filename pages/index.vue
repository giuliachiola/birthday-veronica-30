<template>
  <div class="tpl tpl--gradient-horizontal tpl--homepage">
    <div class="c-intro">
      <h2>
        Alla fine siamo soltanto
      </h2>
      <countdown />
      <h2>
        in ritardo per darti il regalo 🎁
      </h2>
      <!-- <nuxt-link to="/cats" class="c-button c-button--animation"
        >Hey amica dei Salameles, cliccami!</nuxt-link
      > -->
      <a href="/cats" class="c-button c-button--animation"
        >Hey amica dei Salameles, cliccami!</a
      >
    </div>
  </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'

export default {
  name: 'Index',

  components: {
    Countdown,
  },
}
</script>

<style scoped lang="scss">
.tpl--homepage {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}

.c-intro {
  text-align: center;

  h2 {
    color: white;
    margin: 40px 0;
    font-weight: 300;
    font-size: 2em;
  }
}
</style>
