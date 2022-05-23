import React, { createContext, useContext, useReducer } from "react";
import { useVideo } from "../Context/video-context";
import { authReducer } from "../Reducers/reducer";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const { video } = useVideo();
  const [state, dispatch] = useReducer(authReducer, {
    video: video,
    watchlater: [],
    likes: [],
  });
  console.log(state.watchlater);
  return (
    <WatchLaterContext.Provider value={{ state, dispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
