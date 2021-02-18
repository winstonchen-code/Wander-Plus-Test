import React from 'react'
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styled from 'styled-components'
import location from '../Locations/Location'



const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
const LocationImage = styled.div`
    padding-top: 10px;
    img{
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 5px solid #efefef;
    }
`
const LocationCity = styled.div`
    padding: 20px 0 10px 0;
`

const buttonWrap = styled.div`
    margin: 20px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-raidus: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        border-radius: 0.5rem;
        text-decoration: none;
    }
`

export default function Basket (props) {
  const [cartItems, setCartItems] = useState([])
  // const onAdd = (location) => {
    // (p const cartItems: any[]
  //   const exist = cartItems.find(x => x.id === location.id)
  //   if(exist) {
  //     setCartItems(cartItems.map(x => x.id === location.id ? {...exist, qty: exist.qty +1} : x))
  //   }
  //   else {
  //     setCartItems([...cartItems, {...location, qty: 1}])
  //   }
  // }


  useEffect(()=> {
   
        setCartItems([...cartItems, props.location.state.item])

    
  }, []
  )

  const onRemove =() => {
    const exist = cartItems.find((x) => x.id === props.location.state.item.id)
    setCartItems(cartItems.filter((x) => x.id !== props.location.state.item.id))
  }
  
  return (
    <Card className="block col-1">
      <h1> Cart Items </h1>
       
      <div>
        {cartItems.length === 0 && < div> Cart Is Empty </div>}
        </div>
     
            <LocationImage>
                <img src={props.location.state.item.image_url} alt={props.location.state.item.city}/>
            </LocationImage>
            <LocationCity>{props.location.state.item.city}, {props.location.state.item.country}</LocationCity>
            <LocationCity>$ {props.location.state.item.price}</LocationCity>
            {/* <div className = "location-score">{props.avg_score}</div> */}
            
            <buttonWrap>
            <button  onClick={onRemove}  >remove</button>
            </buttonWrap>
            <buttonWrap>
                <Link to={`/location/form/ ${props.location.state.item.id}`}> Chekout </Link>
            </buttonWrap>
            </Card>
            
  )

}