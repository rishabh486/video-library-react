import React from "react";
import "./Playlistpage.css";
import { usePlayList } from "../../Context/playlist-context";
function PlaylistPage() {
  const {
    state: { playlists },
    PlaylistDispatch,
  } = usePlayList();
  console.log(playlists[0].videos[0].title);
  return (
    <div>
      <div>
        {playlists.map((playlist) => (
          <div>
            <p>{playlist.title}</p>
            <p>{playlist.title}</p>
          </div>
        ))}
        <h1></h1>
      </div>
    </div>
  );
}

export default PlaylistPage;
