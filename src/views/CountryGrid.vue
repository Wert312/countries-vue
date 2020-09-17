<template>
  <div class="page-wrapper">
    <search-bar></search-bar>
    <div class="grid-wrapper">
      <country-card
        v-for="country of getFilteredCountries"
        :key="country.name"
        :country="country"
      ></country-card>
    </div>
  </div>
</template>

<script>
import CountryCard from "@/components/country/CountryCard";
import SearchBar from "@/components/search/SearchBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "country-grid",

  components: {
    CountryCard,
    SearchBar,
  },

  computed: {
    ...mapGetters([
      "GET_COUNTRIES",
      "GET_FILTERED_COUNTRIES",
      "GET_SEARCH_VALUE",
    ]),

    getFilteredCountries() {
      return this.GET_FILTERED_COUNTRIES;
    },

    getSearchValue() {
      return this.GET_SEARCH_VALUE;
    },
  },
};
</script>

<style lang="scss">
  .page-wrapper {
    width: 100%;
    height: 100%;
  }

  .grid-wrapper {
    display: grid;
    padding-top: 32px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, 250px);
    grid-column-gap: 10px;
    grid-row-gap: 40px;
    width: 100%;
  }
</style>

