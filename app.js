//load and initialize express and other dependencies
let express = require('express')
let app = express()
let fs = require("fs");
let path = require("path")
let pg = require("pg")

//import cors for cross-origin
const cors = require('cors');

//Enable url url encoding
app.use(express.urlencoded({ extended: true }));

//Use Cors
app.use(cors());

//instatiate routes
var indexRouter = require('./server/router/index');
var resultRouter = require('./server/router/results');

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'hbs');

// Use express router
let router = express.Router();

// Configure router allow passing in json data
app.use(express.json());

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Initialize routes
app.use('/', indexRouter);
app.use('/api/results', resultRouter);

//initialize port number
const PORT = process.env.PORT || 4000

//enable preflight for cors. This gives option * for paths without access
app.options("*", cors());

//start http server
var server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})