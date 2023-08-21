// eslint-plugin-no-scrollbar/rules/no-scrollbar.js
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow '::webkit-scrollbar' and suggest using '[data-no-scrollbar]' instead",
      category: "Stylistic Issues",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      "Property[key.value]": (node) => {
        if (node.key.value.endsWith("::-webkit-scrollbar")) {
          context.report({
            node,
            message:
              "Use '[data-no-scrollbar]' instead of '::webkit-scrollbar'",
          });
        }
      },
    };
  },
};
