import React from "react";
import { parseAndPostGpx } from "../../gpx/parseAndPostGpx";
import { useGpxDataContext } from "../../hooks/useGpxDataContext";
import InputFileReader from "../inputs/InputFileReader";

const PostTrack = () => {
  const { gpxData, setGpxData } = useGpxDataContext();

  const handleFileChange = (formData: string) => {
    console.log("formdata", formData);
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
      <InputFileReader onFileRead={handleFileChange} />
      <button className=" px-2 bg-purple-800 rounded-lg text-white">
        POST
      </button>
    </form>
  );
};

export default PostTrack;
