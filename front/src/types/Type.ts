//GPX DATA
export type GpxData = {
  points: {
    lat: number | null;
    lon: number | null;
    ele: number | null;
    time: string | null;
    _id?: string | null;
    personRecorder: string | null;
  }[];
  totalDistance: number | null;
  elevation: { min: number | null; max: number | null; avg: number | null };
};

export type SetGpxData = React.Dispatch<React.SetStateAction<GpxData>>;

//USER DATA
export type UserData = {
  userName: string | null;
  email: string | null;
  password: string | null;
  favouriteTracks: string[] | null;
};
