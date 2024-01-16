import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* Add a default route or a 404 page */}
          <Redirect from="/" to="/signup" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
