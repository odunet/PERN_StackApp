//Import dependencies
var express = require('express');
const { response } = require('../../app');
const { route } = require('./results');
var router = express.Router();

//Default route
router.get('/', (req, res, next) => {    
//This is used to render hbs template
    res.render("index", {title: "Sample PERN Stack App"})

//This can be used instead to directly send html static files
    // res.sendFile(__dirname + "/public/" + "index.html")

})

module.exports = router;