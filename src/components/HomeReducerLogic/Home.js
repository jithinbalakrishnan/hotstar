import React, { useEffect, useReducer } from "react";
import { MOVIE_LIST_URL } from "../../constants/constant";
import Cards from "../Cards/Cards";

import { INITIAL_STATE, homeReducer } from "./HomeReducer";
import { formReducer, FORM_INITIAL_STATE } from "./formReducer";

const HomeWithReducer = () => {
  const [state, dispatch] = useReducer(homeReducer, INITIAL_STATE);
  const [formState, dispatchForm] = useReducer(formReducer, FORM_INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE_LIST" });
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    try {
      fetch(MOVIE_LIST_URL)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "FETCH_SUCCESS", payload: data.results });
          // console.log("data", data.results);
        });
    } catch (err) {
      console.log("err");
    }
  };

  const handleInputChange = (e) => {
    dispatchForm({
      type: "UPDATE_FORM",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  console.log('formState', formState);
  return (
    <div>
      <p>HotStar</p>
      <p>Trending Movies</p>
      <div>
        <p>Name</p>
        <input value={formState.name} name="name" onChange={handleInputChange}></input>
        <p>Age</p>
        <input value={formState.age} name="age" onChange={handleInputChange}></input>
      </div>
      <Cards list={state.data} />
    </div>
  );
};
export default HomeWithReducer;
