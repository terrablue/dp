/**
 * @fileoverview Define the cursor which ignores specified tokens.
 * @author Toru Nagashima
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import DecorativeCursor from "./decorative-cursor.mjs";

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The decorative cursor which ignores specified tokens.
 */
export default class FilterCursor extends DecorativeCursor {

    /**
     * Initializes this cursor.
     * @param {Cursor} cursor The cursor to be decorated.
     * @param {Function} predicate The predicate function to decide tokens this cursor iterates.
     */
    constructor(cursor, predicate) {
        super(cursor);
        this.predicate = predicate;
    }

    /** @inheritdoc */
    moveNext() {
        const predicate = this.predicate;

        while (super.moveNext()) {
            if (predicate(this.current)) {
                return true;
            }
        }
        return false;
    }
};
