module.exports = {
    env: {
        browser: true,
        es6: true,
        es2017: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
        'eslint-plugin-deprecate',
        '@typescript-eslint',
        'prettier',
        'eslint-plugin-import-helpers',
        'jsdoc',
    ],
    ignorePatterns: ['/generated'],
    rules: {
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'never',
                groups: ['/^[a-z].*$/', '/^@.*$/', 'module', ['parent', 'sibling', 'index']],
                alphabetize: {order: 'asc'},
            },
        ],
        'jsdoc/check-alignment': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-param-type': 'off',
        'jsdoc/check-property-names': 'warn',
        'jsdoc/require-property': 'warn',
        'jsdoc/require-property-description': 'warn',
        'jsdoc/require-property-name': 'warn',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-check': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/valid-types': 'warn',
        'react/display-name': 'off',
        'react/no-render-return-value': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'no-irregular-whitespace': 'warn',
        'prettier/prettier': 'warn',
    },
    settings: {
        react: {
            version: '17.0',
        },
    },
}
