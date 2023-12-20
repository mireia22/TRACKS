import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrackList from "../components/home/TrackList";

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
    <section className="flex flex-col items-center gap-6">
      {savedTracks.length > 0 ? (
        <>
          <h4 className="font-semibold text-3xl text-white text-center">
            SAVED TRACKS:
          </h4>
          <TrackList savedTracks={savedTracks} />
        </>
      ) : (
        <h4 className="font-semibold text-3xl text-white text-center">
          NO SAVED TRACKS
        </h4>
      )}

      <Link
        to="/post-track"
        className="p-2 bg-dark-purple text-white border-2 border-white rounded-sm"
      >
        POST NEW TRACK +
      </Link>
    </section>
  );
};

export default Home;
