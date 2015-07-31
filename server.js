if (!process.env.NODE_ENV || ['prod','dev'].indexOf(process.env.NODE_ENV) === -1){
  process.env.NODE_ENV = 'dev';
}
var env = process.env.NODE_ENV;
var app = require('./app');
var settings = require('./settings');
var serverSettings = settings.server[env];
app.listen(serverSettings.port);
console.log('Listen on port ' + serverSettings.port);
