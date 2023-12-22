import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TrackViewer from "./pages/TrackViewer";
import "./index.css";
import Register from "./pages/Register";
import PostTrack from "./pages/PostTrack";
import Header from "./components/main-components/Header";
import Profile from "./pages/Profile";
import { useUserDataContext } from "./hooks/useUserData";
const App = () => {
  const { userData } = useUserDataContext();

  return (
    <div className="w-[100wv] h-[100vh] ">
      <Header />
      <main className="min-w-full min-h-full flex p-4 items-center bg-black justify-center bg-login-register-texture">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/post-track" element={<PostTrack />}></Route>
          <Route path="/tracks/:id" element={<TrackViewer />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
