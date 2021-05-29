<template>
  <div>
    <product-information :pageData="pageData" :bottom-images="bottomImages" />
    <offer :offerData="offerData" :offerDataBoxes="offerDataBoxes" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import { fireDb } from '~/plugins/firebase.js';

export default {
  name: 'Verticale',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/verticale/deżal-poznań-roleta-verticale-1.jpg' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'dzien-noc',
        'materialowe',
        'rzymskie',
        'plisy',
        'zaluzje',
        'moskitiery',
      ],
    },
    title: 'Verticale w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Verticale w Poznaniu na Piątkowie. Montaż w cene!',
        },
      ],
    };
  },

  async asyncData() {
    const ref_offer = fireDb.collection('main').doc('offer');
    let snapOffer;
    try {
      snapOffer = await ref_offer.get();
    } catch (e) {
      console.error(e);
    }
    return {
      offerDataBoxes: snapOffer.data(),
      pageData: [
        {
          id: 0,
          title: snapOffer.data().box_6_title,
          url: '/image/verticale/deżal-poznań-roleta-verticale-1.jpg',
          description: snapOffer.data().box_6_description,
        },
      ],
    };
  },
};
</script>
