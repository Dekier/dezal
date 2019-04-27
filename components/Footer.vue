<template>
  <div class="Footer__main-container">
    <div class="Footer__center-container">
      <div class="Footer__links-container">
        <nuxt-link class="Footer__link Footer__link-title" to="/">
          MENU
        </nuxt-link>
        <nuxt-link v-scroll-to="'#hero'" class="Footer__link" to="/">
          Strona Główna
        </nuxt-link>
        <nuxt-link v-scroll-to="'#aboutCompany'" class="Footer__link" to="/">
          O Nas
        </nuxt-link>
        <nuxt-link class="Footer__link" to="/realizacje">
          Realizacja
        </nuxt-link>
        <nuxt-link class="Footer__link" to="/kontakt">
          Kontakt
        </nuxt-link>
      </div>
      <div class="Footer__offer-container">
        <nuxt-link
          v-scroll-to="'#offer'"
          class="Footer__link Footer__link-title"
          to="/"
        >
          OFERTA
        </nuxt-link>
        <nuxt-link class="Footer__link" to="rolety-dzien-noc">
          Rolety Dzień-noc
        </nuxt-link>
        <nuxt-link class="Footer__link" to="rolety-materialowe">
          Rolety Materiałowe
        </nuxt-link>
        <nuxt-link class="Footer__link" to="rolety-rzymskie">
          Rolety Rzymskie
        </nuxt-link>
        <nuxt-link class="Footer__link" to="plisy">
          Plisy
        </nuxt-link>
        <nuxt-link class="Footer__link" to="zaluzje">
          Żaluzje
        </nuxt-link>
        <nuxt-link class="Footer__link" to="verticale">
          Verticale
        </nuxt-link>
        <nuxt-link class="Footer__link" to="moskitiery">
          Moskitiery
        </nuxt-link>
      </div>
      <div class="Footer__recomended-container">
        <div class="Footer__recomended-title">
          POLECAMY
        </div>
        <a
          href="https://www.pracownia-krawiecka.pl/"
          target="_blank"
          class="Footer__recomended-link"
        >
          <div class="Footer__recomended-text">
            Pracownia Krawiecka
          </div>
          <div class="Footer__recomended-logo" />
        </a>
      </div>
      <div class="Footer__open-hours-container">
        <div class="Footer__open-hours Footer__open-hours-title">
          GODZINY OTWARCIA
        </div>
        <div class="Footer__open-hours">
          pon.: 12:00-18:00
        </div>
        <div class="Footer__open-hours">
          wt.-pt.: 9:00-17:00
        </div>
      </div>
    </div>
    <div class="Footer__down-container">
      Copyright &copy; 2019 ZPHU DEŻAL Dariusz Dekier Rolety Poznań | Wszelkie
      prawa zastrzeżone
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import 'Footer';
</style>
