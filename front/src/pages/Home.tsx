import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toKM } from "../utils/convertUnits";
import PostTrack from "../components/forms/PostTrack";

const Home = () => {
  const [savedTracks, setSavedTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3200/api/v1/tracks");
        const data = await response.json();
        setSavedTracks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [savedTracks]);

  return (
    <div className="flex flex-col items-center gap-6">
      <article className="flex flex-col items-center gap-2">
        <h4 className="font-semibold text-xl">Saved Tracks:</h4>
        {savedTracks.length > 0 ? (
          <ul className="flex gap-2">
            {savedTracks.map((data) => (
              <li
                key={data._id}
                className="p-2 bg-purple-900 text-white cursor-pointer"
              >
                <Link to={`/tracks/${data._id}`}>
                  <p>{toKM(data.totalDistance)} km</p>
                  <p>{data.personRecorder}</p>
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
      <PostTrack />
    </div>
  );
};

export default Home;
