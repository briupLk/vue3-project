module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    "vue/html-self-closing": "off", // 忽略没有使用尾部闭合
    "vue/max-attributes-per-line": "off", // 忽略标签属性超过三个没有换行
    "vue/multi-word-component-names": "off", // 忽略组件名称多个单词
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: "module"
  }
}
