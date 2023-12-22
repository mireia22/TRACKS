import React, { useState } from "react";
import { useGpxDataContext } from "../../hooks/useGpxDataContext";
import InputFileReader from "../inputs/InputFileReader";
import { parseAndPostTrack } from "../../gpx/parseAndPostTrack";
import { useNavigate } from "react-router-dom";

const PostTrackForm = () => {
  const { gpxData, setGpxData } = useGpxDataContext();
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState<File[] | null>([]);

  const navigate = useNavigate();

  const handleFileChange = (formData: string) => {
    setGpxData(formData);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (gpxData) {
      console.log("TITLE", title);
      console.log("PHOTO", photo);
      parseAndPostTrack(gpxData, title, photo, setGpxData);
    }
    navigate("/");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex text-sm flex-col gap-4 py-4 px-2 bg-dark-purple text-white  items-center w-[20rem] rounded-lg"
    >
      <label htmlFor="title" className="uppercase ">
        Title
      </label>
      <input
        type="text"
        id="title"
        className="text-black p-1 rounded-sm w-[90%]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="flex uppercase">Upload file:</label>
      <InputFileReader onFileRead={handleFileChange} />
      <label htmlFor="photo" className="flex  uppercase">
        Upload photo:
      </label>
      <input
        type="file"
        id="photo"
        className="bg-black p-1"
        onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
      />

      <button className=" px-2 bg-purple-800 rounded-lg text-white">
        POST
      </button>
    </form>
  );
};

export default PostTrackForm;
