import React from "react";
import { parseAndPostGpx } from "../../gpx/parseAndPostGpx";
import { useGpxDataContext } from "../../hooks/useGpxDataContext";
import InputFileReader from "../inputs/InputFileReader";

const PostTrack = () => {
  const { gpxData, setGpxData } = useGpxDataContext();

  const handleFileChange = (formData: string) => {
    setGpxData(formData);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (gpxData) {
      parseAndPostGpx(gpxData, setGpxData);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-2 p-2 border-lg bg-slate-300"
    >
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <InputFileReader onFileRead={handleFileChange} />
      <label htmlFor="photos">Photos</label>
      <input type="file" id="photos" />

      <button className=" px-2 bg-purple-800 rounded-lg text-white">
        POST
      </button>
    </form>
  );
};

export default PostTrack;
