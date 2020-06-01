import React from 'react'
import * as movieDb from '../../store/movieDb'

const movie = (props) => (
    <div className="col-md-3">
        <div className="card-group">
            <div className="card" style={{height: 700, width: 300, marginBottom: 20}}>
                <img src={`${movieDb.POSTER_PATH}${props.movie.poster_path}`} className="card-img-top" width="300" height="400" alt="" />
                <div className="card-body scroll">
                    <h5 className="card-title text-center">{props.movie.title}</h5>
                    <p>Release Date : {props.movie.release_date}</p>
                    <p className="card-text text-justify">{props.movie.overview}</p>
                </div>
            </div>
        </div>
    </div>
)

export default movie