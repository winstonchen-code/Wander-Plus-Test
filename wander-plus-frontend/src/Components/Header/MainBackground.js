import React from 'react'
import '../../App.css'
import {Button} from './Button'
import './MainBackground.css'

function MainBackground () {

  return(

    <div className="mainbackground-container">
      <video src='/Beach.mp4' autoPlay loop muted/>
      <h1> ADVENTURE AWAITS </h1>
      <p> what are you waiting for?</p>
      <div className="mainbackground-btns">
        <Button className='btn' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
          Get Started
        </Button>
        </div> 
    </div>
  )
}
export default MainBackground;