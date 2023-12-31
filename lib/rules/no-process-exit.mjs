/**
 * @fileoverview Disallow the use of process.exit()
 * @author Nicholas C. Zakas
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
            description: "Disallow the use of `process.exit()`",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/no-process-exit"
        },

        schema: [],

        messages: {
            noProcessExit: "Don't use process.exit(); throw an error instead."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            "CallExpression > MemberExpression.callee[object.name = 'process'][property.name = 'exit']"(node) {
                context.report({ node: node.parent, messageId: "noProcessExit" });
            }
        };

    }
};
