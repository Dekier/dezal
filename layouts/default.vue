<template>
  <div class="layout">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  letter-spacing: 1px;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.layout {
  display: flex;
  flex-direction: column;
}
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% { opacity: 0 }
  100% { opacity: 1 }
}
@keyframes bounce-out {
  0% { opacity: 1 }
  100% { opacity: 0 }
}

</style>
