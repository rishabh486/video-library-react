export function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN_EXISTS":
      return { ...state, tokenExists: true };
    case "TOKEN_REMOVED":
      return { ...state, tokenExists: false };
    case "ADD_TO_WATCH_LATER":
      return { ...state, watchlater: action.payload.watchlater };
    default:
      return state;
  }
}
