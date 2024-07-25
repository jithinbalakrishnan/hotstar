export const BASE_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "89b66df8496904cb038e556b4de7d088";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

// API
export const MOVIE_LIST_URL = BASE_URL + "trending/all/day?api_key=" + API_KEY;
export const MOVIE_SEARCH_URL =
  BASE_URL +
  "search/movie?api_key=" +
  API_KEY +
  "&language=en-US&include_adult=false&query="
