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
  name: 'Moskitiery',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data() {
    return {
      bottomImages: [
        { id: 1, url: '/image/moskitiery/dezal-poznan-moskitiera-1.jpg' },
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
          'verticale',
        ],
      },
      title: 'Moskitiery w Poznaniu od firmy Deżal',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Maskitiery na okna w Poznaniu na Piątkowie. Montaż w cene!',
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
          title: snap_offer.data().box_7_title,
          url: '/image/moskitiery/dezal-poznan-moskitiera-1.jpg',
          description: snap_offer.data().box_7_description,
        },
      ],
    }
  },
}
</script>