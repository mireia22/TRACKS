import { parseTrack } from "../gpx/parseTrack";
import { postTrackData } from "../gpx/postTrackData";

export const parseAndPostTrack = (
  fileData: string,
  title: FormData,
  photo: File | null,
  setGpxData: React.Dispatch<React.SetStateAction<any>>
) => {
  const newGpxData = parseTrack(fileData);
  setGpxData(newGpxData);
  postTrackData(newGpxData, title, photo);
};
