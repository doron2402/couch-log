var logsController = {};

logsController.getById = function(req, res){

  return res.json({code: 'ok'});
};

logsController.create = function(req, res){
  return res.json({code: 'ok'});
};

// { start @Date, end @Date, logType @String }
logsController.deleteByQueryParams = function(req, res) {
  return res.json({ code: 'ok' });
};

logsController.deleteById = function(req, res) {
	return res.json({
		code: 'ok',
		body: {
			message: 'Log deleted'
		}
	});
};
module.exports = logsController;
