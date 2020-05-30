<template>
  <section class="MainPage__main-container">
    <div class="MainPage__hero">
      <div class="MainPage__hero-background" />
    </div>
    <Hero :text_data="text_data" />
    <AboutCompany :about_company_data="about_company_data" />
    <Offer :offerData="offerData" :offer_data_boxes="offer_data_boxes" />
  </section>
</template>

<script>
import Offer from '~/components/Offer.vue'
import Hero from '~/components/Hero.vue'
import AboutCompany from '~/components/About-company.vue'
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'MainPage',

  transition: 'bounce',

  components: {
    Offer,
    Hero,
    AboutCompany,
  },

  data() {
    return {
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
    }
  },

  async asyncData({ app, params, error }) {
    const ref = fireDb.collection('main').doc('hero')
    let snap
    try {
      snap = await ref.get()
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }

    const ref_about = fireDb.collection('main').doc('about_company')
    let snap_about
    try {
      snap_about = await ref_about.get()
    } catch (e) {
      console.error(e)
    }

    const ref_offer = fireDb.collection('main').doc('offer')
    let snap_offer
    try {
      snap_offer = await ref_offer.get()
    } catch (e) {
      console.error(e)
    }
    return {
      text_data: snap.data(),
      about_company_data: snap_about.data(),
      offer_data_boxes: snap_offer.data(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'index';

.container {
  height: 200px;
  margin-top: 200px;
}
</style>
