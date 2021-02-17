import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 21px;

    img{
        height: 120px;
        width: 120px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: -8px;
    }
`

const TotalReviews = styled.div`
    font-size: 20px;
    padding: 10px 0;
`

const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`

function Header(props) {
    const total = props.reviews.length
    
    return (
    
        <Wrapper>
            <h2> <img src={props.data.image_url} alt={props.data.city} /> {props.data.city}, {props.data.country} </h2>
            <div>
                <TotalReviews> {total} User Reviews </TotalReviews>
                <div className="starRating"></div>
                <TotalOutOf>{props.data.avg_score} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header
