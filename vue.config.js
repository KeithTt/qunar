const resolve = dir => require('path').join(__dirname, dir);
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  parallel: require('os').cpus().length > 1,
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8080,
    https: false,
    hotOnly: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   // 为生产环境修改配置...
    // } else {
    //   // 为开发环境修改配置...
    // }
    config.resolve = {
      // plugins: [new BundleAnalyzerPlugin()],
      extensions: ['.js', '.vue', '.json', ".css"],
      alias: {
        '@': resolve('src'),
        'styles': resolve('src/assets/styles'),
        'common': resolve('src/common')
      },
    }
  },
  css: {
    sourceMap: false
  }
};
