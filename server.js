const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/subscribers"); //subscribers is the db name
const db=mongoose.connection
db.on('error', (error) =>console.error(error))
db.once('open', () => console.log('connected to database'))

app.listen(port, () => console.log("server started"))
