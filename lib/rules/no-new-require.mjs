/**
 * @fileoverview Rule to disallow use of new operator with the `require` function
 * @author Wil Moore III
 * @deprecated in ESLint v7.0.0
 */



//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "Disallow `new` operators with calls to `require`",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/no-new-require"
        },

        schema: [],

        messages: {
            noNewRequire: "Unexpected use of new with require."
        }
    },

    create(context) {

        return {

            NewExpression(node) {
                if (node.callee.type === "Identifier" && node.callee.name === "require") {
                    context.report({
                        node,
                        messageId: "noNewRequire"
                    });
                }
            }
        };

    }
};
