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
  name: 'RoletyDzienNoc',

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
          title: 'Roleta Dzień-Noc',
          url: '/image/rolety/dezal-poznan-roleta-dzień-noc-2.jpg',
          description:
            'Jedno z najnowocześniejszych rozwiązań na rynku dekoracji okien ostatnich latach. Największą zaletą materiałów dzień-noc jest możliwość regulowania światła za pomocą poziomych pasów transparentnych i zaciemniających. Dzięki temu możemy dostosować ilość promieni słonecznych w danym pomieszczeniu według własnego uznania. Tak płynna regulacja jest niewątpliwie bardzo dużą zaletą tego produktu. Roleta dzień-noc tworzy niepowtarzalny klimat danego wnętrza, w którym zostanie założona.'
        }
      ],
      bottomImages: [
        { id: 1, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-1.jpg' },
        { id: 2, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-7.jpg' },
        { id: 3, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-3.jpg' },
        { id: 4, url: '/image/rolety/dezal-poznan-roleta-dzień-noc-4.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'plisy',
          'materialowe',
          'rzymskie',
          'zaluzje',
          'verticale',
          'moskitiery'
        ]
      },
      title: 'Rolety dzień-noc w Poznaniu od firmy Deżal.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety dzień-noc w Poznaniu na Piątkowie. Montaż w cene!'
        }
      ]
    }
  }
}
</script>