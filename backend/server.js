require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const Routes = require("./routes/routes"); //importing the routes so our app actually uses them
const cookieParser = require("cookie-parser");

const app = express();
app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next();
})

app.use(express.urlencoded({ extended: true }))
// middleware
app.use(express.json()); //takes any json data from requests, and parses it into a js code
app.use(cookieParser()) // we can access cookie objects

const dbURI = process.env.host
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.port, () => {
        console.log("BACKEND STATUS: ONLINE")
        console.log("DATABASE STATUS: CONNECTED")
    }))
    .catch((err) => console.log(err));
app.use(Routes);