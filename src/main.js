import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FormatNumbers from "@/filters/FormatNumbers";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  FormatNumbers,
  render: h => h(App)
}).$mount("#app");
