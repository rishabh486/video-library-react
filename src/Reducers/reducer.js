export function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN_EXISTS":
      return { ...state, tokenExists: true };
    case "TOKEN_REMOVED":
      return { ...state, tokenExists: false };
    case "ADD_TO_WATCH_LATER":
      return { ...state, watchlater: action.payload.watchlater };
    case "ADD_TO_LIKED_VIDEOS":
      return { ...state, likes: action.payload.likes };
    case "REMOVE_FROM_LIKED_VIDEOS":
      return { ...state, likes: action.payload.likes };
    case "REMOVE_FROM_WATCH_LATER":
      return { ...state, watchlater: action.payload.watchlater };
    case "ADD_NEW_PLAYLIST":
      return { ...state, playlists: action.payload.playlists };
    case "GET_USER_PLAYLIST":
      return { ...state, playlists: action.payload.playlists };
    default:
      return state;
  }
}
