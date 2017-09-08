var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , result: ''});
});


/* GET new page. */
router.get('/new', function(req, res, next) {
  var coll = require("../db").find(function(result){
    res.render('new', { title: 'Nova página' , result});
  });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
  var nome = req.body.nome;
  var idade = req.body.idade;
  require("../db").save(nome, idade, function(resultado){
    res.redirect('/new');
  });
});

module.exports = router;
