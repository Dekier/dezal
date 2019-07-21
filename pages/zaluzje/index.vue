<template>
  <div class="Plisy__main-container">
    <ProductInformation :pageData="pageData" :bottom-images="bottomImages" />
    <Offer :offerData="offerData" :offer_data_boxes="offer_data_boxes" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue'
import Offer from '~/components/Offer.vue'
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'Zaluzje',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data() {
    return {
      bottomImages: [
        { id: 1, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-2.jpg' },
        { id: 2, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-3.jpg' },
        { id: 3, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-4.jpg' },
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy poza tym inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
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
    }
  },
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
          title: snap_offer.data().box_8_title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.jpg',
          description: snap_offer.data().box_8_description,
        },
        {
          id: 1,
          title: snap_offer.data().box_9_title,
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.jpg',
          description: snap_offer.data().box_9_description,
        },
      ],
    }
  },
}
</script>