import React from 'react'


const WanderCard = (props) => {

return (
  <div className="card m-3 w-25">

    <div className= 'card-body'>
      <h5 className ="card-title"> {props.wander.name}</h5>
      <img className="card-img-top" src ={props.wander.image_url} />


    </div>
  </div>


)
}
export default WanderCard;
