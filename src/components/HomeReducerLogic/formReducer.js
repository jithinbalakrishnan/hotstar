export let FORM_INITIAL_STATE = {
  name: "",
  age: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    // HERE, WE ARE REPLACING THE GLOBAL OBJECT, WE ARE NOT UPDATING IT
    // IMMUTABLE
    case "UPDATE_FORM":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    // NOT A GOOD APPROACH - IT WON'T WORK
    // IF WE UPDATE STORE DIRECTLY 
    // MUTATING THE OBJECT HERE, REFERENCE IS NOT CHANGING OF THE OBJECT. BECAUSE OF THE UI IS NOT RE-RENDERING
    case "UPDATE_NAME":
      state.name = action.payload;
      return state;
      // return {
      //   ...state,
      //   name: action.payload
      // }

    case "UPDATE_AGE":
      state.age = action.payload;
      return state;

    default:
      return state;
  }
};
