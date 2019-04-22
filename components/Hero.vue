<template>
  <header id="hero" class="Hero__main-container">
    <div class="Hero__hero-image" />
    <div class="Hero__hero-background" />
    <div class="Hero__center-container">
      <h1 class="Hero__title">
        Witamy na stronie firmy DEŻAL
      </h1>
      <h2 class="Hero__description">
        Jeżeli szukasz najlepszych rozwiązań osłon okiennych znajdziesz je na
        poznańskim Piątkowie. Szeroki wybór rolet materiałowych, rolet
        dzień-noc, rolet rzymskich, plis, verticali, żaluzji drewnianych i
        aluminiowych.
      </h2>
      <!-- <button class="Hero__button">
        Przejdź do Oferty
      </button> -->
      <div v-scroll-to="'#offer'" class="Hero__button">
        <svg width="200" height="50">
          <line class="svg-top-left" x1="-100" y1="0" x2="100" y2="0" />
          <line class="svg-top-right" x1="100" y1="0" x2="300" y2="0" />
          <line class="svg-left-top" x1="0" y1="-25" x2="0" y2="25" />
          <line class="svg-left-bottom" x1="0" y1="25" x2="0" y2="75" />
          <line class="svg-bottom-left" x1="-100" y1="50" x2="100" y2="50" />
          <line class="svg-bottom-right" x1="100" y1="50" x2="300" y2="50" />
          <line class="svg-right-top" x1="200" y1="-25" x2="200" y2="25" />
          <line class="svg-right-bottom" x1="200" y1="25" x2="200" y2="75" />
        </svg>
        <p>Przejdź do Oferty</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
@import 'Hero';
</style>
