(function() {
  var http = require("http")
  var url = require("url");
  var adr = url.parse(window.location.href);
  var q = adr.query;
  if (q.json === undefined || q.json === '') {
    console.error("q.json must not be undefined");
    http.createServer(function(req, res) {
      res.writeHead(403, {"Content-Type":"application/json"});
      res.write('{"meta":{"status":403, "statusText":"Forbidden"}, "data":null}');
      res.end()
    }).listen(443);
    return;
  }
  if ("length" in q.json != false) {
    console.error("q.json is not a object");
    http.createServer(function(req, res) {
      res.writeHead(403, {"Content-Type":"application/json"});
      res.write('{"meta":{"status":403, "statusText":"Forbidden"}, "data":null}');
      res.end()
    });
    return;
  }
  http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write('{"meta":{"status":200, "statusText":"OK"}, "data":' + q.json + "}");
    res.end();
  }).listen(443);
})();
