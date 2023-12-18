import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toKM, totalTime } from "../utils/convertUnits";
import { useGpxDataContext } from "../hooks/useGpxDataContext";
import LineChart from "../components/track-viewer/LineChart";
import Map from "../components/track-viewer/Map";
import Loader from "../components/main-components/Loader";

const TrackViewer = () => {
  const { gpxData, setGpxData } = useGpxDataContext();
  const { points, elevation, totalDistance, title, photo } = gpxData;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3200/api/v1/tracks/${id}`
        );
        const data = await response.json();
        setGpxData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setGpxData]);

  const handleDeleteTrack = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this track?"
    );
    if (isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:3200/api/v1/tracks/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          console.log("Track deleted successfully");

          navigate("/");
        } else {
          console.error("Failed to delete track");
        }
      } catch (error) {
        console.error("Error deleting track:", error);
      }
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-2 text-white items-center ">
      <section className="flex flex-col items-center ">
        <h1 className=" text-3xl font-semibold">{title.toUpperCase()}</h1>
        <Map points={points} />
      </section>
      <section className="flex flex-row items-start justify-around w-[90vw]">
        <LineChart points={points} />
        <article className="flex flex-col bg-dark-purple justify-between gap-3 rounded-lg py-6 w-[25rem]  h-[23rem] items-center">
          <div className="flex flex-col justify-between gap-5 items-center ">
            <h5 className="font-semibold ">TOTAL DISTANCE:</h5>
            <p className="font-semibold text-5xl">{toKM(totalDistance)} km</p>
            <h5 className="font-semibold ">TOTAL TIME:</h5>
            <p className="font-semibold text-4xl">
              {totalTime(points[0].time, points[points.length - 1].time)}
            </p>
          </div>
          <div className="flex  justify-between gap-5 items-center ">
            <div className="flex flex-col items-center justify-center">
              <h5 className="font-semibold   text-xs">MAX ELEVATION:</h5>
              <p className="font-semibold text-3xl">{elevation.max} m</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h5 className="font-semibold ">MIN ELEVATION:</h5>
              <p className="font-semibold text-3xl">{elevation.min} m</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h5 className="font-semibold ">AVG ELEVATION:</h5>
              <p className="font-semibold text-3xl">
                {elevation.avg?.toFixed()} m
              </p>
            </div>
          </div>
        </article>
      </section>
      <section>
        <h2 className="text-4xl">Images</h2>
        <div className="w-[10rem] h-[12rem]">
          <img
            className="w-full h-full object-contain"
            src={photo}
            alt={title}
          />
        </div>
      </section>
      <section>
        <h2 className="text-4xl">Description</h2>
        <p></p>
      </section>
      <section>
        <button
          className="px-2 py-1 bg-red-600 rounded-md"
          onClick={handleDeleteTrack}
        >
          Delete Track
        </button>
      </section>
    </div>
  );
};

export default TrackViewer;
