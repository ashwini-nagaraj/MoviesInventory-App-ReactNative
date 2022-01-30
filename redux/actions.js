    import axios from "axios";
    export const GET_MOVIES = 'GET_MOVIES';
    export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

    const BASE_URL_ENDPOINT = "https://www.omdbapi.com?apikey=9c538846";


    export const getMovies = (movieName) => {
        try {
          return async dispatch => {
        const movies = await axios.get(`${BASE_URL_ENDPOINT}&s=${movieName}`);
            if (movies.data) {
              dispatch({
                type: GET_MOVIES,
                payload: movies.data.Search,
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

