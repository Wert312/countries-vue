<template>
  <div class="searchBar">
    <div class="searchContainer">
      <input
        class="searchInput"
        type="text"
        v-model="searchValue"
        aria-label="Search for a country..."
        placeholder="Search for a country..."
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "search-bar",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["SET_SEARCH_VALUE"]),
  },

  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },
      set(searchValue) {
        this.$store.commit("SET_SEARCH_VALUE", searchValue);
      },
    },
  },
};
</script>

<style lang="scss">
  .searchBar {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 24px;
    margin-bottom: auto;

    @include for-desktop {
      padding-top: 48px;
    }
  }

  .searchContainer {
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 340px;
    height: 50px;
    background-color: var(--color-light);
    display: flex;
    align-items: center;
    padding-left: 30px;
    margin-bottom: 40px;

    @include for-desktop {
      max-width: 480px;
    }
  }

  .searchIcon {
    font-size: 16px;
    color: #848484;
    padding-right: 30px;
  }

  .searchInput {
    border: none;
    outline: none;
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
    background-color: var(--color-light);
    color: var(--app-text);
    width: 100%;

    &::placeholder {
      color: var(--app-text);
    }
  }

  /* Dropdown region selector Styles */
  .dropdownBtn {
    display: block;
    background: #fff;
    height: 50px;
    width: 160px;
    box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.1);
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .dropdownUL {
    padding-left: 0;
    text-align: left;
    background-color: #fff;
    margin-top: 3px;
    padding: 10px 0;
    box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    position: absolute;
    width: 220px;
  }

  .dropdownUL li {
    list-style: none;
    line-height: 2;
    cursor: pointer;
  }

  .dropdownUL li label {
    cursor: pointer;
    padding: 0 26px;
    display: block;
    width: 148px;
  }

  .dropdownUL li:hover {
    background-color: #f9f9f9;
  }

  .dropdownInput {
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute;
  }

  input[type="radio"] {
    -webkit-appearance: radio;
  }
</style>