// eslint-plugin-no-scrollbar/rules/no-scrollbar.js
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Disallow '::webkit-scrollbar' and suggest using '[data-no-scrollbar]' instead",
      category: 'Stylistic Issues',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      'Property[key.value="::-webkit-scrollbar"]': node => {
        context.report({
          node,
          message: "Use '[data-no-scrollbar]' instead of '::webkit-scrollbar'",
        });
      },
    };
  },
};
