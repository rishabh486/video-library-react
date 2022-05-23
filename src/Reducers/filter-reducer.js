import { initialState } from "./initial-state";
export const reducerFn = (state, action) => {
  const { filter } = state;
  const { categoryName } = filter;
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filter: {
          ...filter,
          categoryName: {
            ...categoryName,
            [action.payload]: !categoryName[action.payload],
          },
        },
      };
    case "CLEAR":
      return {
        ...state,
        filter: initialState.filter,
      };
    default:
      return state;
  }
};
