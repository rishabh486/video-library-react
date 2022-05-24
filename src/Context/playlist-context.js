import React, { createContext, useContext, useReducer } from "react";
import { useVideo } from "../Context/video-context";
import { authReducer } from "../Reducers/reducer";

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {
  const { video } = useVideo();
  const [state, dispatch] = useReducer(authReducer, {
    video: video,
    playlists: [],
  });
  return (
    <PlayListContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayListContext.Provider>
  );
};

const usePlayList = () => useContext(PlayListContext);

export { usePlayList, PlayListProvider };
