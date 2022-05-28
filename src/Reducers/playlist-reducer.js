import axios from "axios";
import { toast } from "react-toastify";

export const AddPlaylist = async (params, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      { playlist: { ...params } },
      {
        headers: {
          authorization: localStorage.getItem("videolib-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_NEW_PLAYLIST",
      payload: { playlists: response.data.playlists },
    });
    toast.success("New Playlist Created");
  } catch (err) {
    console.log(err);
  }
};
export const UserPlaylist = async (dispatch) => {
  try {
    const response = await axios.get(
      "/api/user/playlists",

      {
        headers: {
          authorization: localStorage.getItem("videolib-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "GET_USER_PLAYLIST",
      payload: { playlists: response.data.playlists },
    });
  } catch (err) {
    console.log(err);
  }
};
export const AddVideoToPlaylist = async (id, video, dispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${id}`,
      { video: { ...video } },
      {
        headers: {
          authorization: localStorage.getItem("videolib-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: { playlists: response.data.playlists },
    });
    toast.success("Video Added to Playlist");
  } catch (err) {
    toast.error(err.response.data.errors[0]);
    console.log(err.response.data.errors[0]);
  }
};

export const RemoveVideoFromUserplaylist = async (id, id1, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${id}/${id1}`, {
      headers: {
        authorization: localStorage.getItem("videolib-token"),
      },
    });
    dispatch({
      type: "REMOVE_VIDEO_FROM_USER_PLAYLIST",
      payload: { playlists: response.data.playlists },
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserPlaylistVideo = async (id, dispatch) => {
  try {
    const response = await axios.get(
      `/api/user/playlists/${id}`,

      {
        headers: {
          authorization: localStorage.getItem("videolib-token"),
        },
      }
    );
    console.log(response.data);
    dispatch({
      type: "GET_USER_VIDEO",
      payload: { playlists: response.data.playlists },
    });
  } catch (error) {
    console.log(error);
  }
};
