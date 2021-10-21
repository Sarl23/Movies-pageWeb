import React, {useReducer} from 'react'
import PropTypes from 'prop-types';
import MovieContext from "../context/movie-context";

const reducer = (data, action) => {
  return {
    ...data,
    detailMovie: action.detailMovie,
    favouritesList: action.favouritesList,
  };
};

const MovieData = ({children}) => {
  const [data, dispatchData] = useReducer(reducer, {
    detailMovie: {},
    favouritesList: [],
  });
  return(
    <MovieContext.Provider value={{data, dispatchData}}>
      {children}
    </MovieContext.Provider>
  );
};

MovieData.propTypes = {children : PropTypes.node};

export default MovieData;
