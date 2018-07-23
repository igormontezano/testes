var Client = require('node-rest-client').Client;

var client = new Client();


// registering remote methods 
client.registerMethod("orderBook", "http://api.blinktrade.com/api/v1/BRL/orderbook?crypto_currency=BTC", "GET");

const TAMANHO = 10;
const IDX_COTA = 0;
const IDX_BTC  = 1;

// setInterval(function(){

    client.methods.orderBook(function (data, response) {
        var bids = cutArray(data.bids, TAMANHO);
        var asks = cutArray(data.asks, TAMANHO);

        var sumAsks = 0, sumBids = 0, sumCtAsks = 0, sumCtBids = 0;
        var diffAsks = [];
        for(var i = 0; i < TAMANHO; i++ ){
            sumAsks += asks[i][IDX_BTC];
            sumBids += bids[i][IDX_BTC];
            sumCtAsks += asks[i][IDX_COTA];
            sumCtBids += bids[i][IDX_COTA];
            if(i<TAMANHO-1){
                console.log(asks[i+1][IDX_COTA],asks[i][IDX_COTA]);
                diffAsks.push(asks[i+1][IDX_COTA] - asks[i][IDX_COTA]);
                console.log(diffAsks[i]);
            }
        }

        console.log("Soma asks: "+sumAsks);
        console.log("Soma bids: "+sumBids);

        console.log("Diff: ",diffAsks);
        
        console.log("Avg asks: "+formatDouble(sumCtAsks/TAMANHO));
        console.log("Avg bids: "+formatDouble(sumCtBids/TAMANHO));

        // var resp = JSON.parse(data);
        // var diff = resp.sell - resp.buy;
        // console.log("Ticker: "+formatDouble(resp.last)+" : "+formatDouble(resp.sell) +" - "+ formatDouble(resp.buy) +" = "+ formatDouble(diff));
    });
// }, '10000');

var formatDouble = function(valor){
    return parseFloat(Math.round(valor * 100) / 100).toFixed(2);
}

var cutArray = function (array, tam){
    var result = [];
    for(var i = 0; i<tam ; i++){
        result.push(array[i]);
    }
    return result;
}