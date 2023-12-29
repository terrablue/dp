/**
 * @fileoverview The instance of Ajv validator.
 * @author Evgeny Poberezkin
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import Ajv from "ajv";
import metaSchema from "ajv/lib/refs/json-schema-draft-04.json" assert { type: "json" }

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export default (additionalOptions = {}) => {
    const ajv = new Ajv({
        meta: false,
        useDefaults: true,
        validateSchema: false,
        missingRefs: "ignore",
        verbose: true,
        schemaId: "auto",
        ...additionalOptions
    });

    ajv.addMetaSchema(metaSchema);
    // eslint-disable-next-line no-underscore-dangle -- Ajv's API
    ajv._opts.defaultMeta = metaSchema.id;

    return ajv;
};
