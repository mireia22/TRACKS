import { parseTrack } from "../gpx/parseTrack";
import { postTrackData } from "../gpx/postTrackData";

export const parseAndPostTrack = (
  fileData: string,
  formData: FormData,
  setGpxData: React.Dispatch<React.SetStateAction<any>>
) => {
  const newGpxData = parseTrack(fileData);
  setGpxData(newGpxData);
  postTrackData(newGpxData, formData);
};
