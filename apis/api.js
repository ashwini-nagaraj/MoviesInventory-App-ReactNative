import axios from "axios";

const BASE_URL_ENDPOINT = "https://www.omdbapi.com?apikey=5fb20880";

export  async function getMovies(movieName) {
  const movies = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}`);
  return movies;
}

export  async function getMovieDetails(movieID) {
    const movieDetails = await axios.get(`${BASE_URL_ENDPOINT}&i=${movieID}`);
    return movieDetails;
}




