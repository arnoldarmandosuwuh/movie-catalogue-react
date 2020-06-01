import React, {Component} from 'react'
import axios from 'axios'
import MoviesList from '../components/Movies/MoviesList'
import * as movieDb from '../store/movieDb'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies() {
        axios.get(`${movieDb.BASE_URL}/discover/movie?api_key=${movieDb.API_KEY}`)
            .then(response => {
                this.setState({ movies: response.data.results })
                console.log('movies', this.state.movies)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render(){
        return(
            <div className="container-fluid" style={{marginTop: 60}}>
                <h1>Movies</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row" style={{ marginTop: 10 }}>
                            <MoviesList movies={this.state.movies}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies