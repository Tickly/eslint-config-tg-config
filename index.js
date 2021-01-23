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
    // vue 模板里面也允许未使用的变量
    'vue/no-unused-vars': 'off',
    // Vue组件的参数顺序，不允许乱序
    'vue/order-in-components': 'error',
    // 不允许多个空白行
    'no-multiple-empty-lines': ['error', {
      max: 1
    }],
    // 一行允许多少个属性值
    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': {
        'max': 3,
        'allowFirstLine': false
      }
    }],
    // 关闭标签文本要在新的一行
    'vue/singleline-html-element-content-newline': 'off',
    // prop需要默认值，不给提示
    'vue/require-default-prop': 'off',
  }
}