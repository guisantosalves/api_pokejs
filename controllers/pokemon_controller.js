const axios = require("axios").default;

module.exports.getDataOfPokemon = (req, res, next) => {
  try {
    //pegando da api do pokemon
    //https://pokeapi.co/api/v2/ability/
    //https://pokeapi.co/api/v2/pokemon?offset=0&limit=150
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};

module.exports.getDataOfhabilities = (req, res, next) => {
  try {
    axios
      .get("https://pokeapi.co/api/v2/ability?offset=0&limit=30")
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};

module.exports.getDataOfHabitats = (req, res) => {
  //https://pokeapi.co/api/v2/pokemon-habitat/
  try {
    axios
      .get("https://pokeapi.co/api/v2/pokemon-habitat/")
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};
