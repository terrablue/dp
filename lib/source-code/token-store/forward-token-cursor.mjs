/**
 * @fileoverview Define the cursor which iterates tokens only.
 * @author Toru Nagashima
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import Cursor from "./cursor.mjs";
import { getFirstIndex, getLastIndex } from "./utils.mjs";

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The cursor which iterates tokens only.
 */
export default class ForwardTokenCursor extends Cursor {

    /**
     * Initializes this cursor.
     * @param {Token[]} tokens The array of tokens.
     * @param {Comment[]} comments The array of comments.
     * @param {Object} indexMap The map from locations to indices in `tokens`.
     * @param {number} startLoc The start location of the iteration range.
     * @param {number} endLoc The end location of the iteration range.
     */
    constructor(tokens, comments, indexMap, startLoc, endLoc) {
        super();
        this.tokens = tokens;
        this.index = getFirstIndex(tokens, indexMap, startLoc);
        this.indexEnd = getLastIndex(tokens, indexMap, endLoc);
    }

    /** @inheritdoc */
    moveNext() {
        if (this.index <= this.indexEnd) {
            this.current = this.tokens[this.index];
            this.index += 1;
            return true;
        }
        return false;
    }

    /*
     *
     * Shorthand for performance.
     *
     */

    /** @inheritdoc */
    getOneToken() {
        return (this.index <= this.indexEnd) ? this.tokens[this.index] : null;
    }

    /** @inheritdoc */
    getAllTokens() {
        return this.tokens.slice(this.index, this.indexEnd + 1);
    }
};
