'use strict'

module.exports = function(req,res){
  var obj = {"IP":null,
             "METHOD": null, 
             "Secure":null,
             "language":null, 
             "OS":null
            };
  obj["IP"] = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(",")[0];
  obj["language"] = req.headers["accept-language"].split(",")[0];
  var val = req.headers['user-agent'].match(/\(([^)]+)\)/);
  obj["OS"] = val[1];
  obj["METHOD"] = req.method;
  if (req.secure){
    obj["Secure"] = "Yes"; 
  } else {
    obj["Secure"] = "No";
  }
  res.send(obj);
};