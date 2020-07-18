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
var characters = [
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

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/reservations.html"));
});

app.get("/waitlist", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/views.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
