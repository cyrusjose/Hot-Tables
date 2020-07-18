var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//reservation array placeholders
var reservations = [
  {
    customerEmail: "cyrus@gmail.com", 
    customerID: "1",
    customerName: "cyrus",
    phoneNumber: "555-555-5555"
  },
  {
    customerEmail: "kevin@gmail.com",
    customerID: "2",
    customerName: "kevin",
    phoneNumber: "222-222-2222"
  },
  {
    customerEmail: "kate@gmail.com",
    customerID: "3",
    customerName: "kate",
    phoneNumber: "333-333-3333"
  },
  {
    customerEmail: "melinda@gmail.com",
    customerID: "4",
    customerName: "melinda",
    phoneNumber: "444-444-4444"
  },
  {
    customerEmail: "josh@gmail.com",
    customerID: "5",
    customerName: "josh",
    phoneNumber: "555-555-5555"
  }
];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/table.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/reserve.html"));
});

//create new reservations, takes in JSON input
app.post("/api/reserve", function(req, res){
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReserve = req.body;

  console.log(newReserve);
  reservations.push(newReserve);
  res.json(newReserve);
  console.log(reservations);

});

app.get("/api/table", function(req, res) {
  return res.json(reservations);
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
