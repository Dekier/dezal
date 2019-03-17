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
  name: 'Moskitiery',

  components: {
    ProductInformation,
    Offer
  },
  
  transition: 'bounce',

  data() {
    return {
      pageData: [
        { id: 0, title: 'Moskitiery', url: '/image/plisy.jpg', description: 'Curabitur interdum risus in dui bibendum hendrerit. Sed vestibulum semper venenatis. Praesent venenatis risus eu euismod gravida. Etiam dapibus lectus ac erat elementum vehicula sit amet non metus. Aliquam accumsan imperdiet urna, et mollis turpis mollis sed. Morbi turpis mauris, ullamcorper a mollis ac, blandit sed justo.'},
      ],
      realizationDescription: 'Moskitierę ramkową możemy zastosowad w ramie okiennej. Wykonana jest z plastikowej siatki naciągniętej na aluminiowym profilu. Mocowana za pomocą obrotowych rygli, które są dopasowane do grubości ramy okna. Profile i rygle są dobrane kolorystycznie do koloru okna.',
      bottomImages: [
        { id: 1, url: '/image/verticale.jpg' },
        { id: 2, url: '/image/moskitiery.jpg' },
        { id: 3, url: 'image/plisy.jpg' },
        { id: 4, url: 'image/rolety.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description: 'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: ['dzien-noc', 'materialowe', 'rzymskie', 'plisy', 'zaluzje', 'verticale']
      }
    }
  }
}
</script>