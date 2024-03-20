module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-property-sort-order-smacss'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-descending-specificity': null,
    'color-hex-length': 'long',
    'at-rule-no-unknown': null,
    'block-no-empty': [
      true,
      {
        severity: 'warning'
      }
    ]
  }
}
