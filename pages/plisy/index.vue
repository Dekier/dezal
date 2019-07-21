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
  name: 'Plisy',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data() {
    return {
      bottomImages: [
        { id: 1, url: '/image/plisy/deżal-poznań-plisa-1.jpg' },
        { id: 2, url: '/image/plisy/deżal-poznań-plisa-2.jpg' },
        { id: 3, url: '/image/plisy/deżal-poznań-plisa-3.jpg' },
        { id: 4, url: '/image/plisy/deżal-poznań-plisa-4.jpg' },
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy poza tym inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'rzymskie',
          'zaluzje',
          'verticale',
          'moskitiery',
        ],
      },
      title: 'Plisty w Poznaniu od firmy Deżal.',
    }
  },
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
          title: snap_offer.data().box_4_title,
          url: '/image/plisy/deżal-poznań-plisa-1.jpg',
          description: snap_offer.data().box_4_description,
        },
      ],
    }
  },
}
</script>