module.exports = {
  parser: '@typescript-eslint/parser',
  globals: {
    describe: 'readonly',
    context: 'readonly',
    it: 'readonly',
    expect: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 5,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  rules: {
    "@typescript-eslint/no-redeclare": 'off',
    "import/prefer-default-export": 'off',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  overrides: [
    {
      files: ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.js', 'src/**/*.jsx'],
    },
  ],
};
