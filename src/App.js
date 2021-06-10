import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from './pages/Todo/Todo'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import LogoutBtn from "./components/logoutBtn/LogoutBtn";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <LogoutBtn />
        <Switch>
          <ProtectedRoute exact path='/about' component={Todo} />
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
