const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@modal-header-bg': '#1b56b3',
              '@primary-color': '#1b56b3',
              '@table-header-bg': '#C7DBFC',
              '@table-border-color': '#B6CCF0',
              '@layout-body-background': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
