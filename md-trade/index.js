
// Documentacao  https://blinktrade.com/docs/

var dados = {
    prod: true,
    currency: "BRL"
  };

var BlinkTradeWebSocket = require("blinktrade").BlinkTradeWS;
var blinktradeWs = new BlinkTradeWebSocket(dados);

blinktradeWs.connect().then(function() {
    // Conexão com o WebSocket tem que ser mantida chamando o método heartbeat a cada 30s pelo menos
    setInterval(
        function(){
            blinktradeWs.heartbeat().then(
                function(heartbeat){
                    console.log("Latência: "+heartbeat.Latency)
                }
            )
        },
    15000);


    blinktradeWs.tradeHistory().then(
        function(trades) {
            console.log(trades);
        }
    );

    
    blinktradeWs.subscribeTicker(["BLINK:BTCBRL"]).then(
        function(ticker) {
            console.log(ticker);
        }
    );

    var msg = {
        "MsgType": "V",
        "MDReqID": 9894272,
        "SubscriptionRequestType": "1",
        "MarketDepth": "1",
        "MDUpdateType": "1",
        "Instruments": ["BTCBRL"]
    }

    blinktradeWs.subscribeOrderbook(msg).then(
        function(orderbook) {
            console.log(orderbook);
        }
    );
      
});