import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieContext from "../context/movie-context";

const Movie = (props) => {
  const {movie} = props;
  const {data, dispatchData} = useContext(MovieContext);
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  const typeOfClass = (vote_average) => {
    if (vote_average >= 8) {
      return 'green'
    } else if (vote_average >= 6) {
      return 'orange'
    } else return 'red'
  }

  const detailMovie = (movie) => {
    console.log(movie);
    dispatchData({...data, detailMovie: movie})
  };

  return (
    <div className={'movie'}>
      <img src={imageUrl} alt={movie.title}/>
      <div className={'movie-info'}>
        <h3>{movie.title}</h3>
        <span className={`tag ${typeOfClass(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
      <div className={'movie-over'}>
        <div className={'actions-movie'}>
          <h2>Overview</h2>
          <Link to={'/details'}>
            <button onClick={() => {
              detailMovie(movie)
            }}>
              <i className={'fas fa-info icon'}/>
            </button>
          </Link>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
);
};

Movie.propTypes =
  {
    movie: PropTypes.object.isRequired,
  }
;

export default Movie;
