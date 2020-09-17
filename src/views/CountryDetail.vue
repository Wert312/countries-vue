<template>
  <div v-if="hasCountry">
    <div class="button-wrapper">
      <a @click="$router.go(-1)" class="btn-back">
        <arrow-back></arrow-back>
        Back
      </a>
    </div>
    <div class="detail">
      <div class="detail__image">
        <img :src="country.flag" alt="country_flag" />
      </div>
      <div class="detail__info">
        <div class="detail__title">{{ country.name }}</div>
        <div class="detail__wrapper">
          <div class="detail__text">
            <p><strong>Native Name: </strong>{{ country.nativeName }}</p>
            <p>
              <strong>Population: </strong
              >{{ country.population | formatNumbers }}
            </p>
            <p><strong>Region: </strong>{{ country.region }}</p>
            <p><strong>Sub Region: </strong>{{ country.subregion }}</p>
            <p>
              <strong>Capital: </strong>{{ country.capital || "No capital" }}
            </p>
          </div>
          <div class="detail__text">
            <p>
              <strong>Top Level Domain: </strong>{{ country.topLevelDomain[0] }}
            </p>
            <p><strong>Currency: </strong>{{ country.currencies[0].name }}</p>
            <p>
              <strong>Language: </strong
              ><span
                v-for="(language, index) in country.languages"
                v-bind:key="index"
                class="languages"
              >
                {{ language.name
                }}<span v-if="index + 1 < country.languages.length">, </span>
              </span>
            </p>
          </div>
        </div>
        <country-border></country-border>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowBack from "@/components/ui/ArrowBack";
import CountryBorder from "@/components/country/CountryBorder";
import { mapGetters } from "vuex";

export default {
  name: "country-detail",
  data() {
    return {
      country: "",
      hasCountry: false,
    };
  },

  components: {
    ArrowBack,
    CountryBorder,
  },

  computed: {
    ...mapGetters(["GET_COUNTRIES"]),

    getCountries() {
      return this.GET_COUNTRIES;
    },
  },

  mounted() {
    const countryRoute = this.$route.params.country;
    const countries = this.getCountries;

    for (const item of countries) {
      if (item.name === countryRoute) {
        this.country = item;
        this.hasCountry = true;
      }
    }
  },
};
</script>

<style lang="scss">
  .button-wrapper {
    display: flex;
    padding-top: 20px;
    width: 100%;
  }

  .btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 23px 6px 23px;
    border-radius: 2px;
    background-color: var(--color-light);
    text-decoration: none;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: var(--app-text);
    cursor: pointer;

    @include for-tablet {
      padding: 10px 39px 10px 39px;
    }

    @include for-desktop {
      &:hover {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        transition-property: box-shadow;
        transition-duration: 0.3s;
      }

      &:not(:hover) {
        transition-duration: 0.3s;
      }
    }
  }

  .detail {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1.5s; /* Firefox < 16 */
    -ms-animation: fadein 1.5s; /* Internet Explorer */
    -o-animation: fadein 1.5s; /* Opera < 12.1 */
    animation: fadein 1.5s;

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

    @include for-tablet {
      align-items: center;
      max-width: unset;
    }

    @include for-desktop {
      flex-direction: row;
      justify-content: space-between;
    }

    &__image {
      @include for-desktop {
        margin-right: 20px;
        flex: 1;
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;

        @include for-tablet {
          width: 500px;
          height: 320px;
        }

        @include for-desktop {
          width: 560px;
          height: 400px;
        }
      }
    }

    &__info {
      padding-top: 25px;
      color: var(--app-text);

      @include for-tablet {
        width: 500px;
      }

      @include for-desktop {
        width: unset;
        flex: 1;
      }
    }

    &__title {
      font-style: normal;
      font-weight: 800;
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 16px;

      @include for-tablet {
        font-size: 32px;
        line-height: 44px;
        margin-bottom: 23px;
      }
    }

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 320px;

      @include for-tablet {
        max-width: 100%;
      }
    }

    &__text {
      font-style: normal;
      font-size: 16px;
      line-height: 16px;

      &:first-of-type {
        padding-bottom: 32px;

        @include for-tablet {
          margin-top: 0;
        }

        @include for-desktop {
          padding-bottom: 0;
          margin-right: 40px;
        }
      }

      p {
        margin-top: 0;
      }
    }
  }
</style>