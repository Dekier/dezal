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
  name: 'RoletyRzymskie',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/rolety/dezal-poznan-roleta-rzymska-1.jpg' },
      { id: 2, url: '/image/rolety/dezal-poznan-roleta-rzymska-2.jpg' },
      { id: 3, url: '/image/rolety/dezal-poznan-roleta-rzymska-4.jpg' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'dzien-noc',
        'materialowe',
        'plisy',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Rolety Rzymskie w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Rzymskie w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: snapOffer.data().box_3_title,
          url: '/image/rolety/dezal-poznan-roleta-rzymska-0.jpg',
          description: snapOffer.data().box_3_description,
        },
      ],
    };
  },
};
</script>
