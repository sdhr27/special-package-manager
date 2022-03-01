/**
 * ts rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
 * es rules: https://github.com/eslint/eslint/tree/master/docs/rules
 * 部分 ts 规则与 es 规则重合时，需要 关闭 已有的 es 规则，之后添加需要注意
 * @example
 * rules: {
 *  camelcase: 0,
 *  '@typescript-eslint/camelcase': 1,
 * }
 */
module.exports = {
  root: true,
  extends: [
    'airbnb-typescript', // react, ts
    'airbnb/hooks',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    /* 原umi */
    strict: [0],
    'no-sequences': [0],
    'no-mixed-operators': [0],
    'react/react-in-jsx-scope': [0],
    'no-useless-escape': [0],
    /* */
    /* 更新后新增内容 */
    'react/jsx-props-no-spreading': 0, // 传入 props时 不可使用解构
    'react/state-in-constructor': 0,
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    /* */
    'brace-style': [0],
    'no-console': [1],
    'guard-for-in': [0],
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'react-hooks/rules-of-hooks': [2],
    // issue https://github.com/facebook/react/issues/15204
    'react-hooks/exhaustive-deps': 'off', // 对依赖限制太死暂时不使用
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', 'tsx', 'ts'] }],
    'global-require': [1],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__test{,s}__/**/*',
          '**/demo{,s}/**/*',
          '**/mock{,s}/**/*',
        ],
      },
    ],
    'import/no-default-export': [0, 'camel-case'],
    'import/no-named-as-default-member': 0,
    'import/default': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-named-as-default': 1,
    'import/no-unresolved': 2,
    'import/no-cycle': 0,
    'import/extensions': 0,
    'react/jsx-no-bind': [0],
    'react/no-access-state-in-setstate': 1,
    'react/prop-types': [0],
    'react/sort-comp': 1,
    'react/prefer-stateless-function': [0],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    // 'react/destructuring-assignment': ['always', { ignoreClassFields: true }],
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off', // 有时无法使用解构，且会主动改变逻辑解构
    'react/static-property-placement': 'off',
    'no-prototype-builtins': 'off',
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'no-underscore-dangle': [0],
    'prefer-destructuring': 1, // 有的时候你确实没法解构
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['label'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],

    'no-bitwise': [0],
    'no-cond-assign': [0],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'object-curly-newline': [0],
    'function-paren-newline': [0],
    'no-restricted-globals': [0],
    'require-yield': [1],
    // 'compat/compat': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    // 添加以下TS检查
    // 关闭部分可推导内容的强制书写
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['PascalCase'],
        filter: {
          regex: 'ontext$',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['PascalCase'],
        filter: {
          regex: 'RangePicker',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
        types: ['function'],
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  // overrides: [
  //   {
  //     files: ['src/models/**/*.js', 'src/models/**/*.ts'],
  //     rules: {
  //       'no-restricted-imports': [
  //         'error',
  //         {
  //           patterns: ['@/components', '**/components', '@/pages', '**/pages'],
  //         },
  //       ],
  //     },
  //   },
  // ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      // webpack: {
      //   config: 'webpack.alias.js',
      //   extensions: ['.js', '.jsx', '.tsx', '.less'],
      // },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.tsx'],
  },
};
