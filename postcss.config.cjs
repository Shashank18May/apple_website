module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 2,
      features: {
        "custom-properties": false,
      },
    },
    autoprefixer: {},
  },
};
