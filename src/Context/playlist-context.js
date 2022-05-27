import React, { createContext, useContext, useReducer } from "react";
import { useVideo } from "../Context/video-context";
import { authReducer } from "../Reducers/reducer";

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {
  const { video } = useVideo();
  const [state, PlaylistDispatch] = useReducer(authReducer, {
    video: video,
    playlists: [],
    playlist: [],
  });
  return (
    <PlayListContext.Provider value={{ state, PlaylistDispatch }}>
      {children}
    </PlayListContext.Provider>
  );
};

const usePlayList = () => useContext(PlayListContext);

export { usePlayList, PlayListProvider };
