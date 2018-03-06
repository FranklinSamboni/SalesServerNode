var express = require('express');
var router = express.Router();
var db = require('../db/connection');


router.get("/",function (request,response) {
    var msg = {hola:'1'};
    response.send(msg);
});

module.exports = router;
