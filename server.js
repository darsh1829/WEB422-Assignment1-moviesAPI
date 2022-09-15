// const exp = require("express");
// const app = exp();
// const bodyparser = require("body-parser");
// const cors = require("cors");
// const dotEnv = require('dotenv').config();

// const MoviesDB = require("./modules/moviesDB.js");
// const db = new MoviesDB();

// app.use(bodyparser.json());
// app.use(cors());
// //app.use(express.json());

// app.get("/", function(req, res) {
//     //console.log("Hello there!");
//     console.log("API Listening");
// })


// db.initialize(process.env.MONGODB_CONN_STRING).then(() => {
//     app.listen(HTTP_PORT, () => {
//         console.log(`server listening on: ${HTTP_PORT}`);
//     });
// }).catch((err) => {
//     console.log(err);
// });

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const MoviesDB = require("./modules/moviesDB.js");
const db = new MoviesDB();
const dotenv = require('dotenv').config();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API Listening' });
});

db.initialize(process.env.MONGODB_CONN_STRING).then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err) => {
    console.log(err);
});



// db.addNewMovie(data).then(() => {
//     app.post('/api/movies', (req, res) => {
//         req.status(201).json({ message: 'New movie added: ${req.body.data}' })
//     })
// });
// db.getAllMovies(page, perPage, title);

// db.getMovieById(Id);

// updateMovieById(data, Id);

// deleteMovieById(Id);