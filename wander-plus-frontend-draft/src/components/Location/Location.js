import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import Header from './Header'
import ReviewForm from './ReviewForm'
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
        
        const location_id = location.id
        axios.post('http://localhost:3000/reviews', {review, location_id})
        .then(resp => {debugger
        })
        .catch(resp => {})
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
                    
                    <div className="reviews"></div>
                </Main>
            </Column>
            <Column>
                <ReviewForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
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
