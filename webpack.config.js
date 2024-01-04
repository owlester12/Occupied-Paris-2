module.exports = {
    // ... other webpack configuration options ...
    module: {
      rules: [
        {
          test: /canvas\.node$/,
          use: 'raw-loader',
        },
      ],
    },
  };
  