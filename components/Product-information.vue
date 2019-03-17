<template>
  <div>
    <div class="ProductInformation__title-container">
      <div class="ProductInformation__image">
        <div class="ProductInformation__background"/>
        <h3 class="ProductInformation__title">
          Nasza Oferta
        </h3>
      </div>
    </div>
    <div
      v-for="data in pageData"
      :key="data.id"
      class="ProductInformation__center-container">
      <div
      class="ProductInformation__center-picture"
      :class="{'ProductInformation__center-picture--inverted': oddClass(data.id)}">
        <div
          :style="urlStyle(data.url)" 
          class="ProductInformation__main-picture"/>
      </div>
      <div
      class="ProductInformation__center-text"
      :class="{'ProductInformation__center-text--inverted': oddClass(data.id)}">
        <div class="ProductInformation__center-title">
          {{data.title}}
        </div>
        <div class="ProductInformation__product-description">
          {{ data.description }}
        </div>
      </div>
    </div>
    <div class="ProductInformation__bottom-container">
      <div class="ProductInformation__bottom-title">
        Przykładowe Realizacje Naszych Produktów
      </div>
      <!-- <div class="ProductInformation__bottom-description">
       {{realizationDescription}}
      </div> -->
      <div class="ProductInformation__bottom-realizations">
        <div
          v-for="(imageData, index) in bottomImages"
          :key="imageData.id"
          :style="{'background-image': `url(${imageData.url})`}"
          @click="showBigGallery(index)"
          class="ProductInformation__bottom-realizations-image"/>
      </div>
    </div>
    <Gallery
    v-if="activeGallery"
    :index="activeImageIndex"
    :images="bottomImages"
    @exit="exitGallery"
    @nextImage="nextImage"
    @beforeImage="beforeImage"/>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  name: 'ProductInformation',

  props: {
    pageData: {
      type: Array,
      required: true
    },
    realizationDescription: {
      type: String,
      required: true
    },
    bottomImages: {
      type: Array,
      required: true
    }
  },

  components: {
    Gallery
  },

  data () {
    return {
      activeGallery: false,
      activeImageIndex: null
    }
  },

  methods: {
    urlStyle(url) {
      return `background-image: url(${url})`
    },
    oddClass (id) {
      if (id % 2 !== 0) {
        return true
      }
      return false
    },

    showBigGallery (index) {
      this.activeGallery = true
      this.activeImageIndex = index
    },
    exitGallery () {
      this.activeGallery = false
    },

    beforeImage () {
      if (this.activeImageIndex > 0) {
        this.activeImageIndex--
      } else if (this.activeImageIndex === 0) {
        this.activeImageIndex = this.bottomImages.length -1
      }
    },

    nextImage () {
      if (this.bottomImages.length > this.activeImageIndex + 1) {
        this.activeImageIndex++
      } else if (this.activeImageIndex + 1 === this.bottomImages.length) {
        this.activeImageIndex = 0
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import 'Product-information';
</style>
