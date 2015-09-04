# protobufit

Converts various schema types into [Protocol Buffers](https://developers.google.com/protocol-buffers/?hl=en) format (v2).

Supports:
  * [SQL `CREATE TABLE` statements](http://www.w3schools.com/sql/sql_create_table.asp)
  * [JSON Schema](json-schema.org)

Yes, this handles:
  * Multiple schema definitions in a single file
  * Tries to auto-detect the given schema format if not specified
  * `required` and `repeated`

```
npm install -g protobufit
```

### CLI usage

```
protobufit [input-file] [-f <format>]
  <format>: 'sql' or 'jsonschema'
```


### Example

```
protobufit schema.sql -f sql > schema.proto
```

schema.sql
```
CREATE TABLE "pluto" (
  "boroughtext" text,
  "block" integer,
  "lot" bigint,
  "cd" date NOT NULL,
);
```

schema.proto
```
syntax = "proto2";

message pluto {
  optional string boroughtext = 0;
  optional int32 block = 1;
  optional int64 lot = 2;
  required string cd = 3;
```

### JS usage

```js
var protobufit = require('protobufit')
var data = fs.readFileSync('schema.sql').toString()
var opts = {format: 'sql'}
console.log(protobufit(data, opts))
```

### TODO
  * datapackage.json
  * Rdata?