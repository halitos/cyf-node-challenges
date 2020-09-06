const express = require("express");
const cors = require("cors");
const harrow = require("./data/Harrow.json");
const stratford = require("./data/Stratford.json");
const heathrow = require("./data/Heathrow.json");

const app = express();

app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to mini London Guide Server</h1>You should be able to return data based on any city that is passed to the server.<p>Routes for cities are dynamic, but need to select one of <b>harrow, stratford or heathrow.</b></p><p>Services need to enter static for now which are <b>doctors, colleges, pharmacies</b></p><h4>for example /:city/pharmacies</h4><p>if you select services on main route it will return only Harrow services</p><h3>Thank you</h3> "
  );
});

// Server Level 200 ---- one city only

app.get("/pharmacies", (req, res) => {
  res.json(harrow.pharmacies);
});
app.get("/colleges", (req, res) => {
  res.json(harrow.colleges);
});
app.get("/doctors", (req, res) => {
  res.json(harrow.doctors);
});
app.get("/hospitals", (req, res) => {
  res.json(harrow.hospitals);
});

// Server Level 300___ Dynamic City

app.get("/:city/pharmacies", function (req, res) {
  if (req.params.city === "harrow") {
    res.json(harrow.pharmacies);
  } else if (req.params.city === "stratford") {
    res.json(stratford.pharmacies);
  } else res.json(heathrow.pharmacies);
});

app.get("/:city/doctors", function (req, res) {
  if (req.params.city === "harrow") {
    res.json(harrow.doctors);
  } else if (req.params.city === "stratford") {
    res.json(stratford.doctors);
  } else res.json(heathrow.doctors);
});

app.get("/:city/colleges", function (req, res) {
  if (req.params.city === "harrow") {
    res.json(harrow.colleges);
  } else if (req.params.city === "stratford") {
    res.json(stratford.colleges);
  } else res.json(heathrow.colleges);
});

// Server Level 500 --- all in one single route

app.get("/:city/:service", (req, res) => {});

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
