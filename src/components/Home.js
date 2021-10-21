import React, {useMemo, useState, useContext, useEffect} from "react";
import Movie from '../components/Movie';
import allMovies from '../movies.json'
import MovieContext from "../context/movie-context";
import DetailsMovie from "./DetailsMovie";

const Home = () => {
  const [search, setSearch] = useState('');
  const [listSearch, setListSearch] = React.useState([]);
  const {data} = useContext(MovieContext);

  useMemo(() => {
    const found = allMovies.filter((movie) => {
      if (movie.title.includes(search)) {
        return movie;
      } else return '';
    });
    setListSearch(found);
  }, [search]);

  useEffect(()=>{
    document.getElementById( 'top' ).scrollIntoView();
  },[data.detailMovie]);

  return (<>
      <header>
        <div className={'search'} id={'top'}>
          <input type={'text'}
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}/>
          <div className={'btn'}>
            <i className={'fas fa-search icon'}/>
          </div>
        </div>
      </header>
      {data.detailMovie
      ? <DetailsMovie/>
      :''}
      <div className={'movie-container'}>
        {listSearch.length > 0 &&
        listSearch.map((movie,i) =>
          <div key={i}>
            <Movie movie={movie}/>
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
