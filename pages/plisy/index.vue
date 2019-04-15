<template>
  <div>
    <ProductInformation
      :pageData="pageData"
      :realizationDescription="realizationDescription"
      :bottom-images="bottomImages"
    />
    <Offer :offerData="offerData"/>
  </div>
</template>

<script>
import ProductInformation from '~/components/Product-information.vue'
import Offer from '~/components/Offer.vue'

export default {
  name: 'Plisy',

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
          title: 'Plisy',
          url: '/image/plisy/1.jpg',
          description:
            'Plisy to jedne z nielicznych osłon okiennych, które umożliwiają otwarcie skrzydła okiennego pod kątem 90 stopni, czyli na całą szerokość. Stosujemy je do różnych nietypowych kształtów okien. Materiał przesuwamy w górę i w dół w zależności od wybranego modelu. Plisy typu duette różnią się od zwykłej plisy budową tkaniny, która jest w kształcie plastra miodu, co powoduje lepszą izolację termiczną. Posiadamy w swojej ofercie ponad 1000 wzorów tkanin. Wszystkie materiały możemy prać w 30 stopniach według zaleceń producenta.'
        }
      ],
      realizationDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Przykładowe realizacje naszych',
      bottomImages: [
        { id: 1, url: '/image/plisy/1.jpg' },
        { id: 2, url: '/image/plisy/2.jpg' },
        { id: 3, url: '/image/plisy/3.jpg' },
        { id: 4, url: '/image/plisy/4.jpg' }
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy również inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'rzymskie',
          'zaluzje',
          'verticale',
          'moskitiery'
        ]
      },
      title: 'Plisty w Poznaniu od firmy Deżal.'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Plisy w Poznaniu na Piątkowie. Montaż w cene!'
        }
      ]
    }
  }
}
</script>