module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
};
