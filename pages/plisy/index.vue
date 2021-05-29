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
  name: 'Plisy',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data: () => ({
    bottomImages: [
      { id: 1, url: '/image/plisy/deżal-poznań-plisa-1.jpg' },
      { id: 2, url: '/image/plisy/deżal-poznań-plisa-2.jpg' },
      { id: 3, url: '/image/plisy/deżal-poznań-plisa-3.jpg' },
      { id: 4, url: '/image/plisy/deżal-poznań-plisa-4.jpg' },
    ],
    offerData: {
      title: 'Zobacz również',
      description:
        'Polecamy również nasze pozostałe produkty. W pełnej ofercie firmy Deżal znajdziesz:',
      showBoxes: [
        'dzien-noc',
        'materialowe',
        'rzymskie',
        'zaluzje',
        'verticale',
        'moskitiery',
      ],
    },
    title: 'Plisy w Poznaniu od firmy Deżal.',
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Plisy w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: snapOffer.data().box_4_title,
          url: '/image/plisy/deżal-poznań-plisa-1.jpg',
          description: snapOffer.data().box_4_description,
        },
      ],
    };
  },
};
</script>
