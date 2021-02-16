
import React, {Component} from 'react'
import './App.css';
import Navbar from './Components/Header/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LogInOut from './Components/Header/LogInOut'
import WanderContainer from './Components/Container/WanderContainer'
import Home from './Components/Header/pages/Home'



export default class App extends Component {


  state={
    wander: []
  }
  

  componentDidMount () {
  fetch('http://localhost:3000/locations')
  .then(res => res.json())
  .then(wanderData => this.setState({
    wander: wanderData}))

  }
  render () {
    return (
      <>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component= {Home} />
          </Switch>
         <LogInOut />
         <WanderContainer wander={this.state.wander}/>

      </Router>
     </> 
    )

  }


}

