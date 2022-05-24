import React from "react";
import "./Playlistpage.css";
import { usePlayList } from "../../Context/playlist-context";
function PlaylistPage() {
  const {
    state: { playlists },
    PlaylistDispatch,
  } = usePlayList();
  return (
    <div>
      <div>
        {playlists.map((playlist) => (
          <div>
            <p>{playlist.title}</p>
            <p>{playlist.description}</p>
          </div>
        ))}
        <h1></h1>
      </div>
    </div>
  );
}

export default PlaylistPage;
