var express = require('express');
var app = express();
var redis = require('redis');

var port = Number.parseInt( process.env.WEBUI_PORT || "NaN" ) || 8080;
var addr = process.env.WEBUI_ADDR || "0.0.0.0"

var redis_port = Number.parseInt( process.env.REDIS_PORT || "NaN" ) || 6379;
var redis_addr = process.env.REDIS_ADDR || "redis";

var client = redis.createClient(redis_port, redis_addr);
client.on("error", function (err) {
    console.error("Redis error", err);
});

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.get('/json', function (req, res) {
    client.hlen('wallet', function (err, coins) {
        client.get('hashes', function (err, hashes) {
            var now = Date.now() / 1000;
            res.json( {
                coins: coins,
                hashes: hashes,
                now: now
            });
        });
    });
});

app.use(express.static('files'));

var server = app.listen(port, addr, function () {
    console.log('WEBUI running on port ' + port + ' on address ' + addr);
});

