/**
 * @fileoverview A rule to disallow calls to the Object constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
 */



//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import astUtils from "./utils/ast-utils.mjs";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        type: "suggestion",

        docs: {
            description: "Disallow `Object` constructors",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/no-new-object"
        },


        replacedBy: [
            "no-object-constructor"
        ],

        schema: [],

        messages: {
            preferLiteral: "The object literal notation {} is preferable."
        }
    },

    create(context) {

        const sourceCode = context.sourceCode;

        return {
            NewExpression(node) {
                const variable = astUtils.getVariableByName(
                    sourceCode.getScope(node),
                    node.callee.name
                );

                if (variable && variable.identifiers.length > 0) {
                    return;
                }

                if (node.callee.name === "Object") {
                    context.report({
                        node,
                        messageId: "preferLiteral"
                    });
                }
            }
        };
    }
};
