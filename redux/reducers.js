import {GET_MOVIES, GET_MOVIE_DETAILS} from './actions';

const initialState = {
  movies: [],
  movieDetails: []
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: action.payload};
    case GET_MOVIE_DETAILS:
      return {...state, movieDetails: action.payload};
    default:
      return state;
  }
}

export default reducers;