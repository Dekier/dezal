<template>
  <div>
    <ProductInformation :pageData="pageData" :bottom-images="bottomImages" />
    <Offer :offerData="offerData" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue'
import Offer from '~/components/Offer.vue'

export default {
  name: 'Verticale',

  components: {
    ProductInformation,
    Offer
  },

  transition: 'bounce',

  data() {
    return {
      pageData: [
        {
          id: 0,
          title: 'Verticale',
          url: '/image/verticale/1.jpg',
          description:
            'Verticale inaczej żaluzje pionowe są idealnym rozwiązaniem dla dużych powierzchni okien w wszędzie tam, gdzie nie można zastosować innych osłon okiennych jak biurach, instytucjach publicznych itp. Dobrze izolują wnętrze przed nadmiernym nagrzewaniem się, a także posiadają zalety dekoracyjne. Są przy tym proste w obsłudze i funkcjonalne. Występują w szerokościach lameli 89 mm i 127 mm.'
        }
      ],
      bottomImages: [{ id: 1, url: '/image/verticale/1.jpg' }],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'rzymskie',
          'plisy',
          'zaluzje',
          'moskitiery'
        ]
      },
      title: 'Verticale w Poznaniu od firmy Deżal.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Verticale w Poznaniu na Piątkowie. Montaż w cene!'
        }
      ]
    }
  }
}
</script>