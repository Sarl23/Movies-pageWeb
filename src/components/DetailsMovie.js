import React, {useContext} from "react";
import MovieContext from "../context/movie-context";
import '../components/details-movies.css';

const DetailsMovie = () => {
  const {data, dispatchData} = useContext(MovieContext);
  const {
    adult,
    original_language,
    original_title,
    popularity,
    poster_path,
    backdrop_path,
    release_date,
    title,
    vote_average,
    vote_count
  } = data.detailMovie;
  const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const imageUrlback = `https://image.tmdb.org/t/p/w300${backdrop_path}`;

  return <>{
    poster_path
      ? <div style={{margin: '5px'}}>
        <div className={'detail-container'}>
          <div className={'text-detail'}>
            <h2>🎥 Details of Movie {title}</h2>
            <div className={'detail-container'}>
              <div style={{padding: '20px'}}>
                <img src={imageUrlback} alt={imageUrl}/>
              </div>
              <div style={{padding: '10px'}}>
                <p>🔖<b>Title: </b>{title}</p>
                <p>👨🏽<b>Adult: </b>{adult ? 'Yes' : 'No'}</p>
                <p>🔖<b>Original Title: </b>{original_title}</p>
                <p>🗺<b>Original Language: </b>{original_language}</p>
              </div>
              <div style={{padding: '10px'}}>
                <p>🎭<b>Popularity: </b>{popularity}</p>
                <p>📅<b>Release Date: </b>{release_date}</p>
                <p>📼<b>Vote Avarage: </b>{vote_average}</p>
                <p>🎟<b>Vote Count: </b>{vote_count}</p>
              </div>
            </div>
            <button onClick={()=>dispatchData({...data, detailMovie: {}})}>
              <i className={'fas fa-undo-alt icon'}/>
            </button>
          </div>
          <div>
            <div className="card-container">
              <div className="image-card perspective-right">
                <img src={imageUrl} alt={imageUrl} width={210} height={310}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      : ''
  }</>
};
export default DetailsMovie;
