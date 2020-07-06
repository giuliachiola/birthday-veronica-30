<template>
  <div class="tpl tpl--watermelons">
    <nuxt-link to="/cats2" class="c-button c-button--animation"
      >Augurie! →</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'Watermelons',
}
</script>

<style lang="scss">
.tpl--watermelons {
  background: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/238/watermelon_1f349.png),
    linear-gradient(-45deg, #fc8476, #e63b20, #78a803, #608f00);
  background-repeat: round;
}
</style>
