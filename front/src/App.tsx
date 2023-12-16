import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TrackViewer from "./pages/TrackViewer";
import "./index.css";
import Register from "./pages/Register";
import PostTrack from "./pages/PostTrack";
const App = () => {
  return (
    <div>
      <header className="h-[3.5rem] w-full p-2 bg-black text-white flex items-center justify-between font-semibold">
        <Link to="/"> HOME</Link>
        <div className="flex gap-2 text-sm ">
          <Link to="/login" className="px-2 py-1 bg-purple-900 rounded-md">
            {" "}
            Login
          </Link>
          <Link to="/register" className="px-2 py-1 bg-purple-900 rounded-md">
            {" "}
            Register
          </Link>
        </div>
      </header>
      <main className="w-[100vw] h-[92vh] flex items-center bg-black justify-center bg-login-register-texture">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/post-track" element={<PostTrack />}></Route>
          <Route path="/tracks/:id" element={<TrackViewer />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
