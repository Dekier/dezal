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
  name: 'RoletyDzienNoc',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-1.jpg' },
      { id: 2, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-7.jpg' },
      { id: 3, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-3.jpg' },
      { id: 4, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-4.jpg' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'plisy',
        'materialowe',
        'rzymskie',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Rolety dzień-noc w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety dzień-noc w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: snapOffer.data().box_1_title,
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-2.jpg',
          description: snapOffer.data().box_1_description,
        },
      ],
    };
  },
};
</script>
