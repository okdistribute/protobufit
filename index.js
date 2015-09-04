var jsonschema = require('jsonschema-protobuf')
var sql = require('sql-protobuf')

module.exports = function convert (data, opts) {
  if (!opts) opts = {}
  var format = opts.format || opts.f
  if (!format) format = detectFormat(data)

  if (format === 'sql') return sql(data)
  else if (format === 'jsonschema') return jsonschema(data)
}

function detectFormat (schema) {
  if (schema.match(/.*CREATE\s+TABLE.*/)) return 'sql'
  else return 'jsonschema'
}