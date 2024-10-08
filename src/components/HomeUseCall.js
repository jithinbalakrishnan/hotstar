import React, { useCallback, useEffect, useState } from "react";
import {
  MOVIE_LIST_URL,
  MOVIE_SEARCH_URL,
} from "../constants/constant";
import Cards from "./Cards/Cards";
import useDebounce from "../utils/CustomHooks/useDebounce";
import Search from "./Search";

const HomeV2 = () => {
  const [searchText, setSearchText] = useState("");
  const [nameSearch, setNameSearch] = useState("")
  const [movieList, setMovieList] = useState([]);

  const debouncedInputValue = useDebounce(searchText, 1000);

  useEffect(()=> {
    fetchMovies()
  },[])
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
          // console.log("data", data.results);
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
  // function will be identical when we use callBack
  // As functions are identical, memo won't re-render the Search component
  // ref- https://www.youtube.com/watch?v=MxIPQZ64x0I&t=211s
  const handleInputChange = useCallback((e) => {
    let value = e.target.value;
    setSearchText(value);
  },[]);
  const handleSearch = () => {
    getSearchResults(searchText);
  }

  return (
    <div>
      <p>HotStar</p>
      <p>Movie Search</p>
      <Search onChange= {handleInputChange}/>
      <br />
      <p>Name</p>
      <input data-testid="search-input-1" onChange={(e) => setNameSearch(e.target.value)}></input>
      <br />
      <p>Name: {nameSearch}</p>
      <p>Trending Movies</p>
      <Cards list={movieList} />
    </div>
  );
};
export default HomeV2;
