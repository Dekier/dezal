<template>
  <div class="ErrorPage__main-container">
    <h1 v-if="error.statusCode === 404" class="ErrorPage__text">
      Przepraszamy. Nie ma takiej strony
    </h1>
    <h1 v-else class="ErrorPage__text">Ups... coś poszło nie tak</h1>
    <nuxt-link class="ErrorPage__link" to="/"
      >Przejdź do strony głównej</nuxt-link
    >
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
};
</script>

<style lang="scss" scoped>
@import 'error';
</style>
