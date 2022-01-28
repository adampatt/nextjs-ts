// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//     jest: true,
//   },
//   extends: [
//     'next',
//     'next/core-web-vitals',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'airbnb',
//     'plugin:prettier/recommended',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/typescript',
//     'plugin:jsx-ally/recommended',
//     'prettier',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint'],
//   rules: {
//     'prettier/prettier': 'error',
//     '@typescript-eslint/no-unused-vars': 'error',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-explicit-any': 'error',
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-filename-extension': 'off',
//     'import/extensions': 'off',
//     'import/no-unresolved': 'error',
//     'import/order': [
//       'error',
//       {
//         groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
//         pathGroups: [
//           {
//             pattern: 'react',
//             group: 'external',
//             position: 'before',
//           },
//         ],
//         pathGroupsExcludedImportTypes: ['react'],
//         'newlines-between': 'never',
//         alphabetize: {
//           order: 'asc',
//           caseInsensitive: true,
//         },
//       },
//     ],
//     'import/no-extraneous-dependencies': [
//       'error',
//       { devDependencies: ['jest.setup.ts', '**/*.test.tsx', '**/*.spec.tsx', '**/*.test.ts', '**/*.spec.ts'] },
//     ],
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//     'import/resolver': {
//       typescript: {
//         project: '.',
//       },
//     },
//   },
// };
