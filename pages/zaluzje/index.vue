<template>
  <div class="Plisy__main-container">
    <product-information :pageData="pageData" :bottom-images="bottomImages" />
    <offer :offerData="offerData" :offerDataBoxes="offerDataBoxes" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue';
import Offer from '~/components/Offer.vue';
import { fireDb } from '~/plugins/firebase.js';

export default {
  name: 'Zaluzje',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-2.jpg' },
      { id: 2, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-3.jpg' },
      { id: 3, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-4.jpg' },
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
        'verticale',
        'moskitiery',
      ],
    },
    title:
      'Żaluzje deżal-poznań-żaluzja-drewniana-/aluminiowe w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Żaluzje deżal-poznań-żaluzja-drewniana-/aluminiowe w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: snapOffer.data().box_8_title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.jpg',
          description: snapOffer.data().box_8_description,
        },
        {
          id: 1,
          title: snapOffer.data().box_9_title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.jpg',
          description: snapOffer.data().box_9_description,
        },
      ],
    };
  },
};
</script>
