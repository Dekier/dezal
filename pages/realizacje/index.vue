<template>
  <div class="Realization__main-container">
    <div class="Realization__title-container">
      <div class="Realization__image">
        <div class="Realization__background"/>
        <h3 class="Realization__title">
          Realizacje
        </h3>
      </div>
    </div>
    <div class="Realization__center-container">
      <div class="Realization__filters-container">
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'ALL' }"
          @click="setFilter('ALL')">
            WSZYSTKO
        </span>
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'DZIENOC' }"
          @click="setFilter('DZIENOC')">
            DZIEŃ-NOC
        </span>
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'RZYMSKIE' }"
          @click="setFilter('RZYMSKIE')">
            RZYMSKIE
        </span>
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'PLISY' }"
          @click="setFilter('PLISY')">
            PLISY
        </span>
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'ZALUZJE' }"
          @click="setFilter('ZALUZJE')">
            ŻALUZJE
        </span>
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'VERTICALE' }"
          @click="setFilter('VERTICALE')">
            VERTICALE
        </span>
        <span
          class="Realization__filter"
          :class="{ 'Realization__filter--active': currentFilter === 'MASKITIERY' }"
          @click="setFilter('MASKITIERY')">
            MASKITIERY
        </span>
      </div>
      <transition-group
        class="Realization__projects"
        name="projects" >
        <div
          class="Realization__project"
          v-for="(imageData, index) in allImages"
          :key="imageData.id">
          <div class="Realization__project-image"
          :style="{'background-image': `url(${imageData.image})`}">
          </div>
          <div
          @click="showBigGallery(index)"
          class="Realization__hover-background">
            <svg
              class="Realization__hover-icon"
              viewBox="0 0 215.35 215.35">
              <path d="M7.5 65.088a7.5 7.5 0 0 0 7.5-7.5V25.61l48.305 48.295a7.479 7.479 0 0 0 5.303 2.196c1.92 0 3.84-.732 5.304-2.197a7.498 7.498 0 0 0-.001-10.606L25.604 15.002h31.985a7.5 7.5 0 0 0 0-15H7.5a7.5 7.5 0 0 0-7.5 7.5v50.087a7.5 7.5 0 0 0 7.5 7.499zM207.85 150.262a7.5 7.5 0 0 0-7.5 7.5v31.979l-49.792-49.792a7.5 7.5 0 0 0-10.607 10.606l49.791 49.791h-31.977a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h50.086a7.5 7.5 0 0 0 7.5-7.5v-50.084a7.502 7.502 0 0 0-7.501-7.5zM64.792 139.949L15.005 189.74v-31.978c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v50.086a7.5 7.5 0 0 0 7.5 7.5h50.084a7.5 7.5 0 0 0 0-15H25.611l49.788-49.793a7.5 7.5 0 1 0-10.607-10.606zM207.85.002h-50.086a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5h31.979l-48.298 48.301a7.5 7.5 0 0 0 5.304 12.803 7.482 7.482 0 0 0 5.304-2.197l48.298-48.301v31.98a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5V7.502a7.501 7.501 0 0 0-7.501-7.5z" fill="#fff"/>
            </svg>
          </div>
        </div>
      </transition-group>
    </div>
    <Gallery
    v-if="activeGallery"
    :index="activeImageIndex"
    :images="images"
    @exit="exitGallery"
    @nextImage="nextImage"
    @beforeImage="beforeImage"/>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  name: 'Realization',
  
  transition: 'bounce',

  components: {
    Gallery
  },

  data() {
    return {
      currentFilter: 'ALL',
      imagesData: [
        {id: 1, url: "https://picsum.photos/g/200?image=122", category: 'DZIENOC'},
        {id: 2, url: "https://picsum.photos/g/200?image=116", category: 'DZIENOC'},
        {id: 3, url: "https://picsum.photos/g/200?image=121", category: 'MATERIALOWE'},
        {id: 4, url: "https://picsum.photos/g/200?image=133", category: 'RZYMSKIE'},
        {id: 5, url: "https://picsum.photos/g/200?image=134", category: 'MATERIALOWE'},
        {id: 6, url: "https://picsum.photos/g/200?image=115", category: 'PLISY'},
        {id: 7, url: "https://picsum.photos/g/200?image=115", category: 'DZIENOC'},
        {id: 8, url: "https://picsum.photos/g/200?image=115", category: 'ZALUZJE'},
        {id: 9, url: "https://picsum.photos/g/200?image=115", category: 'VERTICALE'},
        {id: 10, url: "https://picsum.photos/g/200?image=115", category: 'MASKITIERY'},
        {id: 11, url: "https://picsum.photos/g/200", category: 'RZYMSKIE'}
      ],
      activeGallery: false,
      activeImageIndex: null
    }
  },

  computed: {
    allImages() {
      if (this.currentFilter === 'ALL') {
        return this.imagesData
      }
      const newList = this.imagesData.filter(a => a.category === this.currentFilter)
      return newList
    },
    images () {
      if (this.currentFilter === 'ALL') {
        return this.imagesData
      } else {
        return this.imagesData.filter(i => i.category === this.currentFilter)
      }
    }
  },

	methods: {
		setFilter (filter) {
			this.currentFilter = filter;
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
        this.activeImageIndex = this.images.length -1
      }
    },

    nextImage () {
      if (this.images.length > this.activeImageIndex + 1) {
        this.activeImageIndex++
      } else if (this.activeImageIndex + 1 === this.images.length) {
        this.activeImageIndex = 0
      }
    }
	}
}
</script>

<style lang="scss" scoped>
@import 'index';
</style>
