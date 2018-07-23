var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/teste_mongo", function(err, conn){

    if(err) return console.error(err);

    global.db = conn;

});

function save(pessoa, callback){
    global.db.collection("pessoas").save(pessoa,function(err, result){
        if(err) return console.error(err);
        callback(result);
    });
}

function remove(pessoa, callback){
    global.db.collection("pessoas").remove(pessoa,function(err, result){
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

function findOne(id, callback){
    global.db.collection("pessoas").findOne(id, function(err, res){
        if(err) return console.error(err);
        if(res){
            callback(res);
        }
    });
}

module.exports = { save , find, findOne, remove};