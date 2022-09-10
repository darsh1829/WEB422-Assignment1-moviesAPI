const exp = require("express");
const app = exp();
const bodyparser = require("body-parser");
const cors = require("cors");
const dotEnv = require('dotenv').config();


app.use(bodyparser.json());
app.use(cors());
//app.use(express.json());

app.get("/", function(req, res) {
    //console.log("Hello there!");
    console.log("API Listening");
})
var port = process.env.PORT || 8080;

app.listen(port);