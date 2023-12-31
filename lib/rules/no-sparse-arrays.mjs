/**
 * @fileoverview Disallow sparse arrays
 * @author Nicholas C. Zakas
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        type: "problem",

        docs: {
            description: "Disallow sparse arrays",
            recommended: true,
            url: "https://eslint.org/docs/latest/rules/no-sparse-arrays"
        },

        schema: [],

        messages: {
            unexpectedSparseArray: "Unexpected comma in middle of array."
        }
    },

    create(context) {


        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            ArrayExpression(node) {

                const emptySpot = node.elements.includes(null);

                if (emptySpot) {
                    context.report({ node, messageId: "unexpectedSparseArray" });
                }
            }

        };

    }
};
