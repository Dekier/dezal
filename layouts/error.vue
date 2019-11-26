<template>
  <div class="ErrorPage__main-container">
    <h1 class="ErrorPage__text" v-if="error.statusCode === 404">Przepraszamy. Nie ma takiej strony</h1>
    <h1 class="ErrorPage__text" v-else>Ups... coś poszło nie tak</h1>
    <nuxt-link class="ErrorPage__link" to="/">Przejdź do strony głównej</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
  @import 'error';
</style>
