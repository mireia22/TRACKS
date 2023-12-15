import { useContext } from "react";
import { GpxDataContext } from "../context/gpxDataContext";

export const useGpxDataContext = () => {
  const { gpxData, setGpxData } = useContext(GpxDataContext);
  return { gpxData, setGpxData };
};
