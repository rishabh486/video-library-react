import axios from "axios";
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
