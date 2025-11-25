import express from "express";
import cors from "cors";
import countries from "./countries.json" with { type: "json" };

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Get all countries
app.get("/countries", (req, res) => {
  res.json(countries);
});

// Get country by name
app.get("/countries/name/:name", (req, res) => {
  const country = countries.find(
    (c) => c.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

// Get country by capital
app.get("/countries/capital/:capital", (req, res) => {
  const country = countries.find(
    (c) => c.capital.toLowerCase() === req.params.capital.toLowerCase()
  );
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

// Get country by numeric id
app.get("/countries/id/:id", (req, res) => {
  const targetId = Number(req.params.id);
  const country = countries.find((c) => Number(c.id) === targetId);
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
});

// Get countries by region
app.get("/countries/region/:region", (req, res) => {
  const filtered = countries.filter(
    (c) => c.region.toLowerCase() === req.params.region.toLowerCase()
  );
  res.json(filtered);
});

// Get countries by currency code
app.get("/countries/currency/:code", (req, res) => {
  const filtered = countries.filter((c) =>
    c.currencies.some(
      (cur) => cur.code.toLowerCase() === req.params.code.toLowerCase()
    )
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Asian Countries API running at http://localhost:${PORT}`);
});
