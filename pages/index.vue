<template>
  <section class="MainPage__main-container">
    <div class="MainPage__hero">
      <div class="MainPage__hero-background" />
    </div>
    <hero v-if="textData" :text-data="textData" />
    <about-company
      v-if="aboutCompanyData"
      :about-company-data="aboutCompanyData"
    />
    <offer :offer-data="offerData" :offer-data-boxes="offerDataBoxes" />
  </section>
</template>

<script>
import Offer from '~/components/Offer.vue';
import Hero from '~/components/Hero.vue';
import AboutCompany from '~/components/About-company.vue';
import { fireDb } from '~/plugins/firebase.js';

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

  async asyncData() {
    const ref = fireDb.collection('main').doc('hero');
    let snap;
    try {
      snap = await ref.get();
    } catch (e) {
      console.error(e);
    }

    const ref_about = fireDb.collection('main').doc('about_company');
    let snapAbout;
    try {
      snapAbout = await ref_about.get();
    } catch (e) {
      console.error(e);
    }

    const ref_offer = fireDb.collection('main').doc('offer');
    let snapOffer;
    try {
      snapOffer = await ref_offer.get();
    } catch (e) {
      console.error(e);
    }
    return {
      textData: snap.data(),
      aboutCompanyData: snapAbout.data(),
      offerDataBoxes: snapOffer.data(),
    };
  },

  mounted() {
    console.log('sdfjkdsn', this.dupa);
  },
};
</script>

<style lang="scss" scoped>
@import 'index';

// .container {
//   height: 200px;
//   margin-top: 200px;
// }
</style>
