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
