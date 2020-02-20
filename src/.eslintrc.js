module.exports = {
  extends: 'airbnb',
  env: {
    'jest': true,
    'react-native/react-native': true,
  },
  plugins: [
    'react-native',
  ],
  rules: {
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'brace-style': [2, 'stroustrup'],
    'function-paren-newline': 0,
    'jsx-a11y/label-has-associated-control': [2, {}],
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 0,
    'no-multi-assign': 0,
    'no-nested-ternary': 0,
    'object-curly-newline': [2, { multiline: true, consistent: true }],
    'operator-linebreak': [2, 'after'],
    'radix': [2, 'as-needed'],
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
  },
};
