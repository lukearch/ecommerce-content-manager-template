module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: ['./src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      rules: {},
    },
    {
      files: ['./src/**/*.spec.ts', './test/**/*.e2e-spec.ts'],
      env: {
        jest: true,
      },
      parserOptions: {
        project: './tsconfig.spec.json',
        sourceType: 'module',
      },
      rules: {},
    },
  ],
};
