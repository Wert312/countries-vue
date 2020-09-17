<template>
  <div v-if="country" class="borders">
    <div class="bordersWrapper">
      <span v-if="borderCountries === null" class="noBorders"
        >No Border Countries</span
      >
      <span v-if="borderCountries !== null">Border Countries:</span>
      <router-link
        v-for="country in borderCountries"
        :key="country.name"
        :to="{
          name: 'country-detail',
          params: { country: country.name },
        }"
        class="borderLinks"
      >
        {{ country.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "country-border",

  data() {
    return {
      country: null,
      // Border country API request
      borderCountries: null,
      alpha3Code: [],
      alpha3CodetoString: [],
    };
  },

  mounted() {
    // API request to load country data
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.country}?fullText=true`
      )
      .then((response) => {
        this.country = response.data;

        // API request to load border data
        this.alpha3Code = this.country["0"].borders;
        this.alpha3CodetoString = this.alpha3Code.join(";");
        return axios
          .get(
            `https://restcountries.eu/rest/v2/alpha?codes=${this.alpha3CodetoString}`
          )
          .then((response) => (this.borderCountries = response.data));
      });
  },
};
</script>

<style lang="scss">
  .bordersWrapper {
    display: flex;
    flex-wrap: wrap;
    padding-top: 16px;
  }

  .borderLinks {
    margin: 0 5px 10px 0px;
    display: table;
    align-self: center;
    padding: 2px 5px;
    background: var(--color-light);
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    color: var(--app-text);
    text-align: center;

    &:first-of-type {
      margin-left: 5px;
    }

    @include for-desktop {
      &:hover {
        box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.2);
        transition-property: box-shadow;
        transition-duration: 0.3s;
      }

      &:not(:hover) {
        transition-property: box-shadow;
        transition-duration: 0.3s;
      }
    }
  }
</style>