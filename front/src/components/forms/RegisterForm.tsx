import { Link, useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../hooks/useUserData";

const RegisterForm = () => {
  const { setUserData, userData } = useUserDataContext();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3200/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        console.error("Registration failed");
        return;
      }

      const data = await res.json();
      const { userName, email, password, favouriteTracks } = data;

      setUserData({
        userName,
        email,
        password: "",
        favouriteTracks,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 py-4 px-2 bg-dark-purple text-white items-center w-[16rem] rounded-lg"
        onSubmit={handleRegister}
      >
        <h2 className="text-xl font-semibold ">Register Form</h2>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={userData.userName || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                userName: e.target.value,
              })
            }
            className="p-1 rounded-sm text-black"
            id="username"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={userData.email || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
            className="p-1 rounded-sm text-black"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userData.password || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
            className="p-1 rounded-sm text-black"
            id="password"
            required
          />
        </div>
        <button className="px-2 py-1 bg-black rounded-lg text-white text-sm">
          REGISTER
        </button>
        <div className="flex flex-col items-center text-sm">
          <p>If you already have an account:</p>
          <Link to="/login" className="text-purple-400 underline font-semibold">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
