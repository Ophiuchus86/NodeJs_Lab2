const express = require('express');
const fetch = require('./fetch')
const config = require('../config')
const router = express.Router(); 

router.get('/', function(request, response){
    fetch(config.get('ip'), config.get('port'))
    .then((r)=>{
        response.send(r.data);
    });
});

module.exports = router;
