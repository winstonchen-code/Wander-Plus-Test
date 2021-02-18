
import React, {Component} from 'react'
import './App.css';
import Navbar from './Components/Header/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import LogInOut from './Components/Header/LogInOut'
import Home from './Components/Header/pages/Home'
import Locations from './Components/Locations/Locations';
import Location from './Components/Location/Location';
import Login from './Components/LogInOut/Login'



export default class App extends Component {

  state = {
    user: {},
    loggedIn: false,
  };


  setCurrentUser = (user) => {
    this.setState({
      user: user,
      loggedIn: true,
    });
  };

  logOut = () => {
    this.setState({ user: {}, loggedIn: false });
    localStorage.token = "";
  };


  displayGreeting = () => {
    if (this.state.loggedIn) {
      return (
        <h1 className="greeting-text">
          Welcome back {this.state.user.username}!
        </h1>
      );
    } else {
      return (
        <div className="please-log-in">
          <h3>Please log in below!</h3>
        </div>
      );
    }
  };

  componentDidMount = () => {
    let token = localStorage.token;
    if (typeof token !== "undefined" && token.length > 1) {
      this.tokenLogin(token);
    } else {
      console.log("No token found, try logging in!");
    }
  };

  tokenLogin = (token) => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    })
      .then((r) => r.json())
      .then((user) => this.setCurrentUser(user));
  };

  render () {
    return (
      <>
      <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component= {Home} />
            <Route exact path="/location" component={Locations}/>
            <Route exact path="/locations/:id" component={Location}/>
            <Route exact path="/login" component={Login} />

            <Route exact path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/location" />
              ) : (
                <Login setCurrentUser={this.setCurrentUser} />
              )}
              </Route>
          </Switch>
         {/* <LogInOut /> */}
        

      </Router>
     </> 
    )

  }


}

