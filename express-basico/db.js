var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/crossfit", function(err, conn){

    if(err) return console.error(err);

    global.db = conn;

});

function save(nome, idade, callback){
    global.db.collection("pessoas").insert({nome, idade},function(err, result){
        if(err) return console.error(err);
        callback(result);
    });
}

function find(callback){
    global.db.collection("pessoas").find({}).toArray(function(err, res){
        if(err) return console.error(err);
        callback(res);
    });
}

module.exports = { save , find};