import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function AirportMap({data, airportCodes, current}) {

  const currentAirport = data[airportCodes[current]];
  const long = currentAirport.long;
  const lat = currentAirport.lat;

  return (
    <MapContainer center={[lat, long]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(data).map((airportCode) => {
      const airport = data[airportCode];
      return (
        <Marker
          key={airportCode}
          position={[airport.lat, airport.long]}
        >
          <Popup>
            <div>
              <h3>{airport.city}</h3>
              <p>Code: {airport.c_code}</p>
              <p>Type: {airport.type}</p>
            </div>
          </Popup>
        </Marker>
      );
    })}
    </MapContainer>
  )
}

export default AirportMap
