/**
 * @fileoverview Rule to enforce description with the `Symbol` object
 * @author Jarek Rencz
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
            description: "Require symbol descriptions",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/symbol-description"
        },
        fixable: null,
        schema: [],
        messages: {
            expected: "Expected Symbol to have a description."
        }
    },

    create(context) {

        const sourceCode = context.sourceCode;

        /**
         * Reports if node does not conform the rule in case rule is set to
         * report missing description
         * @param {ASTNode} node A CallExpression node to check.
         * @returns {void}
         */
        function checkArgument(node) {
            if (node.arguments.length === 0) {
                context.report({
                    node,
                    messageId: "expected"
                });
            }
        }

        return {
            "Program:exit"(node) {
                const scope = sourceCode.getScope(node);
                const variable = astUtils.getVariableByName(scope, "Symbol");

                if (variable && variable.defs.length === 0) {
                    variable.references.forEach(reference => {
                        const idNode = reference.identifier;

                        if (astUtils.isCallee(idNode)) {
                            checkArgument(idNode.parent);
                        }
                    });
                }
            }
        };

    }
};
