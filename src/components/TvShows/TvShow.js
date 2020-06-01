import React from 'react'
import * as movieDb from '../../store/movieDb'

const tvShow = (props) => (
    <div className="col-md-3">
        <div className="card-group">
            <div className="card" style={{height: 700, width: 300, marginBottom: 20}}>
                <img src={`${movieDb.POSTER_PATH}${props.tv.poster_path}`} className="card-img-top" width="300" height="400" alt="" />
                <div className="card-body scroll">
                    <h5 className="card-title text-center">{props.tv.name}</h5>
                    <p>Release Date : {props.tv.first_air_date}</p>
                    <p className="card-text text-justify">{props.tv.overview}</p>
                </div>
            </div>
        </div>
    </div>
)

export default tvShow