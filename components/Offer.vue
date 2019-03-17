<template>
  <div
  id="offer"
  class="Offer__main-container">
    <div class="Offer__center-container">
      <div class="Offer__title">
        {{ offerData.title }}
      </div>
      <div class="Offer__description">
        {{ offerData.description }}
      </div>
      <div class="Offer__boxes-container">
        <div
          v-for="(box, index) in showBoxes"
          :key="index" 
          class="Offer__box">
          <div class="Offer__box-title">
            {{ box.title }}
          </div>
          <div class="Offer__box-image-container">
            <div
              :style="urlStyle(box.url)" 
              class="Offer__box-image" />
          </div>
          <div class="Offer__box-text" style="-webkit-box-orient: vertical;">
            {{ box.text }}
          </div>
          <nuxt-link
            :to="box.link"
            class="Offer__box-btn">
            Czytaj więcej
            <svg
              class="Offer__box-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129">
              <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',

  props: {
    offerData: {
      type: Object
    }
  },

  computed: {
    showBoxes () {
      const newList = this.boxesData.filter(box => this.offerData.showBoxes.includes(box.type))
      return newList
    }
  },

  data() {
    return {
      activeTab: '',
      boxesData: [
        {
          title: 'Rolety Dzień-noc',
          text:
            'Jedno z najnowocześniejszych rozwiązao na rynku dekoracji okien ostatnich latach. Największą zaletą materiałów dzień-noc jest możliwośd regulowania światła za pomocą poziomych pasów transparentnych i zaciemniających. Dzięki temu możemy dostosowad ilośd promieni słonecznych w danym pomieszczeniu według własnego uznania. Tak płynna regulacja jest niewątpliwie bardzo dużą zaletą tego produktu. Roleta dzieo-noc tworzy niepowtarzalny klimat danego wnętrza, w którym zostanie założona.',
          url: '/image/zaluzje_poziome.jpg',
          link: '/rolety-dzien-noc',
          type: 'dzien-noc'
        },
        {
          title: 'Rolety Materiałowe',
          text:
            'Roleta materiałowa jest najczęściej wybieranym systemem dekoracji wnętrza w naszym kraju. To tradycyjna przesłona okienna, która chroni nas przed wzrokiem sąsiadów i promieniami słonecznymi. Nadaje się do każdego pomieszczenia. Posiadamy w swojej ofercie materiały w szerokiej gamie kolorów i deseni od transparentnych do 100% zaciemniających, rolety Poznań.',
          url: '/image/plisy.jpg',
          link: '/rolety-materialowe',
          type: 'materialowe'
        },
        {
          title: 'Rolety Rzymskie',
          text:
            'Rolety rzymskie coraz częściej stanowią dekorację okna. Wykorzystywane do aranżacji wnętrz klasycznych, nowoczesnych jak i stylowych, zastępują zasłony i firany. Mechanizm łaocuszkowy jest tak zbudowany, aby płynnie podnosid materiał, który układa się w fale. Zdejmowanie materiału jest bardzo proste i szybkie. Wszystkie tkaniny nadają się do prania lub czyszczenia chemicznego.',
          url: '/image/zaluzje_poziome.jpg',
          link: '/rolety-rzymskie',
          type: 'rzymskie'
        },
        {
          title: 'Plisy',
          text:
            'Plisy to jedne z nielicznych osłon okiennych, które umożliwiają otwarcie skrzydła okiennego pod katem 90 stopni, czyli na całą szerokośd. Stosujemy je do różnych nietypowych kształtów okien. Materiał przesuwamy w górę i w dół w zależności od wybranego modelu. Plisy typu duette różnią się od zwykłej plisy budową tkaniny, która jest w kształcie plastra miodu, co powoduje lepszą izolację termiczną. Posiadamy w swojej ofercie ponad 1000 wzorów tkanin. Wszystkie materiały możemy prad w 30 stopniach według zaleceo producenta.',
          url: '/image/plisy.jpg',
          link: '/plisy',
          type: 'plisy'
        },
        {
          title: 'Żaluzje',
          text:
            'Żaluzje aluminiowe to produkt ponadczasowy, który dobrze chroni wnętrze przed promieniami słonecznymi, czyli nadmiernym nagrzewaniem się. Dużą zaletą tego produktu jest płynna regulacja, która powoduje ustawienie lameli w taki sposób, że jesteśmy niewidoczni, a słooce nam nie świeci. Żaluzje aluminiowe występują w szerokościach 25 mm i 50 mm . Posiadamy w swojej ofercie bogatą gamę kolorów.',
          url: '/image/moskitiery.jpg',
          link: '/zaluzje',
          type: 'zaluzje'
        },
        {
          title: 'Verticale',
          text:
            'Verticale inaczej żaluzje pionowe SA idealnym rozwiązaniem dla dużych powierzchni okien w wszędzie tam, gdzie nie można zastosowad innych osłon okiennych jak biurach, instytucjach publicznych itp. Dobrze izolują wnętrze przed nadmiernym nagrzewaniem się, a także posiadają zalety dekoracyjne. Są przy tym proste w obsłudze i funkcjonalne. Występują w szerokościach lameli 89 mm i 127 mm.',
          url: '/image/moskitiery.jpg',
          link: '/verticale',
          type: 'verticale'
        },
        {
          title: 'Moskitiery',
          text: 'Moskitierę ramkową możemy zastosowad w ramie okiennej. Wykonana jest z plastikowej siatki naciągniętej na aluminiowym profilu. Mocowana za pomocą obrotowych rygli, które są dopasowane do grubości ramy okna. Profile i rygle są dobrane kolorystycznie do koloru okna.',
          url: '/image/moskitiery.jpg',
          link: '/moskitiery',
          type: 'moskitiery'
        }
      ]
    }
  },

  methods: {
    urlStyle(url) {
      return `background-image: url(${url})`
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Offer';
</style>
