//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Go shopping", "Clean up the house", "Gardening"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    var today = new Date();
    var options = {
        weekday: "short",
        day: "numeric",
        month: "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOFDay: day, newListItems: items});
});

app.post("/", function(req, res){
    item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
