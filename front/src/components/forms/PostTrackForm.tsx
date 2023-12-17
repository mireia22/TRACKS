import React, { useState } from "react";
import { useGpxDataContext } from "../../hooks/useGpxDataContext";
import InputFileReader from "../inputs/InputFileReader";
import { parseAndPostTrack } from "../../gpx/parseAndPostTrack";
import { useNavigate } from "react-router-dom";

const PostTrackForm = () => {
  const { gpxData, setGpxData } = useGpxDataContext();
  const [title, setTitle] = useState("");
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (formData: string) => {
    setGpxData(formData);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (gpxData) {
      console.log(title);
      console.log(photos);
      parseAndPostTrack(gpxData, title, photos, setGpxData);
    }
    navigate("/");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-2 p-2 border-lg bg-slate-300"
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <InputFileReader onFileRead={handleFileChange} />
      <label htmlFor="photos">photos</label>
      <input
        type="file"
        id="photos"
        value={photos}
        onChange={(e) => setPhotos(e.target.value)}
      />

      <button className=" px-2 bg-purple-800 rounded-lg text-white">
        POST
      </button>
    </form>
  );
};

export default PostTrackForm;
