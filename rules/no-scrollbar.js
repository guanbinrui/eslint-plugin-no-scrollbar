// eslint-plugin-no-scrollbar/rules/no-scrollbar.js
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Disallow selectors that end with '::webkit-scrollbar' and suggest using '[data-no-scrollbar]' instead",
      category: 'Stylistic Issues',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      'Property[key]': node => {
        const selector = node.key.type === 'Literal' ? node.key.value : undefined;
        if (typeof selector === 'string' && selector.endsWith('::-webkit-scrollbar')) {
          context.report({
            node,
            message: "Use '[data-no-scrollbar]' instead of selectors ending with '::webkit-scrollbar'",
          });
        }
      },
    };
  },
};
