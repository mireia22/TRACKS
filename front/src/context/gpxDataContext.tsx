import { createContext, useState } from "react";
import { GpxData } from "../types/Type";

export const GpxDataContext = createContext<GpxData>({
  points: [{ lat: null, lon: null, ele: null, time: null, _id: null }],
  totalDistance: null,
  elevation: {
    min: null,
    max: null,
    avg: null,
  },
  personRecorder: null,
});

export const GpxDataProvider = ({ children }) => {
  const [gpxData, setGpxData] = useState<GpxData>({
    points: [{ lat: null, lon: null, ele: null, time: null, _id: null }],
    totalDistance: null,
    elevation: {
      min: null,
      max: null,
      avg: null,
    },
    personRecorder: null,
  });

  const sharedState = {
    gpxData,
    setGpxData,
  };

  return (
    <GpxDataContext.Provider value={sharedState}>
      {children}
    </GpxDataContext.Provider>
  );
};
