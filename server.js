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

// Gett all pharmacies for one city

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

// Gett pharmacies dynamicly for selected city route

app.get("/city/pharmacies", (req, res) => {
  res.json(harrow.pharmacies);
});

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
