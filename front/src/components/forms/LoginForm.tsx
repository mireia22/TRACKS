import { Link, useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../hooks/useUserData";
import { useState } from "react";
import Loader from "../main-components/Loader";

const LoginForm = () => {
  const { setUserData, userData } = useUserDataContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3200/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(data.message || "Something went wrong!");
      } else {
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setError("Something went wrong!");
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col gap-4 py-4 px-6 bg-dark-purple text-white items-center w-[16rem] rounded-lg"
        onSubmit={handleLogin}
      >
        <h2 className="text-xl font-semibold ">Login Here</h2>
        <article className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            type="text"
            value={userData.email || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
            className="p-2 rounded-sm text-black"
            id="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            type="password"
            value={userData.password || ""}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
            className="p-2 rounded-sm text-black"
            id="password"
            required
          />
          <p className="text-red-700 text-center ">{error && error}</p>
        </article>
        <article className="flex flex-col w-full gap-2 font-semibold">
          <button
            disabled={loading}
            className=" w-full cursor-pointer py-3 bg-black rounded-lg text-white text-sm hover:opacity-80 disabled:opacity-70"
          >
            {loading ? <Loader /> : "LOGIN"}
          </button>
          <button className="w-full cursor-pointer  py-3 bg-red-500 rounded-lg text-white text-sm hover:opacity-80  disabled:opacity-70">
            Continue With Google
          </button>
        </article>
        <article className="flex flex-col items-center text-sm mt-3">
          <p>Dont have an account?</p>
          <Link to="/register">
            <span className="text-purple-300 underline font-semibold">
              Register
            </span>
          </Link>
        </article>
      </form>
    </div>
  );
};

export default LoginForm;
