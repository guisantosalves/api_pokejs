var express = require('express');
var router = express.Router();
var pokemon_controller = require('../controllers/pokemon_controller');

router.get('/poke', pokemon_controller.getDataOfPokemon);
router.get('/pokehabilities', pokemon_controller.getDataOfhabilities);
router.get('/pokemonhabitats', pokemon_controller.getDataOfHabitats)
module.exports = router;