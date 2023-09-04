import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import * as L from "leaflet";

function AirportMap({data, onQuit}) {
  
  const LeafIcon = L.Icon.extend({
    options: {}
  });
  const greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
  });

  return (
    <div className="full-map-view">
      <button onClick={onQuit} className="quit-button">Quit</button>
    <MapContainer center={[56.13, -98.35]} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
          {Object.entries(data).map((airportCode, i) => {
          const airport = data[airportCode[0]];
          
          return (
            <Marker
              key={airportCode[0]}
              icon={greenIcon}
              position={[airport.lat, airport.long]}
            >
              <Popup>
                <div>
                  <h3>{airport.city}</h3>
                  <p>Code: {airport.c_code}</p>
                  <p>Type: {airport.type}</p>
                  <p>City: {airport.city}</p>
                  <p>Province: {airport.prov}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
</MapContainer>
</div>
  )
}

export default AirportMap
