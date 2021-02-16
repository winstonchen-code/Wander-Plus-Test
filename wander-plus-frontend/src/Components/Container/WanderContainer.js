import React,{ Component } from 'react'
import WanderCard from '../Presentational/WanderCard'



class WanderContainer extends Component {


  render (props){
    return(
      <div>
        <h2> WanderPlus</h2>
        {this.props.wander.map(wander => <WanderCard wander={wander}/>)}

      </div>

      
    )


  }
}
export default WanderContainer;