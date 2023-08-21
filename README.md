# eslint-plugin-no-scrollbar

An ESLint plugin that detects the use of '::webkit-scrollbar' and suggests using '[data-no-scrollbar]' instead.

## Installation

To use this ESLint plugin, you need to have ESLint already installed. If not, you can install it using:

```bash
npm install eslint --save-dev
```

Next, you can install the `eslint-plugin-no-scrollbar` plugin:

```bash
npm install eslint-plugin-no-scrollbar --save-dev
```

## Configuration

In your ESLint configuration (`.eslintrc.js`), add the plugin and enable the rule:

```js
module.exports = {
  plugins: ['eslint-plugin-no-scrollbar'],
  rules: {
    'no-scrollbar': 'error',
  },
};
```

## Rules

`no-scrollbar`

This rule detects the use of `'::webkit-scrollbar'` and suggests using `'[data-no-scrollbar]'` instead.

### Examples of valid code:

```javascript
const useStyles = () => ({
    content: {},
});
```

Examples of invalid code:

```javascript
const useStyles = () => ({
    '::-webkit-scrollbar': {},
});
```

## Testing

To run the tests for this plugin, make sure you have Node.js and npm installed, then run:

```bash
npm test
```

The tests use Jest to validate the correctness of the ESLint rule implementation.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file
