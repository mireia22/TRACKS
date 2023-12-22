import { GpxData } from "../types/Type";

export async function postTrackData(
  postData: GpxData,
  title: string,
  photo: File | null
): Promise<void> {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("points", JSON.stringify(postData.points));
    formData.append("totalDistance", postData.totalDistance.toString());
    formData.append("elevation", JSON.stringify(postData.elevation));

    if (photo) {
      formData.append("photo", photo);
    }

    const response = await fetch("http://localhost:3200/api/v1/tracks", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Track posted");
    } else {
      console.error("Failed to post track");
      throw new Error("Failed to post track");
    }
  } catch (error) {
    console.error("Error in postTrackData:", error);
    throw error;
  }
}
