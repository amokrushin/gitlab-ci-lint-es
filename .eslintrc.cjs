module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages'],
  },
};
