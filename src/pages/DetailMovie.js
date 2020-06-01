import React, {Component} from 'react'
import axios from 'axios'
import * as movieDb from '../store/movieDb'

class DetailMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            id: this.props.match.params.id
        }
    }

    componentDidMount() {
        this.getDetailMovie(this.state.id)
        console.log("detail", this.state.id);
    }

    getDetailMovie(id){
        axios.get(`${movieDb.BASE_URL}/movie/${id}?api_key=${movieDb.API_KEY}`)
            .then(response => {
                this.setState({ movies: response.data })
                console.log('movies', this.state.movies)
                console.log('movies', this.state.movies.poster_path)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render(){
        const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const numberFormat = (value) =>
            new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'USD'
            }).format(value);
        return(
            <div className="container-fluid" style={{marginTop: 60}}>
                <h1>{this.state.movies.title}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="card" style={{border: 0}}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Release Date</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {(new Date(this.state.movies.release_date)).toLocaleDateString('en-GB', DATE_OPTIONS)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Revenue</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {numberFormat(this.state.movies.revenue)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Budget</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {numberFormat(this.state.movies.budget)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Popularity</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {this.state.movies.popularity}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Score</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {this.state.movies.vote_average}</p>
                                                        </div>
                                                    </div>
                                                    <h5>overview</h5>
                                                    <p className="card-text text-justify">{this.state.movies.overview}</p>
                                                </div>
                                            </div>
                                        </div>                                
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={`${movieDb.POSTER_PATH}${this.state.movies.poster_path}`} className="card-img-top img-rounded" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DetailMovie