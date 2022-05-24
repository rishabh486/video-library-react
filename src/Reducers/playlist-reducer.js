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
