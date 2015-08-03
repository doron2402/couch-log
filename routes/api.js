var express = require('express');
var router = express.Router();
var pkg = require('../package.json');
var controllers = require('../controllers');
var mw = require('../mw');
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/version', function(req, res){
  res.json({code: 'ok',body: {version: pkg.version}});
});

// [GET] log/:id or log?id=1
router.get('/log', mw.validate.logs.id, controllers.logs.getById);
router.get('/log/:id', mw.validate.logs.id, controllers.logs.getById);

// [POST] log
router.post('/log', mw.validate.logs.create, controllers.logs.create);

// [DEL] log
router.delete('/log/:id', mw.validate.logs.id, controllers.logs.deleteById);
router.delete('/logs', mw.validate.logs.deleteQueryParams, controllers.logs.deleteByQueryParams);

module.exports = router;
