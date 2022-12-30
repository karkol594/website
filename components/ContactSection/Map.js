import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { COORDS } from "../../constants/map";

const Map = () => (
  <MapContainer
    center={COORDS}
    zoom={12}
    scrollWheelZoom={false}
    attributionControl={false}
    dragging={false}
    touchZoom={true}
    className="h-[50vh]"
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);

export default Map;
