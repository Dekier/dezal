<template>
  <div class="Plisy__main-container">
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
  name: 'Zaluzje',

  components: {
    ProductInformation,
    Offer
  },
  
  transition: 'bounce',

  data() {
    return {
      pageData: [
        { id: 0, title: 'Żaluzje Aluminiowe', url: '/image/plisy.jpg', description: 'Żaluzje aluminiowe to produkt ponadczasowy, który dobrze chroni wnętrze przed promieniami słonecznymi, czyli nadmiernym nagrzewaniem się. Dużą zaletą tego produktu jest płynna regulacja, która powoduje ustawienie lameli w taki sposób, że jesteśmy niewidoczni, a słooce nam nie świeci. Żaluzje aluminiowe występują w szerokościach 25 mm i 50 mm . Posiadamy w swojej ofercie bogatą gamę kolorów.'},
        { id: 1, title: 'Żaluzje Drewniane', url: '/image/plisy.jpg', description: 'Żaluzje drewniane to wyrób naturalny z drewna lub bambusa pasujący do każdego pomieszczenia nowoczesnego jak i stylowego, który nadaje ciepły i niepowtarzalny klimat. Szeroki wachlarz kolorystyki pozwala na dopasowanie do każdego wnętrza. Żaluzje występują w szerokościach 25 mm i 50 mm.'}
      ],
      realizationDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Przykładowe realizacje naszych',
      bottomImages: [
        { id: 1, url: '/image/verticale.jpg' },
        { id: 2, url: '/image/moskitiery.jpg' },
        { id: 3, url: 'image/plisy.jpg' },
        { id: 4, url: 'image/rolety.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description: 'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: ['dzien-noc', 'materialowe', 'rzymskie', 'zaluzje', 'verticale', 'moskitiery']
      }
    }
  }
}
</script>