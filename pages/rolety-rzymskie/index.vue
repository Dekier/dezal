<template>
  <div>
    <ProductInformation
      :pageData="pageData"
      :realizationDescription="realizationDescription"
      :bottom-images="bottomImages"/>
    <Offer :offerData="offerData"/>
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
        { id: 0, title: 'Rolety rzymskie', url: '/image/rolety/rzymskie.jpg', description: 'Rolety rzymskie coraz częściej stanowią dekorację okna. Wykorzystywane do aranżacji wnętrz klasycznych, nowoczesnych jak i stylowych, zastępują zasłony i firany. Mechanizm łańcuszkowy jest tak zbudowany, aby płynnie podnosić materiał, który układa się w fale. Zdejmowanie materiału jest bardzo proste i szybkie. Wszystkie tkaniny nadają się do prania lub czyszczenia chemicznego.'}
      ],
      realizationDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Przykładowe realizacje naszych',
      bottomImages: [
        { id: 1, url: '/image/rolety/rzymskie1.jpg' },
        { id: 2, url: '/image/rolety/rzymskie2.jpg' },
        { id: 3, url: '/image/rolety/rzymskie3.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description: 'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: ['dzien-noc', 'materialowe', 'plisy', 'zaluzje', 'verticale', 'moskitiery']
      },
      title: ''
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>