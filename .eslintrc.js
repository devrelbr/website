module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env'],
    },
  },
  plugins: [
    'babel',
    'import-helpers',
    'import',
  ],
  extends: [
    'plugin:@next/next/recommended',
  ],
  rules: {
    'no-use-before-define': ['error', { functions: false }],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          ['parent', 'index'],
          'sibling',
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts*"],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            minimumDescriptionLength: 3,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
  ],
};
