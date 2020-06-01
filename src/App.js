import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import DetailMovie from './pages/DetailMovie'
import TvShows from './pages/TvShows'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <Link className="navbar-brand text-white" to="/">Movie Catalogue</Link>
            <div className="navbar-nav">
                <Link className="nav-item nav-link text-white" to="/">Home</Link>
                <Link className="nav-item nav-link text-white" to="/movies">Movies</Link>
                <Link className="nav-item nav-link text-white" to="/tvshows">Tv Shows</Link>
            </div>
          </nav>
          <div> 
            <Route path="/" exact component={Home}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/movies-detail/:id" component={DetailMovie}></Route>
            <Route path="/tvshows" component={TvShows}></Route>
            <Route path="/tvshows-detail/:id" component={TvShows}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
