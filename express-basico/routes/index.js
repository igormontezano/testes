var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Nova página' });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
  var nome = req.body.nome;
  console.log('redirect para o /');
  res.redirect('/?nome='+nome);
});

module.exports = router;
