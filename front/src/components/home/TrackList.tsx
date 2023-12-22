import { Link } from "react-router-dom";
import { toKM, totalTime } from "../../utils/convertUnits";
import Map from "../track-viewer/Map";
import DeleteButton from "../main-components/DeleteButton";
import Loader from "../main-components/Loader";

const TrackList = ({ savedTracks, loading }) => {
  return (
    <>
      {savedTracks.length > 0 ? (
        <ul className="flex flex-col gap-6 font-semibold">
          {savedTracks.map((track) => (
            <li key={track._id} className="relative">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <h2 className="text-2xl text-white">
                    {track.title.toUpperCase()}
                  </h2>

                  <Link
                    to={`/tracks/${track._id}`}
                    className=" text-black flex justify-between cursor-pointer rounded-lg bg-white p-2 w-[85vw] h-[15rem]"
                  >
                    <article className="flex flex-col items-start justify-between">
                      <h4 className="text-2xl font-bold text-dark-purple text-center ">
                        INFO
                      </h4>
                      <p>Location: Location</p>
                      <p>Distance: {toKM(track.totalDistance)} km.</p>
                      <p>Max height: {track.elevation.max} m.</p>
                      <p>
                        Total Time:{" "}
                        {totalTime(
                          track.points[0].time,
                          track.points[track.points.length - 1].time
                        )}
                      </p>
                    </article>
                    <article className="flex gap-2">
                      <div className="w-[20rem] h-[14rem] bg-black">
                        <img
                          src={track.photo}
                          alt={track.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="w-[30rem] h-[14rem] ">
                        <Map points={track.points} small />
                      </div>
                    </article>
                    <DeleteButton
                      content="X"
                      style="px-2 absolute mr-2 top-10 right-0 z-0 "
                      id={track._id}
                    />
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <>{loading && <Loader />}</>
      )}
    </>
  );
};

export default TrackList;
