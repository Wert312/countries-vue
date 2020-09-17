import Vue from "vue";

Vue.filter("FormatNumbers", value => {
  return `${value.toLocaleString()}`;
});
