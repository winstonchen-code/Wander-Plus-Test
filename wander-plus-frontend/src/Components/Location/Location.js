import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`

const Main = styled.div`
    padding-left: 50px;
`



function Location(props) {
    const [location, setLocation] = useState([])
    const [review, setReview] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect (()=> {
        const id = props.match.params.id
        const url = `http://localhost:3000/locations/${id}`
        axios.get(url)
        .then( resp => {
            setLocation(resp.data) 
            setLoaded(true)
        })
        .catch( resp => console.log (resp) )
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // const location_id = location.id
        review.location_id = location.id
        review.user_id = 5
        // console.log(review)
        axios.post('http://localhost:3000/reviews', {review})
        .then(resp => {
            const newLocation = Object.assign({}, location)
            // const included = [...location.reviews, resp.data ]
            newLocation.reviews = [...newLocation.reviews, resp.data]
            // const included = [...location.reviews, resp.data ]
            // console.log(included)
            setLocation(newLocation)
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp => console.log (resp))
    }

    const setRating = (score, e) => {
        e.preventDefault()

        setReview({...review, score})
    }

    let reviews
    if (loaded && location.reviews){
    reviews = location.reviews.map( ( item, index ) => { console.log(item)
        return(
            <Review
                key={index} 
                attributes={item}
            />
        )
    })
    }

    return (
        
        <Wrapper>
            {
                loaded && 
            <Fragment> 
            <Column>
                <Main>
                    
                    <Header
                        data={location}
                        reviews={location.reviews}
                    />
                    
                    {reviews}
                </Main>
            </Column>
            <Column>
                <ReviewForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setRating={setRating}
                    attributes={location}
                    review={review}
                />
            </Column>
            </Fragment>
            }
        </Wrapper>
    )
}

export default Location
