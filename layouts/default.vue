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
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.popup {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.popup-text {
  background-color: #ffe100;
  max-width: 620px;
  height: 320px;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  margin: 0 auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.popup-text span {
  margin-top: 16px;
  font-size: 24px;
  display: block;
}

.popup-btn {
  border-radius: 4px;
  padding: 12px 16px;
  border: 1px solid;
  width: 160px;
  margin: 24px auto 0;
  cursor: pointer;
  padding-top: 15px;
  transition: border 300ms, padding 300ms;
}

.popup-btn:hover {
  padding: 10px 16px;
  border: 4px solid;
}
@media (max-width: 620px) {
  .popup-text {
    width: calc(100vw - 32px);
    border: 2px solid;
  }
}
</style>
