import React, { useState } from "react";
import { useGpxDataContext } from "../../hooks/useGpxDataContext";
import InputFileReader from "../inputs/InputFileReader";
import { parseAndPostTrack } from "../../gpx/parseAndPostTrack";
import { useNavigate } from "react-router-dom";

const PostTrackForm = () => {
  const { gpxData, setGpxData } = useGpxDataContext();
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleFileChange = (formData: string) => {
    setGpxData(formData);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (gpxData) {
      console.log("TITLE", title);
      console.log("PHOTOS", photo);
      parseAndPostTrack(gpxData, title, photo, setGpxData);
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
      <label htmlFor="photo">photos</label>
      <input
        type="file"
        id="photo"
        onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
        multiple
      />

      <button className=" px-2 bg-purple-800 rounded-lg text-white">
        POST
      </button>
    </form>
  );
};

export default PostTrackForm;
