<template>
  <header id="hero" class="Hero__main-container">
    <div class="Hero__hero-image" />
    <div class="Hero__hero-background" />
    <div class="Hero__center-container">
      <h1 v-if="text_data && text_data.title" class="Hero__title">
        {{ text_data.title }}
      </h1>
      <h2 v-if="text_data && text_data.subtitle" class="Hero__description">
        {{ text_data.subtitle }}
      </h2>
      <div v-if="text_data && text_data.button" class="Hero__btns-container">
        <div v-scroll-to="'#offer'" class="Hero__button">
          <span>{{ text_data.button }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',

  props: {
    text_data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Hero';
</style>
