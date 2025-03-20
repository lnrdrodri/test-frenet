// eslint.config.js
const vuePlugin = require('eslint-plugin-vue')
const prettierPlugin = require('eslint-plugin-prettier')

module.exports = [
  {
    files: ['*.js', '*.vue', '*.ts'],
    languageOptions: {
      ecmaVersion: 'latest', // Define a versão mais recente do ECMAScript
      sourceType: 'module', // Permite import/export
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Se você estiver usando JSX (React)
        },
      },
    },
    settings: {
      vue: {
        version: '3', // Defina a versão do Vue
      },
    },
    plugins: {
      vue: vuePlugin, // Adiciona o plugin Vue
      prettier: prettierPlugin, // Adiciona o plugin Prettier
    },
    rules: {
      'prettier/prettier': 'error', // Garante que o Prettier seja aplicado corretamente
      'vue/multi-word-component-names': 'off', // Exemplo de regra personalizada
    },
  },
]
