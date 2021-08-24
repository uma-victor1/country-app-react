import {Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function App () {
  return(
  <div className="header">
    <Router>
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
    </Router>
  </div>
  );
}

export default App;
