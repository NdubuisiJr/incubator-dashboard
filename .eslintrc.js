module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['off', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': [
            'warn',
            { allow: ['clear', 'info', 'error', 'dir', 'trace'] }
        ]
    }
};
  