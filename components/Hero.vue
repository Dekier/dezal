<template>
  <header id="hero" class="Hero__main-container">
    <div class="Hero__hero-image" />
    <div class="Hero__hero-background" />
    <div v-if="!!textData" class="Hero__center-container">
      <h1 class="Hero__title">
        {{ textData.title }}
      </h1>
      <p class="Hero__description">
        {{ textData.subtitle }}
      </p>
      <div class="Hero__btns-container">
        <div v-scroll-to="'#offer'" class="Hero__button">
          <span>{{ textData.button }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Hero',

  props: {
    textData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import 'Hero';
</style>
