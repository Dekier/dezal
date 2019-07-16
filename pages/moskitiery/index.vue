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
  name: 'Moskitiery',

  components: {
    ProductInformation,
    Offer,
  },

  transition: 'bounce',

  data() {
    return {
      pageData: [
        {
          id: 0,
          title: 'Moskitiery',
          url: '/image/moskitiery/dezal-poznan-moskitiera-1.jpg',
          description:
            'Moskitierę ramkową możemy zastosować w ramie okiennej. Wykonana jest z plastikowej siatki naciągniętej na aluminiowym profilu. Mocowana za pomocą obrotowych rygli, które są dopasowane do grubości ramy okna. Profile i rygle są dobrane kolorystycznie do koloru okna.',
        },
      ],
      bottomImages: [
        { id: 1, url: '/image/moskitiery/dezal-poznan-moskitiera-1.jpg' },
      ],
      offerData: {
        title: 'Zobacz również',
        description:
          'Polecamy poza tym inne produkty. W ofercie firmy Deżal znajdziemy wiele palet kolorów:',
        showBoxes: [
          'dzien-noc',
          'materialowe',
          'rzymskie',
          'plisy',
          'zaluzje',
          'verticale',
        ],
      },
      title: 'Moskitiery w Poznaniu od firmy Deżal',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Maskitiery na okna w Poznaniu na Piątkowie. Montaż w cene!',
        },
      ],
    }
  },
}
</script>