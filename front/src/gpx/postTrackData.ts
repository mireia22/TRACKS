import { GpxData } from "../types/Type";

export async function postTrackData(
  postData: GpxData,
  title: string,
  photos: string[]
): Promise<void> {
  const response = await fetch("http://localhost:3200/api/v1/tracks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      points: postData.points,
      totalDistance: postData.totalDistance,
      elevation: postData.elevation,
      title,
      photos,
    }),
  });

  if (response.ok) {
    console.log("Track posted ");
  } else {
    console.error("Failed to post track");
    throw new Error("Failed to post track");
  }
}
