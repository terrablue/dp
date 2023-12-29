/**
 * @fileoverview JSON reporter, including rules metadata
 * @author Chris Meyer
 */
//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export default (results, data) =>
  JSON.stringify({
      results,
      metadata: data
  });
