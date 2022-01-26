import axios from "axios";


const BASE_URL_ENDPOINT = "http://www.omdbapi.com/?apikey=5fb20880";

export  async function getMovies(movieName) {
  const movies =  axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}`);
  return movies;
}

export  async function getMovieDetails(movieID) {
    const movieDetails =  axios.get(`${BASE_URL_ENDPOINT}&i=${movieID}`);
    return movieDetails;
  }

