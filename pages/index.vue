<template>
  <section class="MainPage__main-container">
    <div class="MainPage__hero">
      <div class="MainPage__hero-background" />
    </div>
    <Hero />
    <AboutCompany />
    <Offer :offerData="offerData" />
    <!-- <Weather/> -->
  </section>
</template>

<script>
import Offer from '~/components/Offer.vue'
import Hero from '~/components/Hero.vue'
import AboutCompany from '~/components/About-company.vue'

export default {
  name: 'MainPage',

  transition: 'bounce',

  data() {
    return {
      offerData: {
        title: 'Oferta',
        description:
          'W naszej ofercie znajdziemy szeroki wybór kolorów i deseni materiałów. Polecamy:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'rzymskie',
          'plisy',
          'zaluzje',
          'verticale',
          'moskitiery',
        ],
      },
    }
  },

  components: {
    Offer,
    Hero,
    AboutCompany,
  },
}
</script>

<style lang="scss" scoped>
@import 'index';
</style>
