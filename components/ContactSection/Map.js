import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import L from 'leaflet';
import { COORDS } from "../../constants/map";

const Map = () => (
  <MapContainer
    center={COORDS}
    zoom={12}
    scrollWheelZoom={false}
    attributionControl={false}
    dragging={!L.Browser.mobile}
    tap={!L.Browser.mobile}
    className="h-80"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

export default Map;
