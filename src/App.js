import "./App.css";
import { Toastr } from "./Components/toastr";
import Navbar from "./Components/Navbar/navbar";
import VideoPage from "./Pages/VideoPage/VideoPage";
import { Routes, Route } from "react-router-dom";
import SingleVideo from "./Pages/SingleVideoPage/SingleVideo";
import SignInPage from "./Pages/SignInPage/SignInPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import WatchLater from "./Components/WatchlaterCard/watchLater";
import LikedVideo from "./Pages/LikedVideoPage/LikedVideo";
import PlaylistPage from "./Pages/PlaylistPage/PlaylistPage";
function App() {
  return (
    <div className="App">
      <Toastr />
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/single-video/:videoid" element={<SingleVideo />} />
        <Route path="/signin-page" element={<SignInPage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/watchLater-page" element={<WatchLater />} />
        <Route path="/likeVideo-page" element={<LikedVideo />} />
        <Route path="/playlist-page" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}

export default App;
