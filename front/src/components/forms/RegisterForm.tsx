import { useUserDataContext } from "../../hooks/useUserData";

const RegisterForm = () => {
  const { setUserData, userData } = useUserDataContext();

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
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 py-4 px-2 bg-purple-200 items-center w-[16rem] rounded-lg"
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
            className="p-1 rounded-sm"
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
            className="p-1 rounded-sm"
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
            className="p-1 rounded-sm"
            id="password"
            required
          />
        </div>
        <button className="px-2 bg-purple-800 rounded-lg text-white">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
