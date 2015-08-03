var logs = {};

logs.id = function(req, res, next){
  if (!req.params.id && !req.query.id){
    return next(new Error('Missing log id'));
  } else if (req.query.id > 0 && !req.params.id) {
    req.params.id = req.query.id;
  }

  return next();
};

logs.create = function(req, res, next){
  console.log(req.body);
  return next();
};

logs.deleteQueryParams = function(req, res, next){
  if (!req.query){
    return next('No Query Params found.');
  }
  return next();
};

module.exports = logs;
