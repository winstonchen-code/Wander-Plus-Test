
import React, {Component} from 'react'
import './App.css';
import Navbar from './Components/Header/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LogInOut from './Components/Header/LogInOut'
import Home from './Components/Header/pages/Home'
import Locations from './Components/Locations/Locations';
import Location from './Components/Location/Location';



export default class App extends Component {

  render () {
    return (
      <>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component= {Home} />
            <Route exact path="/location" component={Locations}/>
            <Route exact path="/locations/:id" component={Location}/>
          </Switch>
         <LogInOut />
        

      </Router>
     </> 
    )

  }


}

