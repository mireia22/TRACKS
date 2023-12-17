import { Circle, MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ points, small }) => {
  if (!points || points.length === 0) {
    return <div>Loading map...</div>;
  }

  const latitudesAndLongitudes = points.map((point) => [point.lat, point.lon]);

  return (
    <MapContainer
      center={latitudesAndLongitudes[0]}
      zoom={13}
      className={small ? "small-map" : ""} // Add a class for smaller map styling
    >
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points && points.length > 0 && (
        <>
          <Circle
            center={points[0]}
            pathOptions={{ fillColor: "#0e7e10", color: "#0daa10" }}
            radius={100}
          />
          <Polyline
            pathOptions={{ color: "#7b0558" }}
            positions={latitudesAndLongitudes}
          />
          <Circle
            center={points[points.length - 1]}
            pathOptions={{ fillColor: "red", color: "red" }}
            radius={100}
          />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
