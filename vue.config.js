module.exports = {
  lintOnSave: true,
  crossorigin: 'anonymous',
  integrity: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Cocktails',
    },
  },
  devServer: {
    disableHostCheck: true,
    useLocalIp: false,
    proxy: {
      '/api': {
        target: 'https://www.thecocktaildb.com',
        // target: 'http://localhost:9000',
        changeOrigin: true,
      },
    },
  },
};
