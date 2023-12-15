import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TrackViewer from "./pages/TrackViewer";
import "./index.css";
const App = () => {
  return (
    <div>
      <header className="h-[2rem] w-full p-2 bg-slate-900 text-white flex items-center justify-between">
        <Link to="/"> HOME</Link>
        <Link to="/login"> Login</Link>
      </header>
      <main className="w-[100vw] h-[100vh] flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tracks/:id" element={<TrackViewer />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
