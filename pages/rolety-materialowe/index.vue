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
  name: 'RoletyMaterialowe',

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
          title: 'Rolety Materiałowe',
          url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.jpg',
          description:
            'Roleta materiałowa jest najczęściej wybieranym systemem dekoracji wnętrza w naszym kraju. To tradycyjna przesłona okienna, która chroni nas przed wzrokiem sąsiadów i promieniami słonecznymi. Nadaje się do każdego pomieszczenia. Posiadamy w swojej ofercie materiały w szerokiej gamie kolorów i deseni od transparentnych do 100% zaciemniających, rolety Poznań.'
        }
      ],
      bottomImages: [
        { id: 1, url: '/image/rolety/dezal-poznan-roleta-materiałowa-1.jpg' },
        { id: 2, url: '/image/rolety/dezal-poznan-roleta-materiałowa-2.jpg' },
        { id: 3, url: '/image/rolety/dezal-poznan-roleta-materiałowa-3.jpg' },
        { id: 4, url: '/image/rolety/dezal-poznan-roleta-materiałowa-4.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'plisy',
          'rzymskie',
          'zaluzje',
          'verticale',
          'moskitiery'
        ]
      },
      title: 'Rolety Materiałowe w Poznaniu od firmy Deżal.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Materiałowe w Poznaniu na Piątkowie. Montaż w cene!'
        }
      ]
    }
  }
}
</script>