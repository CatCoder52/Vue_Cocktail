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
  },
};
