import { useUserDataContext } from "../../hooks/useUserData";

const LoginForm = () => {
  const { setUserData, userData } = useUserDataContext();

  const { userName, email, password } = userData;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3200/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password }),
      });

      if (!res.ok) {
        console.error("login failed");
        return;
      }

      const data = await res.json();
      const { user, token } = data;

      setUserData({
        userName: user.userName,
        email: user.email,
        password: null,
        favouriteTracks: user.favouriteTracks,
      });
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 py-4 px-2 bg-purple-200  items-center w-[16rem] rounded-lg"
        onSubmit={handleLogin}
      >
        <h2 className="text-xl font-semibold">Login Form</h2>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email || ""}
            onChange={(e) => setUserData({ email: e.target.value })}
            className="p-1 rounded-sm"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password || ""}
            onChange={(e) => setUserData({ password: e.target.value })}
            className="p-1 rounded-sm"
            id="password"
            required
          />
        </div>
        <button className="px-2 bg-purple-800 rounded-lg text-white">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
