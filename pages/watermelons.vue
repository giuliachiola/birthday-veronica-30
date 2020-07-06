<template>
  <div class="tpl tpl--watermelons">
    <nuxt-link to="/cats2" class="c-button c-button--animation"
      >Ok, basta angurie! →</nuxt-link
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
    linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-repeat: round;
}
</style>
