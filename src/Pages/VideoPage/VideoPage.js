import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import Sidebar from "../../Components/Sidebar/sidebar";
import VideoCard from "../../Components/video-card/video-card";
import "./VideoPage.css";

function VideoPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="video-flex">
        <VideoCard />
      </div>
    </>
  );
}

export default VideoPage;
