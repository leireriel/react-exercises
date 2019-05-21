import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Clock from './components/Clock';
import NoClock from './components/NoClock';

class ClockOrNot extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/clock">Clock</Link>
              </li>
              <li>
                <Link to="/not-clock">Not clock</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            {/* <Route exact path="/" component={ClockOrNot} /> */}
            <Route path="/clock" component={Clock} />
            <Route path="/not-clock" component={NoClock} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default ClockOrNot;