import React, {useMemo, useState} from "react";
import Movie from '../components/Movie';
import allMovies from '../movies.json'

const Home = () => {
  const [search, setSearch] = useState('');
  const [listSearch, setListSearch] = React.useState([]);

  useMemo(() => {
    const found = allMovies.filter((movie) => {
      if (movie.title.includes(search)) {
        return movie;
      } else return '';
    });
    setListSearch(found);
  }, [search]);

  return (<>
      <header>
        <div className={'search'}>
          <input type={'text'}
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}/>
          <div className={'btn'}>
            <i className={'fas fa-search icon'}/>
          </div>
        </div>
      </header>
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
