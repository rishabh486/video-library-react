import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import VideoPage from "./Pages/VideoPage/VideoPage";
import { Routes, Route } from "react-router-dom";
import SingleVideo from "./Pages/SingleVideoPage/SingleVideo";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/single-video/:videoid" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
