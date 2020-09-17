<template>
  <div class="header">
    <div class="header__inner-content">
      <div class="header__link" @click="scrollTop">
        <router-link
          tag="div"
          :to="{ name: 'country-grid' }"
          class="header__title"
          >Where in the world?</router-link
        >
      </div>
      <div @click="toggleDarkMode" class="header__switch-mode">Dark Mode</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header",

  data() {
    return {
      isDarkMode: localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "light",
    };
  },

  methods: {
    toggleDarkMode() {
      if (this.isDarkMode === "light") {
        this.isDarkMode = "dark";
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        this.isDarkMode = "light";
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    if (this.isDarkMode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  },
};
</script>

<style lang="scss">
  .header {
    color: var(--app-text);
    background-color: var(--color-light);
    display: flex;
    position: fixed;
    z-index: 1000;
    align-items: center;
    width: 100%;
    height: 80px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

    &__inner-content {
      width: 100%;
      padding: 0 16px;
      margin: 0 auto;
      max-width: 1140px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;

      @include for-tablet {
        font-size: 24px;
        line-height: 33px;
      }
    }

    &__switch-mode {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      cursor: pointer;

      @include for-tablet {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
</style>