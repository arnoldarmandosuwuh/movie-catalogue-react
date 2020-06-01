import React, {Component} from 'react'
import axios from 'axios'
import * as movieDb from '../store/movieDb'

class DetailTv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tv: [],
            id: this.props.match.params.id,
        }
    }

    componentDidMount() {
        this.getDetailTv(this.state.id)
        console.log("detail", this.state.id);
    }

    getDetailTv(id){
        axios.get(`${movieDb.BASE_URL}/tv/${id}?api_key=${movieDb.API_KEY}`)
            .then(response => {
                this.setState({ tv: response.data })
                console.log('tv', this.state.tv)
                console.log('tv', this.state.tv.poster_path)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render(){
        const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return(
            <div className="container-fluid" style={{marginTop: 60}}>
                <h1>{this.state.tv.name}</h1>
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
                                                            <p>: {(new Date(this.state.tv.first_air_date)).toLocaleDateString('en-GB', DATE_OPTIONS)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Number of Seasons</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {this.state.tv.number_of_seasons}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Number of Episodes</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {this.state.tv.number_of_episodes}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Popularity</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {this.state.tv.popularity}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>Score</p>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <p>: {this.state.tv.vote_average}</p>
                                                        </div>
                                                    </div>
                                                    <h5>overview</h5>
                                                    <p className="card-text text-justify">{this.state.tv.overview}</p>
                                                </div>
                                            </div>
                                        </div>                                
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={`${movieDb.POSTER_PATH}${this.state.tv.poster_path}`} className="card-img-top img-rounded" alt="" />
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

export default DetailTv