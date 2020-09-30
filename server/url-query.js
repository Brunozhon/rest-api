(function() {
  var http = require("http")
  var url = require("url");
  var adr = url.parse(window.location.href);
  var q = adr.query;
  if (q.json === undefined) {console.error("q.json must not be undefined"); return;}
  if ("length" in q.json != false) {return;}
  http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"application/json"});
    res.write('{"meta":{"status":200, "statusText":"OK"}, "data":' + q.json + "}");
    res.end();
  }).listen(443);
})();
