/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 */


/**
 * Check whether a given character is a regional indicator symbol.
 * @param {number} code The character code to check.
 * @returns {boolean} `true` if the character is a regional indicator symbol.
 */
export default function isRegionalIndicatorSymbol(code) {
    return code >= 0x1F1E6 && code <= 0x1F1FF;
};
