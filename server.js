
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  
  // Displays all characters
  app.get("/views.html", function(req, res) {
    res.sendFile(path.join(__dirname, "views.html"));
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  