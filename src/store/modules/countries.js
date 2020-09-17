import axios from "axios";

export default {
  state: {
    countries: [],
    hasCountries: false,
    searchValue: ""
  },

  getters: {
    GET_COUNTRIES(state) {
      return state.countries;
    },

    GET_COUNTRIES_LENGTH(state) {
      return state.countries.length;
    },

    GET_HAS_COUNTRIES(state) {
      return state.hasCountries;
    },

    GET_FILTERED_COUNTRIES(state) {
      return state.countries.filter(country => {
        if (state.searchValue !== "") {
          return country.name
            .toLowerCase()
            .match(state.searchValue.toLowerCase());
        } else {
          return state.countries;
        }
      });
    },

    // search
    GET_SEARCH_VALUE(state) {
      return state.searchValue;
    }
  },

  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
      state.countries = countries;
    },

    SET_HAS_COUNTRIES: state => {
      state.hasCountries = true;
    },

    // search
    SET_SEARCH_VALUE: (state, searchValue) => {
      state.searchValue = searchValue;
    }
  },

  actions: {
    GET_COUNTRIES_FROM_API({ commit }) {
      return axios("https://restcountries.eu/rest/v2/all", {
        method: "GET"
      })
        .then(countries => {
          commit("SET_COUNTRIES_TO_STATE", countries.data);
          return countries;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    },

    CHANGE_HAS_COUNTRIES({ commit }) {
      commit("SET_HAS_COUNTRIES");
    },

    // search
    INIT_SEARCH_VALUE({ commit }, searchValue) {
      commit("SET_SEARCH_VALUE", searchValue);
    }
  }
};
