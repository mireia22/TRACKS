import { Circle, MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = ({ points }) => {
  console.log("points 0", points[0].lat, points[0].lon);
  const latitude = points[0].lat;
  const longitude = points[0].lon;

  return (
    <MapContainer center={[latitude, longitude]} zoom={12}>
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
          <Polyline pathOptions={{ color: "blue" }} positions={points} />
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
