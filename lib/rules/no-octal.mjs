/**
 * @fileoverview Rule to flag when initializing octal literal
 * @author Ilya Volodin
 */



//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        type: "suggestion",

        docs: {
            description: "Disallow octal literals",
            recommended: true,
            url: "https://eslint.org/docs/latest/rules/no-octal"
        },

        schema: [],

        messages: {
            noOctal: "Octal literals should not be used."
        }
    },

    create(context) {

        return {

            Literal(node) {
                if (typeof node.value === "number" && /^0[0-9]/u.test(node.raw)) {
                    context.report({
                        node,
                        messageId: "noOctal"
                    });
                }
            }
        };

    }
};
