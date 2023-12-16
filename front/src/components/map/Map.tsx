import { Circle, MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = ({ points }) => {
  if (!points || points.length === 0) {
    return <div>Loading map...</div>;
  }

  const latitudesAndLongitudes = points.map((point) => [point.lat, point.lon]);

  return (
    <MapContainer center={latitudesAndLongitudes[0]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points && points.length > 0 && (
        <>
          <Circle
            center={points[0]}
            pathOptions={{ fillColor: "green" }}
            radius={120}
          />
          <Polyline
            pathOptions={{ color: "blue" }}
            positions={latitudesAndLongitudes}
          />
          <Circle
            center={points[points.length - 1]}
            pathOptions={{ fillColor: "red" }}
            radius={120}
          />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
