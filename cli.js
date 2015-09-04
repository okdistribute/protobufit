#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2))
var fs = require('fs')
var concat = require('concat-stream')
var convert = require('./')

if (!args._[0] || args.help) return usage()

var path = args._[0]
var out = args._[1] && fs.createWriteStream(args._[1]) || process.stdout
var format = args.format

var schema = fs.readFileSync(path).toString()
out.write(convert(schema))

function usage () {
  console.log('protobufit [input-file] [output-file]\n  Filenames are optional. \n  Reads from stdin and writes to stdout if not supplied.')
  process.exit(1)
}
