<template>
  <div class="Plisy__main-container">
    <ProductInformation :pageData="pageData" :bottom-images="bottomImages" />
    <Offer :offerData="offerData" />
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue'
import Offer from '~/components/Offer.vue'

export default {
  name: 'Zaluzje',

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
          title: 'Żaluzje Aluminiowe',
          url: '/image/zaluzje/deżal-poznań-żaluzja-aluminiowa-1.jpg',
          description:
            'Żaluzje aluminiowe to produkt ponadczasowy, który dobrze chroni wnętrze przed promieniami słonecznymi, czyli nadmiernym nagrzewaniem się. Dużą zaletą tego produktu jest płynna regulacja, która powoduje ustawienie lameli w taki sposób, że jesteśmy niewidoczni, a słońce nam nie świeci. Żaluzje aluminiowe występują w szerokościach 25 mm i 50 mm . Posiadamy w swojej ofercie bogatą gamę kolorów.'
        },
        {
          id: 1,
          title: 'Żaluzje deżal-poznań-żaluzja-drewniana-',
          url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-1.jpg',
          description:
            'Żaluzje deżal-poznań-żaluzja-drewniana- to wyrób naturalny z drewna lub bambusa pasujący do każdego pomieszczenia nowoczesnego jak i stylowego, który nadaje ciepły i niepowtarzalny klimat. Szeroki wachlarz kolorystyki pozwala na dopasowanie do każdego wnętrza. Żaluzje występują w szerokościach 25 mm i 50 mm.'
        }
      ],
      bottomImages: [
        { id: 1, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-2.jpg' },
        { id: 2, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-3.jpg' },
        { id: 3, url: '/image/zaluzje/deżal-poznań-żaluzja-drewniana-4.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'rzymskie',
          'plisy',
          'verticale',
          'moskitiery'
        ]
      },
      title:
        'Żaluzje deżal-poznań-żaluzja-drewniana-/aluminiowe w Poznaniu od firmy Deżal.'
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
            'Żaluzje deżal-poznań-żaluzja-drewniana-/aluminiowe w Poznaniu na Piątkowie. Montaż w cene!'
        }
      ]
    }
  }
}
</script>