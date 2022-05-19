import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import ScrollToTop from './ScrollToTop.js';
import HomePage from './Pages/HomePage/HomePage';
import './Sass/style.css';

function App() {
  return (
    <div className="App">
          <Router>
            <ScrollToTop>
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                  >
                    <Switch location={location}>
                        <Route path="/home">
                            <HomePage/>
                        </Route>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        {/* <Route path="/outlet/:outletKey">
                          <OutletPage/>
                        </Route> */}
                        {/* <PrivateRoute path="/profile">
                            <ProfilePage/>
                        </PrivateRoute> */}
                        <Route path="*">
                        </Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </ScrollToTop>
          </Router>
    </div>
  );
}

export default App;
