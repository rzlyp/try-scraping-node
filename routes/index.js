var express = require('express');
var router = express.Router();
var Scraping = require('../scraping');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/web',Scraping.yahuu);
router.get('/ig',Scraping.getIg);

module.exports = router;
