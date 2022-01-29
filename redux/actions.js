    import axios from "axios";
    export const GET_MOVIES = 'GET_MOVIES';
    export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

    const BASE_URL_ENDPOINT = "https://www.omdbapi.com?apikey=5fb20880";


    export const getMovies = (movieName) => {
        try {
          return async dispatch => {
          let results =[];
          // const movies = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}&page=1`);
          // let pages= movies.data.totalResults;
         //to limit to top 30 movies
        for(let i=1; i<=30; i++){
        const res = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}&page=${i}`);
        let size = Object.keys(res).length
        for(let i=1; i<=size; i++){
          results.push(res.data.Search[i])
        }
      }
            if (results) {
              dispatch({
                type: GET_MOVIES,
                payload: results,
              });
            } else {
              console.log('Unable to fetch');
            }
          };
        } catch (error) {
          console.log(error)
        }
      };

      export  const getMovieDetails=(movieID)=> {
        try {
            return async dispatch => {
              const movieDetails = await axios.get(`${BASE_URL_ENDPOINT}&i=${movieID}`);
              if (movieDetails.data) {
                dispatch({
                  type: GET_MOVIE_DETAILS,
                  payload: movieDetails.data,
                });
              } else {
                console.log('Unable to fetch');
              }
            };
          } catch (error) {
            console.log(error)
          }
    };

