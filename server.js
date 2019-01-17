// import all server-side packages
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// setup app middle-ware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes form api and view
app.use(routes);

// connect to mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// start server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});