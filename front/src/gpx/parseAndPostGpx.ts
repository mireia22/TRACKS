import { parseTrack } from "../gpx/parseTrack";
import { postTrackData } from "../gpx/postTrackData";

export const parseAndPostGpx = (
  fileData: string,
  setGpxData: React.Dispatch<React.SetStateAction<any>>
) => {
  const newGpxData = parseTrack(fileData);
  setGpxData(newGpxData);
  postTrackData(newGpxData);
};
