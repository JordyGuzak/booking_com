const express = require('express');
const router = express.Router();
const Controller = require('../controllers/attractionsSearch.js');

router.get('/', function(req, res, next) {
  res.render('index', { 
    attractions: Controller.getAllAttractions() 
  });
});

router.get('/reviews', function(req, res, next) {
  res.render('index', { 
    reviews: Controller.getAllAttractionsReviews()
  });
});

router.get('/search', function (req, res, next) {
  const { score } = req.query;
  res.render('index', {
    attractions: Controller.getAttractionsByReviewScore(score)
  });
});

module.exports = router;
