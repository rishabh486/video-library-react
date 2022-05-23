import React, { useEffect, useState } from "react";
import "../../Components/video-card/video-card.css";
import "./SingleVideoPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { useVideo } from "../../Context/video-context";
import {
  favourite_icon,
  like_icon,
  watchlater_icon,
} from "../../Assests/index";
import { AddToWatchLater, AddToLikedVideo } from "../../Reducers/watch-later";
import { useWatchLater } from "../../Context/watchLater-context";
function SingleVideo() {
  const { dispatch } = useWatchLater();
  const naviagte = useNavigate();
  function redirectToSinglePage(id) {
    naviagte(`/single-video/${id}`);
  }
  const [currentVideo, setcurrentVideo] = useState();
  const { video } = useVideo();
  let { videoid } = useParams();
  useEffect(() => {
    const currentVideo_ = video.find((o) => o._id === videoid);
    setcurrentVideo(currentVideo_);
  }, [videoid]);

  return (
    <div className="single-page-video">
      <div className="cards-example card-margin">
        <div className="wrapper">
          <div className="top">
            <iframe
              width="500"
              height="300"
              src={currentVideo?.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="top-1">
            <h1>{currentVideo?.title}</h1>
            <p>{currentVideo?.creator}</p>
          </div>
          <div className="top-2">
            <p>{currentVideo?.description}</p>
          </div>
          <div className="top-3"></div>
        </div>
        <div className="round-image">
          <img className="round" src="" />
        </div>
      </div>
      <div className="single-card">
        {video
          .filter((item) => item._id !== videoid)
          .map((filteredVideos) => (
            // <div className="cards-example  card-margin">
            //   <div className="wrapper">
            //     <div className="top">
            //       <iframe
            //         width="100%"
            //         height="200"
            //         src={filteredVideos.url}
            //         title="YouTube video player"
            //         frameborder="0"
            //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //         allowfullscreen
            //       ></iframe>
            //     </div>
            //     <div className="top-1">
            //       <h1>{filteredVideos.title}</h1>
            //       <p>{filteredVideos.creator}</p>
            //     </div>
            //     <div className="top-2">
            //       <p>{filteredVideos.description}</p>
            //       <img
            //         onClick={() => AddToLikedVideo(videos, dispatch)}
            //         className="like-icon"
            //         src={like_icon}
            //       />
            //     </div>
            //     <div className="top-3">
            //       <div class="card-button">
            //         <button
            //           onClick={() => redirectToSinglePage(filteredVideos._id)}
            //           class="button-container-button primary-button cart"
            //         >
            //           WATCH NOW
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            //   <div className="round-image">
            //     <img className="round" src="" />
            //   </div>
            // </div>
            <div className="cards-example card-margin">
              <div className="wrapper">
                <div className="top">
                  <iframe
                    width="100%"
                    height="200"
                    src={filteredVideos.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="like-box">
                  <div className="top-1">
                    <h1>{filteredVideos.title}</h1>
                    <p>{filteredVideos.creator}</p>
                  </div>
                  <div className="top-2">
                    <img
                      onClick={() => AddToLikedVideo(filteredVideos, dispatch)}
                      className="like-icon"
                      src={like_icon}
                    />
                  </div>
                </div>
                <div className="top-3">
                  <div class="card-button">
                    <button
                      onClick={() => redirectToSinglePage(filteredVideos._id)}
                      class="button-container-button primary-button"
                    >
                      WATCH NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="round-image">
                <img
                  onClick={() => AddToWatchLater(filteredVideos, dispatch)}
                  className="round"
                  src={watchlater_icon}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SingleVideo;
