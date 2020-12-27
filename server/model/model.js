//Initialize postgress DB
const {Pool, Client} = require('pg');
//connect to an available table in a running postgresql database
const connectionString = 'postgressql://ayo:demo1234@localhost:5432/guru99'
const client = new Client({
    connectionString:process.env.DATABASE_URL || connectionString
})
client.connect();

//Instantiate model object
let model =  {
    get : function (res,resolve) {
            // access the collection from prosgress database. Name of table in DB is "persond"
                client
                .query('SELECT * from persond')
                .then(response => {
                    resolve(response.rows)
                })
                .catch(e => console.error(e.stack))  
    },
}

module.exports = model;