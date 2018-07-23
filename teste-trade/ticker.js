var config = require("./config.js");

var Client = require('node-rest-client').Client;

var client = new Client();


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// registering remote methods 
client.registerMethod("ticker", "http://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC", "GET");

setInterval(function(){
    client.methods.ticker(function (data, response) {
        var ticker = JSON.parse(data);
        ticker.data = Date.now();
        MongoClient.connect(config.mongo_url, function(err, db) {
            assert.equal(null, err);
            insertTicker(ticker,db,function(){
                db.close();
            })
        });
        var diff = ticker.sell - ticker.buy;
        console.log("Ticker: "+formatDouble(ticker.last)+" : "+formatDouble(ticker.sell) +" - "+ formatDouble(ticker.buy) +" = "+ formatDouble(diff));
    });
}, config.intervalo);
    
var formatDouble = function(valor){
    return parseFloat(Math.round(valor * 100) / 100).toFixed(2);
}

var insertTicker = function(ticker, db, callback) {

    db.collection('ticker').insertOne(ticker, function(err, result) {
        assert.equal(err, null);
        console.log("Inserido!");
        callback();
    });
}