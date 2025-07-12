module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Reglas personalizadas para el proyecto (más flexibles)
    'react/prop-types': 'off', // Desactivar prop-types ya que no se usa TypeScript
    'react/react-in-jsx-scope': 'off', // React 17+ no requiere importar React
    'react/no-unescaped-entities': 'warn', // Solo warning para entidades no escapadas
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'semi': 'off', // Menos estricto con semicolons
    'quotes': 'off', // Menos estricto con quotes
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    'webpack/',
    '*.config.js',
  ],
};
