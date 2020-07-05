<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: 'My custom description',
        // },
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
        },
      ],
    }
  },
}
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
