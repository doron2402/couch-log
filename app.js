var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes.api);
app.use('/', routes.base);

app.use(function(err, req, res, next) {
    console.error(err.stack);
      next(err);
});

app.use(function(err, req, res, next){
  console.error('Error', err);
  res.status(500);
  return res.json({code: 'error', body:{ error: err }});
});
module.exports = app;

