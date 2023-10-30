const { defineConfig } = require("@vue/cli-service");
module.exports = {
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: ["@vueform"],
  publicPath: "/",
  outputDir: '../backend/public'
};
