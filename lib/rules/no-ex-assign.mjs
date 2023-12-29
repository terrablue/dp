/**
 * @fileoverview Rule to flag assignment of the exception parameter
 * @author Stephen Murray <spmurrayzzz>
 */



import astUtils from "./utils/ast-utils.mjs";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../shared/types').Rule} */
export default {
    meta: {
        type: "problem",

        docs: {
            description: "Disallow reassigning exceptions in `catch` clauses",
            recommended: true,
            url: "https://eslint.org/docs/latest/rules/no-ex-assign"
        },

        schema: [],

        messages: {
            unexpected: "Do not assign to the exception parameter."
        }
    },

    create(context) {

        const sourceCode = context.sourceCode;

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {Variable} variable A variable to check.
         * @returns {void}
         */
        function checkVariable(variable) {
            astUtils.getModifyingReferences(variable.references).forEach(reference => {
                context.report({ node: reference.identifier, messageId: "unexpected" });
            });
        }

        return {
            CatchClause(node) {
                sourceCode.getDeclaredVariables(node).forEach(checkVariable);
            }
        };

    }
};