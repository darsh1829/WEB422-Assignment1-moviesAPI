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


db.initialize(process.env.MONGODB_CONN_STRING).then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err) => {
    console.log(err);
});