/**
 * @fileoverview Provide the function that emits deprecation warnings.
 * @author Toru Nagashima <http://github.com/mysticatea>
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import path from "node:path";

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

// Definitions for deprecation warnings.
const deprecationWarningMessages = {
    ESLINT_LEGACY_ECMAFEATURES:
        "The 'ecmaFeatures' config file property is deprecated and has no effect."
};

const sourceFileErrorCache = new Set();

/**
 * Emits a deprecation warning containing a given filepath. A new deprecation warning is emitted
 * for each unique file path, but repeated invocations with the same file path have no effect.
 * No warnings are emitted if the `--no-deprecation` or `--no-warnings` Node runtime flags are active.
 * @param {string} source The name of the configuration source to report the warning for.
 * @param {string} errorCode The warning message to show.
 * @returns {void}
 */
function emitDeprecationWarning(source, errorCode) {
    const cacheKey = JSON.stringify({ source, errorCode });

    if (sourceFileErrorCache.has(cacheKey)) {
        return;
    }

    sourceFileErrorCache.add(cacheKey);

    const rel = path.relative(process.cwd(), source);
    const message = deprecationWarningMessages[errorCode];

    process.emitWarning(
        `${message} (found in "${rel}")`,
        "DeprecationWarning",
        errorCode
    );
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export { emitDeprecationWarning };
