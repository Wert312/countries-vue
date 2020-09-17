module.exports = {
  publicPath: "/countries-vue/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
};
