import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMG_BASE_URL } from "../constants/constant";
import Cards from "./Cards/Cards";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(BASE_URL + "trending/all/day?api_key=" + API_KEY)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.results);
        setMovieList(data?.results);
      });
  };

  const getSearchResults = () => {
    fetch(
      BASE_URL +
        "search/movie?api_key=" +
        API_KEY +
        "&language=en-US&include_adult=false&query=" +
        searchText
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.results);
      });
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setSearchText(searchText);
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
