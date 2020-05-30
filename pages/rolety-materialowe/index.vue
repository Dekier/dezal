<template>
  <div>
    <ProductInformation :pageData="pageData" :bottom-images="bottomImages" />
    <Offer :offerData="offerData" :offer_data_boxes="offer_data_boxes" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue'
import Offer from '~/components/Offer.vue'
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'RoletyMaterialowe',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data() {
    return {
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
    }
  },
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
    }
  },

  async asyncData({ app, params, error }) {
    const ref_offer = fireDb.collection('main').doc('offer')
    let snap_offer
    try {
      snap_offer = await ref_offer.get()
    } catch (e) {
      console.error(e)
    }
    return {
      offer_data_boxes: snap_offer.data(),
      pageData: [
        {
          id: 0,
          title: snap_offer.data().box_2_title,
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.jpg',
          description: snap_offer.data().box_2_description,
        },
      ],
    }
  },
}
</script>