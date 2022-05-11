
const axios = require('axios').default;


module.exports.getDataOfPokemon = (req, res, next) => {

    //pegando da api do pokemon
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150')
    .then((response)=>{
        res.send(response.data)
    }).catch((error)=>{
        console.log(error)
    })

}