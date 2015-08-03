#CouchDB - Logger

## Why?
When you have heavy client you want to log everything from specific behavior and etc.

## How

We using couchbase becuase we care about two things
  1. Availability.
  2. Partition Tolerance

Meaning we want to log everything and we want the DB to always be on and listen to our logs.

# Routes

1. [GET] /api/version
2. [GET] /api/log/:id
3. [POST] /api/log
4. [GET] /api/logs?limit&offset&start&end
