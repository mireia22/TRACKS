import { useParams, useNavigate } from "react-router-dom";

const DeleteButton = ({ content, style, id }) => {
  //   const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteTrack = async (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this track?"
    );
    if (isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:3200/api/v1/tracks/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          console.log("Track deleted successfully");

          navigate("/");
        } else {
          console.error("Failed to delete track");
        }
      } catch (error) {
        console.error("Error deleting track:", error);
      }
    }
  };

  return (
    <button
      className={` bg-red-600 text-white p-1 rounded-sm ${style}`}
      onClick={handleDeleteTrack}
    >
      {content}
    </button>
  );
};

export default DeleteButton;
