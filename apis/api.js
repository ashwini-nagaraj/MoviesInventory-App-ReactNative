import axios from "axios";

const BASE_URL_ENDPOINT = "https://www.omdbapi.com?apikey=5fb20880";

export  async function getMovies(movieName) {
  let results =[];
  const movies = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}&page=1`);
  let pages= movies.data.totalResults;
  for(let i=1; i<pages/10; i++){
    const res = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}&page=${i}`);
    for(let i=1; i<10; i++){
      results.push(res.data.Search[i])
    }
  }  
  console.log(results)
  return results;
}

// export  async function getMovies(movieName) {
  
//   const movies = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}&page=1`);
//   return movies;
// }

export  async function getMovieDetails(movieID) {
    const movieDetails = await axios.get(`${BASE_URL_ENDPOINT}&i=${movieID}`);
    return movieDetails;
}




