import Vue from "vue";

Vue.filter("formatNumbers", value => {
  return `${value.toLocaleString()}`;
});
