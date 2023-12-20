import { useGpxDataContext } from "../../hooks/useGpxDataContext";
import { toKM, totalTime } from "../../utils/convertUnits";

const TrackInfo = () => {
  const { gpxData } = useGpxDataContext();

  const { points, elevation, totalDistance } = gpxData;

  return (
    <article className="flex flex-col font-semibold bg-dark-purple justify-between gap-2 rounded-lg py-6 w-[25rem]  h-[23rem] items-center">
      <div className="flex flex-col justify-between gap-5 items-center ">
        <h5>TOTAL DISTANCE:</h5>
        <p className="text-5xl">{toKM(totalDistance)} km</p>
        <h5>TOTAL TIME:</h5>
        <p className="text-4xl">
          {totalTime(points[0].time, points[points.length - 1].time)}
        </p>
      </div>
      <div className="flex  justify-between gap-5 items-center ">
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-xs">MAX ELEVATION:</h5>
          <p className="text-3xl">{elevation.max} m</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h5>MIN ELEVATION:</h5>
          <p className=" text-3xl">{elevation.min} m</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h5>AVG ELEVATION:</h5>
          <p className=" text-3xl">{elevation.avg?.toFixed()} m</p>
        </div>
      </div>
    </article>
  );
};

export default TrackInfo;
