/**
 * @fileoverview Define the abstract class about cursors which manipulate another cursor.
 * @author Toru Nagashima
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import Cursor from "./cursor.mjs";

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The abstract class about cursors which manipulate another cursor.
 */
export default class DecorativeCursor extends Cursor {

    /**
     * Initializes this cursor.
     * @param {Cursor} cursor The cursor to be decorated.
     */
    constructor(cursor) {
        super();
        this.cursor = cursor;
    }

    /** @inheritdoc */
    moveNext() {
        const retv = this.cursor.moveNext();

        this.current = this.cursor.current;

        return retv;
    }
};
