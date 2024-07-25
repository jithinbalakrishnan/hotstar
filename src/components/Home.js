import React, { useCallback, useEffect, useState } from "react";
import {
  MOVIE_LIST_URL,
  MOVIE_SEARCH_URL,
} from "../constants/constant";
import Cards from "./Cards/Cards";
import useDebounce from "../utils/CustomHooks/useDebounce";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const debouncedInputValue = useDebounce(searchText, 1000);

  useEffect(() => {
    if (debouncedInputValue) {
      getSearchResults(debouncedInputValue);
    }
    {
      fetchMovies();
    }
  }, [debouncedInputValue]);

  const fetchMovies = () => {
    try {
      fetch(MOVIE_LIST_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data.results);
          setMovieList(data?.results);
        });
    } catch (err) {
      console.log("err");
    }
  };

  const getSearchResults = (value) => {
    try {
      fetch(MOVIE_SEARCH_URL + value)
        .then((res) => res.json())
        .then((data) => {
          setMovieList(data?.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  return (
    <div>
      <p>HotStar</p>
      <input onChange={handleInputChange}></input>
      <p>Trending Movies</p>
      <Cards list={movieList} />
    </div>
  );
};
export default Home;
