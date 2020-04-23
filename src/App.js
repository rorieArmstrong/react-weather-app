import React from 'react';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Homepage from './containers/Homepage';
import Results from './containers/Results'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/search/:city' component={Results}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
