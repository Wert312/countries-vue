<template>
  <router-link
    :to="{ name: 'country-detail', params: { country: country.name } }"
    tag="div"
    class="card"
  >
    <div class="card__image">
      <img :src="country.flag" alt="country_flag" />
    </div>
    <div class="card__info">
      <div class="card__title">{{ country.name }}</div>
      <div class="card__text">
        <p>
          <strong>Population: </strong>{{ country.population | formatNumbers }}
        </p>
        <p><strong>Region: </strong>{{ country.region }}</p>
        <p><strong>Capital: </strong>{{ country.capital || "No capital" }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
import FormatNumbers from "../../filters/formatNumbers";

export default {
  name: "country-card",
  props: {
    country: {
      type: Object,
      default: {},
    },
  },
  computed: {
    ...mapGetters(["GET_COUNTRIES", "GET_HAS_COUNTRIES"]),

    getCountriesLength() {
      return this.GET_COUNTRIES.length;
    },

    getHasCountries() {
      return this.getHasCountries;
    },
  },
};
</script>

<style lang="scss">
  .card {
    width: 100%;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-light);
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    cursor: pointer;
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @include for-desktop {
      &:hover {
        box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
        transition-property: box-shadow;
        transition-duration: 0.3s;
      }

      &:not(:hover) {
        transition-property: box-shadow;
        transition-duration: 0.3s;
      }
    }

    &__image {
      flex: 1;

      img {
        width: 100%;
        height: 160px;
        object-fit: contain;
      }
    }

    &__info {
      padding: 24px 24px 0px 24px;
      color: var(--app-text);
      flex: 1;
    }

    &__title {
      font-style: normal;
      font-weight: 800;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 16px;
    }

    &__text {
      font-style: normal;
      font-size: 14px;
      line-height: 16px;

      p {
        margin-top: 0;
      }
    }
  }
</style>