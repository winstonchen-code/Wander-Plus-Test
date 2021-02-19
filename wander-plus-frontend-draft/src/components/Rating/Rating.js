import React from 'react'
import './Rating.css'

function Rating(props) {
    const score = (props.score/5) * 100
    return (
        <span className="star-wrapper">
            <span className="stars" style={{width: score + "%"}}></span>
        </span>
    )
}

export default Rating

// import React from 'react'
// import './Rating.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

// function Rating(props) {
//     const score = (props.score/5) * 100
//     return (
//         <span >
//             {/* <i className="fas fa-star" style={{width: score + "%"}}></i> */}
//             <FontAwesomeIcon className="stars" icon={faStar} />
//         </span>
//     )
// }

// export default Rating
