import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toKM, totalTime } from "../utils/convertUnits";
import Map from "../components/map/Map";
import Loader from "../components/main-components/Loader";

const Home = () => {
  const [savedTracks, setSavedTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3200/api/v1/tracks");
        const data = await response.json();
        setSavedTracks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // console.log(savedTracks);

    fetchData();
  }, [savedTracks]);

  return (
    <div className="flex flex-col items-center gap-6">
      <article className="flex flex-col items-center gap-2">
        <h4 className="font-semibold text-xl">Saved Tracks:</h4>
        {savedTracks.length > 0 ? (
          <ul className="flex flex-col gap-4  ">
            {savedTracks.map((track) => (
              <li
                key={track._id}
                className="font-semibold flex flex-col items-start gap-1   "
              >
                <h2 className="text-2xl text-white">
                  {track.title.toUpperCase()}
                </h2>

                <Link
                  to={`/tracks/${track._id}`}
                  className=" text-black flex justify-between cursor-pointer rounded-lg bg-white p-2 w-[85vw] h-[15rem]"
                >
                  <article className="flex flex-col items-start justify-around">
                    <h4 className="text-xl text-dark-purple"> INFO</h4>
                    <p>Location: Location</p>
                    <p>Distance: {toKM(track.totalDistance)} km</p>
                    <p>Max height: {track.elevation.max} m</p>
                    <p>
                      Total Time:{" "}
                      {totalTime(
                        track.points[0].time,
                        track.points[track.points.length - 1].time
                      )}
                    </p>
                  </article>
                  <article className="flex gap-2">
                    <div className="w-[20rem] h-[14rem] bg-black text-white">
                      PHOTOS
                    </div>

                    <div className="w-[30rem] h-[14rem] bg-black text-white">
                      <Map points={track.points} small />
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tracks</p>
        )}
      </article>
      <article className="flex flex-col items-center gap-2">
        <h4 className="font-semibold text-xl">Post New Track:</h4>
      </article>
      <Link to="/post-track" className="p-2 bg-dark-purple text-white">
        POST NEW TRACK +
      </Link>
    </div>
  );
};

export default Home;
