/**
 * @fileoverview Rule to flag comparisons to null without a type-checking
 * operator.
 * @author Ian Christian Myers
 */



//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        type: "suggestion",

        docs: {
            description: "Disallow `null` comparisons without type-checking operators",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/no-eq-null"
        },

        schema: [],

        messages: {
            unexpected: "Use '===' to compare with null."
        }
    },

    create(context) {

        return {

            BinaryExpression(node) {
                const badOperator = node.operator === "==" || node.operator === "!=";

                if (node.right.type === "Literal" && node.right.raw === "null" && badOperator ||
                        node.left.type === "Literal" && node.left.raw === "null" && badOperator) {
                    context.report({ node, messageId: "unexpected" });
                }
            }
        };

    }
};
