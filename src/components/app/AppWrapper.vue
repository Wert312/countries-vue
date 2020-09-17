<template>
  <div class="container">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app-wrapper",
  computed: {
    ...mapGetters(["GET_COUNTRIES_LENGTH"]),

    getCountriesLength() {
      return this.GET_COUNTRIES_LENGTH;
    },
  },
};
</script>

<style lang="scss">
  .container {
    max-width: 1140px;
    width: 100%;
    padding: 80px 16px 45px 16px;
    margin: 0 auto;
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