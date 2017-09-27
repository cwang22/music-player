module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  globals: {
    __static: true
  },
  plugins: [
    'vue', 'html'
  ],
  'rules': {
    // override/add rules' settings here
    'vue/valid-v-if': 'error',
    // allow paren-less arrow functions
    "func-style": 0,
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
