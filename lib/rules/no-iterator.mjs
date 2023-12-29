/**
 * @fileoverview Rule to flag usage of __iterator__ property
 * @author Ian Christian Myers
 */



//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import astUtils from "./utils/ast-utils.mjs";
const { getStaticPropertyName } = astUtils;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        type: "suggestion",

        docs: {
            description: "Disallow the use of the `__iterator__` property",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/no-iterator"
        },

        schema: [],

        messages: {
            noIterator: "Reserved name '__iterator__'."
        }
    },

    create(context) {

        return {

            MemberExpression(node) {

                if (getStaticPropertyName(node) === "__iterator__") {
                    context.report({
                        node,
                        messageId: "noIterator"
                    });
                }
            }
        };

    }
};
