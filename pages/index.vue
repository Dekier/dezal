<template>
  <section class="MainPage__main-container">
    <div class="MainPage__hero">
      <div class="MainPage__hero-background" />
    </div>
    <hero :text-data="hero" />
    <about-company :about-company-data="aboutCompany" />
    <offer :offer-data="offerData" :offer-data-boxes="offer" />
  </section>
</template>

<script>
import Offer from '~/components/Offer.vue';
import Hero from '~/components/Hero.vue';
import AboutCompany from '~/components/About-company.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'MainPage',

  transition: 'bounce',

  components: {
    Offer,
    Hero,
    AboutCompany,
  },

  data: () => ({
    writeSuccessful: false,
    readSuccessful: false,
    offerData: {
      title: 'Oferta',
      description:
        'Tworzymy projekty wnętrz łączące w sobie ciekawe formy i funkcjonalność naszych produktów. W naszej ofercie znajdziecie szeroki wybór kolorów i deseni materiałów. Mieszkasz lub pracujesz w Poznaniu bądź okolicy? Potrzebujesz rolet lub żaluzji? Sprawdź koniecznie naszą ofertę! ',
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
  }),
  computed: {
    ...mapGetters(['hero', 'aboutCompany', 'offer']),
  },
};
</script>

<style lang="scss" scoped>
@import 'index';
</style>
