export function authReducer(state, action) {
  switch (action.type) {
    case "TOKEN_EXISTS":
      return { ...state, tokenExists: true };
    case "TOKEN_REMOVED":
      return { ...state, tokenExists: false };
    default:
      return state;
  }
}
