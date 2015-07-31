var express = require('express');
var router = express.Router();
var pkg = require('../package.json');
router.get('/', function(req, res) {
  res.json({ code: 'ok', status: 200, body: { version: pkg.version } });
});

module.exports = router;
