import React, { useState, useEffect } from 'react'; 
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const vehicleIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/147/147140.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const MyMapComponent = () => {
  const [vehiclePosition, setVehiclePosition] = useState([17.385044, 78.486671]);
  const [path, setPath] = useState([[17.385044, 78.486671]]);
  useEffect(() => {
    console.log("Current Vehicle Position (after state update):", vehiclePosition);
  }, [vehiclePosition]);

  useEffect(() => {
    const fetchVehicleLocation = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/vehicle-location');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const newVehiclePosition = [data.currentLocation.latitude, data.currentLocation.longitude];
        setVehiclePosition(newVehiclePosition);
        setPath(data.route.map(loc => [loc.latitude, loc.longitude])); 
      } catch (error) {
        console.error('Error fetching vehicle location:', error);
      }
    };
    const interval = setInterval(fetchVehicleLocation, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer
      center={vehiclePosition}
      zoom={13}
      style={{ height: '100vh', width: '100vw' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={vehiclePosition} icon={vehicleIcon} />
      {path.length > 1 && (
        <Polyline positions={path} color="red" />
      )}
    </MapContainer>
  );
};

export default MyMapComponent;
