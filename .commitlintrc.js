module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        '*',
        'components',
        'pages',
        'queries',
        'services',
        'styles',
        'utils',
      ],
    ],
  },
};
