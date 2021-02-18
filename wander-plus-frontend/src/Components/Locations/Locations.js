import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Location from './Location'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1440px;
    margin-left: 40px;
    margn-right: 10px;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

function Locations() {
    const [locations, setLocations] = useState([])

    useEffect (()=> {
        axios.get('http://localhost:3000/locations')
        .then( resp => setLocations(resp.data))
        .catch( resp => console.log (resp) )
    }, [locations.length])

    const grid = locations.map( item => {
        return (<Location key={item.id} item={item} > </Location>)
    })
    return (
    <Home>
        <Header>
            <h1>Wander+</h1>
            <Subheader> A site to explore new places and to share your experiences. </Subheader>
        </Header>
        <Grid>
            {grid}
        </Grid>
    </Home> 
    )
}

export default Locations
