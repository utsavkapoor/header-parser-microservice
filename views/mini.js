'use strict'

module.exports = function(req,res){
  var obj = {"IP":null, "language": null, "OS": null};
  obj["IP"] = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(",")[0];
  obj["language"] = req.headers["accept-language"].split(",")[0];
  var val = req.headers['user-agent'].match(/\(([^)]+)\)/);
  obj["OS"] = val[1];
  res.send(obj);
};