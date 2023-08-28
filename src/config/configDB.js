// const {Pool} = require('pg');
// const path = require("path")

// require('dotenv').config({ path: path.join(__dirname, '../../.env') });


// const pool = new Pool({
    
//     "user": process.env.DB_USER,
//     "host": process.env.DB_HOST,
//     "database": process.env.DB_DATABASE,
//     "password": process.env.DB_PASSWORD,
//     "port": process.env.DB_PORT
    
// })

// // console.log(pool)

// pool.on('connect', () => {
//     console.log('Connected to the database');
//   });
  
// pool.on('error', (err) => {
//     console.error('Error connecting to the database:', err);
//   });

// module.exports = {pool}

const {Client} = require("pg")
const path = require("path")
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const client = new Client({
  host: process.env.HOST,
  user: process.env.DB_USER,
  post: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

client.connect().then(()=>{
  console.log("Connected to Database")
}).catch((err)=>console.log("Error: ", err))

module.exports = client