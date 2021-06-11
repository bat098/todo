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
import TodoItemsDetails from './components/todoItemDetails/TodoItemsDetails'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <LogoutBtn />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <ProtectedRoute exact path='/todo' component={Todo} />
          <ProtectedRoute path='/todo/:id' component={TodoItemsDetails} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
