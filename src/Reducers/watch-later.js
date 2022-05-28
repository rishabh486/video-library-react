import axios from "axios";
import { toast } from "react-toastify";
export const AddToWatchLater = async (video, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video: video },
      {
        headers: {
          authorization: localStorage.getItem("videolib-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_TO_WATCH_LATER",
      payload: { watchlater: response.data.watchlater },
    });
    toast.success("Video Added To Watch Later");
  } catch (err) {
    console.log(err.response);
  }
};
export const AddToLikedVideo = async (video, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video: video },
      {
        headers: {
          authorization: localStorage.getItem("videolib-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_TO_LIKED_VIDEOS",
      payload: { likes: response.data.likes },
    });
    toast.success("Video Added To Liked Videos");
  } catch (err) {
    console.log(err.response);
  }
};
export const RemoveFromLikedVideos = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${id}`, {
      headers: {
        authorization: localStorage.getItem("videolib-token"),
      },
    });
    dispatch({
      type: "REMOVE_FROM_LIKED_VIDEOS",
      payload: { likes: response.data.likes },
    });
    toast.success("Video Removed from Liked Videos");
  } catch (error) {
    console.log(error);
  }
};
export const RemoveFromWatchLater = async (id, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: {
        authorization: localStorage.getItem("videolib-token"),
      },
    });
    dispatch({
      type: "REMOVE_FROM_WATCH_LATER",
      payload: { watchlater: response.data.watchlater },
    });
    toast.success("Video Removed from Watch Later");
  } catch (error) {
    console.log(error);
  }
};
