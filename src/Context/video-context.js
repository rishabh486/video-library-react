import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { reducerFn } from "../Reducers/filter-reducer";
import { initialState } from "../Reducers/initial-state";

const VideoDataContext = createContext();

const VideoDataProvider = ({ children }) => {
  const [video, setVideo] = useState([]);
  const [state, dispatch] = useReducer(reducerFn, initialState);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("/api/videos");
      console.log(response.data.videos);
      const responseData = [...response.data.videos];
      setVideo((previous) => (previous = responseData));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <VideoDataContext.Provider value={{ video, state, dispatch }}>
      {children}
    </VideoDataContext.Provider>
  );
};

const useVideo = () => useContext(VideoDataContext);

export { useVideo, VideoDataProvider };
