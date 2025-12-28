const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/weather", (req, res) => {
  const city = (req.query.city || "").toLowerCase();

  const mockData = {
    almaty: {
      temperature: 22,
      feels_like: 20,
      description: "sunny (mock data)",
      coordinates: { lat: 43.2220, lon: 76.8512 },
      wind_speed: 3.2,
      country_code: "KZ",
      rain_last_3h: 0,
      country_name: "Kazakhstan",
      currency: "KZT",
      note: "Temporary mock data for assignment submission"
    },
    london: {
      temperature: 15,
      feels_like: 13,
      description: "cloudy (mock data)",
      coordinates: { lat: 51.5074, lon: -0.1278 },
      wind_speed: 4.8,
      country_code: "GB",
      rain_last_3h: 0,
      country_name: "United Kingdom",
      currency: "GBP",
      note: "Temporary mock data for assignment submission"
    }
  };

  if (mockData[city]) {
    return res.json(mockData[city]);
  }

  res.status(404).json({
    error: "City not found (mock mode)",
    available_cities: Object.keys(mockData)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
