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
      <div class="Hero__btns-container">
        <div v-scroll-to="'#offer'" class="Hero__button">
          <span>Przejdź do Oferty</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
@import 'Hero';
</style>
