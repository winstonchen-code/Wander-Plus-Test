import React from 'react'

function Review(props) {

    const {score, title, description } = props.attributes
    return (
        <div className="card">
            <div className="rating-container">
                <div className="rating-score">{score}</div>
            </div>
            <div className="title">{title}</div>
            <div className="title">{description}</div>
        </div>
    )
}

export default Review
