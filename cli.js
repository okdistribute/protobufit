#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2))
var fs = require('fs')
var concat = require('concat-stream')
var convert = require('./')

if (args._[0] && args._[0].trim() === 'help' || args.help) return usage()

var path = args._[0]
var out = args._[1] && fs.createWriteStream(args._[1]) || process.stdout
var format = args.format

if (path) path = fs.createReadStream(path)
else path = process.stdin

path.pipe(concat(function (buf) {
  var val = convert(buf.toString())
  out.write(val)
}))


function usage () {
  console.log('protobufit [input-file] [output-file]\n  Filenames are optional. \n  Reads from stdin and writes to stdout if not supplied.')
  process.exit(1)
}



