var express = require('express');
var router = express.Router();

router.get('/poke', (req, res)=> {
    res.send("aqui vai ser top")
})

module.exports = router;