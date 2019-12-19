<template>
  <div
    class="Header__main-container"
    @click="showDropDown = false"
    @mouseleave="showDropDown = false"
  >
    <div class="Header__center-container">
      <nuxt-link @click.native="pageActive = 'home'" to="/" aria-label="Deżal">
        <div class="Header__logo" />
      </nuxt-link>
      <div
        @click="showMobileBtn = !showMobileBtn"
        :class="{ 'Header__hamburger-container--active': showMobileBtn }"
        class="Header__hamburger-container"
      >
        <div
          :class="{ 'Header__hamburger-line-first': showMobileBtn }"
          class="Header__hamburger-line"
        />
        <div
          :class="{ 'Header__hamburger-line-remove': showMobileBtn }"
          class="Header__hamburger-line"
        />
        <div
          :class="{ 'Header__hamburger-line-second': showMobileBtn }"
          class="Header__hamburger-line"
        />
      </div>
      <transition name="fade">
        <nav v-if="showMobileBtn" class="Header__links-container-mobile">
          <nuxt-link
            @mouseover="showDropDown = false"
            @click.native="
              ;(showMobileBtn = false), (showMobileDropDown = false)
            "
            v-scroll-to="'#hero'"
            id="Header__home"
            class="Header__link-mobile"
            to="/"
          >STRONA GŁÓWNA</nuxt-link>
          <nuxt-link
            @click.native="
              ;(showMobileBtn = false), (showMobileDropDown = false)
            "
            v-scroll-to="'#aboutCompany'"
            class="Header__link-mobile"
            to="/"
          >O NAS</nuxt-link>
          <span @click="showMobileDropDown = !showMobileDropDown" class="Header__link-mobile">
            OFERTA
            <svg class="Header__link-arrow" width="10" height="10" viewBox="0 0 129 129">
              <path
                d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
              />
            </svg>
          </span>
          <transition name="fade">
            <div v-if="showMobileDropDown" class="Header__dropdown-container-mobile">
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/rolety-dzien-noc/"
              >Rolety Dzien-Noc</nuxt-link>
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/rolety-materialowe/"
              >Rolety Materiałowe</nuxt-link>
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/rolety-rzymskie/"
              >Rolety Rzymskie</nuxt-link>
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/plisy/"
              >PLISY</nuxt-link>
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/zaluzje/"
              >Żaluzje</nuxt-link>
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/verticale/"
              >verticale</nuxt-link>
              <nuxt-link
                class="Header__dropdown-link-mobile"
                @click.native="
                  ;(showMobileDropDown = false), (showMobileBtn = false)
                "
                to="/moskitiery/"
              >moskitiery</nuxt-link>
            </div>
          </transition>
          <nuxt-link
            class="Header__link-mobile"
            @click.native="
              ;(showMobileBtn = false), (showMobileDropDown = false)
            "
            to="/realizacje/"
          >REALIZACJE</nuxt-link>
          <nuxt-link
            class="Header__link-mobile"
            @click.native="
              ;(showMobileBtn = false), (showMobileDropDown = false)
            "
            to="/kontakt/"
          >KONTAKT</nuxt-link>
        </nav>
      </transition>
      <div class="Header__links-container">
        <nuxt-link
          @click.native=";(showMobileBtn = false), (showMobileDropDown = false)"
          @mouseover.native="showDropDown = false"
          v-scroll-to="'#hero'"
          id="Header__home"
          class="Header__link"
          to="/"
        >
          STRONA GŁÓWNA
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'home' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'home' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          @click.native="pageActive = 'about'"
          @mouseover.native="showDropDown = false"
          v-scroll-to="'#aboutCompany'"
          class="Header__link"
          to="/"
        >
          O NAS
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'about' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'about' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </nuxt-link>
        <div @mouseover="showDropDown = true" v-scroll-to="'#offer'" class="Header__link">
          OFERTA
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'offer' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'offer' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
          <svg class="Header__link-arrow" width="10" height="10" viewBox="0 0 129 129">
            <path
              d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
            />
          </svg>
        </div>
        <div @mouseleave="showDropDown = false" v-if="showDropDown" class="Header__dropdown">
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/rolety-dzien-noc/"
          >Rolety Dzien-Noc</nuxt-link>
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/rolety-materialowe/"
          >Rolety Materiałowe</nuxt-link>
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/rolety-rzymskie/"
          >Rolety Rzymskie</nuxt-link>
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/plisy/"
          >PLISY</nuxt-link>
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/zaluzje/"
          >zaluzje</nuxt-link>
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/verticale/"
          >verticale</nuxt-link>
          <nuxt-link
            class="Header__dropdown-link"
            @click.native=";(showDropDown = false), (pageActive = 'offer')"
            to="/moskitiery/"
          >moskitiery</nuxt-link>
        </div>
        <nuxt-link
          @click.native="pageActive = 'real'"
          @mouseover.native="showDropDown = false"
          class="Header__link"
          to="/realizacje/"
        >
          REALIZACJE
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'real' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'real' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          class="Header__link"
          @click.native="pageActive = 'contact'"
          @mouseover.native="showDropDown = false"
          to="/kontakt/"
        >
          KONTAKT
          <svg class="Header__link-border" width="200" height="50">
            <line
              class="svg-bottom-left"
              :class="{ 'svg-bottom-left--active': pageActive === 'contact' }"
              x1="-100"
              y1="50"
              x2="100"
              y2="50"
            />
            <line
              class="svg-bottom-right"
              :class="{ 'svg-bottom-right--active': pageActive === 'contact' }"
              x1="100"
              y1="50"
              x2="300"
              y2="50"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      mediaName: 'phone',
      showMobileBtn: false,
      showDropDown: false,
      showMobileDropDown: false,
      pageActive: 'home',
    }
  },

  mounted() {
    this.pageName()
  },

  computed: {
    circleClass() {
      return `Header__circle--${this.activeTab}`
    },
  },
  methods: {
    pageName() {
      switch (this.$route.path) {
        case '/':
          this.pageActive = 'home'
          break
        case '/realizacje':
          this.pageActive = 'real'
          break
        case '/kontakt':
          this.pageActive = 'contact'
          break
        case '/rolety-materialowe':
          this.pageActive = 'offer'
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Header';
</style>
