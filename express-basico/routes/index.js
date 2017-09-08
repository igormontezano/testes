var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , result: ''});
});


/* GET new page. */
router.get('/new', function(req, res, next) {
  var reg_id = req.query._id;
  var reg;
  if(reg_id){
    var o_id = new mongodb.ObjectID(reg_id);
    var remover = req.query.remover;
    if(remover){
      require("../db").remove({"_id":o_id},function(row){
        // faz nada
      });
    } else {
      require("../db").findOne({"_id":o_id},function(row){
        reg = row;
      });
    }
  }
  require("../db").find(function(result){
    res.render('new', { title: 'Nova página' , reg_edit: reg, result});
  });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
  var _id = req.query._id;
  if(_id){
    _id = new mongodb.ObjectID(_id);
  }
  var nome = req.body.nome;
  var idade = req.body.idade;
  require("../db").save({_id, nome, idade}, function(resultado){
    res.redirect('/new');
  });
});

module.exports = router;
