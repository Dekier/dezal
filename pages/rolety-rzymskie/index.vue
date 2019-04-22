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
  name: 'RoletyRzymskie',

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
          title: 'Rolety rzymskie',
          url: '/image/rolety/rzymskie.jpg',
          description:
            'Rolety rzymskie coraz częściej stanowią dekorację okna. Wykorzystywane do aranżacji wnętrz klasycznych, nowoczesnych jak i stylowych, zastępują zasłony i firany. Mechanizm łańcuszkowy jest tak zbudowany, aby płynnie podnosić materiał, który układa się w fale. Zdejmowanie materiału jest bardzo proste i szybkie. Wszystkie tkaniny nadają się do prania lub czyszczenia chemicznego.'
        }
      ],
      bottomImages: [
        { id: 1, url: '/image/rolety/rzymskie1.jpg' },
        { id: 2, url: '/image/rolety/rzymskie2.jpg' },
        { id: 3, url: '/image/rolety/rzymskie4.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'plisy',
          'zaluzje',
          'verticale',
          'moskitiery'
        ]
      },
      title: 'Rolety Rzymskie w Poznaniu od firmy Deżal.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rolety Rzymskie w Poznaniu na Piątkowie. Montaż w cene!'
        }
      ]
    }
  }
}
</script>