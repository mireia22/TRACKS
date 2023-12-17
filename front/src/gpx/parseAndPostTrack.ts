import { parseTrack } from "../gpx/parseTrack";
import { postTrackData } from "../gpx/postTrackData";

export const parseAndPostTrack = (
  fileData: string,
  title: FormData,
  photos: FormData,
  setGpxData: React.Dispatch<React.SetStateAction<any>>
) => {
  const newGpxData = parseTrack(fileData);
  setGpxData(newGpxData);
  postTrackData(newGpxData, title, photos);
};
