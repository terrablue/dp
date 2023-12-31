/**
 * @fileoverview Handle logging for ESLint
 * @author Gyandeep Singh
 */

/* eslint no-console: "off" -- Logging util */

/* c8 ignore next */
export default {

    /**
     * Cover for console.log
     * @param {...any} args The elements to log.
     * @returns {void}
     */
    info(...args) {
        console.log(...args);
    },

    /**
     * Cover for console.error
     * @param {...any} args The elements to log.
     * @returns {void}
     */
    error(...args) {
        console.error(...args);
    }
};
