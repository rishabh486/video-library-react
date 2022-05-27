import React from "react";
import "./Playlistpage.css";
import { usePlayList } from "../../Context/playlist-context";
import { like_icon, delete_icon, watchlater_icon } from "../../Assests";
import { RemoveVideoFromUserplaylist } from "../../Reducers/playlist-reducer";
function PlaylistPage() {
  const {
    state: { playlists },
    PlaylistDispatch,
  } = usePlayList();
  console.log(playlists);
  return (
    <div>
      {playlists &&
        playlists.map((play) => {
          return (
            <div>
              <p className="playlist-title">{play.title}</p>
              {/* <p>{play.description}</p> */}

              {play.videos.map((video) => (
                <>
                  <div className="cards-example card-margin playlist-card">
                    <div className="wrapper">
                      <div className="top">
                        <iframe
                          width="100%"
                          height="200"
                          src={video.url}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div className="like-box">
                        <div className="top-1">
                          <h1>{video.title}</h1>
                          <p>{video.creator}</p>
                        </div>
                        <div className="top-2">
                          <img
                            onClick={() => AddToLikedVideo(videos, dispatch)}
                            className="like-icon"
                            src={like_icon}
                          />
                        </div>
                        <div className="top-2">
                          <img
                            onClick={() =>
                              RemoveVideoFromUserplaylist(
                                playlists._id,
                                video._id,
                                PlaylistDispatch
                              )
                            }
                            className="like-icon"
                            src={delete_icon}
                          />
                        </div>
                      </div>
                      <div className="top-3">
                        <div class="card-button">
                          <button
                            // onClick={() => redirectToSinglePage(videos._id)}
                            class="button-container-button primary-button"
                          >
                            WATCH NOW
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="round-image">
                      <img
                        // onClick={() => AddToWatchLater(videos, dispatch)}
                        className="round"
                        src={watchlater_icon}
                      />
                    </div>
                  </div>
                  {/* <p>{video.title}</p> */}
                </>
              ))}
            </div>
          );
        })}
    </div>
  );
}

export default PlaylistPage;
