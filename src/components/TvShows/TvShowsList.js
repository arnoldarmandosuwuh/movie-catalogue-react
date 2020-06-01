import React from 'react'
import TvShow from './TvShow'

const tvShowsList = (props) => (
    props.tv.map((tv) => (
        <TvShow tv={tv} />
    ))
)

export default tvShowsList