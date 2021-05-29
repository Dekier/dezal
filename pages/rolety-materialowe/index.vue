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
  name: 'RoletyMaterialowe',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/rolety/dezal-poznan-roleta-materiałowa-1.jpg' },
      { id: 2, url: '/image/rolety/dezal-poznan-roleta-materiałowa-2.jpg' },
      { id: 3, url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.jpg' },
      { id: 4, url: '/image/rolety/dezal-poznan-roleta-materiałowa-4.jpg' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'dzien-noc',
        'plisy',
        'rzymskie',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Rolety Materiałowe w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Materiałowe w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: snapOffer.data().box_2_title,
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.jpg',
          description: snapOffer.data().box_2_description,
        },
      ],
    };
  },
};
</script>
