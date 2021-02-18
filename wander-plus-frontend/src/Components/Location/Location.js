import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Location(props) {
    const [location, setLocation] = useState([])
    const [review, setReview] = useState([])

    useEffect (()=> {
        const id = props.match.params.id
        const url = `http://localhost:3000/locations/${id}`
        axios.get(url)
        .then( resp => setLocation(resp.data) )
        .catch( resp => console.log (resp) )
    }, [])

    return (
        <div className="wrapper">
            <div className="column">
                <div className="header"></div>
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="review-form">[Review Form Goes Here.]</div>
            </div>
        </div>
    )
}

export default Location
