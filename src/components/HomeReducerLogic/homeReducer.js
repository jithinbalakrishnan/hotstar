export const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: [],
};

export const homeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_LIST":
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH ERROR":
      return {
        isLoading: false,
        isError: true,
        data: [],
      };
  }
};
