<template>
  <div class="tpl-homepage">
    <div class="c-intro">
      <h1>
        Auguri vero
      </h1>
      <countdown />
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
<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.tpl-homepage {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.c-intro {
  text-align: center;
}
</style>
