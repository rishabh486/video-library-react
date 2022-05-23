import axios from "axios";
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
  } catch (error) {
    console.log(error);
  }
};
