const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {

    // const cssRule = config.module.rule('css')
    // cssRule.uses.clear()
    // cssRule
    // .use('sass-loader')
    //   .loader('sass-loader')
    //   .tap(options => {
    //     // modify the options...
    //     return options
    //   })



    // const options = {
    //   sourceMap: false,
    //   importLoaders: 2,
    //   modules: {
    //     localIdentName: '[name]______[local]_[hash:base64:5]',
    //     auto: () => true,
    //   },
    // };
    // config.module.rule('css').oneOf('vue-modules').use('css-loader').options(options);


    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.delete('type');
    svgRule.delete('generator');
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");


  },







})
