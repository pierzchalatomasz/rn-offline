module.exports = {
  root: true,
  extends: 'brainhub',
  plugins: [
    'detox',
    'jest'
  ],
  rules: {
    'import/no-namespace': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  env: {
    'detox/detox': true,
    'jest/globals': true,
  },
};
