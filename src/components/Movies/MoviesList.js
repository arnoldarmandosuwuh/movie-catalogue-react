import React from 'react'
import Movie from './Movie'

const moviesList = (props) => (
    props.movies.map((movie) => (
        <Movie movie={movie} />
    ))
)

export default moviesList