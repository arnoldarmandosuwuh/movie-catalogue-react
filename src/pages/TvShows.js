import React, {Component} from 'react'
import axios from 'axios'
import TvShowsList from '../components/TvShows/TvShowsList'
import * as movieDb from '../store/movieDb'

class TvShows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tv: []
        }
    }

    getTv() {
        axios.get(`${movieDb.BASE_URL}/discover/tv?api_key=${movieDb.API_KEY}`)
            .then(response => {
                this.setState({ tv: response.data.results })
                console.log('tv', this.state.tv)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    componentDidMount() {
        this.getTv()
    }

    render(){
        return(
            <div className="container">
                <h1>Tv Shows</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row" style={{ marginTop: 10 }}>
                            <TvShowsList tv={this.state.tv}/>
                        </div>
                    </div>
                </div>
            </div>         
        )
    }
}

export default TvShows