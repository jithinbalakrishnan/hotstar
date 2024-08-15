export const FORM_INITIAL_STATE = {
    name: "",
    age: "",
  };
  
  export const formReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };