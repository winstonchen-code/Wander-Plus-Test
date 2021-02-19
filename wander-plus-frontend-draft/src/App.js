import './App.css';
import Locations from './components/Locations/Locations';
import Location from './components/Location/Location';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/locations" component={Locations}/>
      <Route exact path="/locations/:id" component={Location}/>
    </Router>
  );
}

export default App;
