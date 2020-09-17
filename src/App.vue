<template>
  <div id="app">
    <transition appear><app-header></app-header></transition>
    <app-wrapper v-if="!error && getHasCountries"></app-wrapper>
    <app-error v-if="error"></app-error>
  </div>
</template>

<script>
import "@/assets/css/normalize.css";
import "@/assets/css/variables.css";
import { mapGetters, mapActions } from "vuex";
import AppHeader from "./components/app/AppHeader";
import AppWrapper from "./components/app/AppWrapper";
import AppError from "./components/app/AppError";

export default {
  data() {
    return {
      error: false,
    };
  },

  components: {
    AppHeader,
    AppWrapper,
    AppError,
  },

  computed: {
    ...mapGetters([
      "GET_COUNTRIES",
      "GET_COUNTRIES_LENGTH",
      "GET_HAS_COUNTRIES",
    ]),

    getCountries() {
      return this.GET_COUNTRIES;
    },

    getCountriesLength() {
      return this.GET_COUNTRIES_LENGTH;
    },

    getHasCountries() {
      return this.GET_HAS_COUNTRIES;
    },
  },

  methods: {
    ...mapActions(["GET_COUNTRIES_FROM_API", "CHANGE_HAS_COUNTRIES"]),

    changeHasCountries() {
      this.CHANGE_HAS_COUNTRIES();
    },
  },

  mounted() {
    this.GET_COUNTRIES_FROM_API().then((response) => {
      if (response.data) {
        this.changeHasCountries();
      } else {
        this.error = true;
      }
    });
  },
};
</script>


<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

  #app {
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--app-background);
    display: flex;
    flex: 1;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-to,
  .v-leave {
    opacity: 1;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 1.5s;
  }
</style>
