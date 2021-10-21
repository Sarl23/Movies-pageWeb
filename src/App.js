import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import DetailMovie from "./components/DetailsMovie";
import MovieData from "./data/movie-data";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <MovieData>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/details'} component={DetailMovie}/>
        </MovieData>
        <Route><p>No Found</p></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
