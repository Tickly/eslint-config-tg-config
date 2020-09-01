module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    // 尾逗号不做提示，允许
    'comma-dangle': 'off',
    // 分号不做提示，允许
    'semi': 'off',
    // 未使用的变量，允许
    'no-unused-vars': 'off',
    // Vue组件的参数顺序，不允许乱序
    'vue/order-in-components': 'error',
    'no-multiple-empty-lines': 'error',
  }
}