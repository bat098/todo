import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import store from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
