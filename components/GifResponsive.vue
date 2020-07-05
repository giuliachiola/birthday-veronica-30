<template>
  <div style="width: 100%; height: 0; padding-bottom: 59%; position: relative;">
    <iframe
      :src="src"
      width="100%"
      height="100%"
      style="position: absolute;"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
