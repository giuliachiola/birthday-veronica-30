<template>
  <div class="tpl tpl--homepage">
    <div class="c-intro">
      <h2>
        Alla fine siamo soltanto
      </h2>
      <countdown />
      <h2>
        in ritardo per darti il regalo 🎁
      </h2>
      <nuxt-link
        to="/cats"
        :gif="'https://giphy.com/embed/12ELmx0C4EFKcE'"
        class="c-button c-button--animation"
        >Hey amica dei Salameles, cliccami!</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Countdown from '../components/Countdown.vue'

export default {
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

$co_button: white;

.c-button--animation {
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($co_button, 0.5);
    border-radius: 40px;
    z-index: -2;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: rgba($co_button, 0.7);
    border-radius: 40px;
    z-index: -1;
    animation: variableWidth 2s ease-in-out infinite;
    animation-direction: alternate;
  }

  @keyframes variableWidth {
    0% {
      width: 12%;
    }
    100% {
      width: 100%;
    }
  }
}
</style>
