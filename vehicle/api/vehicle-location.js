let vehicleData =[
    {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
    {"latitude": 17.386000, "longitude": 78.486680, "timestamp": "2024-07-20T10:00:05Z"},
    {"latitude": 17.387000, "longitude": 78.486690, "timestamp": "2024-07-20T10:00:10Z"},
    {"latitude": 17.388000, "longitude": 78.486700, "timestamp": "2024-07-20T10:00:15Z"},
    {"latitude": 17.389000, "longitude": 78.486710, "timestamp": "2024-07-20T10:00:20Z"},
    {"latitude": 17.390000, "longitude": 78.486720, "timestamp": "2024-07-20T10:00:25Z"},
    {"latitude": 17.391000, "longitude": 78.486730, "timestamp": "2024-07-20T10:00:30Z"},
    {"latitude": 17.392000, "longitude": 78.486740, "timestamp": "2024-07-20T10:00:35Z"},
    {"latitude": 17.393000, "longitude": 78.486750, "timestamp": "2024-07-20T10:00:40Z"},
    {"latitude": 17.394000, "longitude": 78.486760, "timestamp": "2024-07-20T10:00:45Z"},
    {"latitude": 17.395000, "longitude": 78.486770, "timestamp": "2024-07-20T10:00:50Z"},
    {"latitude": 17.396000, "longitude": 78.486780, "timestamp": "2024-07-20T10:00:55Z"},
    {"latitude": 17.397000, "longitude": 78.486790, "timestamp": "2024-07-20T10:01:00Z"},
    {"latitude": 17.398000, "longitude": 78.486800, "timestamp": "2024-07-20T10:01:05Z"},
    {"latitude": 17.399000, "longitude": 78.486810, "timestamp": "2024-07-20T10:01:10Z"},
    {"latitude": 17.400000, "longitude": 78.486820, "timestamp": "2024-07-20T10:01:15Z"},
    {"latitude": 17.401000, "longitude": 78.486830, "timestamp": "2024-07-20T10:01:20Z"},
    {"latitude": 17.402000, "longitude": 78.486840, "timestamp": "2024-07-20T10:01:25Z"},
    {"latitude": 17.403000, "longitude": 78.486850, "timestamp": "2024-07-20T10:01:30Z"},
    {"latitude": 17.404000, "longitude": 78.486860, "timestamp": "2024-07-20T10:01:35Z"},
    {"latitude": 17.405000, "longitude": 78.486870, "timestamp": "2024-07-20T10:01:40Z"},
    {"latitude": 17.406000, "longitude": 78.486880, "timestamp": "2024-07-20T10:01:45Z"},
    {"latitude": 17.407000, "longitude": 78.486890, "timestamp": "2024-07-20T10:01:50Z"},
    {"latitude": 17.408000, "longitude": 78.486900, "timestamp": "2024-07-20T10:01:55Z"},
    {"latitude": 17.409000, "longitude": 78.486910, "timestamp": "2024-07-20T10:02:00Z"},
    {"latitude": 17.410000, "longitude": 78.486920, "timestamp": "2024-07-20T10:02:05Z"},
    {"latitude": 17.410000, "longitude": 78.486920, "timestamp": "2024-07-20T10:02:05Z"},
    {"latitude": 17.412000, "longitude": 78.486930, "timestamp": "2024-07-20T10:02:10Z"},
    {"latitude": 17.414000, "longitude": 78.486940, "timestamp": "2024-07-20T10:02:15Z"},
    {"latitude": 17.416000, "longitude": 78.486950, "timestamp": "2024-07-20T10:02:20Z"},
    {"latitude": 17.418000, "longitude": 78.486960, "timestamp": "2024-07-20T10:02:25Z"},
    {"latitude": 17.420000, "longitude": 78.486970, "timestamp": "2024-07-20T10:02:30Z"},
    {"latitude": 17.422000, "longitude": 78.486980, "timestamp": "2024-07-20T10:02:35Z"},
    {"latitude": 17.424000, "longitude": 78.486990, "timestamp": "2024-07-20T10:02:40Z"},
    {"latitude": 17.426000, "longitude": 78.487000, "timestamp": "2024-07-20T10:02:45Z"},
    {"latitude": 17.428000, "longitude": 78.487010, "timestamp": "2024-07-20T10:02:50Z"},
    {"latitude": 17.430000, "longitude": 78.487020, "timestamp": "2024-07-20T10:02:55Z"},
    {"latitude": 17.432000, "longitude": 78.487030, "timestamp": "2024-07-20T10:03:00Z"},
    {"latitude": 17.434000, "longitude": 78.487040, "timestamp": "2024-07-20T10:03:05Z"},
    {"latitude": 17.436000, "longitude": 78.487050, "timestamp": "2024-07-20T10:03:10Z"},
    {"latitude": 17.438000, "longitude": 78.487060, "timestamp": "2024-07-20T10:03:15Z"},
    {"latitude": 17.440000, "longitude": 78.487070, "timestamp": "2024-07-20T10:03:20Z"}
  ]
  
  let currentIndex = 0;
  
  export default function handler(req, res) {
    if (currentIndex >= vehicleData.length) currentIndex = 0;
    const currentLocation = vehicleData[currentIndex];
    const route = vehicleData.slice(0, currentIndex + 1);  // The entire route up to the current index
    currentIndex++;
  
    // Send response as JSON
    res.status(200).json({ currentLocation, route });
  }
  