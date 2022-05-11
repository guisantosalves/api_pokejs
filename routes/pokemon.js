var express = require('express');
var router = express.Router();
var pokemon_controller = require('../controllers/pokemon_controller');

router.get('/poke', pokemon_controller.getDataOfPokemon);

module.exports = router;