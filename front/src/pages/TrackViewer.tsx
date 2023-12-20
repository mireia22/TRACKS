import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGpxDataContext } from "../hooks/useGpxDataContext";
import LineChart from "../components/track-viewer/LineChart";
import Map from "../components/track-viewer/Map";
import Loader from "../components/main-components/Loader";
import DeleteButton from "../components/main-components/DeleteButton";
import TrackInfo from "../components/track-viewer/TrackInfo";

const TrackViewer = () => {
  const { gpxData, setGpxData } = useGpxDataContext();
  const { points, title, photo } = gpxData;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(
    gpxData.description
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3200/api/v1/tracks/${id}`
        );
        const data = await response.json();
        setGpxData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setGpxData]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSaveDescription = () => {
    fetch(`http://localhost:3200/api/v1/tracks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: editedDescription }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGpxData(data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating description:", error);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-6 text-white items-center ">
      <section className="flex flex-col items-center gap-1 ">
        <h1 className=" text-3xl font-semibold">{title.toUpperCase()}</h1>
        <Map points={points} />
      </section>
      <section className="flex flex-row items-start justify-around w-[90vw]">
        <LineChart points={points} />
        <TrackInfo />
      </section>
      <section className="flex justify-around w-full">
        <section className="flex flex-col  gap-4">
          <h2 className="text-4xl">Images</h2>
          <div className="w-[20rem] h-[25rem] rounded-lg">
            <img
              className="w-full h-full object-contain "
              src={photo}
              alt={title}
            />
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-4xl">Description</h2>
          {isEditing ? (
            <>
              <textarea
                value={editedDescription}
                onChange={handleDescriptionChange}
                className="w-[30rem] h-[23rem] rounded-md text-black p-2 text-xl"
              />
              <button
                className="bg-dark-purple p-1 rounded-md"
                onClick={handleSaveDescription}
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex flex-col w-[30rem] h-[26rem] items-center text-start justify-between">
              <p className="w-full text-xl">{editedDescription}</p>
              <button
                onClick={handleEditToggle}
                className="bg-dark-purple p-1 rounded-md"
              >
                Edit Description
              </button>
            </div>
          )}
        </section>
      </section>
      <section>
        <DeleteButton content="Delete Track" style="px-2" id={id} />
      </section>
    </div>
  );
};

export default TrackViewer;
