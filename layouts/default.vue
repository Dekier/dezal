<template>
  <div class="layout">
    <header-nav />
    <nuxt />
    <cookies v-if="visibleCookies" @hideCookies="hideCookies" />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from '~/components/Header.vue';
import FooterNav from '~/components/Footer.vue';
import Cookies from '~/components/Cookies.vue';

export default {
  components: {
    HeaderNav,
    FooterNav,
    Cookies,
  },

  data: () => ({
    visibleCookies: true,
    isActiveInfo: true,
  }),

  mounted() {
    if (Boolean(localStorage.cookies)) {
      this.visibleCookies = !Boolean(localStorage.cookies);
    }
  },

  methods: {
    hideCookies() {
      this.visibleCookies = false;
      localStorage.cookies = false;
    },
  },
};
</script>

<style style="scss">
* {
  box-sizing: border-box;
  letter-spacing: 1px;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.layout {
  display: flex;
  flex-direction: column;
}
</style>
