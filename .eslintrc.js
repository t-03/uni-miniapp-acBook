module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true
  },

  globals: {
    wx: true,
    weex: true,
    uni: true,
    uniCloud: true,
    plus: true,
    window: true,
    WeixinJSBridge: true
  },

  extends: ["plugin:vue/recommended", "eslint:recommended"],

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },

  rules: {
    "vue/no-v-html": "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],//不能有声明后未被使用的变量或参数
    "no-undef": 1,//不能有未定义的变量
    quotes: ["error", "double"],//要求尽可能地使用双引号
    "semi": [2, "always"],//语句强制分号结尾
    "semi-spacing": [0, {
      "before": false,
      "after": true
    }],//分号前后空格
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
