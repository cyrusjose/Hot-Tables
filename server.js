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
    name: "cyrus",
    phone: "555-555-5555",
    email: "cyrus@gmail.com",
    id: 1,
  },
  {
    name: "kevin",
    phone: "222-222-2222",
    email: "kevin@gmail.com",
    id: 2,
  },
  {
    name: "kate",
    phone: "333-333-3333",
    email: "kate@gmail.com",
    id: 3,
  },
];

var waitlist = [{

}]

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/table.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/reserve.html"));
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
