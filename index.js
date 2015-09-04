var jsonschema = require('jsonschema-protobuf')

module.exports = function convert (schema, opts) {
  if (!opts) opts = {}
  var format = opts.format
  return jsonschema(schema)
}