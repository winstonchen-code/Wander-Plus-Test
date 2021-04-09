import './App.css';
import Locations from './components/Locations/Locations';
import Location from './components/Location/Location';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Locations}/>
        <Route exact path="/locations/:id" component={Location}/>
      </Switch>
    </Router>
  );
}

export default App;
