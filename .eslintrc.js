const path = require('path');

module.exports = {
    root: true,
    extends: "airbnb", //npx install-peerdeps --dev eslint-config-airbnb //使用airbnb规则
    parser: "@typescript-eslint/parser", // 指定一个paser，将源代码转换为抽象语法树
    parserOptions: {
       project: path.resolve(__dirname, './tsconfig.json'),
       tsconfigRootDir: __dirname,
       ecmaVersion: 2019,
       sourceType: 'module'
    },
    env: {
        browser: true,
    },
    rules: {
        "indent": ["warn", 4],
        "no-console": "off",
        "no-param-reassign": "off",
        "no-debugger": "off",
        "no-undef": "off"
    }
}