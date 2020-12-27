//Import dependencies
var express = require('express');
const { response } = require('../../app');
var router = express.Router();

//Bring in the model module
let model = require("../model/model");

//Get Data from DB
router.get('/', (req, res) => {
    // access the collection from model module
    model.get(res, (data) => {
        //send response in a JSON file
        res.status(200).json({
            "status": 200,
            "statusMessage": "OK",
            "message": "Hello World",
            "data": data
        })
    }, function(err) {
        next(err)
    })
})

module.exports = router;