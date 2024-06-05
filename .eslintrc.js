module.exports = {
  overrides: [
    {
      files: ['**/*.test.*'],
      env: {
        mocha: true
      }
    }
  ],
  plugins: ['prefer-smart-quotes'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      },
      alias: [['~', './js']]
    }
  },
  extends: '../.eslintrc.js'
};
