const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs')
let vehicleData = JSON.parse(fs.readFileSync('./vehicleRoute.json', 'utf-8'));
let currentIndex = 0;
app.use(cors());
app.get('/api/vehicle-location', (req, res) => {
  if (currentIndex >= vehicleData.length) currentIndex = 0;
  const currentLocation = vehicleData[currentIndex];
  const route = vehicleData.slice(0, currentIndex + 1);
  currentIndex++;
  res.json({ currentLocation, route });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));